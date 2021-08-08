// https://leetcode-cn.com/problems/n-th-tribonacci-number/
function tribonacci(n) {
    if (n <= 0) {
        return n
    }
    const dp = [0, 1, 1]
    for (let i = 3; i < n + 1; i++) {
        dp[i] = 0
        for (let j = 3; j > 0; j--) {
            dp[i] += dp[i - j]
        }
    }
    return dp[dp.length - 1]
}
