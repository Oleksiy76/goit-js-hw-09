!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector(".form");document.querySelector('button[type="submit"]');function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.target.delay.value),o=Number(t.target.step.value),r=Number(t.target.amount.value);if(n<=0||o<=0||r<=0)e(i).Notify.warning("Render not possible, enter value > 0");else{for(var l=1;l<=r;l+=1)a(l,n).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o;u.reset()}}))}();
//# sourceMappingURL=03-promises.5e540f1f.js.map