import typeCard from '../js/cardType';

test.each([
  ['371449635398431', 'amex'],
  ['30569309025904', 'diners'],
  ['6011111111111117', 'discover'],
  ['3530111333300000', 'jsb'],
  ['5555555555554444', 'master'],
  ['4111111111111111', 'visa'],
  ['2000000000000000', 'mir'],
  ['0000000000000000', false],
])('test payment system', (input, expected) => {
  const res = typeCard(input);
  expect(res).toEqual(expected);
});
