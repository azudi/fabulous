(this.webpackJsonpfabber=this.webpackJsonpfabber||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(8),l=c.n(r),n=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),r(e),l(e)}))},o=(c(7),c(2)),i=c(3),d=c(5),j=c(4),h=(c(13),c(0)),p=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={show:"fa fa-chevron-up upper"},e.componentDidMount=function(){window.onscroll=function(){window.scrollY<document.querySelector("body").clientHeight/2.35?e.setState({show:"fa fa-chevron-up upper"}):(e.setState({show:"fa fa-chevron-up upper noupper"}),console.log("alert"))}},e.scrollUp=function(){window.scrollTo(0,0)},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"text-center relative header flex",children:[Object(h.jsx)("div",{className:"cover-head"}),Object(h.jsx)("h1",{className:"col-md-12",children:"fabulous store"}),Object(h.jsx)("p",{className:"col-md-6",children:"Our store is entitled to bring the best design to any interior keeping comfortability our motto. from beddings to other interior design"}),Object(h.jsxs)("i",{className:"col-md-12",children:[Object(h.jsx)("i",{className:"fa fa-phone"})," +234 703 735 2463"]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"flex align-center",children:[Object(h.jsx)("div",{className:"col-md-4 col-lg-3",children:Object(h.jsx)("h1",{className:"colour-h1 liner",children:"OUR WORK"})}),Object(h.jsxs)("div",{className:"col-md7 col-lg-7 flex",children:[Object(h.jsx)("div",{className:" col-md-6 work-div pillow",children:Object(h.jsx)("h3",{children:"pillow"})}),Object(h.jsx)("div",{className:" col-md-6 work-div duvet-cover",children:Object(h.jsx)("h3",{children:"Duvet-Cover"})}),Object(h.jsx)("div",{className:" col-md-6 work-div bedsheet",children:Object(h.jsx)("h3",{children:"Bedspread"})}),Object(h.jsx)("div",{className:" col-md-6 work-div throw-pillows",children:Object(h.jsx)("h3",{children:"Throw-pillow"})}),Object(h.jsx)("div",{className:" col-md-6 work-div duvet",children:Object(h.jsx)("h3",{children:"duvet"})})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{onClick:this.scrollUp,className:this.state.show})]})}}]),c}(a.a.Component),m=p,b=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={products:[],firstproduct:[],popUp:"",changeCartStyle:"cookie-display off",count:0,cartproduct:[],cookie:"",nocartmsg:"",blog:[]},e.componentDidMount=function(){fetch(window.location.href.substring(0,window.location.href.lastIndexOf("/"))+"/ajax/product.json").then((function(e){return e.json()})).then((function(t){return e.load(t)})).catch((function(e){return console.log(e)})),document.querySelector("body").onscroll=function(e){console.log(document.querySelector("body").scrollTop)},e.setState({count:JSON.parse(localStorage.getItem("cartpic")).length}),null!==localStorage.getItem("cartpic")&&e.setState({cartproduct:JSON.parse(localStorage.getItem("cartpic"))})},e.load=function(t){e.setState({products:t});for(var c=0;c<8;c++)e.state.firstproduct.push(t.product[c]);e.setState({firstproduct:e.state.firstproduct})},e.loadAll=function(){var t=[];if(e.state.products.product.length>50){for(var c=0;c<e.state.products.product.length;c++)t.push(e.state.products.product[c]);e.setState({firstproduct:t})}else e.setState({firstproduct:e.state.products.product})},e.rotateLeft=function(e){e.target.parentElement.children[0].style.display="none",setTimeout((function(){e.target.parentElement.children[0].style.display="block",e.target.parentElement.children[0].style.transform="rotateZ(-90deg)"}),85)},e.rotateRight=function(e){e.target.parentElement.children[0].style.display="none",setTimeout((function(){e.target.parentElement.children[0].style.display="block",e.target.parentElement.children[0].style.transform="rotateZ(90deg)"}),85)},e.cartAdd=function(t){e.setState({popUp:Object(h.jsxs)("div",{className:"hanger",children:[Object(h.jsx)("img",{className:"respond",src:t.target.src}),Object(h.jsx)("button",{onClick:e.placecart,className:"view-gallery",children:"Add to Review Cart"}),Object(h.jsx)("i",{onClick:e.rotateLeft,className:"fa fa-rotate-left round"}),Object(h.jsx)("i",{onClick:e.rotateRight,className:"fa fa-rotate-right round"}),Object(h.jsx)("span",{onClick:e.cancleCart,className:"pop-remove",children:"x"})]})})},e.placecart=function(t){if(null!==localStorage.getItem("cartpic")){for(var c=0,s=0;s<e.state.cartproduct.length;s++)t.target.parentElement.children[0].src===e.state.cartproduct[s]&&c++;c<=0?(e.state.cartproduct.push(t.target.parentElement.children[0].src),e.setState({cartproduct:e.state.cartproduct}),localStorage.setItem("cartpic",JSON.stringify(e.state.cartproduct)),e.setState({count:JSON.parse(localStorage.getItem("cartpic")).length})):alert("These item is already added to your cart")}},e.cookiImgTurnR=function(e){e.target.parentElement.parentElement.children[0].style.display="none",setTimeout((function(){e.target.parentElement.parentElement.children[0].style.display="block",e.target.parentElement.parentElement.children[0].style.transform="rotateZ(90deg)"}),85)},e.cookiImgTurnL=function(e){e.target.parentElement.parentElement.children[0].style.display="none",setTimeout((function(){e.target.parentElement.parentElement.children[0].style.display="block",e.target.parentElement.parentElement.children[0].style.transform="rotateZ(-90deg)"}),85)},e.cookieDelete=function(t){for(var c=[],s=0;s<e.state.cartproduct.length;s++)t.target.parentElement.parentElement.children[0].src!==e.state.cartproduct[s]&&c.push(e.state.cartproduct[s]);e.setState({cartproduct:c}),localStorage.setItem("cartpic",JSON.stringify(c)),e.setState({count:c.length}),0==JSON.parse(localStorage.getItem("cartpic")).length?e.setState({nocartmsg:Object(h.jsx)("h3",{className:"nocartmsg",children:"NO CART ITEM "})}):e.setState({nocartmsg:""})},e.cancleCart=function(){e.setState({popUp:""})},e.cartDisplay=function(){0==JSON.parse(localStorage.getItem("cartpic")).length?e.setState({nocartmsg:Object(h.jsx)("h3",{className:"nocartmsg",children:"NO CART ITEM "})}):e.setState({nocartmsg:""}),e.setState({changeCartStyle:"cookie-display"});document.querySelectorAll(".rotate")},e.put=function(t){e.setState({blog:t})},e.Navigate=function(t){try{var c=t.target.parentElement.parentElement.children[0].src;fetch(t.target.parentElement.parentElement.children[0].src).then((function(e){return e.blob})).then((function(t){return e.put(t)}));var s=[new File([e.state.blog],c.substring(c.lastIndexOf("/")+1),{type:"image/jpg"})];console.log(s);var a={title:window.document.title,text:"shared bedsheet image",url:window.document.location.href,files:s};navigator.canShare(a)&&navigator.canShare({files:s})?(console.log("done and dusted"),navigator.canShare&&navigator.share(a)):alert("please upgrade your browser to experience all our features ")}catch(r){console.log("something went wromg")}},e.offcart=function(){e.setState({changeCartStyle:"cookie-display off"})},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"flex mar-down",children:[Object(h.jsxs)("div",{className:this.state.changeCartStyle,children:[Object(h.jsx)("h4",{children:"cart"}),Object(h.jsx)("span",{className:"cookie-remove",onClick:this.offcart,children:"x"}),this.state.nocartmsg,this.state.cartproduct.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"respond rotate",src:t}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{onClick:e.cookiImgTurnL,className:"fa fa-rotate-left tools"}),Object(h.jsx)("span",{onClick:e.cookiImgTurnR,className:"fa fa-rotate-right tools"}),Object(h.jsx)("span",{onClick:e.cookieDelete,className:"fa fa-trash tools"}),Object(h.jsx)("span",{onClick:e.Navigate,className:"fa fa-share-alt tools"})]})]},t)}))]}),this.state.cookie,Object(h.jsx)("h3",{className:"col-lg-10 col-md-11 colour-h1 avail",children:"Available Stock"}),this.state.popUp,Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("div",{className:"col-md-11 col-lg-10 flex",children:this.state.firstproduct.map((function(t){return Object(h.jsx)("div",{className:"col-sm-6 col-md-3 avail-img",children:Object(h.jsx)("img",{onClick:e.cartAdd,className:"respond prod-img",src:t.img})},t.id)}))}),Object(h.jsx)("div",{className:"col-md-10",children:Object(h.jsx)("button",{onClick:this.loadAll,className:"view-gallery",children:"View gallery"})})]}),Object(h.jsxs)("div",{className:"col-lg-10 col-md-11 services",children:[Object(h.jsx)("h4",{className:"col-lg-10 col-md-11 colour-h1",children:"Our services Cut Accross "}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("div",{className:"col-md-4 service-col",children:[Object(h.jsx)("b",{children:"Hospitals"}),Object(h.jsx)("h2",{children:"7+"})]}),Object(h.jsxs)("div",{className:"col-md-4 service-col",children:[Object(h.jsx)("b",{children:"Hotels"}),Object(h.jsx)("h2",{children:"15+"})]}),Object(h.jsxs)("div",{className:"col-md-4 service-col",children:[Object(h.jsx)("b",{children:"costomers"}),Object(h.jsx)("h2",{children:"2000+"})]})]})]}),Object(h.jsxs)("span",{onClick:this.cartDisplay,className:"cart",children:[Object(h.jsx)("i",{className:"fa fa-shopping-basket"})," ",Object(h.jsx)("span",{children:this.state.count})]})]})}}]),c}(a.a.Component),u=b,g=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:" flex",children:Object(h.jsxs)("div",{className:"col-12 flex",children:[Object(h.jsx)("h3",{className:"col-lg-10 col-md-11 colour-h1 line-down",children:"Special Available Stock"}),Object(h.jsxs)("div",{className:"col-sm-6 col-md-4 flex special-product",children:[Object(h.jsx)("div",{className:"col-5",children:Object(h.jsx)("img",{className:"respond",src:"pics/other-pics/Elasticated-White-Bed-Sheet-Design.jpg"})}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h5",{children:"White bedspread"}),Object(h.jsx)("p",{children:"We sell all sorts of white ranging from strips-white, designers-white, and plane white with quality next to none"})]})]}),Object(h.jsxs)("div",{className:"col-sm-6 col-md-4 flex special-product",children:[Object(h.jsx)("div",{className:"col-5",children:Object(h.jsx)("img",{className:"respond",src:"pics/other-pics/coloured-bedsheet.jpg"})}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h5",{children:"colour bedspread"}),Object(h.jsx)("p",{children:"All colour of italian bedsheet with top notch quality forieng texture"})]})]}),Object(h.jsxs)("div",{className:"col-sm-6 col-md-4 flex special-product",children:[Object(h.jsx)("div",{className:"col-5",children:Object(h.jsx)("img",{className:"respond",src:"pics/other-pics/forieng-trow-pillow.jpg"})}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h5",{children:"Foreign throw-pillow"}),Object(h.jsx)("p",{children:"We have throw pillow of local made and foreign made available based on costumer request"})]})]}),Object(h.jsxs)("div",{className:"col-sm-6 col-md-4 flex special-product",children:[Object(h.jsx)("div",{className:"col-5",children:Object(h.jsx)("img",{className:"respond",src:"pics/other-pics/white-towel.jpg"})}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h5",{children:"White towel"}),Object(h.jsx)("p",{children:"Our towel is one of it's foreign kind with high durability and best texture"})]})]}),Object(h.jsxs)("div",{className:"col-sm-6 col-md-4 flex special-product",children:[Object(h.jsx)("div",{className:"col-5",children:Object(h.jsx)("img",{className:"respond",src:"pics/other-pics/bail.jpg"})}),Object(h.jsxs)("div",{className:"col-7",children:[Object(h.jsx)("h5",{children:"Bails"}),Object(h.jsx)("p",{children:"We distribute bail with latest designs to anyone around the world at cheap price"})]})]})]})})}}]),c}(a.a.Component),O=g,f=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"footer align-center flex",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("iframe",{className:"iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.3696762223096!2d7.427141009086939!3d10.521183767744938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355aa93d2143%3A0xc3926e6669ae87db!2sFabulous!5e0!3m2!1sen!2sng!4v1632615637150!5m2!1sen!2sng",allowfullScreen:"",loading:"lazy"})}),Object(h.jsxs)("div",{className:"col-md-5 footer-contact",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"location"}),Object(h.jsx)("p",{children:"KSMDMC Shopping Plaza, Broadcasting Road, Off Leventis Roundabout, Kaduna, Kaduna"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contact"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"+234 906 546 6978"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"+234 906 546 6978"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"+234 906 546 6978"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"www.fabulousstore@gmail.com"})]})]}),Object(h.jsx)("div",{className:"foot-note col-12",children:"\xa9copyright since 2021. Design by jerry azubuike"})]})}}]),c}(a.a.Component),x=f,v=(a.a.Component,c.p+"static/media/logo.6ce24c58.svg");c(15);var N=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("h1",{children:"this casn also be edited"}),Object(h.jsx)("img",{src:v,className:"App-logo",alt:"logo"}),Object(h.jsxs)("p",{children:["Edit ",Object(h.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]})};l.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),n()},7:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.cea98d05.chunk.js.map