'use strict';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function uncapitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = {
    capitalizeFirstLetter: capitalizeFirstLetter,
    uncapitalizeFirstLetter: uncapitalizeFirstLetter
};
