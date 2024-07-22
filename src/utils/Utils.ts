export function randomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function upper(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toCommaSeparatedString(languages: string[]): string {
    return languages.join(", ");
}