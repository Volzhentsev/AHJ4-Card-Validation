import luhnValidator from '../js/luhnAlgoritm';

test('test lunaAlgoritm true', () => {
  const result = luhnValidator('4111111111111111');
  expect(result).toBeTruthy();
});

test('test lunaAlgoritm false', () => {
  const result = luhnValidator('1111111111111111');
  expect(result).toBe(false);
});
