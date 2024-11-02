function createMagicPotion(potions: number[], target: number): [number, number] | undefined {
    const seenPotions = new Map<number, number>();

    for (const [index, currentPotion] of potions.entries()) {
        const neededPotion = target - currentPotion;

        if (seenPotions.has(neededPotion)) {
            return [seenPotions.get(neededPotion)!, index];
        }

        seenPotions.set(currentPotion, index);
    }

    return undefined;
}


const potions = [4, 5, 6, 2]
const goal = 8
console.log(createMagicPotion(potions, goal)); // [2, 3]

const potions2 = [1, 2, 3, 4]
const goal2 = 9
console.log(createMagicPotion(potions2, goal2)); // undefined

const potions3 = [1, 2, 3, 4]
const goal3 = 5
console.log(createMagicPotion(potions3, goal3)); // [1, 2]
