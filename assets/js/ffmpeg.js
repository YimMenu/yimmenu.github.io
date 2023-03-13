const { createFFmpeg, fetchFile } = FFmpeg
const audioElm = document.getElementById('output-audio')
const saveBtn = document.getElementById('saveBtn')
const cancelBtn = document.getElementById('cancelBtn')
const progressBar = document.getElementById('progressBar')
const progressBarLabel = document.getElementById('progressBarLabel')
const message = document.getElementById('message')
const infoSection = document.getElementById('info-section')
const previewSection = document.getElementById('preview-section')

let ffmpeg = null
let blob

const transcode = async ({ target: { files } }) => {
    if (ffmpeg === null) {
        setProgressBar(0)
        ffmpeg = createFFmpeg({ log: true, progress: ratio => setProgressBar(ratio.ratio) })
    }
    clear()
    infoSection.dataset.hidden = "false"
    saveBtn.dataset.disabled = true
    cancelBtn.disabled = false

    const { name } = files[0]
    message.innerText = 'Loading ffmpeg-core.js'
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load()
    }
    ffmpeg.FS('writeFile', name, await fetchFile(files[0]))
    message.innerText = 'Start transcoding'
    await ffmpeg.run('-i', name, '-acodec', 'pcm_s16le', '-ac', '1', '-ar', '16000', 'audio.wav')
    message.innerText = 'Complete transcoding'
    const data = ffmpeg.FS('readFile', 'audio.wav')

    blob = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/wav' }))
    saveBtn.dataset.disabled = false
    cancelBtn.disabled = true
    saveBtn.href = blob
    audioElm.src = blob
    previewSection.dataset.hidden = "false"

    cancel()
}
const elm = document.getElementById('uploader')
elm.addEventListener('change', transcode)

const setProgressBar = (value) => {
    progressBar.value = value
    progressBarLabel.innerText = `${~~(value * 100)}%`
}

const cancel = () => {
    try {
        ffmpeg.exit()
    } catch (e) { }
    ffmpeg = null
}

const clear = () => {
    saveBtn.removeAttribute("href")
    audioElm.src = ""
}