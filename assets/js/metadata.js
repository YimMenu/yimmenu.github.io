const metadata_container = document.getElementById("metadata_container")
const last_update = document.getElementById("last_update")
const game_version = document.getElementById("game_version")

fetch("https://api.github.com/repos/yimmenu/yimmenu/releases/tags/nightly")
    .then(response => {
        response.json()
            .then(json => {
                last_update.innerText = `Last nightly update: ${json.published_at.replace("T", " ").slice(0, -1)}`
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