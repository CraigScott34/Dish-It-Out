import Home from "./views/Home.js";
import Planitout from "./views/Planitout.js";
import Recipes from "./views/Recipes.js";
import Contact from "./views/Contact.js";
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/planitout", view: Planitout },
        { path: "/recipes", view: Recipes },
        { path: "/contact", view: Contact },
    ];

// TEST EACH ROUTE FOR POTENTIAL MATCH
const potentialMatches = routes.map(route => {
    return {
        route: route,
        isMatch: location.pathname === route.path
    }
})
let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
if (!match) {
    match = {
        route: routes[0],
        isMatch: true
    };
}
const view = new match.route.view();
document.querySelector("#app").innerHTML = await view.getHtml();
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
        if (e.target.matches("[data-link='pitOut']")){
            setTimeout(() => {  
            let btnRandom = document.getElementById("submitButton");
            console.log(btnRandom)
            btnRandom.addEventListener("click",  function(){
                e.preventDefault();
                whatsChecked();
            })
            },1000);            
    }
    })    
    router();
})

//ARRAY OF ENTREES AKA ENTARRAY
let meals = [
{entree: 'Chicken Spaghetti', link: 'https://www.thecountrycook.net/creamy-cheesy-chicken-spaghetti'}, 
{entree: 'Beef Stroganoff', link: 'https://vikalinka.com/best-beef-stroganoff'}, 
{entree: 'Chicken Marsala', link: 'https://www.cookingclassy.com/chicken-marsala'}, 
{entree: 'Cheeseburger Quesadilla', link: 'https://www.thediaryofarealhousewife.com/bacon-cheeseburger-quesadilla'}, 
{entree: 'Bacon Avocado Salad', link: 'https://www.savorytooth.com/keto-chicken-salad'}, 
{entree: 'Verde Foil-Wrapped Chicken', link: 'https://www.chelseasmessyapron.com/foil-pack-creamy-salsa-verde-chicken-rice-veggies/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed:+ChelseasMessyApron+(Chelsea%27s+Messy+Apron)'},
{entree: 'Stuffed Peppers', link: 'https://www.foodiecrush.com/stuffed-bell-peppers-recipe'}, 
{entree: 'Chicago Dogs', link: 'https://heygrillhey.com/chicago-hot-dog'}, 
{entree: 'Beef Enchiladas', link: 'https://www.yellowblissroad.com/ground-beef-enchiladas/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=1008399684_45712764_267081'},
{entree: 'Cajun Shrimp Pasta', link: 'https://selfproclaimedfoodie.com/cajun-shrimp-pasta/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=891996326_34955876_158220'}, 
{entree: 'Beer Braised Brats', link: 'https://www.craftbeering.com/beer-brats-recipe'}, 
{entree: 'Caprese Chicken', link: 'https://thenovicechefblog.com/caprese-chicken'}, 
{entree: 'Chili', link: 'https://spaceshipsandlaserbeams.com/old-fashioned-chili-recipe/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_smartloop&utm_content=smartloop&utm_term=42415490'}, 
{entree: 'Shredded Beef Burritos', link: 'https://thatsdeelicious.com/mexican-shredded-beef'},
{entree: 'Blackened Salmon', link: 'https://www.eatwell101.com/blackened-salmon-recipe'},
{entree: 'Tortellini', link: 'https://juliasalbum.com/creamy-mozzarella-sausage-spinach-tomato-tortellini'},
{entree: 'Kielbasa Pasta', link: 'https://dinnersdishesanddesserts.com/one-pan-cheesy-sausage-pasta/?utm_content=buffera2f68&utm_medium=social&utm_source=pinterest.com&utm_campaign=buffer'},
{entree: 'Shrimp Fajitas', link: 'https://www.number-2-pencil.com/one-sheet-pan-shrimp-fajitas'},
{entree: 'Parmesan Crusted Tilapia', link: 'https://www.hoteatsandcoolreads.com/2011/10/whats-for-dinner-parmesan-crusted.html'},
];

//RANDOM GENERATOR
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
//END RANDOM GENERATOR

//FUNCTION TO RUN PER CHECKED ITEM
function isChecked(id) {
    let decider = document.getElementById(id);
    if (decider.checked){
        console.log(id + " is Checked");
        return true;
    }
    return false;
}
function whatsChecked() {
    if(isChecked("sunCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("sunMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
    if(isChecked("monCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("monMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
    if(isChecked("tuesCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("tuesMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
    if(isChecked("wedCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("wedMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
    if(isChecked("thursCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("thursMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
    if(isChecked("friCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("friMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
    if(isChecked("satCheck")){
        let index = getRandomNumber(0, meals.length-1);
        //OUTPUT ENTREE AS HYPERLINK
        let meal = document.getElementById("satMeal")
        meal.innerHTML = meals[index].entree;
        meal.href = meals[index].link;
        meal.setAttribute("target","_blank");
    }
}