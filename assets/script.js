function clockRefresh() {
    let clock = document.getElementById("currentDay");
    let DateTime = luxon.DateTime;
    clock.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

let time = setInterval(clockRefresh, 1000);