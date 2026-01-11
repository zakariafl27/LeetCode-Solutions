/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let rev =
        parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);

    if (rev < -(2 ** 31) || rev > (2 ** 31 - 1)) {
        return 0;
    }

    return rev;
};