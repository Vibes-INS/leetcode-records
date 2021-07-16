// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
function search(nums, target) {
    let count = 0
    const index = binarySearch(nums, target)
    for (let offset = 0; nums[index - offset] === target || nums[index + offset] === target; offset++) {
        if (offset === 0 && nums[index - offset] === target) {
            count++
            continue
        }
        if (nums[index - offset] === target) {
            count++
        }
        if (nums[index + offset] === target) {
            count++
        }
    }
    return count
}

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
