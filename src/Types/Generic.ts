// Define a type alias for the keys of the Ability type
export enum AbilityEnum {
    Intelligence = "intelligence",
    Wisdom = "wisdom",
    Charisma = "charisma",
    Strength = "strength",
    Constitution = "constitution",
    Dexterity = "dexterity"
}

export type Ability = {
    name: AbilityEnum
    description?: string;
    value?: number;
};

export type ArmourProficiency = {
    light: boolean;
    medium: boolean;
    heavy: boolean;
    shields: boolean;
}

export type WeaponProficiency = {
    simple: boolean;
    martial: boolean;
}

export enum StandardOfLiving {
    Frugal = "Frugal",
    Common = "Common",
    Prosperous = "Prosperous"
}

export enum ToolProficiency {
    BrewersSupplies = "Brewer's supplies",
    CalligraphersSupplies = "Calligrapher's supplies",
    CarpentersTools = "Carpenter's tools",
    CartographersTools = "Cartographer's tools",
    CobblersTools = "Cobbler's tools",
    CooksUtensils = "Cook's utensils",
    GlassblowersTools = "Glassblower's tools",
    JewellersTools = "Jeweller's tools",
    LeatherworkersTools = "Leatherworker's tools",
    MasonsTools = "Mason's tools",
    PaintersSupplies = "Painter's supplies",
    PottersTools = "Potter's tools",
    SmithsTools = "Smith's tools",
    WeaversTools = "Weaver's tools",
    WoodcarversTools = "Woodcarver's tools",
    HerbalismKit = "Herbalism kit",
    NavigatorsTools = "Navigator's tools",
    Pipe = "Pipe",
    ThievesTools = "Thieves' tools",
    LandVehicles = "Land Vehicles",
    None = "None"
}

export enum GamingSets {
    Chess = "Chess",
    Bowls = "Bowls",
    Darts = "Darts",
    Quoits = "Quoits"
}

export enum MusicalInstruments {
    Clarinet = "Clarinet",
    Drum = "Drum",
    Fiddle = "Fiddle",
    Flute = "Flute",
    Harp = "Harp",
    Horn = "Horn",
    Trumpet = "Trumpet",
    Viol = "Viol",
}

export enum Languages {
    Westron = "Westron",
    Sindarin = "Sindarin",
    Khuzdul = "Khuzdul",
}

export type Skill = {
    name: SkillEnum;
    abilityModifier: AbilityEnum;
};

export enum SkillEnum {
    Athletics = "Athletics",
    SleightOfHand = "Sleight of Hand",
    Acrobatics = "Acrobatics",
    Stealth = "Stealth",
    Investigation = "Investigation",
    OldLore = "Old Lore",
    History = "History",
    Nature = "Nature",
    Riddle = "Riddle",
    AnimalHandling = "Animal Handling",
    Insight = "Insight",
    Medicine = "Medicine",
    Perception = "Perception",
    Survival = "Survival",
    Travel = "Travel",
    Hunting = "Hunting",
    Explore = "Explore",
    Deception = "Deception",
    Intimidation = "Intimidation",
    Performance = "Performance",
    Persuasion = "Persuasion",
}

export const SKILLS = {
    // Strength
    athletics: {
        abilityModifier: AbilityEnum.Strength
    },

    // Dexterity
    sleightOfHand: {
        abilityModifier: AbilityEnum.Dexterity
    },
    acrobatics: {
        abilityModifier: AbilityEnum.Dexterity
    },
    stealth: {
        abilityModifier: AbilityEnum.Dexterity
    },

    // Intelligence
    investigation: {
        abilityModifier: AbilityEnum.Intelligence
    },
    oldLore: {
        abilityModifier: AbilityEnum.Intelligence
    },
    history: {
        abilityModifier: AbilityEnum.Intelligence
    },
    nature: {
        abilityModifier: AbilityEnum.Intelligence
    },
    riddle: {
        abilityModifier: AbilityEnum.Intelligence
    },

    // Wisdom
    animalHandling: {
        abilityModifier: AbilityEnum.Wisdom
    },
    insight: {
        abilityModifier: AbilityEnum.Wisdom
    },
    medicine: {
        abilityModifier: AbilityEnum.Wisdom
    },
    perception: {
        abilityModifier: AbilityEnum.Wisdom
    },
    survival: {
        abilityModifier: AbilityEnum.Wisdom
    },
    travel: {
        abilityModifier: AbilityEnum.Wisdom
    },
    hunting: {
        abilityModifier: AbilityEnum.Wisdom
    },
    explore: {
        abilityModifier: AbilityEnum.Wisdom
    },


    // Charisma
    deception: {
        abilityModifier: AbilityEnum.Charisma
    },
    intimidation: {
        abilityModifier: AbilityEnum.Charisma
    },
    performance: {
        abilityModifier: AbilityEnum.Charisma
    },
    persuasion: {
        abilityModifier: AbilityEnum.Charisma
    },
}
