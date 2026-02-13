const now = new Date();

const hour = now.getHours();

let phaseOfDay = "";
switch (true) {
  case (hour >= 6 && hour < 12):
    phaseOfDay = "morning";
    break;
  case (hour >= 12 && hour < 18):
    phaseOfDay = "afternoon";
    break;
  case (hour >= 18 && hour < 24):
    phaseOfDay = "evening";
    break;
  case (hour >= 0 && hour < 6):
    phaseOfDay = "night";
    break;
  default:
    phaseOfDay = "unknown";
}

const day = String(now.getDate()-1).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const fullYear = now.getFullYear();
year = String(fullYear).slice(-2);

let id = "a";

document.body.style.setProperty('--bg-image', "url(" + id + "Winners/" + month + day + year + ".png)");

todaysText = daysText.split(month + day + year);
todaysText = todaysText[1].split("date:::");
todaysText = todaysText[0].split(":::" + id);
todaysText = todaysText[1].split("\n");
textBlock = "";
for (var i = 0; i < todaysText.length; i++) {
  if (todaysText[i].startsWith("the " + phaseOfDay)) {
    textBlock += todaysText[i] + "<br>";
  }
  if (todaysText[i].startsWith("the day")) {
    textBlock += "on " + todaysText[i] + "<br>";
  }
  if (todaysText[i].endsWith(" lbs")) {
    textBlock += todaysText[i] + "<br>";
  }
}
document.getElementById("dayText").innerHTML = textBlock;

