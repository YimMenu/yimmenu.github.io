const metadata_container = document.getElementById("metadata_container")
const last_update = document.getElementById("last_update")
const game_version = document.getElementById("game_version")

const getRelativeTime = (value, unit) => {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    return rtf.format(value, unit);
}

const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const timeDiff = date.getTime() - now.getTime();
    if (timeDiff >= -60000) {
        return getRelativeTime(Math.ceil(timeDiff / 1000), "second");
    }
    if (timeDiff >= -3600000) {
        return getRelativeTime(Math.ceil(timeDiff / 60000), "minute");
    }
    if (timeDiff >= -86400000) {
        return getRelativeTime(Math.ceil(timeDiff / 3600000), "hour");
    }
    if (timeDiff >= -2592000000) {
        return getRelativeTime(Math.ceil(timeDiff / 86400000), "day");
    }
    return dateString.replace("T", " ").slice(0, -1);
}

fetch("https://api.github.com/repos/yimmenu/yimmenu/releases/tags/nightly")
    .then(response => {
        response.json()
            .then(json => {
                const update = json.assets.length > 0 ? json.assets[0].updated_at : json.published_at;
                last_update.innerText = `Last nightly update: ${formatRelativeTime(update)}`
                metadata_container.dataset.hidden = "false"
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

fetch("https://cdn.jsdelivr.net/gh/YimMenu/YimMenu@HEAD/metadata.json")
    .then(response => {
        response.json()
            .then(json => {
                game_version.innerText = `Working on: ${json.game.online} (${json.game.build})`
                metadata_container.dataset.hidden = "false"
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));