function findTheKiller(whisper: string, suspects: string[]): string {
    const regexPattern: string = whisper.replace(/~/g, '.');
    const regex: RegExp = new RegExp(`^${regexPattern}`, 'i');
    const matchedSuspects: string[] = [];
    for (const name of suspects) {
        if (regex.test(name)) {
            matchedSuspects.push(name);
        }
    }

    return matchedSuspects.join(',');
}


const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];
console.log(findTheKiller(whisper, suspects)); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']
console.log(findTheKiller(whisper2, suspects2)); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']
console.log(findTheKiller(whisper3, suspects3)); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']
console.log(findTheKiller(whisper4, suspects4)); // -> ''
