// ==UserScript==
// @name         ILIAS title fix
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/iliasFixTitle.user.js
// @version      0.3
// @description  flips and shortens the title on most ILIAS pages from "ILIAS - E-Learning an der FH Dortmund - PAGENAME" to "PAGENAME - ILIAS"
// @author       martinZa99
// @match        https://www.ilias.fh-dortmund.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let match = document.title.match(".*ILIAS - E-Learning an der FH Dortmund - (.*)");
    if(match != undefined) // in case some pages don't match the pattern
        document.title = match[1] + " - ILIAS"
})();
