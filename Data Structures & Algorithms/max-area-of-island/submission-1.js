class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    maxAreaOfIsland(grid) {
    let maxArea = 0
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] == 1) {
                maxArea = Math.max(maxArea, this.getSize(grid, row, col));
            }
        }
    }
    return maxArea
};

 getSize(grid, row, col) {
    if((grid[row]?.[col] ?? 0) === 0) {
        return 0
    }
    grid[row][col] = 0
    return 1 + 
        this.getSize(grid, row + 1, col) + 
        this.getSize(grid, row - 1, col) + 
        this.getSize(grid, row, col + 1) + 
        this.getSize(grid, row, col - 1);
}
}
