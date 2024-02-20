// import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card__front-back">
            ${CardGame()}
            ${CardGame("javascript", "Logo do javscript")}
        </article>
    `
}

export default CardFrontBack;