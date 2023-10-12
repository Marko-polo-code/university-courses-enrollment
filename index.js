"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_js_1 = require("./courses.js");
const studygroups_js_1 = require("./studygroups.js");
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_js_1.default : studygroups_js_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number' && options.query === event.id) {
            return true;
        }
        else if (typeof options.query === 'string' && event.keywords.includes(options.query)) {
            return true;
        }
        return false;
    });
}
const searchResults = searchEvents({ query: 'art', eventType: 'groups' });
console.log(searchResults);
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
enroll(searchResults[0]);
console.log(enrolledEvents);
