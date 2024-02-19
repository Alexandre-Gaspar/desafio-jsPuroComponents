// import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
    return /*html*/`
        <article class="card__front-back">
            ${CardGame()}
            ${CardGame()}
        </article>
    `
}

export default CardFrontBack;