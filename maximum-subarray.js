// https://leetcode-cn.com/problems/maximum-subarray/
function maxSubArray(nums) {
    if (nums.length <= 1) {
        return nums[0] || 0
    }
    let dp = [ nums[0] ]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        max = Math.max(max, dp[i])
    }
    return max
}
