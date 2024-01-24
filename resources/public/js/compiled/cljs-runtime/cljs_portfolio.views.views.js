goog.provide('cljs_portfolio.views.views');
cljs_portfolio.views.views.style_rules = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"#fff","#fff",461169500),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"\"Muli\",\"Philosopher\", sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"-20em","-20em",151086176),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"-25em","-25em",-443862044)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".content",".content",528321340),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"left","left",-399115937),"0 auto",new cljs.core.Keyword(null,"100","100",943295053),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"100vh","100vh",-1797297823)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".main-label-block",".main-label-block",250982925),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 10em",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"contents","contents",-1567174023)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".background",".background",-500133012),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"perspective","perspective",1459886798),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"100%","100%",2121014846),new cljs.core.Keyword(null,"300px","300px",896227686),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"absolute","absolute",1655386478),"0% 50%",new cljs.core.Keyword(null,"cover","cover",-823541365),new cljs.core.Keyword(null,"100%","100%",2121014846)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".background__copy",".background__copy",-834468239),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.Keyword(null,"7em","7em",1894332238),new cljs.core.Keyword(null,"90%","90%",1395882264),"url(../img/hands-me.jpg)",new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"0.3","0.3",1137093594),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"no-repeat","no-repeat",-1389921730),"0% 25%","contain",new cljs.core.Keyword(null,"80%","80%",-947378453),new cljs.core.Keyword(null,"10em","10em",66596746)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".content_label",".content_label",1559391356),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"mix-blend-mode","mix-blend-mode",-1150163607),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"margin","margin",-995903681)],[new cljs.core.Keyword(null,"0.8","0.8",821233714),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),new cljs.core.Keyword(null,"#fbd54a","#fbd54a",849330304),new cljs.core.Keyword(null,"12vw","12vw",-1719697319),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),"\"Philosopher\", serif",new cljs.core.Keyword(null,"0","0",351625802)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&_left","&_left",-1048533163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"-1em","-1em",-1838671799)], null)], null)], null),garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"1200px","1200px",717155757)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null)], 0)),garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"996px","996px",-1505310694)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".background__copy",".background__copy",-834468239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"4em","4em",1741576318)], null)], null)], null)], 0)),garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"576px","576px",5167012)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"-28em","-28em",-1612413063),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"-11em","-11em",-59208001)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".background__copy",".background__copy",-834468239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"3em","3em",-2063243030),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"0em","0em",1081035473)], null)], null)], null)], 0)),garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"53em","53em",-1539647464)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".content",".content",528321340),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0 auto",new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"100vh","100vh",-1797297823),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null)], 0))], null);
cljs_portfolio.views.views.portfolio_labels = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + (1)),itm], null);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Portfolio","from","Waterloo,","Canada"], null));
cljs_portfolio.views.views.app = (function cljs_portfolio$views$views$app(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.menu.menu], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas.wow.fadeIn","canvas.wow.fadeIn",-416812084)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_portfolio.views.views.style_rules], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.background.wow.fadeIn","div.background.wow.fadeIn",998369314)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-label-block","div.main-label-block",1010103259)], null),(function (){var iter__5523__auto__ = (function cljs_portfolio$views$views$app_$_iter__20151(s__20152){
return (new cljs.core.LazySeq(null,(function (){
var s__20152__$1 = s__20152;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20152__$1);
if(temp__5804__auto__){
var s__20152__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20152__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20152__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20154 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20153 = (0);
while(true){
if((i__20153 < size__5522__auto__)){
var vec__20156 = cljs.core._nth(c__5521__auto__,i__20153);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(1),null);
cljs.core.chunk_append(b__20154,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.wow.fadeInUp.content_label","label.wow.fadeInUp.content_label",1991190680),(function (){var G__20159 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null);
if((idx > (2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20159,new cljs.core.Keyword(null,"class","class",-2030961996),"content_label_left");
} else {
return G__20159;
}
})(),title], null));

var G__20168 = (i__20153 + (1));
i__20153 = G__20168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20154),cljs_portfolio$views$views$app_$_iter__20151(cljs.core.chunk_rest(s__20152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20154),null);
}
} else {
var vec__20163 = cljs.core.first(s__20152__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20163,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20163,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.wow.fadeInUp.content_label","label.wow.fadeInUp.content_label",1991190680),(function (){var G__20166 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null);
if((idx > (2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20166,new cljs.core.Keyword(null,"class","class",-2030961996),"content_label_left");
} else {
return G__20166;
}
})(),title], null),cljs_portfolio$views$views$app_$_iter__20151(cljs.core.rest(s__20152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs_portfolio.views.views.portfolio_labels);
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.about.about], null)], null);
});

//# sourceMappingURL=cljs_portfolio.views.views.js.map
