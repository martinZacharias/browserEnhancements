// ==UserScript==
// @name         ILIAS auto login
// @namespace    https://github.com/martinza99/browserEnhancements/
// @version      0.1
// @description  saves you the login buton click
// @author       martin
// @match        https://www.ilias.fh-dortmund.de/ilias/login.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#password").change(function(){
        document.getElementsByName("cmd[doStandardAuthentication]")[0].click();
});
})();