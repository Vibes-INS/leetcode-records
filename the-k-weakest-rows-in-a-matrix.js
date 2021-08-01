// https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/
function kWeakestRows(mat, k) {
    return mat
        .map((e, i) => [ i, e.filter(v => v === 1).length ])
        .sort((a, b) => a[1] - b[1])
        .map(e => e[0])
        .slice(0, k)
}