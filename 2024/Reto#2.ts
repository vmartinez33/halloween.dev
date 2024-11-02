function battleHorde(zombies: string, humans: string): string {
    let totalPower = 0;

    for (const [i, zombie] of Array.from(zombies).entries()) {
        const zombiePower = zombie.charCodeAt(0) - 48;
        const humanPower = humans.charCodeAt(i) - 48;
        totalPower += (zombiePower - humanPower);
    }

    if (totalPower > 0) return `${totalPower}z`;
    if (totalPower < 0) return `${Math.abs(totalPower)}h`;
    return 'x';
}


const zombies = '242';
const humans = '334';
console.log(battleHorde(zombies, humans));  // -> "2h"

const zombies2 = '444';
const humans2 = '282';
console.log(battleHorde(zombies2, humans2));  // -> "x"
