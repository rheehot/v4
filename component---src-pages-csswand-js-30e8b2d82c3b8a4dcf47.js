(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});a(189);var r=a(0),n=a.n(r),i=a(186),o=a(187),s=a(191),l=a.n(s);t.default=function(e){var t=e.data;return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement("h1",null,"CSSWand"),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(l.a,{imgStyle:{objectFit:"cover"},style:{margin:"1rem",borderRadius:"20px"},fixed:t.source.edges[2].node.childImageSharp.fixed})),n.a.createElement(p,null,n.a.createElement(f,{style:{marginRight:10}},"React"),n.a.createElement(f,null,"Firebase"),n.a.createElement(f,null,"Ant Design"),n.a.createElement(f,null,"Emotion")),n.a.createElement("a",{href:"https://www.csswand.dev/",style:{display:"inline-block",background:"none"}},n.a.createElement(c,null,"Go to App")),n.a.createElement("a",{href:"https://github.com/oliver-gomes/csswand/",style:{display:"inline-block",background:"none"}},n.a.createElement(u,null,"Github")),n.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},n.a.createElement(l.a,{style:{borderRadius:"20px"},fixed:t.source.edges[3].node.childImageSharp.fixed})),n.a.createElement("p",null,"Took a modern design approach to represent this app with focus on minimal styling."),n.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},n.a.createElement(l.a,{fixed:t.source.edges[0].node.childImageSharp.fixed})),n.a.createElement("p",null,"Then you click on your chosen styling a modal window will pop-up showcasing the HTML and CSS code along with Copy button. The Copy button copies the code and allows the user to paste it in their work"),n.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},n.a.createElement(l.a,{fixed:t.source.edges[1].node.childImageSharp.fixed})),n.a.createElement("p",null,"New Features are added timely and the newest one is a color picker. Where user can find out their favorite color from the picker and copy it to use it in their project"),n.a.createElement("p",null,"This app became popular on Product Hunt and was voted #2 Product of the Day. Feel free to check it out and use it in your workspace")))};var d="1385619147",c=o.a.div.withConfig({displayName:"csswand__Button",componentId:"j01uw3-0"})(["border:1px solid #2eec96;border-radius:10px;width:100%;padding:5px;text-align:center;color:#2eec96;:hover{cursor:pointer;}"]),u=o.a.div.withConfig({displayName:"csswand__ButtonGit",componentId:"j01uw3-1"})(["border:1px solid #333333;border-radius:10px;width:100%;padding:5px;margin-top:10px;margin-left:20px;text-align:center;color:#333333;:hover{cursor:pointer;}"]),f=o.a.div.withConfig({displayName:"csswand__ButtonTag",componentId:"j01uw3-2"})(["width:12%;padding:5px;text-align:center;color:#B8B8B8;@media only screen and (max-width:720px){width:40%;}}"]),p=o.a.div.withConfig({displayName:"csswand__Tags",componentId:"j01uw3-3"})(["display:flex;justify-content:center;margin-bottom:40px;"])},180:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(2),o=a.n(i),s=a(37),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"parsePath",function(){return s.parsePath}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(182),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=n.a.createContext({}),f=function(e){return n.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){n.a.useContext;var t=n.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},182:function(e,t,a){var r;e.exports=(r=a(184))&&r.default||r},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Oliver Gomes Portfolio"}}}}},184:function(e,t,a){"use strict";a.r(t);a(38);var r=a(0),n=a.n(r),i=a(2),o=a.n(i),s=a(58),l=a(3),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},185:function(e,t,a){e.exports=a.p+"static/logo-fd9784065a86450b155c3bc4c8c954c6.png"},186:function(e,t,a){"use strict";var r=a(183),n=a(0),i=a.n(n),o=a(2),s=a.n(o),l=a(180),d=a(185),c=a.n(d),u=a(188),f=a.n(u),p=function(e){return i.a.createElement("li",{style:{display:"inline-block"}},i.a.createElement(l.Link,{to:e.to,style:e.pageYT?m.forYT:m.aLink},e.children))},h=function(e){e.siteTitle;var t=e.newStyle;return i.a.createElement("header",{style:{background:"transparent",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center"}},i.a.createElement(l.Link,{to:"/",style:{background:"none"}},i.a.createElement("img",{src:c.a,width:"100",alt:""})),i.a.createElement("ul",{style:{listStyle:"none",float:"right",marginLeft:"auto"}},i.a.createElement(p,{pageYT:t,to:"/",style:t?m.forYT:m.aLink}," Home"),i.a.createElement(f.a,{cover:!0,to:"/projects/",bg:"#2EEC96",style:t?m.forYT:m.aLink},"Projects"),i.a.createElement(f.a,{cover:!0,to:"/design/",bg:"#2EEC96",style:t?m.forYT:m.aLink},"UI/UX"),i.a.createElement(f.a,{paintDrip:!0,to:"/youtube",color:"red",style:t?m.forYT:m.aLink},"Youtube"))))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var g=h,m={aLink:{color:"#333333",backgroundImage:"none",textDecoration:"none",marginLeft:"2.5rem"},forYT:{color:"white",backgroundImage:"none",textDecoration:"none",marginLeft:"2.5rem"}},y=(a(166),function(e){var t=e.children,a=e.color;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("section",{style:a?{backgroundColor:"red",height:"100%",color:"white"}:null},i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,newStyle:!!a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{marginTop:80}},"© ",(new Date).getFullYear()," Designed & Coded by ",i.a.createElement(l.Link,{to:"/",style:a?{color:"white"}:null},"Oliver Gomes"),"  ",i.a.createElement("br",null),"Built with",i.a.createElement("span",null)," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",style:a?{color:"white"}:null},"Gatsby"))))},data:r})});y.propTypes={children:s.a.node.isRequired};t.a=y},189:function(e,t,a){"use strict";a(190)("fixed",function(e){return function(){return e(this,"tt","","")}})},190:function(e,t,a){var r=a(11),n=a(18),i=a(19),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},191:function(e,t,a){"use strict";var r=a(4);t.__esModule=!0,t.default=void 0;var n,i=r(a(6)),o=r(a(27)),s=r(a(39)),l=r(a(17)),d=r(a(0)),c=r(a(2)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+s+l+a+n+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,w=e.Tag,v=e.itemProp,E="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var T=h;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),T.base64&&d.default.createElement(y,(0,l.default)({src:T.base64},L)),T.tracedSVG&&d.default.createElement(y,(0,l.default)({src:T.tracedSVG},L)),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:T.sizes,src:T.src,srcSet:T.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},T))}}))}if(g){var k=g,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete I.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},L)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},L)),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-pages-csswand-js-30e8b2d82c3b8a4dcf47.js.map