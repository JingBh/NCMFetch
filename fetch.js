const axios = require("axios").default;
const qs = require("qs");

const buildParams = require("./buildParams");
const parseUrl = require("./parseURL");

const url = "https://music.163.com/weapi/song/enhance/player/url/v1";

module.exports = function(ids, callback) {

    if (typeof ids == "number" || typeof ids == "string") ids = [ids];
    ids = ids.map(parseUrl).filter(Boolean);

    callback = callback || function(result) {
        for (let id in result) {
            console.info("\n" + `Song ID: ${id}` + "\n" + `Download URL: ${result[id]}`);
        }
    };

    const params = buildParams({
        ids: JSON.stringify(ids),
        level: "standard",
        encodeType: "aac"
    });

    axios.post(url, qs.stringify(params)).then(function(response) {
        response = response.data.data || [];
        let result = {};

        for (let i in response) {
            let obj = response[i] || {};
            if (obj["id"]) result[obj["id"]] = obj["url"];
        }

        callback(result);

    }).catch(function(error) {
        console.error(error);
    });

};
