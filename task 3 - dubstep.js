/*
* TASK: Decode from Dubstep where WUB can be used any number of times in a string and may or may not
* appear at the beginning and end.
*/

const songDecoder = s => s.replace(/(WUB)+/g, ' ').trim();

console.log(
 songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"), // WE ARE THE CHAMPIONS MY FRIEND
 songDecoder("WUBWUBIWUBAMWUBWUBX"), //I AM X
 songDecoder("AWUBBWUBC"), //"A B C"
 songDecoder("AWUBWUBWUBBWUBWUBWUBC"), //"A B C"
 songDecoder("WUBAWUBBWUBCWUB") //"A B C"
);
  
