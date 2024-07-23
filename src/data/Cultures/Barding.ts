import { Culture } from "../../Types/Culture";
import { AbilityEnum, Languages, SkillEnum, StandardOfLiving, ToolProficiency } from "../../Types/Generic";

export const BARDING: Culture = {
    id: "barding",
    imageUrl: "https://i.imgur.com/Blto2L7.png",
    name: "Bardings",
    description: `
      The Bardings are Northmen of noble origins hailing from Wilderland, far off to the east. 
      They rebuilt their city of Dale from its ashes after the slaying of the Dragon Smaug and 
      they earned a new prosperity trading with nearby kingdoms of Elves and Dwarves.
      Each year, Barding merchants reach new faraway lands, as they look outside their borders 
      to expand their trade and influence. Sometimes, warriors follow in their wake, hoping 
      to prove their mettle against worthy adversaries, inspired by their King's slaying of the Dragon.
      Strong in body and fearless in spirit, the Northmen are the denizens of Middle-earth that 
      many consider to be nearest in kin to the Men of the West. They are strong-limbed, with 
      fair hair, although dark or even black hair is not unknown. Barding men tend to keep beards, 
      and often let their hair grow to reach their shoulders. Women adventurers braid their hair 
      in long, tight tresses. When abroad they may be recognised by their gear, as they often carry equipment of superior make. 
      Unlike most denizens of Wilderland, Bardings prefer to use swords over axes, and naturally favour 
      the bow, after the example of their King.
    `,
    typicalNames: {
        female: [
            "Aldrif", "Asfrid", "Asny", "Astrith", "Bera", "Bergdis", "Dagny", "Dalla", "Eilif", "Erna",
            "Eydis", "Estrild", "Frida", "Geira", "Gerda", "Grimhild", "Gundrid", "Gunnhild", "Halla",
            "Halldis", "Hild", "Holma", "Inga", "Ingirun", "Ingrith", "Kelda", "Lif", "Linhild", "Ragna",
            "Runa", "Saldis", "Sigga", "Signy", "Solveig", "Thora", "Thorhild", "Thorleif", "Ulfhild",
            "Ulfrun", "Una", "Vigdis", "Walda"
        ],
        male: [
            "Aegir", "Arn", "Brandulf", "Domarr", "Erland", "Farald", "Gautarr", "Hafgrim", "Hjalmar",
            "Ingolf", "Ketilmund", "Kol", "Kolbeinn", "Leiknir", "Lodin", "Lomund", "Magni", "Mord",
            "Munan", "Nari", "Nefstan", "Nerulf", "Oddmarr", "Ornolf", "Ottarr", "Reinald", "Runolf",
            "Sandarr", "Saxulf", "Sigdan", "Sigfast", "Sigvald", "Sigward", "Sigmund", "Skarf", "Skefill",
            "Smidur", "Steinarr", "Torwald", "Ulfarr", "Unnarr", "Valbrand"
        ]
    },
    culturalTraits: {
        abilityScoreIncrease: [
            {
                name: AbilityEnum.Strength,
                value: 2,
            },
            {
                name: AbilityEnum.Constitution,
                value: 2,
            },
        ],
        adventuringAge: { min: 18, max: 40 },
        size: "Medium",
        speed: 30,
        heightRange: { min: 5, max: 6 },
        weaponProficiencies: ["Great Bow"],
        toolProficiencies: [ToolProficiency.None],
        skillProficiencies: [SkillEnum.Persuasion],
        miscProficiencies: ["You gain one cultural virtue of your choice"],
        languages: [Languages.Westron, Languages.Sindarin],
        standardOfLiving: StandardOfLiving.Prosperous
    },
    backgrounds: [
        {
            name: "Dragon Stories",
            description: `
          Your family told many tales of Smaug the Dragon, from its arrival long ago to its death at the 
          hand of your lord, King Bard. After his victory your family reclaimed their ancestral home in Dale. 
          But now, the only dragons in Dale grace the painted signs of inns, and so you have left your home in search of adventure.
        `,
            skillProficiencies: [SkillEnum.Explore, SkillEnum.OldLore],
            toolProficiency: "A musical instrument of your choice",
            distinctiveFeatures: ["Eager", "Proud"]
        },
        {
            name: "By Hammer and Anvil",
            description: `
          Your parents paid richly for a Dwarf-smith to take you as an apprentice in his forge, and you worked 
          hard under his severe discipline, to prove that your craft could reach his people's high standards.
          In the long hours you spent hammering on the anvil under the close scrutiny of your master, you have learnt 
          that it is possible to create amazing things, but it is only by putting your heart into your work that you can 
          succeed in creating a masterpiece.
        `,
            skillProficiencies: [SkillEnum.Insight, SkillEnum.Intimidation],
            toolProficiency: "Smith's tools",
            distinctiveFeatures: ["Proud", "Wilful"]
        },
        {
            name: "Healing Hands",
            description: `
          You have long served on a trading boat from Esgaroth, first leaving the Long Lake when you were very young. 
          Once, staying for months in a distant town in Dorwinion, waiting for a caravan from the East to arrive, you fell 
          victim to a foreign sickness, and were succoured by a lady speaking a strange tongue. She saved your life, and 
          taught you how to save others in time of need.
        `,
            skillProficiencies: [SkillEnum.Medicine, SkillEnum.Travel],
            toolProficiency: "Herbalism kit or water vehicles",
            distinctiveFeatures: ["Bold", "Generous"]
        },
        {
            name: "Gifted Senses",
            description: `
          You are the first to notice when things are out of place, or just don't smell or sound right. Others have learned
          to pay attention to your intuition, and invite you to help them, since you may see something they missed. 
          Little did you realise how far from home this would carry you.
        `,
            skillProficiencies: [SkillEnum.Investigation, SkillEnum.Perception],
            toolProficiency: "Brewer's supplies or cook's utensils",
            distinctiveFeatures: ["Generous", "Wilful"]
        },
        {
            name: "A Patient Hunter",
            description: `
          Faithful to your ancestors' heritage, your family never embraced the ways of the merchants of Esgaroth, and when
          you were a child, your father spent long days hunting. For a few years after the death of the Dragon, hunting was 
          a dangerous trade, bearing little fruit, as the land was still recovering from the Desolation of Smaug. But now the 
          land is again blooming with every new spring, and birds and animals alike are returning in ever greater numbers.
        `,
            skillProficiencies: [SkillEnum.Hunting, SkillEnum.Nature],
            toolProficiency: "Leatherworker's tools or woodcarver's tools",
            distinctiveFeatures: ["Bold", "Fierce"]
        },
        {
            name: "Wordweaver",
            description: `
          King Bard earned his throne by accomplishing a feat deemed unthinkable by most, setting an example for generations 
          to come. But it is another deed that caught your interest and fired your imagination: that of the witty halfling who 
          crossed words with Smaug the Golden in his lair. While you yourself do not expect to ever see a living Dragon, you 
          look forward to your chance to win renown with your cunning.
        `,
            skillProficiencies: [SkillEnum.Deception, SkillEnum.Riddle],
            toolProficiency: "A gaming set of your choice",
            distinctiveFeatures: ["Eager", "Fair-spoken"]
        }
    ]
};