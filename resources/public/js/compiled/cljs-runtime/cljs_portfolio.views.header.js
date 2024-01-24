goog.provide('cljs_portfolio.views.header');
cljs_portfolio.views.header.header_styles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"mix-blend-mode","mix-blend-mode",-1150163607),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"difference","difference",1916101396),new cljs.core.Keyword(null,"100%","100%",2121014846),new cljs.core.Keyword(null,"100","100",943295053),new cljs.core.Keyword(null,"1.5rem","1.5rem",1727719770),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"70px","70px",1602286331),(0)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&_logo","&_logo",105010639),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"1.3rem","1.3rem",-701255633),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&_content","&_content",-151351669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"#bbbbbb","#bbbbbb",-403396874),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"0.95rem","0.95rem",1788764262),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto!important","auto!important",1151143536),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&_button","&_button",-155115274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&_bond","&_bond",-355644101),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210)], null)], null)], null),garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"587px","587px",-840289045)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header",".header",-1761691025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header_logo",".header_logo",1372804141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], 0))], null);
cljs_portfolio.views.header.header_logo = (function cljs_portfolio$views$header$header_logo(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.header_logo.wow.fadeInUp","h3.header_logo.wow.fadeInUp",-1738546717),"Edward Kvashyn"], null);
});
cljs_portfolio.views.header.header_content = (function cljs_portfolio$views$header$header_content(){
var start_year = tick.core.year.cljs$core$IFn$_invoke$arity$1("2020");
var curr_year = tick.core.year.cljs$core$IFn$_invoke$arity$0();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.header_content.wow.fadeInUp","label.header_content.wow.fadeInUp",-1265961735),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_year),"\u2014",cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_year)," \u00B7 Software Developer"].join('')], null);
});
cljs_portfolio.views.header.header_menu = (function cljs_portfolio$views$header$header_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header_button","div.header_button",347665610),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.hidden","svg.hidden",-446488310),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-wow-delay","data-wow-delay",1292877543),"3s"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol#icon-menu","symbol#icon-menu",-298900925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 119 25"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M36,8 L36,0 L100,0 L100,0 L36,0 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z M0,28 L0,20 L71,20 L71,28 L0,28 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol#icon-close","symbol#icon-close",1030152776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"close"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M24 1.485L22.515 0 12 10.515 1.485 0 0 1.485 10.515 12 0 22.515 1.485 24 12 13.484 22.515 24 24 22.515 13.484 12z"], null)], null)], null)], null)], null);
});
cljs_portfolio.views.header.header = (function cljs_portfolio$views$header$header(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_portfolio.views.header.header_styles], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.header.header_logo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.header.header_content], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.header.header_menu], null)], null);
});

//# sourceMappingURL=cljs_portfolio.views.header.js.map
