
export default function isNumber(arg) {
  try {
    if (parseFloat(arg).toString() === arg) {
      return Number(arg);
    }
    throw new Error('It`s not a number!');
  } catch (e) {
    return e.message;
  }
}
