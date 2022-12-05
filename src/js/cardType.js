export default function typeCard(cardNum) {
  const arrMaster = ['1', '2', '3', '4', '5'];
  const arrAmerEx = ['4', '7'];
  const arrDiners = ['0', '6', '8'];
  const arrJSB = ['1', '5'];
  if (cardNum[0] === '2') {
    return 'mir';
  } if (cardNum[0] === '4') {
    return 'visa';
  } if (cardNum[0] === '5' && arrMaster.includes(cardNum[1])) {
    return 'master';
  } if (cardNum[0] === '6' && cardNum[1] === '0') {
    return 'discover';
  } if (cardNum[0] === '3' && arrAmerEx.includes(cardNum[1])) {
    return 'amex';
  } if (cardNum[0] === '3' && arrDiners.includes(cardNum[1])) {
    return 'diners';
  } if (cardNum[0] === '3' && arrJSB.includes(cardNum[1])) {
    return 'jsb';
  }
  return false;
}
