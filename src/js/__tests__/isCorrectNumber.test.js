import isCorrectNumber from '../isCorrectNumber';


test('Entered a correct number', () => {
  const expected = 111;
  const recieved = isCorrectNumber('111');
  expect(recieved).toBe(expected);
});

test('Entered a non-integer number', () => {
  const expected = 'It`s not a correct number!';
  const recieved = isCorrectNumber('111.45');
  expect(recieved).toBe(expected);
});

test('Entered some text', () => {
  const expected = 'It`s not a correct number!';
  const recieved = isCorrectNumber('AAA');
  expect(recieved).toBe(expected);
});

test('Entered binary number', () => {
  const expected = 'It`s not a correct number!';
  const recieved = isCorrectNumber('0b01111111100000000000000000000000');
  expect(recieved).toBe(expected);
});

test('Entered octal number', () => {
  const expected = 'It`s not a correct number!';
  const recieved = isCorrectNumber('0644');
  expect(recieved).toBe(expected);
});

test('Entered hexadecimal number', () => {
  const expected = 'It`s not a correct number!';
  const recieved = isCorrectNumber('0x123456789ABCDEF');
  expect(recieved).toBe(expected);
});
