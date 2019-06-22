# Ballyhoo
Bloody simple, super tiny, pub/sub JS events class based on https://davidwalsh.name/pubsub-javascript implemented in ES6, maintained with 100% test coverage. In production since 2016.

[![CircleCI](https://circleci.com/gh/Pushplaybang/ballyhoo.svg?style=svg)](https://circleci.com/gh/Pushplaybang/ballyhoo)
[![Maintainability](https://api.codeclimate.com/v1/badges/88a4f336fb0d21eda0d2/maintainability)](https://codeclimate.com/github/Pushplaybang/ballyhoo/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/88a4f336fb0d21eda0d2/test_coverage)](https://codeclimate.com/github/Pushplaybang/ballyhoo/test_coverage)


## Install
via npm:

```sh
npm install ballyhoo --save
```

via yarn:

```sh
yarn add ballyhoo
```

## Getting Started

Using this couldn't be easier.  Create a new instance:

```js
import Ballyhoo from 'ballyhoo';
const events = new Ballyhoo();
```

The create the listener / subscriber:

```js
events.on('namespace/event', function(data) {
    //... do something when the event fires
});
```

note that the `on` function returns a `remove` handler, should you wish to unbind it.

```js
const event = events.on('namespace/event', function(data) {
    //... do something when the event fires
});

// remove event
event.remove();
```

Then publish an event at an appropriate time:

```js
events.emit('namespace/event', {});
```

You can pass any data you wish along to the handler function when emitting (or publishing an event) via the second argument.

### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement, let me know.  add [an issue on github](https://github.com/Pushplaybang/ballyhoo/blob/master/ballyhoo.js) or fork and create a pull request.

## Changelog
This includes notable changes to the package

- 2.0.x - universal
  - remove meteor files
  - add eslint & prettier
  - update dependencies
  - use rollup for universal exports
  - update readme
  - add tests
  - add cxircleCI
  - add codeclimate
- 0.0.4 - setup proper ES6 export
____

### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2019 Paul van Zyl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
