import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Recipes");
    }
async getHtml() {
    return `
        <h2>Recipes</h2>
        <p>
            This is a list of all the recipes we have in the books.  Maybe you want to control your own destiny.  Go ahead.
            </p>
           
        `;
}
}
pictures: [
    {url: "https://s23527.pcdn.co/wp-content/uploads/2018/11/food-3409682_1920-745x497.jpg.optimal.jpg",
    title:"Food Picture"
},
{
    url:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "sunglass doggo"
  },
]
