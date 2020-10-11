// ex 1
const button = document.getElementById("button");
const div = document.getElementById("diff");

function changeDiv() {
    const diffDiv = {current: "You'll see something different here."};
    window.history.pushState(diffDiv, "Magic", "?newUrl.html");
    window.location.href = "";
    div.innerHTML = "Did u see the magic?";
}

button.addEventListener("click", changeDiv);
