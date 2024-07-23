import { SkillEnum } from "./Generic";

export type Background = {
    name: string;
    description: string;
    skillProficiencies: SkillEnum[];
    toolProficiency: string;
    distinctiveFeatures: string[];
};
