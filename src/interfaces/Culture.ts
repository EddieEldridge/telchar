import { Background } from "./Background";

export type Culture = {
    name: string;
    imageUrl: string;
    description: string;
    typicalNames: {
        female: string[];
        male: string[];
    };
    culturalTraits: {
        abilityScoreIncrease: { strength?: number; charisma?: number, constitution?: number, wisdom?: number, intelligence?: number, dexterity?: number };
        adventuringAge: { min: number; max: number };
        size: string;
        heightRange: { min: number; max: number };
        speed: number;
        weaponProficiencies?: string[];
        toolProficiencies?: string[];
        skillProficiencies?: string[];
        miscProficiencies?: string[];
        languages: string[];
        standardOfLiving: string;
        subculture?: string[]
    };
    backgrounds: Background[];
};


