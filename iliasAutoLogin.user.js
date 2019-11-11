// ==UserScript==
// @name         ILIAS auto login
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/iliasAutoLogin.user.js
// @version      0.2.2
// @description  saves you the login buton click
// @author       martinZa99
// @match        https://www.ilias.fh-dortmund.de/ilias/login.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#password").change(function(){
        document.getElementsByName("cmd[doStandardAuthentication]")[0].click();
});
    setInterval(formSub, 200); //waiting for password autofill
})();

function formSub(){
    if($("#password").val()!="")
        document.getElementsByName("cmd[doStandardAuthentication]")[0].click();
}
