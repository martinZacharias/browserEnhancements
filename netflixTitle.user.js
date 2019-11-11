// ==UserScript==
// @name         Netflix Title Fix
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/netflixTitle.user.js
// @version      1.0
// @description  Replaces "Netflix" with media title
// @author       martinZa99
// @match        https://www.netflix.com/title/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //gets title from logo-img alt text
    document.title = document.querySelector(".title > img").alt;
})();
