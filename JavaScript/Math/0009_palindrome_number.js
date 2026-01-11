/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    const s = x.toString();
    const rev = s.split('').reverse().join('');

    return s === rev;
};