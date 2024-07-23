import { AbilityEnum, ArmourProficiency, WeaponProficiency } from "./Generic";

export type Calling = {
    name: string;
    description: string;
    longDescription: string;
    hitDie: number;
    primaryAbilities?: AbilityEnum[]; // TBD Handle and/or here
    savingThrowProficiencies?: AbilityEnum[];
    armourProficiencies?: ArmourProficiency[];
    weaponProficiencies?: WeaponProficiency[];
    toolProficiencies?: string[];
};


