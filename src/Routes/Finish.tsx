import { redirect } from "react-router-dom";
import "../Assets/css/General.css";
import { useContext } from "react";
import { CharacterContext } from "../Main";
import { upper } from "../Utils/Utils";
import { characterToFoundry } from "../Utils/Converter";
import { Logo } from "../temp/Logo";

function Finish() {
  const character = useContext(CharacterContext);

  if (!character) {
    redirect("/");
  }

  return (
    <>
      <div className="container">
        <main>
          {" "}
          {/* Navbar */}
          <aside className="nav">
            <Logo />
          </aside>
          {/* Content */}
          <div className="content">
            <h1>Your character</h1>
            <hr />
            <h2>Name</h2>
            <p>{character.name ?? "Not selected"}</p>
            <h2>Culture</h2>
            <p>{character.Culture?.name ?? "Not selected"}</p>
            <h2>Background</h2>
            <p>{character.Culture?.chosenBackground?.name ?? "Not selected"}</p>
            <h2>Calling</h2>
            <p>{character.Calling?.name ?? "Not selected"}</p>
            <h2>Statistics</h2>
            <table className="center">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Ability Score</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(character.Statistics ?? {}).map(([stat, value]) => (
                  <tr key={stat} className="stat">
                    <td>{upper(stat)}</td>
                    <td>{value.score ?? "Not selected"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => characterToFoundry(character)}>Save Character</button>
            {/* <DownloadButton fileContent={JSON.stringify(character)} fileName={character.name} /> */}
            <br></br>
            <br></br>
            <br></br>
          </div>
        </main>
      </div>
    </>
  );
}

export default Finish;
