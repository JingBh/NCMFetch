# NCMFetch

![Version](https://img.shields.io/github/package-json/v/JingBh/NCMFetch)
![Size](https://img.shields.io/github/languages/code-size/JingBh/NCMFetch?label=size)
![Stars](https://img.shields.io/github/stars/JingBh/NCMFetch)
![License](https://img.shields.io/github/license/JingBh/NCMFetch)
![Last Commit](https://img.shields.io/github/last-commit/JingBh/NCMFetch)

NCMFetch 可以帮您下载[网易云音乐](https://music.163.com/)上的歌曲，不需要登录、VIP、或下载客户端。

## How to install:

### In command line:
```bash
git clone https://github.com/JingBh/NCMFetch.git
cd NCMFetch
yarn install  # run "npm install" if you don't have Yarn.
```

### In your Node project:
```bash
yarn add https://github.com/JingBh/NCMFetch.git
# or
npm install https://github.com/JingBh/NCMFetch.git
```

## How to use:

首先，复制歌曲URL。在各平台客户端中可以在分享歌曲时找到复制链接的选项。

For example: *https://music.163.com/#/song?id=12345678*
> 重要的是其中的 id，所以您也可以只传入 id 的值。

### In command line:
```bash
node cli [url] ...
```

### In your Node project:
```javascript
const NCMFetch = require("ncmfetch");

let ids;

// Example 1: ids 可以为一个歌曲 ID。
ids = 12345678;

// Example 2: ids 可以为一个歌曲 URL。
ids = "https://music.163.com/#/song?id=12345678";

// Example 3: ids 可以为一个包含若干 ID 或 URL 的 Array。
ids = [12345678, 98765432, "https://music.163.com/#/song?id=11111111"];

NCMFetch(ids, function(result) {
    /* result 是一个 Object。
     * 键为歌曲 ID，值为下载歌曲的 URL
     */
    for (let id in result) {
        console.info("\n" +
            `Song ID: ${id}` + "\n" +
            `Download URL: ${result[id]}`);
    }
});
```

---

Developed by JingBh 2020

Open source under GNU GPLv3 license.
