// Available test data per timeframe:

// EURUSD bid (tick): 2019-02-04 - 2019-02-06
// EURUSD bid (m1, m30): 2019-02-04 - 2019-02-06
// EURUSD bid (h1, d1, mn1): 2019-01-01, 2019-03-01

import { HistoryConfig } from './../src/config/types';
import { getHistoricRates } from './../src';

jest.mock('./../src/buffer-fetcher');

describe('Generates correct output for config:', () => {
  it('EURUSD, m1, 2019-02-04 00:12 - 2019-02-04 00:15', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-04 00:12', end: '2019-02-04 00:15' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toEqual([
      [1549239120000, 1.14573, 1.14574, 1.1457, 1.14574, 32.49],
      [1549239180000, 1.14572, 1.14574, 1.14572, 1.14573, 30.05],
      [1549239240000, 1.14573, 1.14577, 1.14572, 1.14576, 71.66]
    ]);
  });

  it('EURUSD, m1, 2019-02-04 - 2019-02-05', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-04', end: '2019-02-05' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toHaveLength(1440);

    expect(quotes[0]).toEqual([1549238400000, 1.14543, 1.1457, 1.14542, 1.14569, 293.76]);
    expect(quotes[quotes.length - 1]).toEqual([
      1549324740000,
      1.14351,
      1.14353,
      1.14349,
      1.14349,
      115.41
    ]);
  });

  it('EURUSD, m1, 2019-02-05 01:00 - 2019-02-05 02:00', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05 01:00', end: '2019-02-05 02:00' },
      timeframe: 'm1',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toHaveLength(60);

    expect(quotes[0]).toEqual([1549328400000, 1.14357, 1.14361, 1.14357, 1.1436, 43.09]);
    expect(quotes[quotes.length - 1]).toEqual([
      1549331940000,
      1.14381,
      1.14381,
      1.14379,
      1.1438,
      88.42
    ]);
  });

  it('EURUSD, m1, 2019-02-05 00:00 - 2019-02-05 04:00', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05 00:00', end: '2019-02-05 04:00' },
      timeframe: 'm1',
      volumes: false,
      gmtOffset: -60
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toHaveLength(240);

    expect(quotes[0]).toEqual([1549321200000, 1.14352, 1.14367, 1.14345, 1.14367]);
    expect(quotes[quotes.length - 1]).toEqual([1549335540000, 1.14389, 1.14391, 1.14389, 1.1439]);
  });

  it('EURUSD, m30, 2019-02-04 - 2019-02-05', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-04', end: '2019-02-05' },
      timeframe: 'm30',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toEqual([
      [1549238400000, 1.14543, 1.14597, 1.14534, 1.14596, 3741.47],
      [1549240200000, 1.14597, 1.14597, 1.14529, 1.14555, 4719.69],
      [1549242000000, 1.14555, 1.14571, 1.1454, 1.14552, 3829.15],
      [1549243800000, 1.14552, 1.1459, 1.14546, 1.14581, 3146.97],
      [1549245600000, 1.14582, 1.14603, 1.14564, 1.1458, 3275.06],
      [1549247400000, 1.1458, 1.14587, 1.14529, 1.14534, 3233.65],
      [1549249200000, 1.14535, 1.14545, 1.14501, 1.14505, 3749.08],
      [1549251000000, 1.14505, 1.14521, 1.14461, 1.14484, 3735.52],
      [1549252800000, 1.14485, 1.14491, 1.14445, 1.14449, 4155.78],
      [1549254600000, 1.14447, 1.14457, 1.14412, 1.14424, 3824.85],
      [1549256400000, 1.14424, 1.14461, 1.14424, 1.14441, 3471.37],
      [1549258200000, 1.14441, 1.14455, 1.14427, 1.14434, 2702.63],
      [1549260000000, 1.14436, 1.14444, 1.14417, 1.14419, 3040.44],
      [1549261800000, 1.14419, 1.14443, 1.14395, 1.14442, 5054.44],
      [1549263600000, 1.14441, 1.14452, 1.14409, 1.14428, 7343.22],
      [1549265400000, 1.14428, 1.14453, 1.14379, 1.14424, 10363],
      [1549267200000, 1.14425, 1.14533, 1.14386, 1.14448, 14986.6],
      [1549269000000, 1.14448, 1.14528, 1.1444, 1.14508, 12685.13],
      [1549270800000, 1.14509, 1.14534, 1.14446, 1.1445, 13532.93],
      [1549272600000, 1.1445, 1.14503, 1.1444, 1.14453, 12140.6],
      [1549274400000, 1.14452, 1.14455, 1.14406, 1.14423, 13249.59],
      [1549276200000, 1.14423, 1.14482, 1.14423, 1.14465, 11500.3],
      [1549278000000, 1.14466, 1.14517, 1.14463, 1.14464, 9931.03],
      [1549279800000, 1.14465, 1.14542, 1.14449, 1.14518, 11049.77],
      [1549281600000, 1.14518, 1.14526, 1.14488, 1.1449, 9231.79],
      [1549283400000, 1.1449, 1.14507, 1.14413, 1.14477, 12385.42],
      [1549285200000, 1.14475, 1.14494, 1.14429, 1.14484, 10567.02],
      [1549287000000, 1.14483, 1.14511, 1.14462, 1.14488, 11302.18],
      [1549288800000, 1.14488, 1.14504, 1.14331, 1.14386, 13805.96],
      [1549290600000, 1.14386, 1.14398, 1.14248, 1.14262, 13455.43],
      [1549292400000, 1.14263, 1.14375, 1.14262, 1.14327, 15463.89],
      [1549294200000, 1.14327, 1.14367, 1.14254, 1.14287, 12997.04],
      [1549296000000, 1.14286, 1.14322, 1.14244, 1.14293, 14559.04],
      [1549297800000, 1.14293, 1.14378, 1.14256, 1.14376, 9960.35],
      [1549299600000, 1.14376, 1.14399, 1.14321, 1.14336, 9545.15],
      [1549301400000, 1.14337, 1.14359, 1.14296, 1.14312, 8822.49],
      [1549303200000, 1.14312, 1.14343, 1.14264, 1.14335, 7833.52],
      [1549305000000, 1.14335, 1.14347, 1.14289, 1.14322, 8251.15],
      [1549306800000, 1.14321, 1.14357, 1.14305, 1.14331, 6995.02],
      [1549308600000, 1.14332, 1.1434, 1.14306, 1.14312, 6010.21],
      [1549310400000, 1.14311, 1.14344, 1.14311, 1.14338, 6786.05],
      [1549312200000, 1.14338, 1.1435, 1.14322, 1.14343, 6950.39],
      [1549314000000, 1.14344, 1.1436, 1.14335, 1.14353, 2335.41],
      [1549315800000, 1.14353, 1.14372, 1.14343, 1.14353, 2424.27],
      [1549317600000, 1.14353, 1.14375, 1.14348, 1.14361, 1512.16],
      [1549319400000, 1.1436, 1.14366, 1.14343, 1.1435, 1650.99],
      [1549321200000, 1.14352, 1.14367, 1.14344, 1.14344, 3210.62],
      [1549323000000, 1.14344, 1.14385, 1.14344, 1.14349, 2624.16]
    ]);
  });

  it('EURUSD, m30, 2019-02-05 13:30 - 2019-02-05 19:30', async () => {
    const config: HistoryConfig = {
      symbol: 'eurusd',
      dates: { start: '2019-02-05 13:30', end: '2019-02-05 19:30' },
      timeframe: 'm30',
      volumes: true,
      gmtOffset: 0
    };

    const quotes = await getHistoricRates(config);

    expect(quotes).toEqual([
      [1549373400000, 1.14204, 1.14332, 1.14193, 1.14288, 13401.61],
      [1549375200000, 1.14288, 1.14337, 1.14251, 1.14257, 11632.53],
      [1549377000000, 1.14256, 1.14279, 1.14115, 1.14142, 11933.26],
      [1549378800000, 1.14146, 1.1418, 1.14049, 1.14096, 14924.18],
      [1549380600000, 1.14098, 1.14158, 1.14065, 1.14065, 13129.43],
      [1549382400000, 1.14066, 1.14106, 1.14011, 1.14056, 14344.55],
      [1549384200000, 1.14057, 1.14102, 1.14028, 1.1405, 7799.4],
      [1549386000000, 1.14052, 1.14092, 1.14017, 1.14089, 8484.32],
      [1549387800000, 1.14089, 1.14119, 1.14068, 1.14092, 6196.83],
      [1549389600000, 1.14092, 1.14171, 1.14092, 1.14155, 7389.1],
      [1549391400000, 1.14157, 1.14171, 1.1411, 1.14125, 6464.02],
      [1549393200000, 1.14125, 1.14126, 1.141, 1.14116, 5461.92]
    ]);
  });
});