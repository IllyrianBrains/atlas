// Local snapshot of the latest World Bank values available on 2026-10-12.
// Values are normalized from 20–100 across the Atlas countries. A higher
// score is always better; unemployment, homicide and PM2.5 are inverted.
export const comparisonDataUpdatedAt = '2026-10-12';

export const comparisonValues: Record<string, number[]> = {
  CHE: [100, 69, 99, 80, 75, 86],
  DEU: [53, 53, 95, 91, 72, 64],
  AUT: [69, 54, 95, 73, 63, 55],
  DNK: [72, 57, 96, 73, 80, 100],
  FIN: [73, 47, 94, 34, 100, 65],
  SWE: [96, 51, 91, 42, 95, 77],
  NOR: [84, 69, 98, 82, 94, 96],
  NLD: [68, 60, 98, 90, 73, 84],
  IRL: [82, 99, 99, 82, 80, 85],
  LUX: [84, 100, 85, 65, 81, 96],
  BEL: [73, 52, 92, 70, 74, 77],
  FRA: [82, 46, 88, 53, 76, 36],
  GBR: [61, 46, 91, 81, 67, 75],
  ESP: [93, 44, 98, 25, 63, 77],
  ITA: [94, 45, 100, 65, 35, 39],
  MLT: [81, 51, 100, 99, 58, 66],
  CZE: [43, 44, 97, 100, 45, 30],
  POL: [22, 40, 96, 99, 20, 36],
  ALB: [40, 25, 87, 20, 27, 20],
  USA: [29, 61, 20, 86, 84, 71],
};

export const comparisonSourceYears = ['2024', '2025', '2021–2023', '2025', '2023', '2024–2025'];
