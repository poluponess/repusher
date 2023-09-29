# repusher
Queries retranslator to workaround query limits of [CoinGecko API](https://www.coingecko.com/en/api/documentation) within Google App Script

**WARN:** Could be easily DDOSed if IP is known

```js
var mapper = {
  "bnb": "binancecoin",
}

function builder(sym, currency, start, stop) {
  return `https://api.coingecko.com/api/v3/coins/${mapper[sym.toLowerCase()]}/market_chart/range?vs_currency=${currency}&from=${start}&to=${stop}`
}

function getData(sym, currency, start, stop) {
  var body = builder(sym, currency, start, stop)
  var query = UrlFetchApp.fetch(SECRET_ADDRESS, { method: "post", payload: body })
  return JSON.parse(query.getContentText())
}
```
