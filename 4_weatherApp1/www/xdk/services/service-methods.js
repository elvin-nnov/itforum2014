/*xdk-auto-gen:service-methods:common:start:0d8c3f11689b3957ba5034c626015a3b*/
var intel;if(intel||(intel={}),"object"!=typeof intel)throw new Error("Unexpected use of intel namespace");if(intel.xdk||(intel.xdk={}),"object"!=typeof intel.xdk)throw new Error("Unexpected use of intel.xdk namespace");if(intel.xdk.services||(intel.xdk.services={}),"object"!=typeof intel.xdk.services)throw new Error("Unexpected use of intel.xdk.services namespace");intel.xdk.services.iodocs_=function(){var e={};return e.mergeParams=function(e,n){n=n||{};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},e.bindCommon=function(n,i,t,r){var s=i(e.mergeParams(t,r));return s.then(function(e,i,t){$(document).trigger(n,[e,i,t])}),s},e}(),intel.xdk.services.iodocs_.rottentomatoes=function(e){function n(n,i){i=i||{},i.apiKey=e.apiKey;var t=r+n+".json?"+$.param(i);return $.ajax({url:t,dataType:"json"})}function i(n,i){i=i||{},i.apiKey=e.apiKey;var t=r+"movies/"+i.id+n+".json?",s={};for(var o in i)"id"!=o&&Object.prototype.hasOwnProperty.call(i,o)&&(s[o]=i[o]);return t+=$.param(s),$.ajax({url:t,dataType:"json"})}var t={},r="http://api.rottentomatoes.com/api/public/v1.0/";return t.box_office=n.bind(null,"lists/movies/box_office"),t.in_theatres=n.bind(null,"lists/movies/in_theaters"),t.opening=n.bind(null,"lists/movies/opening"),t.upcoming=n.bind(null,"lists/movies/upcoming"),t.top_rentals=n.bind(null,"lists/dvds/top_rentals"),t.current_releases=n.bind(null,"lists/dvds/current_releases"),t.new_releases=n.bind(null,"lists/dvds/new_releases"),t.upcomingDVD=n.bind(null,"lists/dvds/upcoming"),t.movie_info=i.bind(null,""),t.cast_info=i.bind(null,"/cast"),t.movie_clips=i.bind(null,"/clips"),t.movie_reviews=i.bind(null,"/reviews"),t.movie_similar=i.bind(null,"/similar"),t.movie_alias=n.bind(null,"movie_alias"),t.search=n.bind(null,"movies"),t.listsDirectory=n.bind(null,""),t.movieListsDirectory=n.bind(null,"lists/movies"),t.dvdListsDirectory=n.bind(null,"lists/dvds"),t}(intel.xdk.services.credentials.rottentomatoes),intel.xdk.services.iodocs_.klout=function(e){function n(n,i){i=i||{};var t="/"+i.Id+"?";i.screenName&&(t="?screenName="+i.screenName+"&"),i.KId&&(t="/"+i.KId+"/tw?");var s=r+"identity.json/"+n+t+"key="+e.apiKey;return $.ajax({url:s})}function i(n,i){i=i||{},n&&(n="/"+n);var t=r+"user.json/"+i.kloutId+n+"?key="+e.apiKey;return $.ajax({url:t})}var t={},r="http://api.klout.com/v2/";return t.getIdByTwitterId=n.bind(null,"tw"),t.getIdByGoogle=n.bind(null,"gp"),t.getIdByInstagram=n.bind(null,"ig"),t.getIdByTwitterName=n.bind(null,"twitter"),t.getTwitterIdByKloutId=n.bind(null,"klout"),t.showUser=i.bind(null,""),t.Score=i.bind(null,"score"),t.Topics=i.bind(null,"topics"),t.Influence=i.bind(null,"influence"),t}(intel.xdk.services.credentials.klout),intel.xdk.services.iodocs_.usatoday=function(e){function n(n,i){i=i||{};var r=t+"census/"+n+"?api_key="+e.apiKey+"&"+$.param(i);return $.ajax({url:r})}var i={},t="http://api.usatoday.com/open/";return i.getLocations=n.bind(null,"locations"),i.getEthnicity=n.bind(null,"ethnicity"),i.getHousing=n.bind(null,"housing"),i.getPopulation=n.bind(null,"population"),i.getRace=n.bind(null,"race"),i}(intel.xdk.services.credentials.usatoday),intel.xdk.services.iodocs_.openweathermap=function(){var e={};return e.getByGPSCoordinates=function(e){var n="http://api.openweathermap.org/data/2.5/weather";return n=n+"?"+$.param(e),$.ajax({url:n,type:"GET"})},e}(intel.xdk.services.credentials.openweathermap);
/*xdk-auto-gen:service-methods:common:end*/
/*xdk-auto-gen:service-methods:openweathermapgetByGPSCoordinates:start:1a44721643bca1ab2d9261a69c85323f*/
intel.xdk.services.openweathermapgetByGPSCoordinates=intel.xdk.services.iodocs_.bindCommon.bind(null,"intel.xdk.services.openweathermapgetByGPSCoordinates",intel.xdk.services.iodocs_.openweathermap.getByGPSCoordinates,{lat:" 55.4",lon:" 43.83",__proto__:{}});
/*xdk-auto-gen:service-methods:openweathermapgetByGPSCoordinates:end*/
