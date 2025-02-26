// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Binary_Search
// #Algorithm_II_Day_16_Dynamic_Programming #Binary_Search_II_Day_3 #Dynamic_Programming_I_Day_18
// #Udemy_Dynamic_Programming #Top_Interview_150_1D_DP #Big_O_Time_O(n*log_n)_Space_O(n)
// #2023_10_04_Time_57_ms_(93.75%)_Space_45_MB_(33.55%)

function lengthOfLIS(nums: number[]): number {
    if (nums === null || nums.length === 0) {
        return 0
    }
    const dp: number[] = new Array(nums.length + 1).fill(0)
    // Prefill the dp table
    for (let i = 1; i < dp.length; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER
    }
    let left: number = 1
    let right: number = 1
    for (const curr of nums) {
        let start: number = left
        let end: number = right
        // Binary search, find the one that is lower than curr
        while (start + 1 < end) {
            let mid: number = start + Math.floor((end - start) / 2)
            if (dp[mid] > curr) {
                end = mid
            } else {
                start = mid
            }
        }
        // Update our dp table
        if (dp[start] > curr) {
            dp[start] = curr
        } else if (curr > dp[start] && curr < dp[end]) {
            dp[end] = curr
        } else if (curr > dp[end]) {
            dp[++end] = curr
            right++
        }
    }
    return right
}

export { lengthOfLIS }
