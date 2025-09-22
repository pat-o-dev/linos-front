export function useFuncs() {

    const randomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const capitalize = (str: string): string => {
        if (!str) return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return {
        randomInt,
        capitalize,
    }

}