module.exports = function(url) {
    url = String(url).trim();

    if (url) {
        if (url.startsWith("http")) {
            const pattern = /([?&])id=([0-9]*)/;
            const matches = pattern.exec(url);
            return Number(matches[2]) || false;
        } else return Number(url) || false;
    } else return false;
};
