
shadow.cljs.devtools.client.env.module_loaded('app');

try { cljs_portfolio.core.init(); } catch (e) { console.error("An error occurred when calling (cljs-portfolio.core/init)"); throw(e); }