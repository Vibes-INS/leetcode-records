// https://leetcode-cn.com/problems/maximum-subarray/
function maxSubArray(nums) {
    let currentMax = nums[0]
    let max = currentMax
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i])
        max = Math.max(currentMax, max)
    }
    return max
}
