import Ember from 'ember';
// var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['tag-select', 'tags']



  // actions: {
  //   play: function() {
  //     this.get('player').play(this.get('song'));
  //   },
  //   pause: function() {
  //     this.get('player').pause(this.get('song'));
  //   }
  // },

  // isCurrentSong: function() {
  //   return this.get('song') === this.get('player.song');
  // }.property('player.song', 'song'),

  // isPlaying: function() {
  //   return this.get('isCurrentSong') && this.get('player.isPlaying');
  // }.property('isCurrentSong', 'player.isPlaying')
});