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

type JsonObject = { [key: string]: any };

function findAndUpdate<T extends Record<string, any>>(
    array: T[],
    searchKey: keyof T,
    searchValue: any,
    updateKey: keyof T,
    updateValue: any
): boolean {
    try {
        // Ensure the array is valid
        if (!Array.isArray(array)) {
            console.error('The provided `array` is not an array.');
            return false;
        }

        // Find the item in the array
        const item = array.find((element) => element[searchKey] === searchValue);

        // Log the item that was found or not found
        if (item) {
            // Update the item
            if (updateKey in item) {
                (item as any)[updateKey] = updateValue; // Use type assertion to allow update
                console.log(`Item with ${String(searchKey)}=${searchValue} updated:`, item);
                return true;
            } else {
                console.error(`Update key '${String(updateKey)}' does not exist on the item.`);
                return false;
            }
        } else {
            console.error(`Item with ${String(searchKey)}=${searchValue} not found.`);
            return false;
        }
    } catch (error) {
        // Catch and log any unexpected errors
        console.error('An unexpected error occurred:', error);
        return false;
    }
}

export async function characterToFoundry(character: Character) {
    if (!character || !character.Culture || !character.Calling || !character.Statistics) {
        return
    }

    const t = await readJSONRemote(JSON_TEMPLATE_URL);
    console.debug("Template:", t);

    // Mappings
    // Name
    t.name = character.name;

    // Culture
    findAndUpdate(t.items, "type", "race", "name", character.Culture.name);

    // Background
    findAndUpdate(t.items, "type", "background", "name", character.Culture.chosenBackground?.name);

    // Calling
    findAndUpdate(t.items, "type", "class", "name", character.Calling.name);

    createDownload(JSON.stringify(t), character.name);
}
