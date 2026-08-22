class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number):
     number {
        let low = 0
        let high = Math.max(...piles)
        
        while(low < high) {
            const speed = low + ((high - low) >> 1)
            let hours = 0;

             for(const pile of piles) {
                hours += Math.ceil(pile / speed)
                if(hours > h) break;
             }
             if(hours <= h) {
                high = speed
             } else {
                low = speed + 1
             }
        }


        return low
    }
}
