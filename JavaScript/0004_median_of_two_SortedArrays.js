/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    const half = Math.floor(totalLength / 2);
    
    let left = 0;
    let right = m;
    
    while (left <= right) {
        const partitionA = Math.floor((left + right) / 2);
        const partitionB = half - partitionA;
        
        const maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
        const minRightA = partitionA === m ? Infinity : nums1[partitionA];
        
        const maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
        const minRightB = partitionB === n ? Infinity : nums2[partitionB];
        
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if (totalLength % 2 === 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
            } else {
                return Math.min(minRightA, minRightB);
            }
        } else if (maxLeftA > minRightB) {
            right = partitionA - 1;
        } else {
            left = partitionA + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted");
    
};