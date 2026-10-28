const params = new URLSearchParams(window.location.search);

const type = params.get("type");
const id = params.get("id");

let season, episode;

if (type === "tv" || type === "anime") {
    season = params.get("season");
    episode = params.get("episode");
}

let URL_DATA;

if (type === "tv") {
    URL_DATA = `https://vidly.pro/tv/${id}/${season}/${episode}?theme=retro`;
} else if (type === "anime") {
    URL_DATA = `https://vidly.pro/anime/${id}/${episode}?theme=retro`;
} else {
    URL_DATA = `https://vidly.pro/movie/${id}?theme=retro`;
}

if (!type || !id) {
    URL_DATA = "https://vidly.pro/movie/1007757";
}

const iframe = document.getElementsByTagName("iframe")[0];

iframe.src = URL_DATA;


// Prevent your OWN page from opening new tabs/windows.
window.open = function () {
    return null;
};


// Keep links from your parent document in the same tab.
document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    const url = new URL(link.href, location.href);

    if (
        url.origin !== location.origin &&
        url.origin !== "https://bingr.one"
    ) {
        event.preventDefault();
    }
});
