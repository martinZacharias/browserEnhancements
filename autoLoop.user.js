// ==UserScript==
// @name         Auto loop video
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/autoLoop.user.js
// @version      0.4
// @description  enables loop on videos
// @author       martin
// @include      /^file:///.*(mp4|webm)$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var video = document.getElementsByTagName('video')[0];
    video.loop = true;
    video.volume=0.15;
})();
