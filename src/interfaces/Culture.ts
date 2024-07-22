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
        abilityScoreIncrease: { strength: number; charisma: number };
        adventuringAge: { min: number; max: number };
        size: string;
        heightRange: { min: number; max: number };
        speed: number;
        archersOfDale: boolean;
        startingVirtue: boolean;
        tradingPeople: boolean;
        languages: string[];
        standardOfLiving: string;
    };
    backgrounds: Background[];
};


