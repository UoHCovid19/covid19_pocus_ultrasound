(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"47lQ":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("jnJt"),c=function(){return r.a.createElement("footer",{className:"app-footer pt-5"},r.a.createElement("div",{className:"container mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-lg-5 mb-5 mb-md-0"},r.a.createElement("h2",{className:"mb-1"},l.a.appTitle),r.a.createElement("p",null,"POCUS image analysis through AI to screen COVID-19 and pneumonia or healthy people.")),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"mb-4"},"Legal"),r.a.createElement("ul",{className:"app-footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:""},"Data privacy")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Terms of service")))),r.a.createElement("div",{className:"col offset-1"},r.a.createElement("h3",{className:"mb-4"},"Handy links"),r.a.createElement("ul",{className:"app-footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://arxiv.org/abs/2004.12084",title:"Read our scientific article",target:"_blank"},"Scientific article")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/jannisborn/covid19_pocus_ultrasound",target:"_blank",title:"Find out how we achieved this"},"GitHub repository")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://devpost.com/software/automatic-detection-of-covid-19-from-pocus-ultrasound-data",target:"_blank",title:"Read our DevPost"},"DevPost")))))))),r.a.createElement("div",{className:"copyright py-2"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col"},"© Copyright ",(new Date).getFullYear()),r.a.createElement("div",{className:"col text-right"},"A ",r.a.createElement("a",{href:"https://www.codevscovid19.org/",target:"_blank",title:"Visit the official event page"},"#CodeVsCovid19"),", ",r.a.createElement("a",{href:"https://euvsvirus.org/",target:"_blank",title:"Visit the official event page"},"#EUvsVirus"),"  project")))))};function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.a=function(e){var t=e.className,a=s(e,["className"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"app-main"},r.a.createElement("div",{className:t},a.children)),r.a.createElement(c,null))}},"5g2E":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("jnJt"),c=function(e){return r.a.createElement("section",{className:"text-center container-fluid"},r.a.createElement("div",{className:"teaser-wrapper ".concat(e.additionalClass)},r.a.createElement("div",{className:"teaser"},r.a.createElement("div",{className:"teaser-text col-12 col-lg-8 col-xl-6"},r.a.createElement("header",null,r.a.createElement("h1",null,l.a.appTitle),r.a.createElement("p",null,e.teaser))))))};c.defaultProps={additionalClass:""},t.a=c},"AQ8+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("5g2E"),c=a("qhky"),s=a("jnJt"),o=a("yzbm"),i=a("47lQ"),m=a("ZE91"),u=a.n(m),p=a("mDcw"),d=a.n(p),f=a("eUdT"),E=a("Ty5D");function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=Object(n.useContext)(f.a),t=Object(E.g)(),a="light"===e.themeMode,m=d.a;a&&(m=u.a);var p=v(Object(n.useState)([]),2),b=p[0],g=p[1];Object(n.useEffect)((function(){return function(){b.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[b]);var h=Object(o.a)({accept:"image/png, image/jpeg, image/jpg",noClick:!0,multiple:!0,noKeyboard:!0,onDrop:function(e){g(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),N=h.getRootProps,y=h.getInputProps,w=h.open,j=b.map((function(e){return r.a.createElement("div",{className:"thumb",key:e.name},r.a.createElement("div",{className:"thumb-inner"},r.a.createElement("img",{src:e.preview})))}));return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement("title",null,"Screen - ",s.a.appTitle)),r.a.createElement(l.a,{additionalClass:"small",teaser:"Select the images you want to analyses"}),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.push({pathname:"/screen/results",state:{files:b}})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 offset-lg-1"},r.a.createElement("section",{className:"file-upload-area text-center"},r.a.createElement("img",{src:m,className:"mt-3 mb-2"}),r.a.createElement("div",N({className:"dropzone"}),r.a.createElement("input",y()),r.a.createElement("button",{type:"button",className:"button primary round my-4 px-5",onClick:w},"Choose file"),r.a.createElement("p",null,"Or drag and drop some files here"))))),r.a.createElement("aside",{className:"thumbs-container justify-content-center"},j),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-10 offset-lg-1"},b.length>0&&r.a.createElement("button",{className:"button primary round w-100 text-uppercase mt-4"},"Confirm"))))),r.a.createElement("div",{className:"spacer"}))}},ZE91:function(e,t){e.exports="/images/download.svg?4861d7cb6b1840333fd988f95ab0c6a0"},mDcw:function(e,t){e.exports="/images/download-dark.svg?870a552c6f977dfdd3671bb01e9bb11a"}}]);
//# sourceMappingURL=5.js.map