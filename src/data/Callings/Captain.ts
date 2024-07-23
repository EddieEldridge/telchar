import { AbilityEnum } from '../../Types/Generic';
import { Calling } from "../../Types/Calling";

export const CAPTAIN: Calling = {
    name: "Captain",
    description: "A valiant fight and leader of others",
    longDescription: "When the world is on the brink of ruin, it is the duty of all individuals of worth to rise and take the lead, whatever the risk. You have chosen to put your judgement to the service of others, to guide them in this dark hour. But you don't want others to heed your commands out of fear or obedience — you want them to follow you because they trust you.",
    hitDie: 10,
    primaryAbilities: [AbilityEnum.Intelligence, AbilityEnum.Charisma],
    savingThrowProficiencies: [AbilityEnum.Constitution, AbilityEnum.Charisma],
    armourProficiencies: [
        { light: true, medium: true, heavy: true, shields: true }
    ],
    weaponProficiencies: [
        { simple: true, martial: true }
    ],
}

// export const CHAMPION: Calling = {
//     name: "Champion",
//     description: "A valiant fight and leader of others",
//     hitDie: 10,
//     primaryAbilities: [AbilityEnum.Intelligence, AbilityEnum.Charisma],
//     savingThrowProficiencies: [AbilityEnum.Constitution, AbilityEnum.Charisma],
//     armourProficiencies: [
//         { light: true, medium: true, heavy: true, shields: true }
//     ],
//     weaponProficiencies: [
//         { simple: true, martial: true }
//     ],
// }
