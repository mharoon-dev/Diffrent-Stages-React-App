import Stages from "./Stages/Stages.js";
import Text from "./Text/Text.js";
import Buttons from "./Buttons/Buttons.js";

export default function DiffrentStages() {
  return (
    <div
      className="container w-50 d-flex flex-column justify-content-around align-items-center"
      style={{
        backgroundColor: "lightgrey",
        border: "2px solid black",
        height: "40vh",
      }}
    >
      <div className="row d-flex flex-column justify-content-around align-items-center w-75">
        <Stages />
      </div>

      <Text />
      <Buttons />
    </div>
  );
}
