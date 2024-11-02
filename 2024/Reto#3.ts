function findSafestPath(dream: number[][]): number {
    const rows: number = dream.length;
    const columns: number = dream[0].length;

    const currentRow: number[] = new Array(columns).fill(Infinity);
    currentRow[0] = 0;

    const rowsArray: number[] = new Array(rows).fill(0);
    for (const [i, row] of rowsArray.entries()) {
        currentRow[0] += dream[i][0];
        
        for (let j = 1; j < columns; j++) {
            const dangerLevel: number = dream[i][j];
            const previousLeft: number = currentRow[j - 1];
            const previousUp: number = currentRow[j];
            
            currentRow[j] = dangerLevel + Math.min(previousLeft, previousUp);
        }
    }

    return currentRow[columns - 1];
}


const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]
const bestPath = findSafestPath(dream) // Devuelve 7
console.log(bestPath);
