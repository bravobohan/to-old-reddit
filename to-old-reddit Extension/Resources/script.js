document.addEventListener("DOMContentLoaded", function(event) {
    console.log(`${window.location.href}`)
    let baseURL = window.location.origin;
    console.log(`baseURL: ${baseURL}`)
    let restOfURL = window.location.href.substring(baseURL.length)
    console.log(`restOfURL: ${restOfURL}`)
    if (baseURL == "https://www.reddit.com"){
        window.location.href = "http://old.reddit.com" + restOfURL
    }
});
