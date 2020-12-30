import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }
async getHtml() {
    return `
    <section id="Contact">
        <h2>Contact Us!</h2>
        <p>
            This is the contact page.  Tell us what you think.</p>
    </section>
        `;
}
}