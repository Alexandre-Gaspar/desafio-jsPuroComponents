import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";


const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(1);

//isertAdjacentHTML é usado para inserir
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);