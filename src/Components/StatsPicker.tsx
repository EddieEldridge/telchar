import { NavLink } from "react-router-dom";
import { log, upper } from "../Utils/Utils";
import { useContext, useState } from "react";
import { CharacterContext } from "../Main";
import { AbilityEnum } from "../Types/Generic";
import { Statistics } from "../Types/Statistics";

const MAX_POINTS = 10;
const MAX_STAT = 15;
const MIN_STAT = 8;
const INITIAL_VALUE = 8;

const INITIAL_STATS: Statistics = {
  [AbilityEnum.Strength]: {
    score: INITIAL_VALUE,
    modifier: 0,
  },
  [AbilityEnum.Dexterity]: {
    score: INITIAL_VALUE,
    modifier: 0,
  },
  [AbilityEnum.Constitution]: {
    score: INITIAL_VALUE,
    modifier: 0,
  },
  [AbilityEnum.Intelligence]: {
    score: INITIAL_VALUE,
    modifier: 0,
  },
  [AbilityEnum.Wisdom]: {
    score: INITIAL_VALUE,
    modifier: 0,
  },
  [AbilityEnum.Charisma]: {
    score: INITIAL_VALUE,
    modifier: 0,
  },
};

// Function to calculate the cost of a stat
const getStatCost = (statValue: number) => {
  if (statValue < 14) return statValue - 8;
  return 5 + (statValue - 13) * 2;
};

function StatsPicker() {
  const character = useContext(CharacterContext);
  const [stats, setStats] = useState<Statistics>(INITIAL_STATS);
  const [points, setPoints] = useState(MAX_POINTS);

  const handleStatChange = (stat: string, newValue: number) => {
    // Calculate the current cost and the new cost
    const currentStat = stats[stat as AbilityEnum];
    const currentCost = getStatCost(currentStat.score);
    const newCost = getStatCost(newValue);

    // Calculate the difference
    const costDifference = newCost - currentCost;

    // Check if there are enough points left
    if (points - costDifference >= 0 && newValue >= MIN_STAT && newValue <= MAX_STAT) {
      setStats({
        ...stats,
        [stat]: {
          ...currentStat,
          score: newValue,
        },
      });

      setPoints(points - costDifference);
    }
  };

  const getCharacterAbilityModifierString = (stat: string) => {
    const characterModifiers = character.Culture?.culturalTraits.abilityScoreIncrease;
    var modifier = "N/A";
    if (!characterModifiers) return modifier;
    characterModifiers.forEach((element) => {
      if (element.name === stat) {
        modifier = `+${element.value?.toString()}` ?? "N/A";
      }
    });
    return modifier;
  };

  const getCharacterAbilityModifier = (stat: string) => {
    const characterModifiers = character.Culture?.culturalTraits.abilityScoreIncrease;
    var modifier = 0;
    if (!characterModifiers) return modifier;
    characterModifiers.forEach((element) => {
      if (element.name === stat && element.value) {
        modifier = element.value;
      }
    });
    return modifier;
  };

  const getFinalScore = (stat: string): number => {
    const modifier = getCharacterAbilityModifier(stat);
    const score = stats[stat as AbilityEnum].score;
    return score + modifier;
  };

  return (
    <div className="info">
      <table className="center">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Culture Modifier</th>
            <th>Ability Score</th>
            <th>Final Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stats).map(([stat, value]) => (
            <tr key={stat} className="stat">
              <td>{upper(stat)}</td>
              <td>{getCharacterAbilityModifierString(stat)}</td>
              <td>
                <input onChange={(e) => handleStatChange(stat, parseInt(e.target.value))} type="number" id={stat} name={stat} min={MIN_STAT} max={MAX_STAT} value={stats[stat as AbilityEnum].score} />
              </td>
              <td>{getFinalScore(stat)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total Points Remaining: {points}</h2>
      <br />
      <NavLink
        to="/finish"
        onClick={() => {
          character.Statistics = stats;
        }}
      >
        <button>Finalize</button>
      </NavLink>
    </div>
  );
}

export default StatsPicker;
