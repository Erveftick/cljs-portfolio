goog.provide('cljs_portfolio.views.menu');
cljs_portfolio.views.menu.nav_menu_items = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#about",new cljs.core.Keyword(null,"title","title",636505583),"About"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#work-experience",new cljs.core.Keyword(null,"title","title",636505583),"Work"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#projects",new cljs.core.Keyword(null,"title","title",636505583),"Projects"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#edu",new cljs.core.Keyword(null,"title","title",636505583),"Education"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#leadership",new cljs.core.Keyword(null,"title","title",636505583),"Leadership"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#contact",new cljs.core.Keyword(null,"title","title",636505583),"Contact"], null)], null);
cljs_portfolio.views.menu.nav_menu = (function cljs_portfolio$views$menu$nav_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu__item.menu__main_nav_item","div.menu__item.menu__main_nav_item",2117519045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-direction","data-direction",1954636275),"bt"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.menu__item-inner","div.menu__item-inner",535158361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mainmenu","div.mainmenu",-1493138585),(function (){var iter__5523__auto__ = (function cljs_portfolio$views$menu$nav_menu_$_iter__17138(s__17139){
return (new cljs.core.LazySeq(null,(function (){
var s__17139__$1 = s__17139;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17139__$1);
if(temp__5804__auto__){
var s__17139__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17139__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17139__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17141 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17140 = (0);
while(true){
if((i__17140 < size__5522__auto__)){
var map__17142 = cljs.core._nth(c__5521__auto__,i__17140);
var map__17142__$1 = cljs.core.__destructure_map(map__17142);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17142__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17142__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append(b__17141,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mainmenu__item","a.mainmenu__item",568386190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null));

var G__17144 = (i__17140 + (1));
i__17140 = G__17144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17141),cljs_portfolio$views$menu$nav_menu_$_iter__17138(cljs.core.chunk_rest(s__17139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17141),null);
}
} else {
var map__17143 = cljs.core.first(s__17139__$2);
var map__17143__$1 = cljs.core.__destructure_map(map__17143);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17143__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17143__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mainmenu__item","a.mainmenu__item",568386190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),title], null),cljs_portfolio$views$menu$nav_menu_$_iter__17138(cljs.core.rest(s__17139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs_portfolio.views.menu.nav_menu_items);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.label.label--topleft.label--vert-mirror","p.label.label--topleft.label--vert-mirror",-1743753599),"Navigation menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.label.label--bottomright.label--vert","p.label.label--bottomright.label--vert",-463904311),"Edward Kvashyn"], null)], null)], null);
});
cljs_portfolio.views.menu.menu = (function cljs_portfolio$views$menu$menu(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.menu","nav.menu",712557538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.menu.nav_menu], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action.action--menu","button.action.action--menu",-786718040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.icon.icon--menu","svg.icon.icon--menu",-1444659027),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),"#icon-menu"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action.action--close","button.action.action--close",234430638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.icon.icon--close","svg.icon.icon--close",1395056185),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),"#icon-close"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=cljs_portfolio.views.menu.js.map
