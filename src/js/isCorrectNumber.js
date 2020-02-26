
export default function isCorrectNumber(arg) {
  try {
    if (parseFloat(arg).toString() === arg && Number.isInteger(parseFloat(arg))) {
      return Number(arg);
    }
    throw new Error('It`s not a correct number!');
  } catch (e) {
    return e.message;
  }
}
