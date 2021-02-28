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
    <a class="recipeLink" href='https://www.thecountrycook.net/creamy-cheesy-chicken-spaghetti' target ="_blank">Chicken Spaghetti</a>
    <br><br>
    <a class="recipeLink" href='https://vikalinka.com/best-beef-stroganoff' target ="_blank">Beef Stroganoff</a>
    <br><br>
    <a class="recipeLink" href='https://www.cookingclassy.com/chicken-marsala' target ="_blank">Chicken Marsala</a>
    <br><br>
    <a class="recipeLink" href='https://www.thediaryofarealhousewife.com/bacon-cheeseburger-quesadilla' target ="_blank">Cheeseburger Quesadilla</a>
    <br><br>
    <a class="recipeLink" href='https://www.savorytooth.com/keto-chicken-salad' target ="_blank">Bacon Avocado Salad</a>
    <br><br>
    <a class="recipeLink" href='https://www.chelseasmessyapron.com/foil-pack-creamy-salsa-verde-chicken-rice-veggies/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed:+ChelseasMessyApron+(Chelsea%27s+Messy+Apron)' target ="_blank">Verde Foil-Wrapped Chicken</a>
    <br><br>
    <a class="recipeLink" href='https://www.foodiecrush.com/stuffed-bell-peppers-recipe' target ="_blank">Stuffed Peppers</a>
    <br><br>
    <a class="recipeLink" href='https://heygrillhey.com/chicago-hot-dog' target ="_blank">Chicago Dogs</a>
    <br><br>
    <a class="recipeLink" href='https://www.yellowblissroad.com/ground-beef-enchiladas/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1008399684_45712764_267081' target ="_blank">Beef Enchiladas</a>
    <br><br>
    <a class="recipeLink" href='https://selfproclaimedfoodie.com/cajun-shrimp-pasta/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=891996326_34955876_158220' target ="_blank">Cajun Shrimp Pasta</a>
    <br><br>
    <a class="recipeLink" href='https://www.craftbeering.com/beer-brats-recipe' target ="_blank">Beer Braised Brats</a>
    <br><br>
    <a class="recipeLink" href='https://thenovicechefblog.com/caprese-chicken' target ="_blank">Caprese Chicken</a>
    <br><br>
    <a class="recipeLink" href='https://spaceshipsandlaserbeams.com/old-fashioned-chili-recipe/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_smartloop&utm_content=smartloop&utm_term=42415490' target ="_blank">Chili</a>
    <br><br>
    <a class="recipeLink" href='https://thatsdeelicious.com/mexican-shredded-beef' target ="_blank">Shredded Beef Burritos</a>
    <br><br>
    <a class="recipeLink" href='https://www.eatwell101.com/blackened-salmon-recipe' target ="_blank">Blackened Salmon</a>
    <br><br>
    <a class="recipeLink" href='https://juliasalbum.com/creamy-mozzarella-sausage-spinach-tomato-tortellini' target ="_blank">Tortellini</a>
    <br><br>
    <a class="recipeLink" href='https://dinnersdishesanddesserts.com/one-pan-cheesy-sausage-pasta/?utm_content=buffera2f68&utm_medium=social&utm_source=pinterest.com&utm_campaign=buffer' target ="_blank">Kielbasa Pasta</a>
    <br><br>
    <a class="recipeLink" href='https://www.number-2-pencil.com/one-sheet-pan-shrimp-fajitas' target ="_blank">Shrimp Fajitas</a>
    <br><br>
    <a class="recipeLink" href='https://www.hoteatsandcoolreads.com/2011/10/whats-for-dinner-parmesan-crusted.html' target ="_blank">Parmesan Crusted Tilapia</a>
    <br><br>
    </div>
        `;
}
}
