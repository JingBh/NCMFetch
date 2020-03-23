let CryptoJS = require("crypto-js");

/*

function a(len) {
    // Generate random string

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; len > i; i ++) {
        let e = Math.random() * chars.length;
        e = Math.floor(e);
        result += chars.charAt(e);
    }

    return result;
}

*/

function b(a, b) {
    // AES encrypt

    const key = CryptoJS.enc.Utf8.parse(b);
    const iv = CryptoJS.enc.Utf8.parse("0102030405060708");
    const data = CryptoJS.enc.Utf8.parse(a);

    const encrypt = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC
    });

    return encrypt.toString();
}

module.exports = function(data) {
    data = JSON.stringify(data || {});

    // const random = a(16);
    const random = "rUonqfgxQuFPp77T";
    // const param1 = "010001";
    // const param2 = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7";
    const param3 = "0CoJUm6Qyw8W8jud";

    return {
        params: b(b(data, param3), random),
        encSecKey: "9c967eef8f22d2af3da52a7caab28a5dbce983ae14e07c28c43443355887b9ea6aa85cd233c6a3217e737a127b42a1745332c3a487b04f1088e0e8963000e673ac2186d49cbcf37846c44541ab3d9485e58441bf8b74170b4f5cdf7422f35913658aed755db5b0addd40a0bba71bf2df69a82eb137e9bc505844a154f155bb86"
    };

};
