// https://leetcode-cn.com/problems/length-of-last-word/
function lengthOfLastWord(s) {
    return (s
        .split(' ')
        .filter(word => word.trim())
        .slice(-1)[0] || []).length || 0
}