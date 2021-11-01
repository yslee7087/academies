const body = document.querySelector("body"),
    userProfile = body.querySelector(".user-profile"),
    userInfo = body.querySelector(".user-info");

function appearInfo() {
    userInfo.style.display = "block";
};
function disappearInfo() {
    userInfo.style.display = "none";
};