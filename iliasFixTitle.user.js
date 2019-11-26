// ==UserScript==
// @name         ILIAS title fix
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/iliasFixTitle.user.js
// @version      0.2
// @description  flips and shortens the title on most ILIAS pages from "ILIAS - E-Learning an der FH Dortmund - PAGENAME" to "PAGENAME - ILIAS"
// @author       martinZa99
// @match        https://www.ilias.fh-dortmund.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.title.substr(0,40) == "ILIAS - E-Learning an der FH Dortmund - ")
        document.title = document.title.substr(40) + " - ILIAS"
})();
