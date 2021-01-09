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
        <p id="contactNote">
            Thanks for dropping by!  Now it's your turn to dish it out.  Use the form below to contact us.</p>
            <div class="container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last">

    <label for="reason">Reason</label>
    <select id="reason" name="reason">
      <option value="general">General Question</option>
      <option value="addRecipe">Use my Recipe!</option>
      <option value="comment">Comment</option>
      <option value="technical">Technical Issue</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="What's on your mind?" style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>
    </section>
        `;
}
}