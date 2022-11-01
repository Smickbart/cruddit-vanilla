const title = document.querySelector("h1");
title.addEventListener("click", handleClick);

function handleClick(e) {
	title.style.color = "green";
}
