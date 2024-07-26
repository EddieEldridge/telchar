import { AbilityEnum, SkillEnum, ToolProficiency } from '../../Types/Generic';
import { Calling } from "../../Types/Calling";
import { ARMOURS } from '../../Types/Armours';
import { WEAPONS } from '../../Types/Weapons';

export const CAPTAIN: Calling = {
    id: "captain",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9UPDnhYBgV2gMLQYzVqNuk1qPu0mO5OXRPEOTCQo_d6gXH_-q",
    name: "Captain",
    description: "A valiant fighter and leader of others",
    longDescription: "When the world is on the brink of ruin, it is the duty of all individuals of worth to rise and take the lead, whatever the risk. You have chosen to put your judgement to the service of others, to guide them in this dark hour. But you don't want others to heed your commands out of fear or obedience — you want them to follow you because they trust you.",
    hitDie: 10,
    primaryAbilities: [AbilityEnum.Intelligence, AbilityEnum.Charisma],
    armourProficiencies: [
        { light: true, medium: true, heavy: true, shields: true }
    ],
    weaponProficiencies: [
        { simple: true, martial: true }
    ],
    toolProficiencies: [
        ToolProficiency.None
    ],
    savingThrowProficiencies: [AbilityEnum.Constitution, AbilityEnum.Charisma],
    skillProficiencies: [
        SkillEnum.AnimalHandling,
        SkillEnum.Athletics,
        SkillEnum.Insight,
        SkillEnum.Intimidation,
        SkillEnum.Persuasion,
        SkillEnum.Travel
    ],
    hitDieFirstLevel: {
        base: 10,
        abilityModifier: AbilityEnum.Constitution
    },
    hitDieHigherLevels: {
        base: 6,
        die: 10,
        abilityModifier: AbilityEnum.Constitution
    },
    shadowPath: "LURE OF POWER: When individuals are given a position of authority, either by rank, lineage, or stature, they may end up mistaking their own aggrandisement for the greater good of the people they should be guiding or keeping safe. Power is the quintessential temptation, and provides the Shadow with an easy way to win the hearts of those who desire it.",
    baseFeatures: [
        "Leadership: You possess the ability to direct others to action — when under pressure, other people naturally turn to you for guidance. As an action in combat, choose a number of friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you, up to twice your proficiency bonus. Each creature can gain temporary hit points equal to your Captain level + your Charisma mod- ifier. These temporary hit points last until they are depleted or the creature finishes a short or long rest. You must then finish a short or long rest to use this feature again."
    ],
    equipmentChoice1: [
        ARMOURS.RingMail,
        ARMOURS.Hide
    ],
    equipmentChoice2: [
    ],
    equipmentChoice3: [
    ]
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
