import { NavLink } from "react-router-dom";
import { randomElement, toCommaSeparatedString, upper } from "../Utils";
import { Dropdown, Image, Radio, Space } from "antd";
import { CALLINGS } from "../Routes/Calling";
import { useContext } from "react";
import { CharacterContext } from "../Main";

function CallingInfo(props: { calling: string }) {
  const c = CALLINGS.find((c) => c.id === props.calling);
  const character = useContext(CharacterContext);

  // Info about what cultures are
  if (props.calling == "info") {
    return (
      <div className="info">
        <h1>Callings of Middle-earth</h1>
        Leaving home and setting off on the road is a courageous choice, often considered reckless by a hero’s family and folk. Adventurers leave behind all they know and love, so what is it that
        motivates and pushes them towards danger and the unknown? Whatever it is that motivates the Player-heroes, it must be something that for them is worth the risk of crossing swords with the
        curved blades of Orcs. In The Lord of the Rings Roleplay- ing, this motivation is represented by an adventurer’s calling. Each calling provides a variety of special features, such as a
        Captain’s mastery of weapons and armour, and is capped at ten levels, an appropriate limit for adventuring in Middle-earth. At low levels, all callings give only two or three features, but as
        a Player-hero advances in level they gain more and their existing features often improve. Each entry in this chapter includes a
      </div>
    );
  }

  if (!c) {
    return <h1>Calling not found</h1>;
  }

  // Specific culture info
  return (
    <div className="info" id={c.id}>
      {/* Name */}
      <h1>{c.name}</h1>
      {/* Image */}
      <Image src={c.imageUrl} />
      <br />
      {/* Description */}
      <h2>Description</h2>
      <i>{c.description}</i>
      <br />
      <p>{c.longDescription}</p>
      {/* Features */}
      <h2>Features</h2>
      <table className="center">
        <tr>
          {/* Primary Abilities */}
          <th>Primary Abilities</th>
          <td>
            {c.primaryAbilities.map((a) => (
              <p>{upper(a)}</p>
            ))}
          </td>
        </tr>
        <tr>
          {/* Skill Proficiencies */}
          <th>Skill Proficiencies</th>
          <td>
            {c.skillProficiencies.map((a) => (
              <p>{upper(a)}</p>
            ))}
          </td>
        </tr>
        <tr>
          {/* Armour Proficiencies */}
          <th>Armour Proficiencies</th>
          <td>
            {c.armourProficiencies.map((a) => (
              <p>
                {a.light && "Light"}, {a.medium && "Medium"}, {a.heavy && "Heavy"}, {a.shields && "Shields"}
              </p>
            ))}
          </td>
        </tr>
        <tr>
          {/* Weapon Proficiencies */}
          <th>Weapon Proficiencies</th>
          <td>
            {c.weaponProficiencies.map((a) => (
              <p>
                {a.simple && "Simple"}, {a.martial && "Martial"}
              </p>
            ))}
          </td>
        </tr>
        <tr>
          {/* Hit Die (1st Level) */}
          <th>Hit Die (1st Level)</th>
          <td>
            <p>
              d{c.hitDieFirstLevel.base} + ({upper(c.hitDieFirstLevel.abilityModifier)})
            </p>
          </td>
        </tr>
        <tr>
          {/* Hit Die (Later Levels) */}
          <th>Hit Die (Higher Levels)</th>
          <td>
            {c.hitDieHigherLevels.base} + ({upper(c.hitDieHigherLevels.abilityModifier)})
            <br />
            or
            <br />d{c.hitDieHigherLevels.die} + ({upper(c.hitDieHigherLevels.abilityModifier)})
          </td>
        </tr>
        <tr>
          {/* Shadow Path */}
          <th>Shadow Path</th>
          <td>{c.shadowPath}</td>
        </tr>
        <tr>
          {/* Base Features */}
          <th>Base Features</th>
          {c.baseFeatures.map((f) => (
            <p>{f}</p>
          ))}
        </tr>
      </table>
      <NavLink
        to="/statistics"
        onClick={() => {
          character.Calling = c;
        }}
      >
        <button>Select "{c.name}"</button>
      </NavLink>
      {/* Equipment */}
      {/* <h2>Equipment</h2>
      <h3>Choice 1</h3>
      <Radio.Group>
        <Space direction="vertical">
          {c.equipmentChoice1?.map((e) => (
            <Radio key={e.name} value={e.name}>
              {e.name}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <h3>Choice 2</h3>
      <Radio.Group>
        <Space direction="vertical">
          {c.equipmentChoice2?.map((e) => (
            <Radio key={e.name} value={e.name}>
              {e.name}
            </Radio>
          ))}
        </Space>
      </Radio.Group> */}
    </div>
  );
}

export default CallingInfo;
