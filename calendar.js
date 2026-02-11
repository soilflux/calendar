const now = new Date();

const day = String(now.getDate()-1).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const fullYear = now.getFullYear();
year = String(fullYear).slice(-2);

let id = "a";

console.log("images/aWinners/" + month + day + year + ".png");
document.body.style.setProperty('--bg-image', "url(images/" + id + "Winners/" + month + day + year + ".png)");


todaysText = daysText.split(month + day + year);
todaysText = todaysText[1].split(":::" + id);
todaysText = todaysText[1].split("\n");
document.getElementById("dayText").innerHTML = todaysText[1] + "<br>" + todaysText[2];
console.log(todaysText[1]);

