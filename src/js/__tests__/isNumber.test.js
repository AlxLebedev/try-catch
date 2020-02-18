import isNumber from '../app';


test('Entered a number', () => {
  const expected = 111;
  const recieved = isNumber('111');
  expect(recieved).toBe(expected);
});

test('Entered NaN', () => {
  const expected = 'It`s not a number!';
  const recieved = isNumber('AAA');
  expect(recieved).toBe(expected);
});
