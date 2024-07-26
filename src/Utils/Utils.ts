export function randomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function upper(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toCommaSeparatedString(languages: string[] | undefined): string {
    if (!languages) return "ERROR";
    return languages.join(", ");
}

export function log(message: string) {
    console.log(message);
}

export function createDownload(fileContent: BlobPart, fileName: string) {
    const blob = new Blob([fileContent], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
