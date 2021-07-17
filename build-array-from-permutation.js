// https://leetcode-cn.com/problems/build-array-from-permutation/
function buildArray(nums) {
    return new Array(nums.length)
        .fill(0)
        .map((v, i) => nums[nums[i]])
}