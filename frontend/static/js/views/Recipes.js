import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Recipes");
    }
async getHtml() {
    return `
        <h2>Recipes</h2>
        <p id="recipeNote">
            This is a list of all the recipes we have in the books.  Maybe you want to control your own destiny.  Go ahead.
            </p>
            <br>
            <br>
            <div id="recipeContainer">
    <a id="recipeLink" href='https://www.thecountrycook.net/creamy-cheesy-chicken-spaghetti' target ="_blank">Chicken Spaghetti</a>
    <br><br>
    <a id="recipeLink" href='https://vikalinka.com/best-beef-stroganoff' target ="_blank">Beef Stroganoff</a>
    <br><br>
    <a id="recipeLink" href='https://www.cookingclassy.com/chicken-marsala' target ="_blank">Chicken Marsala</a>
    <br><br>
    <a id="recipeLink" href='https://www.thediaryofarealhousewife.com/bacon-cheeseburger-quesadilla' target ="_blank">Cheeseburger Quesadilla</a>
    <br><br>
    <a id="recipeLink" href='https://www.savorytooth.com/keto-chicken-salad' target ="_blank">Bacon Avocado Salad</a>
    <br><br>
    <a id="recipeLink" href='https://www.chelseasmessyapron.com/foil-pack-creamy-salsa-verde-chicken-rice-veggies/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed:+ChelseasMessyApron+(Chelsea%27s+Messy+Apron)' target ="_blank">Verde Foil-Wrapped Chicken</a>
    <br><br>
    <a id="recipeLink" href='https://www.foodiecrush.com/stuffed-bell-peppers-recipe' target ="_blank">Stuffed Peppers</a>
    <br><br>
    <a id="recipeLink" href='https://heygrillhey.com/chicago-hot-dog' target ="_blank">Chicago Dogs</a>
    <br><br>
    <a id="recipeLink" href='https://www.yellowblissroad.com/ground-beef-enchiladas/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1008399684_45712764_267081' target ="_blank">Beef Enchiladas</a>
    <br><br>

    </div>
        `;
}
}
