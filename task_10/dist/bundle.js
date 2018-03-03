!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist",e(e.s=6)}([function(t,e,n){"use strict";function o(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];n.forEach(function(e){if("function"!=typeof t[e])throw Error("Expected function "+e+". Instead received: "+c(t[e]));t[e]=t[e].bind(t)})}function r(t){for(var e=void 0,n=arguments,o=n.length,r=void 0;o>1&&t.length;)for(e=n[--o];-1!==(r=t.indexOf(e));)t.splice(r,1);return t}function a(t){t.classList.add("change"),setTimeout(function(){t.classList.remove("change")},2e3)}function i(t){var e=JSON.stringify(t);localStorage.setItem("favourireList",e)}function s(t){t=t.split("-");var e=t[1];switch(e){case"01":e="Jan ";break;case"02":e="Feb ";break;case"03":e="Mar ";break;case"04":e="Apr ";break;case"05":e="May ";break;case"06":e="Jun ";break;case"07":e="Jul ";break;case"08":e="Aug ";break;case"09":e="Sept ";break;case"10":e="Oct ";break;case"11":e="Nov ";break;case"12":e="Dec "}return t=e+t[2]}function u(t){var e={cloud:"cloud",cloudy:"cloudy",doubleCloudy:"double-cloudy",doubleRain:"double-rain",rain:"rain",rainbow:"rainbow",snowflake:"snowflake",snowy:"snowy",storm:"storm",stormRain:"storm-rain",sun:"sun"};return t=Number(t),t>=200&&t<=202?e.stormRain:t>=230&&t<=233?e.storm:t>=300&&t<=500||521===t||900===t?e.rain:t>=501&&t<=522?e.doubleRain:t>=600&&t<=623?e.snowy:611===t||612===t?e.cloud:t>=700&&t<=751||t>=801&&t<=803?e.cloudy:804===t?e.doubleCloudy:e.sun}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.bindAll=o,e.removeFavourite=r,e.showHideStar=a,e.saveLocalStorage=i,e.changeDateTime=s,e.getIcon=u},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(10);Object.defineProperty(e,"Component",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){"use strict";function o(t,e){var n=i+"?lat="+t+"&lon="+e+s;return fetch(n).then(function(t){return t.json()}).catch(function(t){console.log(t)})}function r(t){return new Promise(function(e,n){(new google.maps.Geocoder).geocode({address:""+t},function(t,o){if(o==google.maps.GeocoderStatus.OK){var r=t[0].geometry.location.lat(),i=t[0].geometry.location.lng();e([r,i])}else console.log("Something got wrong "+o),n(a.nyanCat)})})}Object.defineProperty(e,"__esModule",{value:!0}),e.getCityFromUrl=void 0,e.getWeather=o,e.getCityLatLon=r;var a=(n(3),n(4),n(5)),i="https://api.weatherbit.io/v2.0/forecast/daily",s="&key=ca6bb30119264fe2b2608a31b5c79d8e";e.getCityFromUrl=function(t){var e=new URL(window.location.href);if(e.search.startsWith("?="))return t.value=e.search.slice(2),t.value=decodeURIComponent(t.value),r(),t.value}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(0),u=n(1),c=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.days=document.querySelector(".another-days"),n}return a(e,t),i(e,[{key:"render",value:function(){this.days.innerHTML="";var t=this.props.weather;if(!this.props.weather)return"";for(var e=((0,s.getIcon)(t.icon),[]),n=1;n<5;n++){var o=t.data[n].datetime,r=(0,s.changeDateTime)(o),a=(0,s.getIcon)(t.data[n].weather.code);e+='<div class="a-day">\n                    <time datatime="'+o+'">'+r+'</time>\n                    <img src="src/img/icons/big/'+a+'.svg" alt="'+a+'" class="icon">\n                    <div><span class="temp">'+t.data[n].temp+'</span><sup>o</sup><span class="cf">C</span></div>\n                    </div>'}return this.days.innerHTML=e,this.days}}]),e}(u.Component);e.default=c},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(0),u=n(1),c=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.oneDay=document.querySelector(".one-day"),n}return a(e,t),i(e,[{key:"render",value:function(){var t=this.props.weather;if(!this.props.weather)return this.oneDay.innerHTML="";var e=(0,s.getIcon)(t.icon),n=(0,s.changeDateTime)(t.data[0].datetime);return this.oneDay.innerHTML='<div class="btn-group">\n                                <button class="f">F</button>\n                                <button class="c">C</button>\n                            </div>\n                            <h2 class="city">'+t.city_name+'</h2>\n                            <div class="centre">\n                                <span class="temp">'+t.data[0].temp+'</span><sup>o</sup><span class="cf">C</span>\n                                <img class="icon" src="src/img/icons/big/'+e+'.svg" alt="'+e+'">\n                            </div>\n                            <p class="discriptions">\n                                <time class="d-time" datatime="'+t.data[0].datetime+'">'+n+'</time>   \n                                <span class="desc">'+t.data[0].weather.description+'</span>\n                                <span class="humid">'+t.data[0].rh+"%</span>\n                            </p>",this.oneDay}}]),e}(u.Component);e.default=c},function(t,e,n){"use strict";function o(t){a.innerHTML="",i.innerHTML="",t.innerHTML="<div class='rainbow'>\n        <span></span>\n        </div>\n        <div class='nyan-cat'>\n        <span class=\"error\">not found 404</span>\n        <div class='feet'></div>\n        <div class='tail'>\n        <span></span>\n        </div>\n        <div class='body'></div>\n        <div class='head'></div>\n        </div>",t.setAttribute("style","-webkit-animation: animateC 7s linear; animation-fill-mode: forwards;"),r.setAttribute("style","height: 100vh;"),setTimeout(function(){t.innerHTML="",t.removeAttribute("style","-webkit-animation: animateC 4s linear; animation-fill-mode: forwards;"),r.removeAttribute("style","height: 100vh;")},7e3)}Object.defineProperty(e,"__esModule",{value:!0}),e.placeNyanCat=o;var r=(e.nyanCat=document.querySelector(".wrapper-cat"),document.querySelector(".wrapper")),a=document.querySelector(".one-day"),i=document.querySelector(".another-days")},function(t,e,n){n(7),t.exports=n(14)},function(t,e,n){"use strict";var o=n(8),r=function(t){return t&&t.__esModule?t:{default:t}}(o),a=n(13);window.onload=(0,a.parallax)(),new r.default(document.getElementById("header")).render()},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(9),s=o(i),u=n(4),c=o(u),l=n(3),f=o(l),d=n(11),p=o(d),h=n(2),y=n(0),v=n(12),b=function(){function t(e){r(this,t),this.state={city:new URLSearchParams(window.location.search).get("city")||"",coord:{lat:null,lon:null},weather:null},this.host=e,this.form=new s.default({city:this.state.city,coord:this.state.coord,onSubmit:this.onSearchSubmit}),this.todayForecast=new c.default({weather:this.state.weather}),this.daysForecast=new f.default({weather:this.state.weather}),this.favouriteCities=new p.default({city:this.state.city,onSub:this.onSearchSubmit}),window.activatePlacesSearch=this.form.activatePlacesSearch,(0,y.bindAll)(this,"onSearchSubmit")}return a(t,[{key:"onSearchSubmit",value:function(t,e){var n=this;(0,h.getWeather)(t[0],t[1]).then(function(o){e=o.city_name,n.updateState({weather:o,coord:t,city:e}),window.history.pushState(null,null,"?city="+o.city_name),(0,v.swapFC)()}).catch(function(t){console.log(t)})}},{key:"updateState",value:function(t){return this.state=Object.assign({},this.state,t),this.render()}},{key:"render",value:function(){var t=this.state,e=t.city,n=(t.coord,t.weather);return this.host.appendChild(this.form.update({city:e,onSubmit:this.onSearchSubmit})),[this.host,this.favouriteCities.update({city:e,onSub:this.onSearchSubmit}),this.todayForecast.update({weather:n}),this.daysForecast.update({weather:n})]}}]),t}();e.default=b},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(2),u=n(0),c=n(5),l=n(1),f=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.host=document.createElement("input"),n.host.setAttribute("type","text"),n.host.setAttribute("name","search"),n.host.setAttribute("id","user-input"),n.host.setAttribute("placeholder","Search..."),(0,u.bindAll)(n,"activatePlacesSearch"),n}return a(e,t),i(e,[{key:"getWeather",value:function(){var t=this;return(0,s.getCityLatLon)(this.host.value).then(function(e){t.props.onSubmit(e)}).catch(function(e){if((0,c.placeNyanCat)(e),t.host.value="",history.pushState){var n=window.location.origin+window.location.pathname+"";window.history.pushState({path:n},"",n)}})}},{key:"activatePlacesSearch",value:function(){var t=this,e=new google.maps.places.Autocomplete(this.host,{types:["(cities)"]});window.google.maps.event.clearInstanceListeners(this.host),window.google.maps.event.addListener(e,"place_changed",function(){t.getWeather()}),this.host.value===this.props.city&&""!==this.host.value&&this.getWeather()}},{key:"render",value:function(){var t=this.props,e=t.city;return t.coord,t.weather,this.host.setAttribute("value",""+e),this.host.value=e,this.host}}]),e}(l.Component);e.default=f},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){o(this,t),this.props=e||{},this.state={},this.host=null}return r(t,[{key:"updateState",value:function(t){return this.state=Object.assign({},this.state,t),this.render()}},{key:"update",value:function(t){return this.props=t,this.render()}},{key:"render",value:function(){}}]),t}();e.default=a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(0),u=n(2),c=n(1),l=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={favourireList:n.getLocalStorage()},n.host=document.getElementById("header"),n.wrap=document.getElementById("wrapper"),n.list=document.createElement("div"),n.list.classList.add("favour-list"),n.wrap.appendChild(n.list),n.input=document.createElement("input"),n.input.classList.add("favour-check"),n.input.setAttribute("id","favour-check"),n.input.setAttribute("type","checkbox"),n.list.appendChild(n.input),n.label=document.createElement("label"),n.label.classList.add("favour-input"),n.label.setAttribute("for","favour-check"),n.list.appendChild(n.label),n.ul=document.createElement("ul"),n.ul.classList.add("navigation"),n.ul.setAttribute("id","navigation1"),n.list.appendChild(n.ul),n.star=document.createElement("button"),n.star.classList.add("favourite"),n.host.appendChild(n.star),(0,s.bindAll)(n,"addToFavourite","showFavouriteCity","checkFList"),(0,s.showHideStar)(n.host),n}return a(e,t),i(e,[{key:"showFavouriteCity",value:function(t){var e=this;t.preventDefault();var n=document.getElementById("user-input"),o=t.target.innerHTML;n.value=o,(0,u.getCityLatLon)(o).then(function(t){e.props.onSub(t)}),this.star.setAttribute("data-favourite",!0)}},{key:"getLocalStorage",value:function(){var t=localStorage.getItem("favourireList");return t=JSON.parse(t),t||(t=[]),t}},{key:"checkFList",value:function(){console.log(this.props.city);for(var t=0;t<this.state.favourireList.length;t++){if(console.log("flist",this.state.favourireList),this.props.city===this.state.favourireList[t])return this.star.setAttribute("data-favourite",!0);this.star.setAttribute("data-favourite",!1)}}},{key:"addToFavourite",value:function(){if("true"===this.star.dataset.favourite)this.star.setAttribute("data-favourite",!1),document.getElementById(this.props.city).remove(),(0,s.removeFavourite)(this.state.favourireList,this.props.city),(0,s.saveLocalStorage)(this.state.favourireList);else if(""===this.props.city)this.star.disabled=!0;else{var t=document.createElement("li");t.setAttribute("id",this.props.city),t.innerHTML="<a>"+this.props.city+"</a>",this.star.setAttribute("data-favourite",!0),this.ul.appendChild(t),(0,s.showHideStar)(this.host),this.state.favourireList.push(this.props.city),(0,s.saveLocalStorage)(this.state.favourireList)}}},{key:"render",value:function(){var t=this.props,e=(t.city,t.coord,this.state.favourireList);this.ul.innerHTML="";for(var n=0;n<e.length;n++){var o='<li id="'+e[n]+'">\n                            <a>'+e[n]+"</a>\n                            </li>";this.ul.insertAdjacentHTML("beforeend",o)}return this.star.disabled=!1,this.checkFList(),this.star.addEventListener("click",this.addToFavourite),this.ul.addEventListener("click",this.showFavouriteCity),[this.list,this.star,this.ul]}}]),e}(c.Component);e.default=l},function(t,e,n){"use strict";function o(){var t=document.querySelector(".f"),e=document.querySelector(".c"),n=document.querySelectorAll(".temp"),o=document.querySelectorAll(".cf");e.disabled=!0,t.onclick=function(){for(var r=0;r<n.length;r++){var a=parseFloat(n[r].innerHTML);a=1.8*a+32,n[r].textContent=a.toFixed(1),o[r].textContent="F"}t.disabled=!0,e.disabled=!1},e.onclick=function(){for(var r=0;r<n.length;r++){var a=parseFloat(n[r].innerHTML);a=5/9*(a-32),n[r].textContent=a.toFixed(1),o[r].textContent="C"}e.disabled=!0,t.disabled=!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.swapFC=o},function(t,e,n){"use strict";function o(){var t=document.getElementById("box"),e=document.getElementById("stars").offsetLeft,n=document.getElementById("stars").offsetTop,o=document.getElementById("moon").offsetLeft,a=document.getElementById("moon").offsetTop,i=document.getElementById("clouds").offsetLeft,s=document.getElementById("clouds").offsetTop,u=document.getElementById("mountains").offsetLeft,c=document.getElementById("mountains").offsetTop;t.onmousemove=function(l){l=l||window.event;var f=l.clientX-t.offsetLeft,d=l.clientY-t.offsetTop;r("stars",e,n,f,d,5),r("moon",o,a,f,d,15),r("clouds",i,s,f,d,30),r("mountains",u,c,f,d,65)}}function r(t,e,n,o,r,a){var i=document.getElementById(t),s=i.parentNode,u=parseInt(s.offsetWidth),c=parseInt(s.offsetHeight);i.style.left=e-(o-(parseInt(i.offsetWidth)/2+e))/u*a+"px",i.style.top=n-(r-(parseInt(i.offsetHeight)/2+n))/c*a+"px"}Object.defineProperty(e,"__esModule",{value:!0}),e.parallax=o},function(t,e){}]);