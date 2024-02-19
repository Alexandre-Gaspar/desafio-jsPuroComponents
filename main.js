import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";
import ScoreBoard from "./src/objects/ScoreBoard";


const $root = document.querySelector("#root");

//isertAdjacentHTML é usado para inserir
$root.insertAdjacentHTML(
    "beforeend",
    `
    ${ScoreBoard()}
    ${BoardGame(2)}
    `
);