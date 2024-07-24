import { Armour } from "./Armours";
import { AbilityEnum, ArmourProficiency, SkillEnum, WeaponProficiency } from "./Generic";
import { Weapon } from "./Weapons";

export type Calling = {
    id: string;
    imageUrl?: string;
    name: string;
    description: string;
    longDescription: string;
    hitDie: number;
    hitDieFirstLevel: {
        base: number;
        abilityModifier: AbilityEnum
    };
    hitDieHigherLevels: {
        base: number;
        die: number;
        abilityModifier: AbilityEnum
    };
    primaryAbilities: AbilityEnum[];
    savingThrowProficiencies: AbilityEnum[];
    armourProficiencies: ArmourProficiency[];
    weaponProficiencies: WeaponProficiency[];
    toolProficiencies: string[];
    skillProficiencies: SkillEnum[];
    shadowPath: string;
    baseFeatures: string[];
    equipmentChoice1?: Weapon[] | Armour[];
    equipmentChoice2?: Weapon[] | Armour[];
    equipmentChoice3?: Weapon[] | Armour[];
};


