#!/usr/bin/env node

const stdin = process.openStdin();
const { exec } = require("child_process");
const util = require("util");
const execPromise = util.promisify(exec);
const delay = (timeout) => new Promise((resolve, reject) => setTimeout(resolve, timeout));

let data = "";

stdin.on('data', function (chunk) {
    data += chunk;
});

stdin.on('end', function () {
    const lines = data.split("\n").map(x => {
        const line_split = x.split("#")
        return {
            date: line_split[0],
            hash: line_split[1]
        }
    }).reverse()

    /** @type { { start: string?, end: string?}[] } */
    const ranges = []
    /** @type { string? } */
    let cdate = null
    /** @type { { start: string?, end: string? } } */
    let range = { start: null, end: null }
    for ({ date, hash } of lines) {
        if (cdate === date) {
            range.end = hash
        } else {
            if (cdate) ranges.push({ ...range })
            cdate = date
            range.start = hash
            range.end = null
        }
    }

    if (range.start !== ranges.at(-1).start) {
        ranges.push({ ...range })
    }

    ranges.forEach(async (x, i) => {
        if (!x.start && !x.end) return;
        await execPromise(`git-cliff ${x.start}${i - 1 < 0 ? "" : "~1"}..${x.end ?? ranges[i - 1 < 0 ? i + 1 : i - 1].start} ${i === 0 ? "-o" : "--prepend"} changelog.md`)
        await delay(100)
    })
});