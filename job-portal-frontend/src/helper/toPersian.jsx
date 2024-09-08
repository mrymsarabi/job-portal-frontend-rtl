export const toPersian = (input) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  
    // Convert input to a string if it's not already
    const string = String(input);
  
    return string.split('').map(char => {
      if (char >= '0' && char <= '9') {
        return persianNumbers[char];
      }
      return char;
    }).join('');
}