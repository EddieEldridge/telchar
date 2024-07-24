type ArmourType = "Light Armour" | "Medium Armour" | "Heavy Armour" | "Shield";

export interface Armour {
    name: string;
    type: ArmourType;
    costSilver?: number;
    costGold?: number;
    ac: number;
    dexModified?: boolean;
    dexModifierMax?: number;
    disadvantage?: boolean;
    weightPounds: number;
}

export const ARMOURS: Record<string, Armour> = {
    LeatherShirt: {
        name: "Leather shirt",
        type: "Light Armour",
        costSilver: 10,
        ac: 11,
        dexModified: true,
        dexModifierMax: 4,
        weightPounds: 8
    },
    LeatherCorslet: {
        name: "Leather corslet",
        type: "Light Armour",
        costSilver: 45,
        ac: 12,
        dexModified: true,
        dexModifierMax: 3,
        weightPounds: 10
    },
    Hide: {
        name: "Hide",
        type: "Medium Armour",
        costSilver: 10,
        ac: 12,
        dexModified: true,
        dexModifierMax: 2,
        weightPounds: 12
    },
    MailShirt: {
        name: "Mail-shirt",
        type: "Medium Armour",
        costSilver: 50,
        ac: 13,
        dexModified: true,
        dexModifierMax: 2,
        weightPounds: 20
    },
    ScaleArmour: {
        name: "Scale Armour",
        type: "Medium Armour",
        costSilver: 50,
        ac: 14,
        dexModified: true,
        dexModifierMax: 2,
        disadvantage: true,
        weightPounds: 40
    },
    RingMail: {
        name: "Ring-mail",
        type: "Heavy Armour",
        costSilver: 50,
        ac: 15,
        disadvantage: true,
        weightPounds: 50
    },
    CoatOfMail: {
        name: "Coat of Mail",
        type: "Heavy Armour",
        costSilver: 75,
        ac: 16,
        disadvantage: true,
        weightPounds: 55
    },
    MailHauberk: {
        name: "Mail Hauberk",
        type: "Heavy Armour",
        costGold: 20,
        ac: 17,
        disadvantage: true,
        weightPounds: 60
    },
    Shield: {
        name: "Shield",
        type: "Shield",
        costSilver: 10,
        ac: 2,
        weightPounds: 6
    }
};
