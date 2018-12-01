
// ------------- PROTOTYPE FUNCTIONS -------------
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function addPlaylist(playlist) {
  this.playlists.push(playlist);
};


//  DECLARATION OF THE PLAYLIST PROTOTYPE
function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = 0;
  this.totalDuration = 0;
}

Playlist.prototype.overallRatings = function overallRatings() {
  this.overallRating = 0;
  for (let track = 0; track < this.tracks.length; track++) {
    this.overallRating += this.tracks[track].rating;
  }
  this.overallRating = this.overallRating / this.tracks.length;
};

Playlist.prototype.overallDuration = function overallDuration() {
  this.totalDuration = 0;
  for (let track = 0; track < this.tracks.length; track++) {
    this.totalDuration += this.tracks[track].length;
  }
  this.totalDuration = this.totalDuration / this.tracks.length;
};


Playlist.prototype.addTrack = function addTrack(track) {
  this.tracks.push(track);
};


//  TRACK PROTOTYPE
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}


// ------------- DRIVER CODE -------------

const Library1 = new Library('Library 1', 'Rachel');
const Library2 = new Library('Library 2', 'Maddie');

console.log('-------------- Libraries created --------------');
console.log(Library1);
console.log(Library2);

const folkyPlaylist = new Playlist('folky');
const popPlaylist = new Playlist('pop');

console.log('-------------- playlists created --------------');
console.log(folkyPlaylist);
console.log(popPlaylist);

const lazySundayTrack1 = new Track(' folk track 1', 4, 4000);
const lazySundayTrack2 = new Track(' folk track 2', 4.5, 4500);

const popTrack1 = new Track('pop track1', 3.5, 3500);
const popTrack2 = new Track('pop track2', 3.0, 3000);

console.log('------------- Test tracks created -------------');
console.log(lazySundayTrack1, lazySundayTrack2);
console.log(popTrack1, popTrack2);

folkyPlaylist.addTrack(lazySundayTrack1);
folkyPlaylist.addTrack(lazySundayTrack2);


popPlaylist.addTrack(popTrack1);
popPlaylist.addTrack(popTrack2);

console.log('------------ Add tracks to playlists --------------');
console.log(folkyPlaylist);
console.log(popPlaylist);

Library1.addPlaylist(folkyPlaylist);
Library2.addPlaylist(popPlaylist);

console.log('------------ Add playlist to Library --------------');
console.log(Library1);
console.log(Library2);


folkyPlaylist.overallDuration();
folkyPlaylist.overallRatings();

popPlaylist.overallDuration();
popPlaylist.overallRatings();

console.log('------------- Check duration and ratings -------------');
console.log(folkyPlaylist);
console.log(popPlaylist);
