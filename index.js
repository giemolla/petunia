import { arrowUp } from "./scripts/up.js";
import { mobileMenu } from "./scripts/menu.js";

arrowUp();
mobileMenu();

const navItems = [
	"kwiaty",
	"warzywa",
	"zioła",
	"sklep online",
	"sklepy stacjonarne",
	"porady",
	"aranzacje",
	"kontakt",
];

const categories = [
	{ name: "kwiaty", imageUrl: "./images/petunia.jpeg" },
	{ name: "warzywa", imageUrl: "./images/pomidor.jpg" },
	{ name: "zioła", imageUrl: "./images/bazylia.jpg" },
];

const articles = [
	{
		id: 1,
		title: "Kwiaty na zacieniony balkon",
		content:
			"Proin lacinia condimentum ipsum, iaculis viverra metus rhoncus eu. Etiam vitae sodales urna. Nulla consequat nulla sed nisl congue, vel suscipit mauris pharetra. Curabitur elit dolor, vehicula quis ligula in, porta feugiat lectus. In eget mi maximus, fermentum lorem eget, scelerisque ex. Sed viverra quam in libero congue fermentum...",
		imageUrl: "./images/cienie.jpg",
	},
	{
		id: 2,
		title: "Kwiaty na zacieniony balkon",
		content:
			"Proin lacinia condimentum ipsum, iaculis viverra metus rhoncus eu. Etiam vitae sodales urna. Nulla consequat nulla sed nisl congue, vel suscipit mauris pharetra. Curabitur elit dolor, vehicula quis ligula in, porta feugiat lectus. In eget mi maximus, fermentum lorem eget, scelerisque ex. Sed viverra quam in libero congue fermentum...",
		imageUrl: "./images/img_0008.jpg",
	},
	{
		id: 3,
		title: "Kwiaty na zacieniony balkon",
		content:
			"Proin lacinia condimentum ipsum, iaculis viverra metus rhoncus eu. Etiam vitae sodales urna. Nulla consequat nulla sed nisl congue, vel suscipit mauris pharetra. Curabitur elit dolor, vehicula quis ligula in, porta feugiat lectus. In eget mi maximus, fermentum lorem eget, scelerisque ex. Sed viverra quam in libero congue fermentum...",
		imageUrl: "./images/ziola-na-balkonie.jpg",
	},
];

const navList = document.querySelectorAll(".nav-list");
const categoriesNode = document.querySelector(".categories");
const articleSection = document.querySelector(".article-section");
const gallery = document.querySelector(".grid-gallery");

const categoryTemplate = function (item, i) {
	const { name } = item;
	return `
        <div class="category">
            <div class="category-pic pic-${i + 1}"></div>
            <button class="button primary-button">${name.toUpperCase()}</button>
        </div>
    `;
};

const articleTemplate = function (item, i) {
	const { title, content } = item;
	return `
        <div class="article">
            <h3 class="article-header">${title}</h3>
            <p class="article-text">${content}</p>
            <a href="#">Czytaj dalej ></a>
        </div>
        <div class="article-image-wrapper">
            <div class="article-image img-${i + 1}"></div>
        </div>
    `;
};

function generateRecurrentElements(array, elementType, cssClass, parent) {
	array.forEach((item, i) => {
		const recurrentElement = document.createElement(elementType);
		recurrentElement.classList.add(cssClass);
		if (cssClass === "nav-item") {
			recurrentElement.innerHTML = item;
		}
		if (cssClass === "category") {
			recurrentElement.innerHTML = categoryTemplate(item, i);
		}
		if (cssClass === "article-wrapper") {
			recurrentElement.innerHTML = articleTemplate(item, i);
		}
		if (cssClass === "photo") {
			recurrentElement.classList.add(`photo-${i + 1}`);
		}
		parent.appendChild(recurrentElement);
	});
}

const generateNav = generateRecurrentElements(
	navItems,
	"li",
	"nav-item",
	navList[0]
);

const generateMobileNav = generateRecurrentElements(
	navItems,
	"li",
	"nav-item",
	navList[1]
);

const generateCategories = generateRecurrentElements(
	categories,
	"div",
	"category",
	categoriesNode
);

const generateArticles = generateRecurrentElements(
	articles,
	"article",
	"article-wrapper",
	articleSection
);

const generateGallery = generateRecurrentElements(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	"div",
	"photo",
	gallery
);
