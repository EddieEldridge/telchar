import { Background } from "./Background";
import { StandardOfLiving, ToolProficiency, Ability, SkillEnum } from "./Generic";

export type Culture = {
    name: string;
    imageUrl: string;
    description: string;
    typicalNames: {
        female: string[];
        male: string[];
    };
    culturalTraits: {
        abilityScoreIncrease: Ability[];
        adventuringAge: { min: number; max: number };
        size: string;
        heightRange: { min: number; max: number };
        speed: number;
        weaponProficiencies?: string[];
        toolProficiencies?: ToolProficiency[];
        skillProficiencies?: SkillEnum[];
        miscProficiencies?: string[];
        languages: string[];
        standardOfLiving: StandardOfLiving;
        subculture?: string[]
    };
    backgrounds: Background[];
};


