import crc32 from 'crc-32';

export function getSeedForString(str) {
  return Math.max(0, ((crc32.str(str) & 0xffffffff) / 2 ** 32 + 0.5) % 1.0);
}

export function getSeedsForString(str1) {
  const str2 = (str1 + str1)
    .split('')
    .reverse()
    .join('');

  const str3 = (str1 + str1 + str1)
    .split('')
    .filter((c, i) => i % 2 === 0)
    .join('');

  return [
    getSeedForString(str1),
    getSeedForString(str2),
    getSeedForString(str3),
  ];
}

const rotateX = [
  'rotateX(-25deg)',
  'rotateX(-15deg)',
  'rotateX(-5deg)',
  'rotateX(5deg)',
  'rotateX(15deg)',
  'rotateX(25deg)',
];

const rotateY = [
  'rotateY(-25deg)',
  'rotateY(-15deg)',
  'rotateY(-5deg)',
  'rotateY(5deg)',
  'rotateY(15deg)',
  'rotateY(25deg)',
];

const rotateZ = [
  'rotateZ(-25deg)',
  'rotateZ(-15deg)',
  'rotateZ(-5deg)',
  'rotateZ(5deg)',
  'rotateZ(15deg)',
  'rotateZ(25deg)',
];

export function randomTransform(smoothness, seed1, seed2, seed3) {
  const x = rotateX.slice(
    smoothness,
    smoothness === 0 ? undefined : -smoothness,
  );

  const y = rotateY.slice(
    smoothness,
    smoothness === 0 ? undefined : -smoothness,
  );

  const z = rotateZ.slice(
    smoothness,
    smoothness === 0 ? undefined : -smoothness,
  );

  return [
    x[Math.floor(seed1 * x.length) % x.length],
    y[Math.floor(seed2 * y.length + 2) % y.length],
    z[Math.floor(seed3 * z.length + 4) % z.length],
  ].join(' ');
}
