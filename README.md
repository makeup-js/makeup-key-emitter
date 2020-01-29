# makeup-key-emitter

<p>
    <a href="https://travis-ci.org/makeup-js/makeup-key-emitter"><img src="https://api.travis-ci.org/makeup-js/makeup-key-emitter.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-js/makeup-key-emitter?branch=master'><img src='https://coveralls.io/repos/makeup-js/makeup-key-emitter/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-js/makeup-key-emitter"><img src="https://david-dm.org/makeup-js/makeup-key-emitter.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-js/makeup-key-emitter#info=devDependencies"><img src="https://david-dm.org/makeup-js/makeup-key-emitter/dev-status.svg" alt="devDependency status" /></a>
</p>

Emits custom events for common accessibility keys (arrowRightKeyDown, escKeyDown, etc).

A vanilla JavaScript port of <a href="https://github.com/makeup-jquery/jquery-common-keydown">jquery-common-keydown</a>.

## Experimental

This CommonJS module is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
// via npm
npm install makeup-key-emitter

// via yarn
yarn add makeup-key-emitter
```

## Example

```js
const KeyEmitter = require('makeup-key-emitter');

let el = document.getElementById('#widget1');

KeyEmitter.addKeyDown(el);

el.addEventListener('arrowRightKeyDown', function(e) {
    console.log(this, e.type); // outputs (el1, 'arrowRightKeyDown')
});
```

## Methods

* addKeyDown(el)
* addKeyUp(el)
* removeKeyDown(el)
* removeKeyUp(el)
* add(el)
* remove(el)

## Dependencies

* [custom-event](https://github.com/webmodules/custom-event) (for IE)

## CI Build

https://travis-ci.org/makeup-js/makeup-key-emitter

## Code Coverage

https://coveralls.io/github/makeup-js/makeup-key-emitter
