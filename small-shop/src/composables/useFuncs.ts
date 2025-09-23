export function useFuncs() {

    const randomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const randomItems = (array: any[], count: number = 1) => {
        const shuffled = [...array];
        const result = [];
        const max = Math.min(array.length, count);
        for (let i = 0; i < max; i++) {
        const randomIndex = Math.floor(Math.random() * shuffled.length);
        result.push(shuffled.splice(randomIndex, 1)[0]);
        }
        return result;
    };

    const capitalize = (str: string): string => {
        if (!str) return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return {
        randomInt,
        randomItems,
        capitalize,
    }

}