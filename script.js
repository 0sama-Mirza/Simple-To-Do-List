function addItem(inputId, ulId) {
    let item = document.getElementById(inputId);
    let newitem = item.value.trim(); // Trim extra whitespace
    let ulID = document.getElementById(ulId);
    if (newitem === "") {
        return;
    }
    let newli = document.createElement("li");
    let newcheckbox = document.createElement("input");
    newcheckbox.type = "checkbox";
    newcheckbox.id = newitem;
    newcheckbox.name = newitem;
    newcheckbox.value = newitem;
    newcheckbox.className = ".checkbox";
    newli.appendChild(document.createTextNode(newitem));
    newli.appendChild(newcheckbox);
    ulID.appendChild(newli);
    item.value = ""; // Clear input
    console.log(newcheckbox);
}
function removeitem (){
    let checkboxes = document.getElementsByClassName(".checkbox");
    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        let prei = i; //The Solution!!!!!!!!!! Just check the current index again.
        if (checkbox.checked) {
            let value = checkbox.value;
            console.log("Checkbox value: " + value);
            checkbox.parentNode.parentNode.removeChild(checkbox.parentNode);
            i = prei-1; //As i will be incremented we need to decrement it.
        }
    }
}
// Adding Items:
document.getElementById("addfoodbutton").addEventListener("click", function () {
    addItem("userinputfoodvalue", "foodulitems");
});
document.getElementById("addtoybutton").addEventListener("click", function () {
    addItem("userinputtoyvalue", "toysulitems");
});
document.getElementById("addcomputerstuffbutton").addEventListener("click", function () {
    addItem("userinputcomputerstuffvalue", "computerstuffulitems");
});
// Listen for Enter key press and trigger the corresponding button click
document.getElementById("userinputfoodvalue").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addfoodbutton").click();
    }
});
document.getElementById("userinputtoyvalue").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addtoybutton").click();
    }
});
document.getElementById("userinputcomputerstuffvalue").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("addcomputerstuffbutton").click();
    }
});
// Removing Items:
document.querySelector(".removeitems").addEventListener("click",removeitem);
