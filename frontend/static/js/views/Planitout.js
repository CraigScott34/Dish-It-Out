import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Plan it Out");
    }
async getHtml() {
    return `
    <section id="Plan-it-out">
        <h2 id="planItOut">Plan it out</h2>
        <p>
        It's simple, really.  Start by checking which days of the week you need to plan for.  Then let us work our magic.
        Don't like what we picked for Thursday?  No problem, just click "try again."  We won't be offended.
        </p>
            <ul id="weekList">
            <li>Sunday</li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            </ul>
        <br>
        <div>
        <button id="submitButton">Submit</button>
        <br><br>
        <h3 id="randomResult">result</h3>
        </div>
        </section>
        `;
}
}