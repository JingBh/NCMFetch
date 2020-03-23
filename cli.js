const fetch = require("./fetch");

if (process && process.argv) {
    let ids = process.argv.slice(2);

    if (ids.length > 0) {
        fetch(ids);
    } else console.error("Please input at least one ID or URL.");
} else console.error("Can't read your arguments.");
