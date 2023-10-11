import courses from './courses.js';
import studyGroups from './studyGroups.js';

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
}

type SearchEventsOptions = {
 query: number | string;
 eventType: 'courses' | 'groups';
}

function searchEvents(options: SearchEventsOptions) {
  const events: (Course | StudyGroup)[] = options.eventType === 'courses' ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number' && options.query === event.id) {
      return true;
    } else if (typeof options.query === 'string' && event.keywords.includes(options.query)) {
      return true;
    }
    return false;
  });
}

const searchResults = searchEvents({query: 'art', eventType: 'groups'});
console.log(searchResults);

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {
  enrolledEvents = [...enrolledEvents, event];
}

enroll(searchResults[0]);
console.log(enrolledEvents);
