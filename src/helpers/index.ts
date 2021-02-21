const shuffleArray = (array: Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


export const generateAndShuffleNewArray = (length: number): Array<number> => {
    const newArray = []
    for(let i = 1; i <= length; i += 1) {
        newArray.push(i)
    }
    shuffleArray(newArray)
    return newArray
}