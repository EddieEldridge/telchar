import { Culture } from "../../Types/Culture";
import { AbilityEnum, Languages, SkillEnum, StandardOfLiving, ToolProficiency } from "../../Types/Generic";

export const DWARF: Culture = {
    id: "dwarf",
    imageUrl: "https://i.imgur.com/chLvdKw.png",
    name: "Dwarves of Durin's Folk",
    description: `
     The Dwarves are an ancient and proud folk, whose customs
and traditions are mostly unknown to outsiders. A dwindling
people, they have recently recovered some of their lost great-
ness, and a Dwarven King reigns once again under the Lonely
Mountain, in Wilderland.
Many Dwarves cross into Eriador from the East, on their
way to their mines in the Blue Mountains. They can often be
seen marching along the East-West Road that runs through
the Shire and ends at the Grey Havens.

The Dwarves are exceedingly strong for their height, and
hard to break or corrupt, but often at odds with other folks
over old quarrels or new slights. They are short and stocky,
with robust limbs and heads crowned with long hair and lon-
ger beards that give them their typically elderly appearance.
When on a journey or in battle they plait their forked beards
and thrust them into their belts.
In battle most Dwarves use axes and swords, but those
belonging to their easternmost kin wield heavy two-handed
mattocks, a weapon derived from their mining tools.
    `,
    typicalNames: {
        female: [
            "Adís", "Afrid", "Agda", "Bersa", "Birna",
            "Dagrún", "Dís", "Drífa", "Edda", "Elin", "Fenja", "Frida", "Geira", "Gísla",
            "Hadda", "Hón", "Ida", "Ilmr", "Jóra", "Kára", "Kóna", "Líf", "Línhild", "Már",
            "Mist", "Nál", "Oda", "Ósk", "Rán", "Rinda", "Sefa", "Syn", "Tóra", "Trana",
            "Úlfrún", "Vírún", "Yrr"
        ],
        male: [
            "Ai", "Anar", "Beli", "Bláin", "Borin", "Burin",
            "Bruni", "Farin", "Flói", "Frár", "Frerin", "Frór", "Ginar", "Gróin", "Grór", "Hanar",
            "Hepti", "Iari", "Lófar", "Lóni", "Náli", "Nár", "Niping", "Nói", "Núr", "Nýrád",
            "Ónar", "Póri", "Regin", "Svior", "Veig", "Vidar"
        ]
    },
    culturalTraits: {
        abilityScoreIncrease: [
            {
                name: AbilityEnum.Constitution,
                value: 2,
            },
        ],
        adventuringAge: { min: 50, max: 100 },
        size: "Small",
        heightRange: { min: 4, max: 5 },
        speed: 25,
        weaponProficiencies: ["Battle Axe", "Great Axe", "Mattock"],
        toolProficiencies: [ToolProficiency.JewellersTools, ToolProficiency.MasonsTools, ToolProficiency.SmithsTools],
        skillProficiencies: [],
        miscProficiencies: ["Armour doesn't impose disadvantage on your fatigue saving throws, and your carrying capacity (including the weight you can carry before you are encumbered or heavily encumbered, and the weight you can push, drag or lift) is doubled."],
        languages: [Languages.Westron, Languages.Khuzdul],
        standardOfLiving: StandardOfLiving.Prosperous,
        subculture: ["Dwarves of the Blue Mountains", "Dwarves of Erebor", "Dwarves of the Iron Hills"]
    },
    availableBackgrounds: [
        {
            name: "Bitter Exile",
            description: "Your ancestors fled their home in the far North, and you grew up hearing stories of lost Dwarf-halls fallen to Orc-kind or burnt to cinders by Dragons. It is your ambition to return to those mountains and set things right.",
            skillProficiencies: [SkillEnum.Explore, SkillEnum.OldLore],
            toolProficiency: "A musical instrument of your choice",
            distinctiveFeatures: ["Fierce", "Proud"]
        },
        {
            name: "Eloquent Orator",
            description: "The hardships endured by your folk during two ages of the world have inspired many songs. But the words that come easier to your lips are those recounting feats of great cunning, not those about deeds of valour. It is by your ingenuity that you seek the fall of your adversaries.",
            skillProficiencies: [SkillEnum.Persuasion, SkillEnum.Riddle],
            toolProficiency: ToolProficiency.CalligraphersSupplies,
            distinctiveFeatures: ["Cunning", "Lordly"]
        },
        {
            name: "Far Trader",
            description: "By the reckoning of the Dwarves, you were only a stripling when you left your home to follow your kin along the trading roads. You have since seen many places and met different folks eager to trade goods for the product of Dwarven handiwork, and your heart burns with a desire to see more.",
            skillProficiencies: [SkillEnum.Deception, SkillEnum.Travel],
            toolProficiency: ToolProficiency.LandVehicles,
            distinctiveFeatures: ["Cunning", "Proud"]
        },
        {
            name: "The Grief of Azanulbizar",
            description: "A great war was fought between the Dwarves and the Orcs of the Misty Mountains about 170 years ago. The parents and grandparents of most Dwarves, including yours, remember the horrors of that war; you have vowed to mete out justice to all Orc-kind.",
            skillProficiencies: [SkillEnum.Hunting, SkillEnum.Intimidation],
            toolProficiency: ToolProficiency.SmithsTools,
            distinctiveFeatures: ["Fierce", "Stern"]
        },
        {
            name: "A Life of Toil",
            description: "Your ancestors crafted wondrous things out of shining stones and precious metals, while you have been forced to labour hard in the mines for far less noble ore. Unfortunately, to this day, most ancient Dwarf-holds are no more than Dragon's lairs or Orc-infested pits. You toil patiently, peering into the gloom with eyes hungry for the gleaming of gems and gold.",
            skillProficiencies: [SkillEnum.Athletics, SkillEnum.Perception],
            toolProficiency: ToolProficiency.MasonsTools,
            distinctiveFeatures: ["Secretive", "Wilful"]
        },
        {
            name: "A Penetrating Gaze",
            description: "Your elder sibling instructed you to judge others by their deeds, not their words, especially when dealing with the fair-spoken Elves. But in time you have come to trust your instincts above all else, as your heart is not easily swayed. Thieves and liars do not dare to meet your eyes, as you seem able to lay bare their plots.",
            skillProficiencies: [SkillEnum.Insight, SkillEnum.Investigation],
            toolProficiency: ToolProficiency.Pipe,
            distinctiveFeatures: ["Wary", "Wilful"]
        }
    ]
};