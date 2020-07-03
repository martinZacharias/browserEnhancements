// ==UserScript==
// @name         Draw boxes on PDFs
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/pdfBoxes.user.js
// @version      0.2
// @description  adds drawable boxes to PDFs
// @author       martinZa99
// @include      /\.pdf$/
// @grant        none
// ==/UserScript==

(function () {
	const canvas = document.createElement("canvas");
	canvas.width = innerWidth - 100;
	canvas.height = innerHeight - 50;
	canvas.style.opacity = 0.8;
	canvas.style.borderRight = "2px solid darkgoldenrod";
	canvas.style.position = "absolute";
	canvas.style.top = "50px";

	const ctx = canvas.getContext("2d");
	document.body.append(canvas);

	let start = null;
	canvas.addEventListener("contextmenu", (event) => {
		event.preventDefault();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		start = null;
	});

	canvas.addEventListener("click", (event) => {
		const x = event.x;
		const y = event.y - 50;
		if (start == null) {
			start = { x, y };
			ctx.fillStyle = "red";
			ctx.fillRect(x, y, 5, 5);
			ctx.fillStyle = "black";
		} else {
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			const w = x - start.x;
			const h = y - start.y;
			ctx.clearRect(start.x, start.y, w, h);
			start = null;
		}
	});
})();
