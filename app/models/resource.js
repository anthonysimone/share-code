import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  type: DS.attr('string'),
  submitter: DS.attr('string'),
  timestamp: DS.attr('number')
});

// Resource.reopenClass({
//   FIXTURES:[
//     {
//       id: "1",
//       title: "Github Resource",
//       description: "This is a code snippet from my github account that I use all of the time.",
//       type: "github",
//       submitter: "Anthony"
//     },
//     {
//       id: "2",
//       title: "Fullname Module",
//       description: "This module should be used any time you want to implement a full name input.",
//       type: "drupal-module",
//       submitter: "Mike"
//     },
//     {
//       id: "3",
//       title: "Some jQuery Plugin",
//       description: "This jQuery Plugin is so great!",
//       type: "jquery-plugin",
//       submitter: "Ryan"
//     },
//     {
//       id: "4",
//       title: "Plain Old Javascript snippet",
//       description: "I wrote a bit of javscript that's really useful.",
//       type: "javascript",
//       submitter: "Tanner"
//     },
//     {
//       id: "5",
//       title: "Caching it in Drupal",
//       description: "Did you get a look at this cache?!",
//       type: "drupal",
//       submitter: "JoeM"
//     }
//   ]
// });