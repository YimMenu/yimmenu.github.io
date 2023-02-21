const fs = require("fs")

fs.writeFileSync("changelog.html", fs.readFileSync("changelog.template.html", { encoding: "utf-8" }).replace("{{ K25GGECMBaKQfj&B#dorq8HpCCTkdEwSa!@hLVHHoWriEVBnrmL*ty%rHooB*esezywBQ@sN8tKJ9YBR^FLr8J@28hyxm#$Vd8KG7VEBdCi2FNSC7sH2uiFwdCTWWzbi }}", fs.readFileSync("changelog_from_md.html", { encoding: "utf8" })))