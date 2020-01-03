// ==UserScript==
// @name         youtube-dl button
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/youtube-dl.user.js
// @version      1.0
// @description  Adds a little download button for youtube-dl
// @author       martinza99
// @match        https://www.youtube.com/watch*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    {
        const container = document.querySelector(".ytp-right-controls");
        let button = document.createElement("button");
        button.innerText = "↓";
        button.style.position = "relative";
        button.style.top = "-40%";
        button.onclick = function () {
            location.href = "ytdl://" + location.href;
        }
        container.prepend(button);
    }
})();
