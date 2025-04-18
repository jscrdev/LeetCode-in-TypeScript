// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #String #Level_2_Day_2_String
// #Udemy_Strings #Top_Interview_150_Array/String
// #2025_03_31_Time_0_ms_(100.00%)_Space_54.23_MB_(65.24%)

function longestCommonPrefix(strs: string[]): string {
    if (strs.length < 1) {
        return ''
    }
    if (strs.length === 1) {
        return strs[0]
    }
    let temp = strs[0]
    let i = 1
    let cur: string
    while (temp.length > 0 && i < strs.length) {
        if (temp.length > strs[i].length) {
            temp = temp.substring(0, strs[i].length)
        }
        cur = strs[i].substring(0, temp.length)
        if (cur !== temp) {
            temp = temp.substring(0, temp.length - 1)
        } else {
            i++
        }
    }
    return temp
}

export { longestCommonPrefix }
