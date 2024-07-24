type ArmourType = "Simple Melee" | "Martial Melee" | "Simple Ranged" | "Martial Ranged";

export interface Weapon {
    name: string;
    type: ArmourType;
    costCopper?: number;
    costSilver?: number;
    costGold?: number;
    damageDie: number;
    damageType: string;
    properties: string[];
    weightPounds: number;
}

export type WeaponType = {
    SimpleMelee: Weapon[];
    MartialMelee: Weapon[];
    SimpleRanged: Weapon[];
    MartialRanged: Weapon[];
}

export const WEAPONS: WeaponType = {
    SimpleMelee: [
        {
            name: "Axe",
            type: "Simple Melee",
            costSilver: 5,
            damageDie: 6,
            damageType: "slashing",
            properties: ["Versatile (1d8)"],
            weightPounds: 3
        },
        {
            name: "Club",
            type: "Simple Melee",
            costCopper: 1,
            damageDie: 4,
            damageType: "bludgeoning",
            properties: ["Light"],
            weightPounds: 2
        },
        {
            name: "GreatClub",
            type: "Simple Melee",
            costCopper: 2,
            damageDie: 8,
            damageType: "bludgeoning",
            properties: ["Two-handed"],
            weightPounds: 10
        },
        {
            name: "Dagger",
            type: "Simple Melee",
            costSilver: 2,
            damageDie: 4,
            damageType: "piercing",
            properties: ["Finesse", "Light", "Thrown (range 20/60)"],
            weightPounds: 1
        },
        {
            name: "Hammer",
            type: "Simple Melee",
            costSilver: 2,
            damageDie: 6,
            damageType: "bludgeoning",
            properties: [],
            weightPounds: 3
        },
        {
            name: "Hatchet",
            type: "Simple Melee",
            costSilver: 5,
            damageDie: 6,
            damageType: "slashing",
            properties: ["Light", "Thrown (range 20/60)"],
            weightPounds: 2
        },
        {
            name: "Spear",
            type: "Simple Melee",
            costSilver: 1,
            damageDie: 6,
            damageType: "piercing",
            properties: ["Thrown (range 20/60)", "Versatile (1d8)"],
            weightPounds: 3
        },
        {
            name: "Spear, Short",
            type: "Simple Melee",
            costCopper: 5,
            damageDie: 6,
            damageType: "piercing",
            properties: ["Thrown (range 30/120)"],
            weightPounds: 2
        },
        {
            name: "Staff",
            type: "Simple Melee",
            costCopper: 2,
            damageDie: 4,
            damageType: "bludgeoning",
            properties: ["Versatile (1d6)"],
            weightPounds: 2
        }
    ],
    MartialMelee: [
        {
            name: "Axe, Battle",
            type: "Martial Melee",
            costSilver: 10,
            damageDie: 8,
            damageType: "slashing",
            properties: ["Heavy", "Versatile (1d10)"],
            weightPounds: 4
        },
        {
            name: "Axe, Great",
            type: "Martial Melee",
            costSilver: 30,
            damageDie: 12,
            damageType: "slashing",
            properties: ["Heavy", "Two-handed"],
            weightPounds: 7
        },
        {
            name: "Hammer, Heavy",
            type: "Martial Melee",
            costSilver: 10,
            damageDie: 8,
            damageType: "bludgeoning",
            properties: ["Heavy", "Versatile (1d10)"],
            weightPounds: 4
        },
        {
            name: "Mattock",
            type: "Martial Melee",
            costSilver: 10,
            damageDie: 12,
            damageType: "piercing",
            properties: ["Heavy", "Two-handed"],
            weightPounds: 10
        },
        {
            name: "Spear, Great",
            type: "Martial Melee",
            costSilver: 20,
            damageDie: 10,
            damageType: "piercing",
            properties: ["Heavy", "Reach", "Two-handed"],
            weightPounds: 6
        },
        {
            name: "Sword",
            type: "Martial Melee",
            costSilver: 15,
            damageDie: 6,
            damageType: "slashing",
            properties: ["Finesse", "Versatile (1d8)"],
            weightPounds: 2
        },
        {
            name: "Sword, Long",
            type: "Martial Melee",
            costSilver: 20,
            damageDie: 8,
            damageType: "slashing",
            properties: ["Heavy", "Versatile (1d10)"],
            weightPounds: 3
        },
        {
            name: "Sword, Short",
            type: "Martial Melee",
            costSilver: 10,
            damageDie: 6,
            damageType: "piercing",
            properties: ["Finesse", "Light"],
            weightPounds: 2
        }
    ],
    SimpleRanged: [
        {
            name: "Bow",
            type: "Simple Ranged",
            costSilver: 25,
            damageDie: 6,
            damageType: "piercing",
            properties: ["Ammunition (range 80/320)", "Two-handed"],
            weightPounds: 2
        }
    ],
    MartialRanged: [
        {
            name: "Great Bow",
            type: "Martial Ranged",
            costSilver: 50,
            damageDie: 8,
            damageType: "piercing",
            properties: ["Ammunition (range 150/600)", "Heavy", "Two-handed"],
            weightPounds: 3
        }
    ]
};