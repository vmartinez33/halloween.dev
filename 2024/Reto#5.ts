function escapePyramidHead(room: string[][]): number {
    const directions: [number, number][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    let pyramidPos: [number, number] = [-1, -1];
    for (const [i, row] of room.entries()) {
        const pyramidColIndex = row.indexOf('▲');
        if (pyramidColIndex !== -1) {
            pyramidPos = [i, pyramidColIndex];
            break;
        }
    }

    // const flatIndex = room.flat().indexOf('▲');
    // const numCols = room[0].length;
    // const row = Math.floor(flatIndex / numCols);
    // const col = flatIndex % numCols;
    // let pyramidPos: [number, number] = [row, col];

    const queue: { x: number; y: number; steps: number }[] = [];
    const visited: Set<string> = new Set();

    queue.push({ x: pyramidPos[0], y: pyramidPos[1], steps: 0 });
    visited.add(`${pyramidPos[0]},${pyramidPos[1]}`);

    while (queue.length > 0) {
        const { x, y, steps } = queue.shift()!;

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            const posString = `${newX},${newY}`;

            const newElement = room[newX]?.[newY];
            if (newElement === '.' && !visited.has(posString)) {
                visited.add(posString);
                queue.push({ x: newX, y: newY, steps: steps + 1 });
                continue;
            }
            
            if (newElement === 'T') {
                return steps + 1;
            }
        }
    }

    return -1;
}


const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
]
console.log(escapePyramidHead(room)); // -> 8

const room2 = [
    ['T', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['▲', '.', '.', '#'],
    ['.', '#', '#', '#'],
]
console.log(escapePyramidHead(room2)); // -> 2

const room3 = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
]
console.log(escapePyramidHead(room3)); // -> -1
