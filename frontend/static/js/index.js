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

console.log(match.route.view());
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

//RANDOM GENERATOR
let btnRandom = document.getElementById("submitButton");
let output = document.getElementById("randomResult");

//meals
let meals = ['Chicken Spaghetti', 'Beef Strogonoff', 'Chicken Marsala', 'Cheeseburger Quesadilla', 'Bacon Avocado Salad', 'Verde Foil-Wrapped Chicken'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener("click", function() {
    let index = getRandomNumber(0, meals.length-1);
    output.innerHTML = meals[index];
})
//END RANDOM GENERATOR