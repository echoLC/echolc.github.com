(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1oc3":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("tHN7"),c=n("su/s"),l=n("5hye"),s=a.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-11ssqgw-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=a.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-11ssqgw-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=a.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-11ssqgw-2"})(["font-weight:700;font-size:3rem;margin:10px 50px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.85);"],l.a.white),d=a.b.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-11ssqgw-3"})(["margin:10px 50px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.85);"],l.a.white);t.a=function(e){var t=Object(i.a)().siteCover,n=Object(c.a)(t).fluid,r=e.heroImg||n.src;return o.a.createElement(s,{style:{backgroundImage:'url("'+r+'")'}},o.a.createElement(p,null,o.a.createElement(u,null,e.title),e.subTitle&&o.a.createElement(d,null,e.subTitle)))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KE4F:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=n("b9pq"),l=n("Wbzz"),s=n("5hye"),p=i.b.div.withConfig({displayName:"Translations__TranslationContainer",componentId:"xnbzlx-0"})(["border-radius:5px;padding:10px;margin-top:10px;background-color:",";border:1px solid ",";"],s.a.lightYellow,s.a.grey700),u=i.b.span.withConfig({displayName:"Translations__InfoText",componentId:"xnbzlx-1"})(["color:",";"],s.a.grey900),d=i.b.a.withConfig({displayName:"Translations__TranslationLink",componentId:"xnbzlx-2"})(["color:",";text-decoration:underline;"],s.a.grey900),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.translations;return a.a.createElement(p,null,a.a.createElement(u,null,"This article also exists in: "),e.map((function(t,n){return a.a.createElement(o.Fragment,{key:"translation-"+n},a.a.createElement(d,{href:Object(l.withPrefix)(t.link)},t.language),n<e.length-1?", ":"")})))},t}(a.a.Component),h=function(e){var t=i.b.time.withConfig({displayName:"Time__TimeContainer",componentId:"f76ycl-0"})(["color:",";"],s.a.postMetadata),n=e.date,r=new Date(n),o=r.toLocaleDateString("chinese",{year:"numeric",month:"2-digit",day:"numeric"}).split("/").reverse().join("-"),c=r.toLocaleDateString("chinese",{year:"numeric",month:"long",day:"numeric"});return a.a.createElement(t,{datetime:o},c)},m=n("LObP"),f=i.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"zp5a3e-0"})(["margin-bottom:2rem;color:",";font-size:0.9em;"],s.a.textLight),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags,r=e.translations;return a.a.createElement(f,null,t&&a.a.createElement(h,{date:t}),t&&Array.isArray(n)&&n.length>0&&a.a.createElement(m.a,null),Array.isArray(n)&&n.length>0&&a.a.createElement(o.Fragment,null,a.a.createElement(c.a,{tags:n})),r&&a.a.createElement(g,{translations:r}))},t}(a.a.Component),y=n("X8hv"),x=n.n(y),v=i.b.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-1kg87pw-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{box-shadow:0 2px 0 0 ",";&:hover{filter:brightness(150%);box-shadow:none;}&.anchor,&.gatsby-resp-image-link{box-shadow:none;}}h1 .anchor svg,h2 .anchor svg,h3 .anchor svg,h4 .anchor svg,h5 .anchor svg,h6 .anchor svg{visibility:hidden;margin-left:-16px;}h1:hover .anchor svg,h2:hover .anchor svg,h3:hover .anchor svg,h4:hover .anchor svg,h5:hover .anchor svg,h6:hover .anchor svg,h1 .anchor:focus svg,h2 .anchor:focus svg,h3 .anchor:focus svg,h4 .anchor:focus svg,h5 .anchor:focus svg,h6 .anchor:focus svg{visibility:visible;}& > blockquote{box-sizing:border-box;background-color:#f7f7f7;border-left:5px solid rgb(244,213,36);margin:30px 0px;padding:5px 20px;border-radius:0 8px 8px 0;}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em -1.5em;@media (max-width:500px){border-radius:0;margin-left:-25px;margin-right:-25px;}}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight pre[class*='language-']{float:left;min-width:100%;}& .gatsby-highlight-code-line{background-color:",";display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid ",";}& h1 > code.language-text,& h2 > code.language-text,& h3 > code.language-text,& h4 > code.language-text,& h5 > code.language-text,& h6 > code.language-text,& a > code.language-text,& p > code.language-text,& li > code.language-text,& em > code.language-text,& strong > code.language-text{background:",";color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;word-wrap:break-word;}& code{word-wrap:break-word;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#f7f7f7;border-bottom:2px solid ",";}}"],s.a.links,s.a.highlight_code_linebg,s.a.highlight_code_bg,s.a.highlight_code_oneline,s.a.white),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.content,n=e.date,r=e.tags,o=e.translations;return a.a.createElement("section",null,(r||n||o)&&a.a.createElement(b,{date:n,tags:r,translations:o}),a.a.createElement(v,null,a.a.createElement(x.a,null,t)))},t}(a.a.Component);t.a=w},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},VxdY:function(e,t,n){},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),i=n("8OQS");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),p=n("7ljp").mdx,u=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=i(e,["scope","children"]),c=u(t),d=s.useMemo((function(){if(!n)return null;var e=l({React:s,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return s.createElement(d,l({},a))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},b9pq:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("Wbzz"),c=n("vOnD"),l=n("5hye"),s=c.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-1uer3n1-0"})(["display:inline;color:",";"],l.a.postMetadata),p=Object(c.b)(i.Link).withConfig({displayName:"TagList__TagListItemLink",componentId:"sc-1uer3n1-1"})(["text-transform:uppercase;color:",";&:not(:first-child){margin-left:0.3rem;}&:hover{border-bottom:1px dotted ",";}&:before{content:'#';}"],l.a.postMetadata,l.a.textLight),u=c.b.span.withConfig({displayName:"TagList__TagListItem",componentId:"sc-1uer3n1-2"})(["text-transform:uppercase;color:",";&:not(:first-child){margin-left:0.3rem;}&:before{content:'#';}"],l.a.postMetadata),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.noLink;return a.a.createElement(s,null,t.map((function(e,r){return a.a.createElement(o.Fragment,{key:"tag-list-"+r},!n&&a.a.createElement(p,{to:"/tags/"+e},e),n&&a.a.createElement(u,{to:"/tags/"+e},e),r<t.length-1?", ":"")})))},t}(a.a.Component);t.a=d},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,i){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a},sweJ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var r=n("q1tI"),o=n.n(r),a=n("Bl7J"),i=n("KE4F"),c=n("SgMy"),l=n("1oc3"),s=n("EYWl");n("VxdY");t.default=function(e){var t=e.data.page;return o.a.createElement(a.a,{location:e.location},o.a.createElement(s.a,{title:t.frontmatter.title,description:t.excerpt,path:t.frontmatter.slug,cover:t.frontmatter.cover&&t.frontmatter.cover.publicURL}),o.a.createElement(l.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL,title:t.frontmatter.title}),o.a.createElement(c.a,null,o.a.createElement("article",null,o.a.createElement(i.a,{content:t.body,date:t.frontmatter.date}))))};var p="4239095023"}}]);
//# sourceMappingURL=component---src-templates-page-js-a8ba58efc7b2a912209f.js.map