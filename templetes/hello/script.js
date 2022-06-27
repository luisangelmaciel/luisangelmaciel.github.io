console.clear();

const textContainers = document.querySelectorAll(".text-container");

textContainers.forEach((textContainer) => {
	let delay = 200; // in millisecond
	let totalTextCount = textContainer.getAttribute("data-text-count");
	let elText = textContainer.getAttribute("data-text");
	for (let i = 0; i < totalTextCount; i++) {
		let textEl = document.createElement("span");
		textEl.className = "text";
		for (let j = 0; j < elText.length; j++) {
			let charContainerEl = document.createElement("span");
			charContainerEl.className = "char-container";
			charContainerEl.setAttribute("style", `--delay: ${delay - i * 50}ms`);

			let charEl = document.createElement("span");
			charEl.className = "char";
			charEl.innerHTML = elText[j];

			if (j % 2 == 0 && i == totalTextCount - 1) {
				let iconContainierEl = document.createElement("span");
				iconContainierEl.classList.add("icon-container");
				let SVGEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				SVGEl.classList.add("icon", "star");
				let SVGUseEl = document.createElementNS("http://www.w3.org/2000/svg", "use");
				SVGUseEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#star");
				SVGEl.setAttribute("style", `--icon-animation-delay: ${Math.random() * j * 200}ms`);

				SVGEl.appendChild(SVGUseEl);
				iconContainierEl.appendChild(SVGEl);
				charContainerEl.appendChild(iconContainierEl);
			}

			charContainerEl.append(charEl);
			textEl.append(charContainerEl);
		}

		textContainer.append(textEl);
	}
});

const textArr = document.querySelectorAll(".text");
const colorArr = ["#fff", "#086BE2", "#E4002B", "#F5BA1C", "#000"];

textArr.forEach((text, index) => {
	text.style.setProperty("--color", `${colorArr[colorArr.length - 1 - index]}`);
});