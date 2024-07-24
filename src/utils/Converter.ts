// Writes values from Character type to JSON
import fs from 'fs';

const JSON_FOLDER = "../Assets/json"

export async function readJSON(jsonFileName: string) {
    const path = `${JSON_FOLDER}/${jsonFileName}`;

    const jsonString = fs.readFileSync(path, 'utf-8');
    const data = JSON.parse(jsonString);

    return data
}