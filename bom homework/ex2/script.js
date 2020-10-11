const languages = document.getElementsByName("language");


console.log("first button value: " + languages[0].value);
console.log("second button value: " + languages[1].value);


document.cookie = "language=en-US";


const myCookies = document.cookie;


console.log("cookie: " + myCookies);


var divideCookie = window.document.cookie.split("=");


console.log(divideCookie);
console.log("cookieKey: " + divideCookie[0]);
console.log("cookieValue: " + divideCookie[1]);


if (languages[0].value === divideCookie[1]) {
  languages[0].checked = true;
}


languages[1].addEventListener("click", function () {
  if (languages[1].checked === true) {
    divideCookie[1] = languages[1].value;
    var cookieObject = [];
    cookieObject.push({
      key: divideCookie[0],
      value: divideCookie[1],
    });
    console.log(divideCookie);
    console.log("cookie: " + myCookies);
  }
});