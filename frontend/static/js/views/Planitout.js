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
            <div id="weekList">
            <br>
            <input type="checkbox" name="sunCheck" id="sunCheck" class="custom"/>
            <label for="sunCheck" class="chkbox">Sunday</label>
            <div>
            <h3 id="menuDay">Sunday's Menu: <h3>
            <a href = "" id="sunMeal">Result</a>
            </div>
            <input type="checkbox" name="monCheck" id="monCheck" class="custom"/>
            <label for="monCheck" class="chkbox">Monday</label>
            <div>
            <h3 id="menuDay">Monday's Menu: <h3>
            <a href = "" id="monMeal">Result</a>
            </div>
            <input type="checkbox" name="tuesCheck" id="tuesCheck" class="custom"/>
            <label for="tuesCheck" class="chkbox">Tuesday</label>
            <div>
            <h3 id="menuDay">Tuesday's Menu: <h3>
            <a href = "" id="tuesMeal">Result</a>
            </div>
            <input type="checkbox" name="wedCheck" id="wedCheck" class="custom"/>
            <label for="wedCheck" class="chkbox">Wednesday</label>
            <div>
            <h3 id="menuDay">Wednesday's Menu: <h3>
            <a href = "" id="wedMeal">Result</a>
            </div>
            <input type="checkbox" name="thursCheck" id="thursCheck" class="custom"/>
            <label for="thursCheck" class="chkbox">Thursday</label>
            <div>
            <h3 id="menuDay">Thursday's Menu: <h3>
            <a href = "" id="thursMeal">Result</a>
            </div>
            <input type="checkbox" name="friCheck" id="friCheck" class="custom"/>
            <label for="friCheck" class="chkbox">Friday</label>
            <div>
            <h3 id="menuDay">Friday's Menu: <h3>
            <a href = "" id="friMeal">Result</a>
            </div>
            <input type="checkbox" name="satCheck" id="satCheck" class="custom"/>
            <label for="satCheck" class="chkbox">Saturday</label>
            <div>
            <h3 id="menuDay">Saturday's Menu: <h3>
            <a href = "" id="satMeal">Result</a>
            </div>
            </div>
        <br>
        <div>
        <br>
        <button id="submitButton">Submit</button>
        </div>
        </section>
        `;
}
}