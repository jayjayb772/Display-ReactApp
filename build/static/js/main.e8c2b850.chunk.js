(this["webpackJsonpledmatrix-webapp"]=this["webpackJsonpledmatrix-webapp"]||[]).push([[0],{148:function(e,t,a){e.exports=a.p+"static/media/bg-img.f373d592.png"},149:function(e,t,a){},155:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(51),o=a.n(r),s=(a(60),a(61),a(11)),i=a(4),u=a(8),l=(a(68),a(9)),m=a(14);function f(){var e=Object(u.a)(["animation: ",""]);return f=function(){return e},e}function d(){var e=Object(u.a)([""," ease-in"]);return d=function(){return e},e}function b(){var e=Object(u.a)(["4s ",""]);return b=function(){return e},e}function v(){var e=Object(u.a)(["",""]);return v=function(){return e},e}function g(){var e=Object(u.a)(["animation: 2s ",""]);return g=function(){return e},e}var j=function(e){var t;t=m.fadeIn;var a=Object(n.useState)(l.b.div(g(),Object(l.c)(v(),t))),r=Object(i.a)(a,2),o=r[0],s=r[1],u=Object(n.useState)(!0),j=Object(i.a)(u,2),O=j[0],E=j[1];function p(){if(!1===O){t=m.fadeOut;s(l.b.div(f(),(function(e){return Object(l.a)(b(),Object(l.c)(d(),t))})))}E(!1)}return Object(n.useEffect)((function(){var e=setInterval((function(){O=!1,p()}),56500);return p(),function(){return clearInterval(e)}}),[]),c.a.createElement(o,null,c.a.createElement("div",{className:"dest",style:{backgroundColor:e.trainInfo.colorHex}},e.trainInfo.dest.substring(15),c.a.createElement("div",{className:"eta"},e.trainInfo.eta),c.a.createElement("div",{className:"train-line"},e.trainInfo.color," Line Train")))};var O=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],f=Object(n.useState)(!1),d=Object(i.a)(f,2),b=d[0],v=d[1];return Object(n.useEffect)((function(){function t(){var t;t=null!==e.stop&null!==e.color?"".concat("https://www.projects.display-orch.j-bender-portfolio.me","/cta/train-times?name=").concat(e.stop,"&color=").concat(e.color):"".concat("https://www.projects.display-orch.j-bender-portfolio.me","/cta/train-times"),fetch(t).then((function(e){return e.json()})).then((function(e){var t=[];void 0===e["Train 1"]?m("No trains now"):(t.push(e["Train 1"]),void 0!==e["Train 2"]&&t.push(e["Train 2"]),void 0!==e["Train 3"]&&t.push(e["Train 3"]),void 0!==e["Train 4"]&&t.push(e["Train 4"]),o([]),v(!0),o(t))}))}t();var a=setInterval((function(){m(""),t()}),6e4);return function(){return clearInterval(a)}}),[]),""!==l?c.a.createElement("div",{className:"Error"},l):b?c.a.createElement("div",null,r.map((function(e){return c.a.createElement(j,{key:e.arrTime,trainInfo:e})}))):c.a.createElement("div",null,"Loading...")},E=(a(148),a(149),a(150),a(13)),p=a.n(E);function h(){var e=Object(u.a)(["animation: ",""]);return h=function(){return e},e}function w(){var e=Object(u.a)(["",""]);return w=function(){return e},e}function N(){var e=Object(u.a)(["4s "," ease-in"]);return N=function(){return e},e}function y(){var e=Object(u.a)(["",""]);return y=function(){return e},e}function L(){var e=Object(u.a)(["animation: 4s "," ease-in"]);return L=function(){return e},e}var x=function(e){var t;t=m.fadeIn;var a,r=Object(n.useState)(l.b.div(L(),Object(l.c)(y(),t))),o=Object(i.a)(r,2),s=o[0],u=o[1],f=Object(n.useState)(!0),d=Object(i.a)(f,2),b=d[0],v=d[1];function g(){if(!1===b){t=m.fadeOut;u(l.b.div(h(),(function(e){return Object(l.a)(N(),Object(l.c)(w(),t))})))}}return Object(n.useEffect)((function(){var e=setInterval((function(){b=!1,v(!1),g()}),3599996);return g(),function(){return clearInterval(e)}}),[]),"Cloudy"===e.forecast.forecast?a="cloudy":"Clear"===e.forecast.forecast?a="clear":"Rain"===e.forecast.forecast?a="rain":"Snow"===e.forecast.forecast&&(a="snow"),c.a.createElement(s,null,c.a.createElement("div",{className:"temps ".concat(a)},e.forecast.min_temp,"\xb0 - ",e.forecast.max_temp,"\xb0",c.a.createElement("div",{className:"date"},c.a.createElement(p.a,{format:"MMMM Do YYYY",interval:1e3,tz:"America/Chicago"},e.forecast.forecast_date)),c.a.createElement("div",{className:"desc"},e.forecast.forecast)))};var I=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],f=Object(n.useState)(!1),d=Object(i.a)(f,2),b=d[0],v=d[1];return Object(n.useEffect)((function(){function t(){var t="".concat("https://www.projects.display-orch.j-bender-portfolio.me","/weather/forecast-week?city=").concat(e.city,"&state=").concat(e.state);fetch(t).then((function(e){return e.json()})).then((function(e){o([]),v(!0),r.push(e),o((function(){return e}))}))}t();var a=setInterval((function(){m(""),t()}),36e5);return function(){return clearInterval(a)}}),[]),""!==l?c.a.createElement("div",{className:"Error"},l):b?c.a.createElement("div",null,r.map((function(t){return c.a.createElement(x,{key:t.forecast_date,forecast:t,dir:e.dir})}))):c.a.createElement("div",null,"Loading...")};a(152),a(155);var C=function(e){var t=Object(n.useState)(Date().toLocaleString()),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){function e(){o(Date().toLocaleString())}e();var t=setInterval((function(){e()}),1e3);return function(){return clearInterval(t)}}),[]),c.a.createElement("div",null,c.a.createElement(p.a,{format:"h:mm:ssa",interval:1e3,tz:"America/Chicago",date:r}),c.a.createElement("br",null),c.a.createElement(p.a,{format:"MMMM Do YYYY",interval:1e3,tz:"America/Chicago",date:r}))},M=a(32),k=a.n(M);a(184);var S=function(e){return c.a.createElement("div",{className:"message"},'"',e.message,'"',c.a.createElement("div",{className:"from"},"- ",e.from,c.a.createElement("div",{className:"time"},c.a.createElement("br",null),c.a.createElement(p.a,{date:e.ts,format:"h:mm:ssa",tz:"America/Chicago"}),c.a.createElement(p.a,{date:e.ts,format:"MMMM Do YYYY",tz:"America/Chicago"}))))},T=(a(185),a(5));var Y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),l=u[0],m=u[1],f="".concat("https://www.projects.display-orch.j-bender-portfolio.me/websocket"),d=new k.a(f);return Object(n.useEffect)((function(){d.onopen=function(){Object(T.debugLog)("sock.onOpen",!1),Object(T.debugLog)("Trying to send test",!1),d.send("test"),Object(T.debugLog)("Connected",!1)},d.onmessage=function(e){if("test"===e.data)Object(T.debugLog)("sock.onMessage: test",!1);else if("stay alive"===e.data)Object(T.debugLog)("sock.onMessage: stay alive",!1);else{Object(T.debugLog)("sock.onMessage: Not test or stay alive",!1);var t=e.data;Object(T.debugLog)("received message",!1);try{r.push(JSON.parse(t)),r.length>5&&(Object(T.debugLog)("messages greater than 4",!1),r.shift()),o(r),m(!0)}catch(a){Object(T.debugLog)("Issue with message",!1),Object(T.debugLog)(a,!0)}}},d.onclose=function(){Object(T.debugLog)("sock.onClose",!1)};var e=setInterval((function(){Object(T.debugLog)("about to try stay alive",!1);try{Object(T.debugLog)("trying to send stay alive",!1),d.send("stay alive"),m(!0)}catch(e){Object(T.debugLog)("error sending stay alive",!0),Object(T.debugLog)("attempting new conn",!1),m(!1),Object(T.debugLog)("opening new connection",!1),d=new k.a(f,null,{timeout:5e6}),Object(T.debugLog)("created new conn",!1)}}),15e3);return function(){return clearInterval(e)}}),[]),l?c.a.createElement("div",{className:"my-bg"},r.map((function(e){return c.a.createElement(S,{key:e.ts,message:e.message,from:e.from,ts:e.ts})}))):c.a.createElement("div",{className:"my-bg"},"Cannot Connect to Discord Websocket")};var B=function(){return c.a.createElement("div",{className:"App bg"},c.a.createElement("div",{className:"MainBox"},c.a.createElement(s.Row,{middle:"xs",center:"xs",around:"xs",className:"TopBox"},c.a.createElement(s.Col,{xs:5,className:"quadrant-left"},c.a.createElement("div",{className:"CTA"},"Montrose",c.a.createElement(O,{stop:"Montrose",color:"Brown"}))),c.a.createElement(s.Col,{xs:5,className:"quadrant-right"},c.a.createElement("div",{className:"CTA"},"Fullerton",c.a.createElement(O,{stop:"Fullerton",color:"Red"})))),c.a.createElement(s.Row,{middle:"xs",center:"xs",around:"xs",className:"BottomBox"},c.a.createElement(s.Col,{xs:5,className:"quadrant-left"},c.a.createElement("div",{className:"Weather"},"Chicago Forecast",c.a.createElement(I,{city:"Chicago",state:"Illinois"}))),c.a.createElement(s.Col,{xs:5,className:"quadrant-right"},c.a.createElement("div",{className:"Discord"},"Discord Messages",c.a.createElement(Y,null)))),c.a.createElement(s.Row,{middle:"xs",center:"xs",around:"xs",className:"TimeBlock"},c.a.createElement(s.Col,null,c.a.createElement("div",{className:"TimeBlock"},c.a.createElement(C,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={debugLog:function(e,t){t?console.error("DEBUG_ERROR: ".concat(e)):console.log("DEBUG_LOG: ".concat(e))}}},55:function(e,t,a){e.exports=a(186)},60:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.e8c2b850.chunk.js.map