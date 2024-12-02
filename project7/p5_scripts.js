function change() {
    /* Give id='gridding' to zuko and iroh image */
    document.getElementById("gridding").setAttribute("src", "../final_project_images/zuko_iroh_gridded.png")
}
function revert() {
    document.getElementById("gridding").setAttribute("src", "../final_project_images/zuko_iroh.png")
}
function sendHome() {
    /* Only have sendHome in fmab.html and dmc_5.html */
    console.log("Redirecting to home...");
    setTimeout(() => {
        window.location.href = "https://www.deathbuycactus.github.io/ist263/project7/index.html"; }, 2000); /* Change to whatever the link to the home page is */
    }