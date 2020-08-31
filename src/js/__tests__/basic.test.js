import lifeCheck from '../app';

describe('check lives profiles and sort them', () => {
  test('sorted array from min to max', () => {
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const received = lifeCheck([
      { name: 'мечник', health: 10 },
      { name: 'лучник', health: 80 },
      { name: 'маг', health: 100 },
    ]);
    expect(received).toEqual(expected);
  });
  test('from max to max, leave the array as it is', () => {
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    const received = lifeCheck([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
    expect(received).toEqual(expected);
  });
  test('from min to max, but should exist 2 equal elements', () => {
    const expected = [
      { name: 'мечник', health: 95 },
      { name: 'маг', health: 80 },
      { name: 'лучник', health: 80 },
    ];

    const received = lifeCheck([
      { name: 'маг', health: 80 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 95 },
    ]);
    expect(received).toEqual(expected);
  });
  test('array with two elements', () => {
    const expected = [
      { name: 'маг', health: 90 },
      { name: 'лучник', health: 80 },
    ];
    const received = lifeCheck([
      { name: 'маг', health: 90 },
      { name: 'лучник', health: 80 },
    ]);
    expect(received).toEqual(expected);
  });
  test('empty array', () => {
    const expected = [];
    const received = lifeCheck([]);
    expect(received).toEqual(expected);
  });
});
