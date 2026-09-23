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
    URL_DATA = `https://bingr.one/watch/tv/${id}/${season}/${episode}`;
} else if (type === "anime") {
    URL_DATA = `https://bingr.one/watch/anime/${id}/${episode}`;
} else {
    URL_DATA = `https://bingr.one/watch/movie/${id}`;
}

if (!type || !id) {
    URL_DATA = "https://bingr.one/watch/movie/1007757";
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