/**
* Created by woaitzy on 2015/5/18 0018.
*/
var zip = require('./ZipCodeValidator');
var letters = require('./LettersOnlyValidator');

// Some samples to try
var strings = ['Hello', '98052', '101'];

// Validators to use
var validators = {};
validators['ZIP code'] = new zip.ZipCodeValidator();
validators['Letters only'] = new letters.LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
