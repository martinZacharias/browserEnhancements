// ==UserScript==
// @name         ILIAS custom entries
// @namespace    https://github.com/martinza99/browserEnhancements/
// @updateURL    https://github.com/martinza99/browserEnhancements/raw/master/iliascCustomEntries.user.js
// @version      1.3
// @description  adds a button to add custom links to ILIAS
// @author       martinza99
// @match        https://www.ilias.fh-dortmund.de/ilias/ilias.php?baseClass=ilPersonalDesktopGUI*
// @grant        none
// ==/UserScript==

let entries = [];

(function() {
   'use strict';
    //create + append add entry button (link)
    let a = document.createElement("a");
    a.innerText = " Eintrag hinzufügen";
    a.addEventListener("click", addEntry);
    document.querySelector("#block_pditems_0_blhead").appendChild(a);

    // get saved entries
    entries = JSON.parse(localStorage.getItem("customEntries"));

    // add all entries to list
    if(entries != null)
        entries.forEach(entry => addContainer(entry.name, entry.url));
})();

function addContainer(name, url){
    // copy existing container
    let container = document.querySelector(".ilObjListRow");
    document.querySelector(".il_Block").appendChild(container);

    // edit links
    let links = container.querySelectorAll("a"); // get links
    links[0].href = url; // replace link of image hrefs
    links[1].href = url; // replace link of text hrefs
    links[1].innerText = name; // replace text of copied element

    // get options list
    let list = container.querySelector(".btn-group > ul");
    list.innerHTML = "";

    // add delete button
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerText = "Eintrag löschen";
    li.appendChild(a);
    a.addEventListener("click", removeEntry);
    list.appendChild(li);

}

function addEntry(){
    let name = prompt("Name");
    if(name == null) // if prompt canceled
        return;
    // if entry already exists
    if(entries.some(entry => entry.name == name)){
        alert("Eintrag bereits vorhanden");
        return;
    }

    let url = prompt("URL");
    if(url == null) // if prompt canceled
        return;

    // create and push entry object
    let entry = {name: name, url: url};
    entries.push(entry);
    addContainer(name, url);
    saveEntries();
}

function removeEntry(event){
    // get name from 6th parent
    let name = event.path[6].querySelector("a").innerText;

    // remove container of entry
    event.path[9].remove();
    entries = entries.filter(entry => entry.name != name);
    saveEntries();
}

function saveEntries(){
    localStorage.setItem("customEntries", JSON.stringify(entries));
}

