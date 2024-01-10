let news = [
  {
    headLine: "Watch Hesh landing on the moon",
    summary: "He landed with his superjet",
  },
  {
    headline: "Watch Hesh skydiving on mars",
    summary: "did 500 spins and a flip during the skydive",
  },
];

console.log(news);

// present the news on the page

// select the div with news class

const newsContainer = document.querySelector(".news");
console.log("newsContainer", newsContainer);
const totalNumberOfNews = news.length;

let newsItems = "";

for (let i = 0; i < totalNumberOfNews; i++) {
  console.log(news[i].headline); // this loops only the headlines in the objects
  console.log(news[i].summary); // this loops only the summary
  // by only adding [i] it shows all the contents of the object

  newsItems +=
    `<div>
        <h2>${news[i].headline}</h2>
        <p>${news[i].summary}</p>
      </div>`;
}

newsContainer.innerHTML = newsItems;

function createShoppingList(shoppingList) {
  let myShoppingListItem = "";

  for (let i = 0; i < shoppingList.length; i++) {
    myShoppingListItem += `
      <div>
        <h2> ${shoppingList[i].name}</h2>
        <h3>${shoppingList[i].price}</h3>
      </div>
      `;
  }
  return myShoppingListItem;
}

let lineShoppingList = [
  {
    name: "orange juice",
    price: 200,
  },
  {
    name: "chocolate",
    price: 300,
  },
];
