// ==UserScript==
// @name         ODS highlight passed
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/odsHighlights.user.js
// @version      0.1
// @description  highlights passed exams in ODS
// @author       martinza99
// @match        https://ods.fh-dortmund.de/ods?Sicht=ExcS&ExcSicht=PAnmeldung*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";
	const rows = document.querySelectorAll("table.standard tr");
	for (const row of rows) {
		if (row.lastElementChild.textContent == "BE")
			row.style.backgroundColor = "lime";
	}
})();
