// ==UserScript==
// @name         Auto loop video
// @namespace    https://github.com/martinza99/browserEnhancements/
// @version      0.2.1
// @description  enables loop on videos
// @author       martin
// @match        file:///*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var allowedTypes = ['mp4','webm'];
    var filetype = document.location.href.substring(document.location.href.lastIndexOf('.')+1); // gets everything in the URL after the last dot '.'
    if(allowedTypes.includes(filetype)){
      var video = document.getElementsByTagName('video')[0];
      video.loop = true;
      video.volume=0.15;
    }

})();
