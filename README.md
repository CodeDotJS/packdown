# packstat

> Displays metrics about npm modules.

[![Build Status](https://travis-ci.org/CodeDotJS/packstat.svg?branch=master)](https://travis-ci.org/CodeDotJS/packstat)

## Install

> npm install --save packstat

## Usage

```js

const packStat = require('packstat');

packStat('request').then(module => {
	console.log(module);
	/*
	{
		lastDay : 535,972 downloads
		lastWeek : 3,360,202 downloads
		lastMonth : 14,974,412 downloads
	}
	*/
});
```
## Related

- [packstat-cli](https://github.com/CodeDotJs/packstat-cli) CLI Tool for this module.

- [twifo](https://github.com/codedotjs/twifo) Get user information of a twitter user.

- [packages-by](https://github.com/codedotjs/packages-by) Total packages uploaded by an npm user.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)