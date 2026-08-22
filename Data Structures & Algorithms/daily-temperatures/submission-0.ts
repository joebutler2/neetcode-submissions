class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const answer = new Array(temperatures.length).fill(0);
        const stack = []
        for(let [i, temp] of temperatures.entries()) {
            while(stack.length > 0 && stack[stack.length - 1].temp < temp) {
                const prev = stack.pop()
                answer[prev.day] = i - prev.day;
            }
            stack.push({temp, day: i})
        }

        return answer
    }
}
