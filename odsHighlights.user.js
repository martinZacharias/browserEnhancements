// ==UserScript==
// @name         ODS highlight passed
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/odsHighlights.user.js
// @version      0.2
// @description  highlights passed exams in ODS
// @author       martinza99
// @match        https://ods.fh-dortmund.de/ods?Sicht=ExcS*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	const ExcSicht = new URLSearchParams(location.search).get("ExcSicht");
	switch (ExcSicht) {
		case "PAnmeldung": {
			const rows = document.querySelectorAll("table.standard tr");
			for (const row of rows) {
				if (row.cells[8].textContent == "BE")
					row.style.backgroundColor = "lime";
			}
			break;
		}
		case "Notenspiegel": {
			const rowsMain = document.querySelectorAll(".small tr");
			for (const row of rowsMain) {
				switch (row.cells[7].textContent.substr(0, 2)) {
					case "BE":
						row.style.backgroundColor = "lime";
						break;
					case "NB":
						row.style.backgroundColor = "salmon";
						break;
					default:
						break;
				}
			}
			break;
		}
		default:
			break;
	}
})();
