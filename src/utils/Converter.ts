// Writes values from Character type to JSON
import { Character } from '../Types/Character';
import { createDownload } from './Utils';
import axios from 'axios';

const JSON_FOLDER = "../Assets/json"
const JSON_TEMPLATE_URL = "https://raw.githubusercontent.com/EddieEldridge/telchar/master/src/assets/json/V12_Character.json"

// export function readJSON(jsonFileName: string) {
//     const path = `${JSON_FOLDER}/${jsonFileName}`;

//     const jsonString = fs.readFileSync(path, 'utf-8');
//     const data = JSON.parse(jsonString);

//     return data
// }

export async function readJSONRemote(url: string): Promise<any> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching JSON from ${url}:`, error);
        throw error;
    }
}

// export function writeJSON(jsonFileName: string, data: any) {
//     const path = `${JSON_FOLDER}/${jsonFileName}`;

//     const jsonString = JSON.stringify(data, null, 2);
//     fs.writeFileSync(path, jsonString);
// }

export async function characterToFoundry(character: Character) {
    const template = await readJSONRemote(JSON_TEMPLATE_URL);
    console.debug("Template:", template);
    template.name = character.name;
    createDownload(JSON.stringify(template), character.name);
    // writeJSON(`${JSON_FOLDER}/${character.name}.json`, template);
}
