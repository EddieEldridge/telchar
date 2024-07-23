import { NavLink } from "react-router-dom";
import { CULTURES } from "../Routes/Culture";
import { randomElement, toCommaSeparatedString, upper } from "../Utils/Utils";
import { Button, Image } from "antd";

function Template(props: { culture: string }) {
  const c = CULTURES.find((c) => c.id === props.culture);

  if (!c) {
    return <h1>Culture not found</h1>;
  }

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
            <Button>Select "{b.name}"</Button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Template;
