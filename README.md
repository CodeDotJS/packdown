# packstat

> Displays metrics about npm modules.

## Instll

> npm install --save packstat

## Usage

```js

const packStat = require('packstat');

packStat('cheerio').then(package => {
	console.log(package);
	/*
	{
		Last Day : 535,972 downloads
		Last Week : 3,360,202 downloads
		Last Month : 14,974,412 downloads
	}
	*/
});
```
## Related

- [twifo](https://github.com/codedotjs/twifo)
- [packages-by](https://github.com/codedotjs/packages-by)

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)