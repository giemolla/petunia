export function arrowUp() {
	const arrowUp = document.querySelector(".up-button");

	arrowUp.addEventListener("click", function (e) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	window.addEventListener("scroll", function (e) {
		if (window.scrollY > 0) {
			arrowUp.classList.remove("hidden");
		} else {
			arrowUp.classList.add("hidden");
		}
	});
}
