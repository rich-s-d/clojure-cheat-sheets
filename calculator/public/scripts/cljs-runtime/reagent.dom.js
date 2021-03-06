goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36407 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36408 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36408);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__36410 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36411 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36411);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36410);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36407);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36423 = arguments.length;
switch (G__36423) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__36425 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36425,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36425,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36437_36466 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36438_36467 = null;
var count__36439_36468 = (0);
var i__36440_36469 = (0);
while(true){
if((i__36440_36469 < count__36439_36468)){
var vec__36455_36470 = chunk__36438_36467.cljs$core$IIndexed$_nth$arity$2(null,i__36440_36469);
var container_36471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455_36470,(0),null);
var comp_36472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455_36470,(1),null);
reagent.dom.re_render_component(comp_36472,container_36471);


var G__36473 = seq__36437_36466;
var G__36474 = chunk__36438_36467;
var G__36475 = count__36439_36468;
var G__36476 = (i__36440_36469 + (1));
seq__36437_36466 = G__36473;
chunk__36438_36467 = G__36474;
count__36439_36468 = G__36475;
i__36440_36469 = G__36476;
continue;
} else {
var temp__5735__auto___36477 = cljs.core.seq(seq__36437_36466);
if(temp__5735__auto___36477){
var seq__36437_36478__$1 = temp__5735__auto___36477;
if(cljs.core.chunked_seq_QMARK_(seq__36437_36478__$1)){
var c__4556__auto___36479 = cljs.core.chunk_first(seq__36437_36478__$1);
var G__36481 = cljs.core.chunk_rest(seq__36437_36478__$1);
var G__36482 = c__4556__auto___36479;
var G__36483 = cljs.core.count(c__4556__auto___36479);
var G__36484 = (0);
seq__36437_36466 = G__36481;
chunk__36438_36467 = G__36482;
count__36439_36468 = G__36483;
i__36440_36469 = G__36484;
continue;
} else {
var vec__36458_36485 = cljs.core.first(seq__36437_36478__$1);
var container_36486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458_36485,(0),null);
var comp_36487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36458_36485,(1),null);
reagent.dom.re_render_component(comp_36487,container_36486);


var G__36490 = cljs.core.next(seq__36437_36478__$1);
var G__36491 = null;
var G__36492 = (0);
var G__36493 = (0);
seq__36437_36466 = G__36490;
chunk__36438_36467 = G__36491;
count__36439_36468 = G__36492;
i__36440_36469 = G__36493;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
