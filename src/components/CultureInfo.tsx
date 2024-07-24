import { NavLink } from "react-router-dom";
import { CULTURES } from "../Routes/Culture";
import { randomElement, toCommaSeparatedString, upper } from "../Utils/Utils";
import { Image } from "antd";

function CultureInfo(props: { culture: string }) {
  const c = CULTURES.find((c) => c.id === props.culture);

  // Info about what cultures are
  if (props.culture == "info") {
    return (
      <div className="cultureInfo">
        <h1>Cultures of Middle-earth</h1>
        In Middle-earth, the culture to which an adventurer belongs often defines them more profoundly than simply in terms of customs and traditions. For this reason, the most important choice that
        players must make is to select the culture of origin of their adventurers. Each heroic culture's writeup is composed along the same format of presentation, illustrated in the following
        paragraphs.
        <h2>Description</h2>
        <p>This section offers a number of details defining the appearance of a typical hero belonging to that culture and includes information about their martial tradition.</p>
        <h2>Typical Names</h2>
        <p>
          Every name in The Lord of the Rings and The Hobbit has been carefully crafted, building upon solid linguistic foundations, and represents a precise cultural influence. The native lan- guage
          of every character-type presented in this chapter has been identified, and a list of personal names appropriate to each culture is provided.
        </p>
        <h2>Cultural Traits</h2>
        <p>
          This section provides a description of each culture's peculiar features — traits that are common to all members of that culture. This includes the languages known by every character type,
          the age range of the average adventurer, and a rough indication of the starting resources available to a member of that culture, in the form of a standard of living (see Chapter 4:
          Equipment, for more information on a Player-hero's standard of living).
        </p>
        <h2>Backgrounds</h2>
        <p>
          Backgrounds reveal something about the origins of the Play- er-heroes, helping players in visualising their previous expe- riences and identity. This section includes six different back-
          grounds to choose from. Each background provides a Player-hero with two skill proficiencies, a tool proficiency, and two distinctive features. All Player-heroes start the game with the tools
          their background grants proficiency with, in addition to their equipment.
        </p>
        <p>
          Players may want to tweak some of the features of a back- ground so it better fits their hero. To customise a background, a player can replace one or both distinctive features with any
          other, and choose any two skills and a tool proficiency.
        </p>
      </div>
    );
  }

  if (!c) {
    // Culture not found
    return <h1>Culture not found</h1>;
  }

  // Specific culture info
  return (
    <div className="cultureInfo" id={c.id}>
      {/* Name */}
      <h1>{c.name}</h1>
      {/* Image */}
      <Image src={c.imageUrl} />
      <br />
      {/* Description */}
      <h2>Description</h2>
      <i>{c.description}</i>
      {/* Typical Names */}
      <h2>Typical Names</h2>
      <h3>Female</h3>
      <p>
        {randomElement(c.typicalNames.female)}, {randomElement(c.typicalNames.female)}, {randomElement(c.typicalNames.female)}, {randomElement(c.typicalNames.female)},{" "}
        {randomElement(c.typicalNames.female)}
      </p>
      <h3>Male</h3>
      <p>
        {randomElement(c.typicalNames.male)}, {randomElement(c.typicalNames.male)}, {randomElement(c.typicalNames.male)}, {randomElement(c.typicalNames.male)}, {randomElement(c.typicalNames.male)}
      </p>
      {/* Cultural Traits */}
      <hr />
      <h2>Cultural Traits</h2>
      <table className="center">
        <tr>
          {/* Ability Score Increase */}
          <th>Ability Score Increase</th>
          <td>
            {c.culturalTraits.abilityScoreIncrease.map((a) => (
              <p>
                {upper(a.name)} +{a.value}
              </p>
            ))}
          </td>
        </tr>
        {/* Adventuring Age */}
        <tr>
          <th>Adventuring Age</th>
          <td>
            {" "}
            {c.culturalTraits.adventuringAge.min} to {c.culturalTraits.adventuringAge.max} years
          </td>
        </tr>
        {/* Height Range */}
        <tr>
          <th>Height Range</th>
          <td>
            {c.culturalTraits.heightRange.min} to {c.culturalTraits.heightRange.max} ft.
          </td>
        </tr>
        {/* Speed */}
        <tr>
          <th>Speed</th>
          <td>{c.culturalTraits.speed} ft.</td>
        </tr>
        {/* Weapon Proficiencies */}
        <tr>
          <th>Weapon Proficiencies</th>
          <td>{toCommaSeparatedString(c.culturalTraits.weaponProficiencies)}</td>
        </tr>
        {/* Tool Proficiencies */}
        <tr>
          <th>Weapon Proficiencies</th>
          <td>{toCommaSeparatedString(c.culturalTraits.toolProficiencies)}</td>
        </tr>
        {/* Misc. Proficiencies */}
        <tr>
          <th>Misc. Proficiencies</th>
          <td>{toCommaSeparatedString(c.culturalTraits.miscProficiencies)}</td>
        </tr>
        {/* Languages */}
        <tr>
          <th>Languages</th>
          <td>{toCommaSeparatedString(c.culturalTraits.languages)}</td>
        </tr>
        {/* Standard of Living */}
        <tr>
          <th>Standard of Living</th>
          <td>{c.culturalTraits.standardOfLiving}</td>
        </tr>
      </table>
      {/* Backgrounds */}
      <h2>Backgrounds</h2>
      {c.backgrounds.map((b) => (
        <div>
          <hr />
          <h3>{b.name}</h3>
          <p>{b.description}</p>
          <h4>Skill Proficiencies</h4>
          <p>{toCommaSeparatedString(b.skillProficiencies)}</p>
          <h4>Tool Proficiency</h4>
          <p>{b.toolProficiency}</p>
          <h4>Distinctive Features</h4>
          <p>{toCommaSeparatedString(b.distinctiveFeatures)}</p>
          {/* Proceed Button */}
          <NavLink to="/calling">
            <button>Select "{b.name}"</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default CultureInfo;
