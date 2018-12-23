import React from "react";
import {
  TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator, View, Text, Button
} from "react-native";
import {
  SearchBar, Icon, List, ListItem
} from "react-native-elements";
import {
  createBottomTabNavigator, createStackNavigator, createAppContainer, createDrawerNavigator
} from "react-navigation";

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0,
    margin: 2,
    padding: 2,
  },
  itemImage: {
    width: 128,
    height: 128
  },
  searchIcon: {
    paddingRight: 10
  }
});

const podcastData = [
  {"wrapperType":"track", "kind":"podcast", "collectionId":274450056, "trackId":274450056, "artistName":"Giant Bomb", "collectionName":"Giant Bombcast", "trackName":"Giant Bombcast", "collectionCensoredName":"Giant Bombcast", "trackCensoredName":"Giant Bombcast", "collectionViewUrl":"https://itunes.apple.com/us/podcast/giant-bombcast/id274450056?mt=2&uo=4", "feedUrl":"https://www.giantbomb.com/feeds/podcast/", "trackViewUrl":"https://itunes.apple.com/us/podcast/giant-bombcast/id274450056?mt=2&uo=4", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/29/f9/9f/29f99f00-c1f5-13d5-0299-0439a20aab26/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/29/f9/9f/29f99f00-c1f5-13d5-0299-0439a20aab26/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/29/f9/9f/29f99f00-c1f5-13d5-0299-0439a20aab26/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-18T23:23:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":300, "country":"USA", "currency":"USD", "primaryGenreName":"Video Games", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/29/f9/9f/29f99f00-c1f5-13d5-0299-0439a20aab26/source/600x600bb.jpg", "genreIds":["1404", "26", "1323", "1461", "1318", "1446"], "genres":["Video Games", "Podcasts", "Games & Hobbies", "Other Games", "Technology", "Gadgets"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":149020, "collectionId":105708952, "trackId":105708952, "artistName":"They Might Be Giants", "collectionName":"They Might Be Giants Podcast", "trackName":"They Might Be Giants Podcast", "collectionCensoredName":"They Might Be Giants Podcast", "trackCensoredName":"They Might Be Giants Podcast", "artistViewUrl":"https://itunes.apple.com/us/artist/they-might-be-giants/149020?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/they-might-be-giants-podcast/id105708952?mt=2&uo=4", "feedUrl":"http://www.tmbg.com/_media/_pod/podcast.xml", "trackViewUrl":"https://itunes.apple.com/us/podcast/they-might-be-giants-podcast/id105708952?mt=2&uo=4", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/18/04/70/18047058-7be2-eae1-c29a-12ce684e5a14/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/18/04/70/18047058-7be2-eae1-c29a-12ce684e5a14/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/18/04/70/18047058-7be2-eae1-c29a-12ce684e5a14/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2015-04-15T15:30:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":4, "country":"USA", "currency":"USD", "primaryGenreName":"Music", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/18/04/70/18047058-7be2-eae1-c29a-12ce684e5a14/source/600x600bb.jpg", "genreIds":["1310", "26"], "genres":["Music", "Podcasts"]}, 
  {"wrapperType":"track", "kind":"podcast", "collectionId":80340837, "trackId":80340837, "artistName":"New York Giants", "collectionName":"New York Giants Audio Podcast", "trackName":"New York Giants Audio Podcast", "collectionCensoredName":"New York Giants Audio Podcast", "trackCensoredName":"New York Giants Audio Podcast", "collectionViewUrl":"https://itunes.apple.com/us/podcast/new-york-giants-audio-podcast/id80340837?mt=2&uo=4", "feedUrl":"https://nflgiants.cachefly.net/content/giants/production/new-york-giants-audio-podcast-itunes.xml", "trackViewUrl":"https://itunes.apple.com/us/podcast/new-york-giants-audio-podcast/id80340837?mt=2&uo=4", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/22/16/81/22168126-2110-32cc-5ab8-120c32301692/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/22/16/81/22168126-2110-32cc-5ab8-120c32301692/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/22/16/81/22168126-2110-32cc-5ab8-120c32301692/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-20T20:06:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":300, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/22/16/81/22168126-2110-32cc-5ab8-120c32301692/source/600x600bb.jpg", "genreIds":["1465", "26", "1316"], "genres":["Professional", "Podcasts", "Sports & Recreation"]}, 
  {"wrapperType":"track", "kind":"podcast", "collectionId":1015035334, "trackId":1015035334, "artistName":"JT Fusco | www.gohistorypodcast.com", "collectionName":"Giants of History", "trackName":"Giants of History", "collectionCensoredName":"Giants of History", "trackCensoredName":"Giants of History", "collectionViewUrl":"https://itunes.apple.com/us/podcast/giants-of-history/id1015035334?mt=2&uo=4", "feedUrl":"http://gohistorypodcast.libsyn.com/rss", "trackViewUrl":"https://itunes.apple.com/us/podcast/giants-of-history/id1015035334?mt=2&uo=4", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/d3/cc/9e/d3cc9e46-89cc-7cc4-5de9-8524563e9072/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/d3/cc/9e/d3cc9e46-89cc-7cc4-5de9-8524563e9072/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/d3/cc/9e/d3cc9e46-89cc-7cc4-5de9-8524563e9072/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-08T20:07:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":77, "country":"USA", "currency":"USD", "primaryGenreName":"History", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/d3/cc/9e/d3cc9e46-89cc-7cc4-5de9-8524563e9072/source/600x600bb.jpg", "genreIds":["1462", "26", "1324", "1304", "1301", "1401"], "genres":["History", "Podcasts", "Society & Culture", "Education", "Arts", "Literature"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":694384085, "collectionId":996770623, "trackId":996770623, "artistName":"Giant Bomb", "collectionName":"The Giant Beastcast", "trackName":"The Giant Beastcast", "collectionCensoredName":"The Giant Beastcast", "trackCensoredName":"The Giant Beastcast", "artistViewUrl":"https://itunes.apple.com/us/artist/giant-bomb/694384085?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/the-giant-beastcast/id996770623?mt=2&uo=4", "feedUrl":"https://www.giantbomb.com/podcast-xml/beastcast/", "trackViewUrl":"https://itunes.apple.com/us/podcast/the-giant-beastcast/id996770623?mt=2&uo=4", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/a5/20/b9/a520b963-30cf-c123-73eb-bfb7dc835ba2/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/a5/20/b9/a520b963-30cf-c123-73eb-bfb7dc835ba2/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/a5/20/b9/a520b963-30cf-c123-73eb-bfb7dc835ba2/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-21T11:00:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":189, "country":"USA", "currency":"USD", "primaryGenreName":"Video Games", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/a5/20/b9/a520b963-30cf-c123-73eb-bfb7dc835ba2/source/600x600bb.jpg", "genreIds":["1404", "26", "1323", "1461", "1318", "1446"], "genres":["Video Games", "Podcasts", "Games & Hobbies", "Other Games", "Technology", "Gadgets"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":1163286667, "collectionId":1092247887, "trackId":1092247887, "artistName":"Alex Pavlovic, NBC Sports Bay Area", "collectionName":"The Giants Insider Podcast", "trackName":"The Giants Insider Podcast", "collectionCensoredName":"The Giants Insider Podcast", "trackCensoredName":"The Giants Insider Podcast", "artistViewUrl":"https://itunes.apple.com/us/artist/nbc-sports-bay-area-california/1163286667?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/the-giants-insider-podcast/id1092247887?mt=2&uo=4", "feedUrl":"https://rss.art19.com/giants-insider-podcast", "trackViewUrl":"https://itunes.apple.com/us/podcast/the-giants-insider-podcast/id1092247887?mt=2&uo=4", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/f6/6e/35f66e52-d890-1b4b-b813-e1c4cd6695ac/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/f6/6e/35f66e52-d890-1b4b-b813-e1c4cd6695ac/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/f6/6e/35f66e52-d890-1b4b-b813-e1c4cd6695ac/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-17T18:58:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "trackCount":93, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "artworkUrl600":"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/35/f6/6e/35f66e52-d890-1b4b-b813-e1c4cd6695ac/source/600x600bb.jpg", "genreIds":["1465", "26", "1316"], "genres":["Professional", "Podcasts", "Sports & Recreation"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":694384085, "collectionId":628532858, "trackId":628532858, "artistName":"Giant Bomb", "collectionName":"Giant Bomb Presents", "trackName":"Giant Bomb Presents", "collectionCensoredName":"Giant Bomb Presents", "trackCensoredName":"Giant Bomb Presents", "artistViewUrl":"https://itunes.apple.com/us/artist/giant-bomb/694384085?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/giant-bomb-presents/id628532858?mt=2&uo=4", "feedUrl":"https://www.giantbomb.com/podcast-xml/giant-bomb-presents/", "trackViewUrl":"https://itunes.apple.com/us/podcast/giant-bomb-presents/id628532858?mt=2&uo=4", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music111/v4/61/2d/2b/612d2b2a-b252-3faa-8b09-7ff583de7b08/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music111/v4/61/2d/2b/612d2b2a-b252-3faa-8b09-7ff583de7b08/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music111/v4/61/2d/2b/612d2b2a-b252-3faa-8b09-7ff583de7b08/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-11-28T17:47:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "trackCount":221, "country":"USA", "currency":"USD", "primaryGenreName":"Video Games", "contentAdvisoryRating":"Explicit", "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Music111/v4/61/2d/2b/612d2b2a-b252-3faa-8b09-7ff583de7b08/source/600x600bb.jpg", "genreIds":["1404", "26", "1323", "1461", "1318", "1446"], "genres":["Video Games", "Podcasts", "Games & Hobbies", "Other Games", "Technology", "Gadgets"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":127962104, "collectionId":891432086, "trackId":891432086, "artistName":"MLB.com", "collectionName":"San Francisco Giants Podcast", "trackName":"San Francisco Giants Podcast", "collectionCensoredName":"San Francisco Giants Podcast", "trackCensoredName":"San Francisco Giants Podcast", "artistViewUrl":"https://itunes.apple.com/us/artist/mlb/127962104?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/san-francisco-giants-podcast/id891432086?mt=2&uo=4", "feedUrl":"http://mlb.mlb.com/feed/podcast/sfgpodcast.xml", "trackViewUrl":"https://itunes.apple.com/us/podcast/san-francisco-giants-podcast/id891432086?mt=2&uo=4", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music111/v4/4c/f6/d6/4cf6d610-5bec-f39c-8559-f746004b20c3/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music111/v4/4c/f6/d6/4cf6d610-5bec-f39c-8559-f746004b20c3/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music111/v4/4c/f6/d6/4cf6d610-5bec-f39c-8559-f746004b20c3/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-20T22:37:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":279, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is2-ssl.mzstatic.com/image/thumb/Music111/v4/4c/f6/d6/4cf6d610-5bec-f39c-8559-f746004b20c3/source/600x600bb.jpg", "genreIds":["1465", "26", "1316"], "genres":["Professional", "Podcasts", "Sports & Recreation"]}, 
  {"wrapperType":"track", "kind":"podcast", "collectionId":988813837, "trackId":988813837, "artistName":"NJ.com", "collectionName":"Talk is Cheap: A New York Giants Podcast", "trackName":"Talk is Cheap: A New York Giants Podcast", "collectionCensoredName":"Talk is Cheap: A New York Giants Podcast", "trackCensoredName":"Talk is Cheap: A New York Giants Podcast", "collectionViewUrl":"https://itunes.apple.com/us/podcast/talk-is-cheap-a-new-york-giants-podcast/id988813837?mt=2&uo=4", "feedUrl":"http://www.spreaker.com/show/1559866/episodes/feed", "trackViewUrl":"https://itunes.apple.com/us/podcast/talk-is-cheap-a-new-york-giants-podcast/id988813837?mt=2&uo=4", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/2b/61/b7/2b61b7f1-2c6b-8845-cf66-265254ab59ca/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/2b/61/b7/2b61b7f1-2c6b-8845-cf66-265254ab59ca/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/2b/61/b7/2b61b7f1-2c6b-8845-cf66-265254ab59ca/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-13T15:12:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":149, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/2b/61/b7/2b61b7f1-2c6b-8845-cf66-265254ab59ca/source/600x600bb.jpg", "genreIds":["1465", "26", "1316", "1311"], "genres":["Professional", "Podcasts", "Sports & Recreation", "News & Politics"]}, 
  {"wrapperType":"track", "kind":"podcast", "collectionId":174469367, "trackId":174469367, "artistName":"New York Giants", "collectionName":"New York Giants Video Podcast", "trackName":"New York Giants Video Podcast", "collectionCensoredName":"New York Giants Video Podcast", "trackCensoredName":"New York Giants Video Podcast", "collectionViewUrl":"https://itunes.apple.com/us/podcast/new-york-giants-video-podcast/id174469367?mt=2&uo=4", "feedUrl":"https://nflgiants.cachefly.net/content/giants/production/new-york-giants-video-podcast-itunes.xml", "trackViewUrl":"https://itunes.apple.com/us/podcast/new-york-giants-video-podcast/id174469367?mt=2&uo=4", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/e7/18/fc/e718fc0e-d183-94f9-69d9-4521f0bd3955/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/e7/18/fc/e718fc0e-d183-94f9-69d9-4521f0bd3955/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/e7/18/fc/e718fc0e-d183-94f9-69d9-4521f0bd3955/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-10-04T22:59:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":47, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/e7/18/fc/e718fc0e-d183-94f9-69d9-4521f0bd3955/source/600x600bb.jpg", "genreIds":["1465", "26", "1316"], "genres":["Professional", "Podcasts", "Sports & Recreation"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":683402095, "collectionId":535121941, "trackId":535121941, "artistName":"thoughtbot", "collectionName":"Giant Robots Smashing Into Other Giant Robots", "trackName":"Giant Robots Smashing Into Other Giant Robots", "collectionCensoredName":"Giant Robots Smashing Into Other Giant Robots", "trackCensoredName":"Giant Robots Smashing Into Other Giant Robots", "artistViewUrl":"https://itunes.apple.com/us/artist/thoughtbot/683402095?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/giant-robots-smashing-into-other-giant-robots/id535121941?mt=2&uo=4", "feedUrl":"https://rss.simplecast.com/podcasts/271/rss", "trackViewUrl":"https://itunes.apple.com/us/podcast/giant-robots-smashing-into-other-giant-robots/id535121941?mt=2&uo=4", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/1d/81/bf/1d81bf32-70e0-c59f-b4b2-f71ae7488891/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/1d/81/bf/1d81bf32-70e0-c59f-b4b2-f71ae7488891/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/1d/81/bf/1d81bf32-70e0-c59f-b4b2-f71ae7488891/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-10T05:01:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":300, "country":"USA", "currency":"USD", "primaryGenreName":"Software How-To", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Music62/v4/1d/81/bf/1d81bf32-70e0-c59f-b4b2-f71ae7488891/source/600x600bb.jpg", "genreIds":["1480", "26", "1318", "1321", "1413", "1304"], "genres":["Software How-To", "Podcasts", "Technology", "Business", "Management & Marketing", "Education"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":1330218886, "collectionId":1144941431, "trackId":1144941431, "artistName":"Locked on Podcast Network", "collectionName":"Locked On Giants", "trackName":"Locked On Giants", "collectionCensoredName":"Locked On Giants", "trackCensoredName":"Locked On Giants", "artistViewUrl":"https://itunes.apple.com/us/artist/locked-on-podcast-network/1330218886?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/locked-on-giants/id1144941431?mt=2&uo=4", "feedUrl":"http://feeds.megaphone.fm/PPY9068844031", "trackViewUrl":"https://itunes.apple.com/us/podcast/locked-on-giants/id1144941431?mt=2&uo=4", "artworkUrl30":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f6/70/3cf670c2-d95d-4e92-58ab-f3b60872d80a/source/30x30bb.jpg", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f6/70/3cf670c2-d95d-4e92-58ab-f3b60872d80a/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f6/70/3cf670c2-d95d-4e92-58ab-f3b60872d80a/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-21T05:05:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":300, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f6/70/3cf670c2-d95d-4e92-58ab-f3b60872d80a/source/600x600bb.jpg", "genreIds":["1465", "26", "1316"], "genres":["Professional", "Podcasts", "Sports & Recreation"]}, 
  {"wrapperType":"track", "kind":"podcast", "artistId":398100605, "collectionId":311086301, "trackId":311086301, "artistName":"Giant Gnome Productions", "collectionName":"Star Trek: Outpost", "trackName":"Star Trek: Outpost", "collectionCensoredName":"Star Trek: Outpost", "trackCensoredName":"Star Trek: Outpost", "artistViewUrl":"https://itunes.apple.com/us/artist/giant-gnome-productions/398100605?mt=2&uo=4", "collectionViewUrl":"https://itunes.apple.com/us/podcast/star-trek-outpost/id311086301?mt=2&uo=4", "feedUrl":"http://feeds2.feedburner.com/StarTrekOutpost", "trackViewUrl":"https://itunes.apple.com/us/podcast/star-trek-outpost/id311086301?mt=2&uo=4", "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/7c/eb/3d/7ceb3dbb-30f6-2709-b206-8488bfb059ba/source/30x30bb.jpg", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/7c/eb/3d/7ceb3dbb-30f6-2709-b206-8488bfb059ba/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/7c/eb/3d/7ceb3dbb-30f6-2709-b206-8488bfb059ba/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-11-18T20:22:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":92, "country":"USA", "currency":"USD", "primaryGenreName":"TV & Film", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/7c/eb/3d/7ceb3dbb-30f6-2709-b206-8488bfb059ba/source/600x600bb.jpg", "genreIds":["1309", "26", "1323", "1460", "1301", "1405", "1401"], "genres":["TV & Film", "Podcasts", "Games & Hobbies", "Hobbies", "Arts", "Performing Arts", "Literature"]}, 
  {"wrapperType":"track", "kind":"podcast", "collectionId":1148992957, "trackId":1148992957, "artistName":"Gotham Sports Network", "collectionName":"NY Giants Weekly", "trackName":"NY Giants Weekly", "collectionCensoredName":"NY Giants Weekly", "trackCensoredName":"NY Giants Weekly", "collectionViewUrl":"https://itunes.apple.com/us/podcast/ny-giants-weekly/id1148992957?mt=2&uo=4", "feedUrl":"https://audioboom.com/channels/4811171.rss", "trackViewUrl":"https://itunes.apple.com/us/podcast/ny-giants-weekly/id1148992957?mt=2&uo=4", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f7/d0/3cf7d0e5-6bab-abbe-897c-f42f323f3876/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f7/d0/3cf7d0e5-6bab-abbe-897c-f42f323f3876/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f7/d0/3cf7d0e5-6bab-abbe-897c-f42f323f3876/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-12-18T08:50:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "trackCount":89, "country":"USA", "currency":"USD", "primaryGenreName":"Professional", "contentAdvisoryRating":"Explicit", "artworkUrl600":"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/3c/f7/d0/3cf7d0e5-6bab-abbe-897c-f42f323f3876/source/600x600bb.jpg", "genreIds":["1465", "26", "1316"], "genres":["Professional", "Podcasts", "Sports & Recreation"]}, 
  {"wrapperType":"track", "kind":"podcast", "collectionId":1080841525, "trackId":1080841525, "artistName":"GiANT Worldwide", "collectionName":"GiANT's Liberator Podcast", "trackName":"GiANT's Liberator Podcast", "collectionCensoredName":"GiANT's Liberator Podcast", "trackCensoredName":"GiANT's Liberator Podcast", "collectionViewUrl":"https://itunes.apple.com/us/podcast/giants-liberator-podcast/id1080841525?mt=2&uo=4", "feedUrl":"https://giant.podbean.com/feed.xml", "trackViewUrl":"https://itunes.apple.com/us/podcast/giants-liberator-podcast/id1080841525?mt=2&uo=4", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1c/8f/65/1c8f65cd-b593-a465-fa70-31fcfc2493e9/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1c/8f/65/1c8f65cd-b593-a465-fa70-31fcfc2493e9/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1c/8f/65/1c8f65cd-b593-a465-fa70-31fcfc2493e9/source/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "trackRentalPrice":0, "collectionHdPrice":0, "trackHdPrice":0, "trackHdRentalPrice":0, "releaseDate":"2018-11-20T18:33:00Z", "collectionExplicitness":"cleaned", "trackExplicitness":"cleaned", "trackCount":47, "country":"USA", "currency":"USD", "primaryGenreName":"Management & Marketing", "contentAdvisoryRating":"Clean", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1c/8f/65/1c8f65cd-b593-a465-fa70-31fcfc2493e9/source/600x600bb.jpg", "genreIds":["1413", "26", "1321"], "genres":["Management & Marketing", "Podcasts", "Business"]}
]

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search" 
  };
  
  constructor(props) {
    super(props);
    const term = this.props.navigation.getParam('term');
    this.state = { isLoading: true, term: term }
  }

  componentDidMount() {
    this.fetchPodcasts(this.state.term)
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  fetchPodcastsMock() {
    this.sleep(2000).then(() => {
      this.setState({
        isLoading: false,
        data: podcastData
      });
    });
  }
  
  fetchPodcasts(term) {
    fetch(`https://itunes.apple.com/search?media=podcast&term=${term}&limit=20`)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson.results
        this.setState({
          isLoading: false,
          data: data
        });
      })
  }

  _addPodcast(item) {
    const previousCollection = this.state.collection || []
    const podcast = {
      artworkUrl100: item.artworkUrl100,
      collectionName: item.collectionName,
      artistName: item.artistName,
    };
    const collection = [podcast];
    collection.push(...previousCollection);
    this.setState({
      collection: collection,
    });
  }

  renderPodcast(item) {
    return (
      <ListItem
        roundAvatar
        avatar={{uri: item.artworkUrl100}}
        title={item.collectionName}
        subtitle={item.artistName}
        rightIcon={{name: 'add' }}
        onPressRightIcon={this._addPodcast.bind(this, item)}
      />
    )
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.renderPodcast(item)}
          keyExtractor={(item) => `podcast-${item.trackId}`}
        />
      </List>
    );
  }
}

class PodcastsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Podcasts",
      bakheaderRight: (
        <Icon
          color='#fff'
          underlayColor='#f4511e'
          component={ TouchableOpacity }
          name='search'
          iconStyle={styles.searchIcon}
          onPress={() => navigation.navigate('Search')}
        />
      ),
      headerRight: (
        <SearchBar
          round
          onSubmitEditing={(event) => { navigation.navigate("Search", { term: event.nativeEvent.text }) }}
        />
      )
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      podcasts: podcastData
    };
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <View>
        <FlatList
          data={this.state.podcasts}
          numColumns={3}
          keyExtractor={(item) => `podcast-${item.trackId}`}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Image
                  source={{uri: item.artworkUrl600 }}
                  style={styles.itemImage}
                />
              </View>
            )
          }}
        />
      </View>
    );
  }
}

class PlayerScreen extends React.Component {
  static navigationOptions = {
    title: "Player" 
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Player Screen</Text>
        <Button
          title="Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
const PlayerStack = createStackNavigator(
  {
    Player: PlayerScreen
  },
  {
    initialRouteName: "Player",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const PodcastsStack = createStackNavigator(
  {
    Podcasts: PodcastsScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Podcasts",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Podcasts: PodcastsStack,
    Player: PlayerStack,
  },
  {
  }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
      />
    )
  }
}
