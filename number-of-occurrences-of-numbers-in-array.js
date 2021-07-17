// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
function singleNumber(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i] && nums[i + 1] !== nums[i]) {
            return nums[i]
        }
    }
    return -1
}