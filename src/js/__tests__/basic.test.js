import lifeCheck from '../app';

describe('check lives profiles and sort them', () => {
  test('should be from max lives to min', () => {
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
  test('the two variables must be equal and filtered in the list', () => {
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
});
