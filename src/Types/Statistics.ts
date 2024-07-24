import { AbilityEnum } from './Generic';
export type Statistics = {
    [key in AbilityEnum]: {
        score: number;
        modifier: number;
    };
};
