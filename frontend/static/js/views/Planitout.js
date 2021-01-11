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
        <ul id="steps">
        <li>Step 1: Choose the days of the week you need a recipe.</li>
        <li>Step 2: Click Submit.</li>
        <li>Step 3: Click the result to be taken to the recipe.</li>
        </ul>
        </p>
        <br>
        <p id="note">
        <u>Note:</u> If you don't like the entree selected on a day, leave it checked.  Uncheck all other days and click submit.  All checked recipes will be generated again!
        </p>
            <div id="weekList">
            <div id="weekChk">
            <div class="chkContainer">
                <input type="checkbox" name="sunCheck" id="sunCheck" class="custom"/>
                <label for="sunCheck" class="chkbox">Sunday</label>
            </div>
            <div class="chkContainer">
                <input type="checkbox" name="monCheck" id="monCheck" class="custom"/>
                <label for="monCheck" class="chkbox">Monday</label>
            </div>
            <div class="chkContainer">
                <input type="checkbox" name="tuesCheck" id="tuesCheck" class="custom"/>
                <label for="tuesCheck" class="chkbox">Tuesday</label>
            </div>
            <div class="chkContainer">
                <input type="checkbox" name="wedCheck" id="wedCheck" class="custom"/>
                <label for="wedCheck" class="chkbox">Wednesday</label>
            </div>
            <div class="chkContainer">
                <input type="checkbox" name="thursCheck" id="thursCheck" class="custom"/>
                <label for="thursCheck" class="chkbox">Thursday</label>
            </div>
            <div class="chkContainer">
                <input type="checkbox" name="friCheck" id="friCheck" class="custom"/>
                <label for="friCheck" class="chkbox">Friday</label>
            </div>
            <div class="chkContainer">
                <input type="checkbox" name="satCheck" id="satCheck" class="custom"/>
                <label for="satCheck" class="chkbox">Saturday</label>
            </div>
            </div>
            </div>

            <div id="menuContainer">
        <div>
            <div class="menuDay">Sunday's Menu: </div>
            <a href = "" id="sunMeal"></a>
        </div>
        <div>
            <div class="menuDay">Monday's Menu: </div>
            <a href = "" id="monMeal"></a>
        </div>
        <div>
            <div class="menuDay">Tuesday's Menu: </div>
            <a href = "" id="tuesMeal"></a>
        </div>
        <div>
            <div class="menuDay">Wednesday's Menu: </div>
            <a href = "" id="wedMeal"></a>
        </div>
        <div>
            <div class="menuDay">Thursday's Menu: </div>
            <a href = "" id="thursMeal"></a>
        </div>
        <div>
            <div class="menuDay">Friday's Menu: </div>
            <a href = "" id="friMeal"></a>
        </div>
        <div>
            <div class="menuDay">Saturday's Menu: </div>
            <a href = "" id="satMeal"></a>
        </div>
            </div>

            <div id="subButton">
            <br>
            <button id="submitButton">Submit</button>
            </div>
            </section>

        `;
}
}