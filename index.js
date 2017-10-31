'use strict';

// requires CustomEvent polyfill for IE9+
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

var util = require('./util.js');

function onKeyDownOrUp(evt, el, keyEventType) {
    if (!evt.shiftKey) {
        var key = evt.key;

        // normalize spacebar key
        if (evt.key === ' ') {
            key = 'Spacebar';
        }

        switch (key) {
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'End':
            case 'Enter':
            case 'Escape':
            case 'Home':
            case 'PageDown':
            case 'PageUp':
            case 'Spacebar':
                el.dispatchEvent(new CustomEvent(util.uncapitalizeFirstLetter(key + 'Key' + keyEventType), {
                    detail: evt,
                    bubbles: true
                }));
                break;
            default:
                return;
        }
    }
}

function onKeyDown(e) {
    onKeyDownOrUp(e, this, "Down");
}

function onKeyUp(e) {
    onKeyDownOrUp(e, this, "Up");
}

function addKeyDown(el) {
    el.addEventListener('keydown', onKeyDown);
}

function addKeyUp(el) {
    el.addEventListener('keyup', onKeyUp);
}

function removeKeyDown(el) {
    el.removeEventListener('keydown', onKeyDown);
}

function removeKeyUp(el) {
    el.removeEventListener('keyup', onKeyUp);
}

function add(el) {
    addKeyDown(el);
    addKeyUp(el);
}

function remove(el) {
    removeKeyDown(el);
    removeKeyUp(el);
}

module.exports = {
    addKeyDown: addKeyDown,
    addKeyUp: addKeyUp,
    removeKeyDown: removeKeyDown,
    removeKeyUp: removeKeyUp,
    add: add,
    remove: remove
};
