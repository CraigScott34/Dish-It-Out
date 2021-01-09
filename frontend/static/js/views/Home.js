import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }
async getHtml() {
    return `
        <h2>Leave the planning to us!</h2>
        <p id="catch">
            Are you the chef in your home? <br>  
            Have you lost all inspiration to plan meals for the week? <br>
            Well, you're in good hands!<br>
        </p>
        <p id="about"> 
            Dish It Out is a <u>free</u> meal planning application that will provide you with different meal ideas
            each week.  All you have to do is tell us how many meals you want and we will take over from there.
            Besides, you've got bigger fish to fry now.</p>
        `;
}
}