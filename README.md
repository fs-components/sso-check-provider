sso-check-provider
==================

Simple SSO check provider


Installation
------------

    $ component install fs-components/sso-check-provider

API
---

```js
var sso = require("sso-check-provider");

function mySessionCheck() {
  return !!cookie("sessionid");
}

sso(mySessionCheck, {
  swf: "http://my-host.com/path/to/easyxdm.swf"
});
```

License
-------

MIT
