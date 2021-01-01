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
// Test each route for potential match
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

//console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})

let output = document.getElementById("randomResult");

//meals
let meals = [
{entree: 'Chicken Spaghetti', link: 'https://www.thecountrycook.net/creamy-cheesy-chicken-spaghetti'}, 
{entree: 'Beef Strogonoff', link: 'https://vikalinka.com/best-beef-stroganoff'}, 
{entree: 'Chicken Marsala', link: 'https://www.cookingclassy.com/chicken-marsala'}, 
{entree: 'Cheeseburger Quesadilla', link: 'https://www.thediaryofarealhousewife.com/bacon-cheeseburger-quesadilla'}, 
{entree: 'Bacon Avocado Salad', link: 'https://www.savorytooth.com/keto-chicken-salad'}, 
{entree: 'Verde Foil-Wrapped Chicken', link: 'https://www.chelseasmessyapron.com/foil-pack-creamy-salsa-verde-chicken-rice-veggies/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed:+ChelseasMessyApron+(Chelsea%27s+Messy+Apron)'},
];
     //CREATE HYPERLINK VALUES FOR RESULTS/MEALS ARRAY
    meals.forEach(function(item) {
        let entree = entree.textContent = item.entree;
        let link = link.textContent = item.link;
        link.href = item.link;
    });
        //END HYPERLINK VALUES
//RANDOM GENERATOR
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}
//END RANDOM GENERATOR

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    let output = document.getElementById("randomResult");
    let btnRandom = document.getElementById("submitButton");
console.log("Result:", btnRandom);
btnRandom.addEventListener("click", function() {
    let index = getRandomNumber(0, meals.length-1);
    output.innerHTML = meals[index];
})
  });
 