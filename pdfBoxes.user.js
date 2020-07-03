// ==UserScript==
// @name         Draw boxes on PDFs
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/pdfBoxes.user.js
// @version      0.1
// @description  adds drawable boxes to PDFs
// @author       martinZa99
// @include      /\.pdf$/
// @grant        none
// ==/UserScript==

(function () {
	const canvas = document.createElement("canvas");
	canvas.width = innerWidth - 100;
	canvas.height = innerHeight;
	canvas.style.opacity = 0.8;
	canvas.style.borderRight = "2px solid darkgoldenrod";

	const ctx = canvas.getContext("2d");
	document.body.append(canvas);

	let start = null;
	canvas.addEventListener("contextmenu", (event) => {
		event.preventDefault();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		start = null;
	});

	canvas.addEventListener("click", (event) => {
		if (start == null) {
			start = { x: event.x, y: event.y };
			ctx.fillStyle = "red";
			ctx.fillRect(start.x, start.y, 5, 5);
			ctx.fillStyle = "black";
		} else {
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			const w = event.x - start.x;
			const h = event.y - start.y;
			ctx.clearRect(start.x, start.y, w, h);
			start = null;
		}
	});
})();
