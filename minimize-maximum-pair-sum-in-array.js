// https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/
function minPairSum(nums) {
    nums.sort((a, b) => a - b)
    return new Array(Math.floor(nums.length / 2))
        .fill(0)
        .reduce((acc, nil, start) => {
            const end = nums.length - start - 1
            return Math.max(acc, nums[start] + nums[end])
        }, 0)
}