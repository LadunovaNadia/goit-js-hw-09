document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(t){t.preventDefault();var o=e.querySelector('input[name="delay"]'),a=e.querySelector('input[name="step"]'),i=e.querySelector('input[name="amount"]'),r=parseInt(o.value),c=parseInt(a.value);!function(e,t,o){for(var a=0;a<e;a++)n(a+1,t+a*o).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}(parseInt(i.value),r,c)}))}));
//# sourceMappingURL=03-promises.98a7ddfc.js.map