import { Culture } from "../../Types/Culture";
import { AbilityEnum, Languages, SkillEnum, StandardOfLiving } from "../../Types/Generic";

export const ELF: Culture = {
    id: "elf",
    imageUrl: "https://i.imgur.com/GDZzx2t.png",
    name: "Elves of Lindon",
    description: "The Fair Folk of Eriador have dwelt in the Westlands since before the drowning of Beleriand. They are all members of the Firstborn, displaying a wisdom beyond the reach of Men. They rarely leave their sanctuaries in the Grey Havens, for these are their fading years. More and more leave Middle-earth sailing West on grey ships, never to return. Those who still remain live mostly along the western coasts, where once were found great kingdoms of their kindred. All Elves are endowed with tremendous vitality and great vigour. They are not subject to illness or old age, and thus can dwell within the circles of the world until they choose to leave it, or are slain. In battle, most Elves carry bows and spears. Many wield swords too, but by ancient tradition some still favour axes.",
    typicalNames: {
        female: ["Aranel", "Arbereth", "Berúthiel", "Baraniel", "Calanril", "Celenneth", "Elnîth", "Eraniel", "Finduilas", "Gilraen", "Gilraeth", "Gloredhel", "Idril", "Ioreth", "Ivorwen", "Lôrwend", "Lothíriel", "Luindîs", "Meneloth", "Moriel", "Morwen", "Narieth", "Narniel", "Orothêl", "Tarandîs"],
        male: ["Amras", "Aredhel", "Beleganor", "Belegon", "Calanhir", "Carmagor", "Dagorhir", "Durandir", "Edrahil", "Ellahir", "Fincalan", "Fuindor", "Galdagor", "Galdor", "Hallas", "Hirimlad", "Ithildir", "Lascalan", "Linaith", "Mablin", "Malanor", "Nauros", "Orgalad", "Pelegorn", "Sargon"]
    },
    culturalTraits: {
        abilityScoreIncrease: [
            {
                name: AbilityEnum.Wisdom,
                value: 2,
            },
        ],
        adventuringAge: { min: 100, max: 500 },
        size: "Medium",
        heightRange: { min: 72, max: 84 },  // Assuming height in inches (6 feet = 72 inches)
        speed: 30,
        weaponProficiencies: ["bows", "spears", "swords", "axes"],
        toolProficiencies: [],
        skillProficiencies: [SkillEnum.Perception],
        miscProficiencies: ["Elvish Dreams: Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflex- ive through years of practice. After resting in this way, you gain the same benefit as from 8 hours of sleep.", "Elven-Skill: By virtue of their birthright, Elves are capable of reaching levels of finesse unattainable by mortals. If you are not miserable and make an ability check that lets you add your proficiency bonus, you can obtain a magical success (see page 20). You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.", "Immortal Folk: You are immune to ageing and disease.", "Keen Eyes: Keen Eyes of the Elves. You have proficiency in the Percep- tion skill, and dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight."],
        languages: [Languages.Westron, Languages.Sindarin],
        standardOfLiving: StandardOfLiving.Frugal,
        subculture: ["Elves of Lindon"]
    },
    chosenBackground: undefined,
    availableBackgrounds: [
        {
            name: "The Call of the Sea",
            description: "No Elf could live by the Sea and not be moved by it. The crashing of waves is a second heartbeat to you; but you do not want to depart Middle-earth yet, for you feel that you have some purpose to fulfil before you sail away. You are not certain what lies in your future, but you are committed to finding out.",
            skillProficiencies: [SkillEnum.Nature, SkillEnum.OldLore, SkillEnum.Performance],
            toolProficiency: "A musical instrument of your choice",
            distinctiveFeatures: ["Patient", "Subtle"]
        },
        {
            name: "Maker of Ships",
            description: "You studied your chosen craft under the expert shipbuilders of Círdan; but though the long firth of Lune stirs your heart, you feel the world is wide, and you have lived your life on its edge. Perhaps it is time to go where no ship can take you..",
            skillProficiencies: [SkillEnum.Acrobatics, SkillEnum.Athletics],
            toolProficiency: "Carpenter's tools",
            distinctiveFeatures: ["Eager", "Lordly"]
        },
        {
            name: "A Merchant Family",
            description: "Elven ships still sometimes sail to Dol Amroth and Pelargir to trade with the Men of Gondor. You have traded with mortal folk for years, but the Corsairs of Umbar grow more numerous and the lords of Gondor more cautious. Now ships seldom sail south, and you have decided to travel elsewhere.",
            skillProficiencies: [SkillEnum.Persuasion, SkillEnum.Travel],
            toolProficiency: "Water vehicles",
            distinctiveFeatures: ["Fair-spoken", "Lordly"]
        },
        {
            name: "Sky-Watcher",
            description: "When aboard ship, you study the skies and predict the weather. With much practice, you became adept at this, and can detect a storm brewing hundreds of miles away. Now, when you are at home in the Havens, you notice strange movements in the air coming from the south-east, where lies Mordor, the Land of Shadows.",
            skillProficiencies: [SkillEnum.Explore, SkillEnum.Nature],
            toolProficiency: "Navigator's tools",
            distinctiveFeatures: ["Patient", "Wary"]
        },
        {
            name: "Tower Guard",
            description: "Your folk guards the Tower Hills, lest the Enemy benefit from great secrets hidden there. Sometimes, you have been tasked with keeping the boldest of the little folk away from the towers, and by Mithrandir's advice, you keep a secret watch on their border. You know not what destiny these Hobbits have, but a fondness for them grows in your heart.",
            skillProficiencies: [SkillEnum.Investigation, SkillEnum.Stealth],
            toolProficiency: "Cartographer's tools",
            distinctiveFeatures: ["Subtle", "Wary"]
        },
        {
            name: "Visitor to the Mountains",
            description: "Not content to stay in your homeland, you were drawn to the Blue Mountains and its folk. Most Dwarves want nothing to do with an overcurious Elf, but a few taught you enough for you to appreciate their skills and love for beautiful objects. You wonder what you could learn in other lands, and now prepare for a longer journey.",
            skillProficiencies: [SkillEnum.Insight, SkillEnum.OldLore],
            toolProficiency: "Jeweller's tools or smith's tools",
            distinctiveFeatures: ["Fair-spoken", "Inquisitive"]
        }
    ]
};