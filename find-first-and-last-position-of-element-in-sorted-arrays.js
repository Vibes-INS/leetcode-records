// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
function searchRange(nums, target) {
    const range = [-1, -1]
    const index = binarySearch(nums, target)
    for (let offset = 0; nums[index - offset] === target || nums[index + offset] === target; offset++) {
        if (nums[index - offset] === target) {
            range[0] = index - offset
        }
        if (nums[index + offset] === target) {
            range[1] = index + offset
        }
    }
    return range
};

function binarySearch(arr, val) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2 )
        if (val === arr[mid]) {
            return mid
        }
        if (val > arr[mid]) {
            low = mid + 1
        } else if (val < arr[mid]) {
            high = mid - 1
        }
    }
    return -1
}
