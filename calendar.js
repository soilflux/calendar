const now = new Date();

const day = String(now.getDate()-1).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const fullYear = now.getFullYear();
year = String(fullYear).slice(-2);

console.log("images/aWinners/" + month + day + year + ".png");
document.body.style.setProperty('--bg-image', "url(images/aWinners/" + month + day + year + ".png)");