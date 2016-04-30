# packstat

> Displays metrics about npm modules.

## Install

> npm install --save packstat

## Usage

```js

const packStat = require('packstat');

packStat('request').then(package => {
	console.log(package);
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

- [twifo](https://github.com/codedotjs/twifo)
- [packages-by](https://github.com/codedotjs/packages-by)

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)