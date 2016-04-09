# Ballyhoo
Bloody simple, super tiny, pub/sub JS events class based on https://davidwalsh.name/pubsub-javascript implemented in ES6.



## Install
For Meteor Simply install the package via atmosphere

```sh
meteor add pushplaybang:ballyhoo
```



## Getting Started

Using this couldn't be easier.  Create a new instance:

````js
App.events = new Ballyhoo();
````

The create the listener / subscriber:

````js
App.events.on('namespace/event', function(data) {
    //... do something when the event fires
});
````

Then publish an event at an appropriate time:

````js
App.events.emit('namespace/event', {});
````

You can pass any data you wish along to the handler function when emitting (or publishing an event) via the second argument.



### Contributions and Suggestions Welcome!
Have something you think this needs or could use as an improvement, let me know.  add [an issue on github](https://github.com/Pushplaybang/ballyhoo/blob/master/ballyhoo.js) or fork and create a pull request.



____



### License [MIT](https://opensource.org/licenses/MIT)
Copyright (c) 2016 Paul van Zyl

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