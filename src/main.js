"use strict";

const cookiesNotOnWhitelist = [];

chrome.cookies.getAll({}, cookies => {
    const allCookies = document.querySelector("div")
    cookies.forEach(cookie => {
        chrome.contentSettings.cookies.get({primaryUrl: "http://"+cookie.domain}, cs => {
            if(cs.setting !== "allow"){
                const div = document.createElement("div");
                div.innerHTML = `<b>${cookie.domain}</b> - <i>${cookie.name}</i>: ${cookie.value}`;
                allCookies.appendChild(div);
                cookiesNotOnWhitelist.push([cookie, div]);
            }
        });

    });
});

document.querySelector("#clearAllNotWhitelisted").addEventListener("click", () => {
    cookiesNotOnWhitelist.forEach(cookie => {
        const thisurl = cookie[0].secure ? "https://"+cookie[0].domain : "http://"+cookie[0].domain;
        chrome.cookies.remove({
            url: thisurl,
            name: cookie[0].name,
            storeId: cookie[0].storeId
        }, details => {
            if(details){
                cookie[1].parentElement.removeChild(cookie[1]);
            }
        });
    });
});
