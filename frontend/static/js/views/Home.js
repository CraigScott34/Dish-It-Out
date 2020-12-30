import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }
async getHtml() {
    return `
        <h2>Leave the planning to us.</h2>
        <p>
            Are you the chef in your home?  Have you lost all inspiration to plan meals for the week?
            Well you're in good hands.  Dish It Out is a free meal planning application that will provide you with different meal ideas
            each week.  All you have to do is tell us how many meals you want and we will take over from there.
            Besides, you've got bigger fish to fry now.</p>
        `;
}
}