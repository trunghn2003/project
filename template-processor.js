"use strict";

function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {
    return this.template.replace(/\{\{(\w+)\}\}/g, function(match, key) {
        return dictionary.hasOwnProperty(key) ? dictionary[key] : '';
    });
};


var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new TemplateProcessor(template);

var dictionary = {month: "July", day: "1", year: "2016"};
var str = dateTemplate.fillIn(dictionary);

console.log(str); 

var dictionary2 = {day: "1", year: "2016"};
var str2 = dateTemplate.fillIn(dictionary2);

console.log(str2); 
