!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in l){var r=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},e.parcelRequired7c6=r);var a=r("1WSnx");let o=document.querySelector("form"),n=document.querySelector("form label input"),u=document.querySelector("form label textarea");document.querySelector("form button");let f={Email:n.value,textArea:u.value};if(null!=localStorage.getItem("feedback-form-state")){let e=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=e.Email,u.value=e.textArea}o.addEventListener("input",(0,a.throttle)(e=>{f.Email=n.value,f.textArea=u.value,localStorage.setItem("feedback-form-state",JSON.stringify(f))},500)),o.addEventListener("submit",e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),n.value="",u.value="",localStorage.clear()})}();
//# sourceMappingURL=03-feedback.6bc05001.js.map
