export function mobileMenu() {
	const menu = document.querySelector(".navbar-mobile");
	const hamburger = document.querySelector(".hamburger-wrapper");
	const hamburgerStrips = document.querySelectorAll(".hamburger-strip");
	hamburger.addEventListener("click", () => {
		menu.classList.toggle("show-menu");
		hamburger.classList.toggle("menu-open");
		hamburgerStrips.forEach((strip) => {
			strip.classList.toggle("open");
		});
	});
}
