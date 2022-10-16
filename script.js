const product = document.querySelectorAll(".product");
const pList = document.querySelector("product-list");
const search = document.getElementById("filter-item");
let pName = document.getElementsByTagName("h2");

let match;
const findProduct = () => {
	const newSearch = search.value.toUpperCase();

	for (let i = 0; i < pName.length; i++) {
		match = product[i].getElementsByTagName("h2")[0];

		if (match) {
			let result = match.textContent;

			product[i].style.display =
				result.toUpperCase().indexOf(newSearch) > -1 ? "" : "none";
		}
	}
};

search.addEventListener("keyup", findProduct);
