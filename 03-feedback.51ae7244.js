!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var a=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},e.parcelRequired7c6=a);var o=a("1WSnx");let r=document.querySelector("form"),n=document.querySelector("form label input"),u=document.querySelector("form label textarea");document.querySelector("form button");let f={Email:n.value,textArea:u.value};if(null!=localStorage.getItem("feedback-form-state")){let e=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=e.Email,u.value=e.textArea}r.addEventListener("input",(0,o.throttle)(e=>{f.Email=n.value,f.textArea=u.value,localStorage.setItem("feedback-form-state",JSON.stringify(f))},500)),r.addEventListener("submit",e=>{e.preventDefault(),JSON.parse(null==localStorage.getItem("feedback-form-state"))?console.log("Vault is empty."):console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),n.value="",u.value="",localStorage.clear()})}();
//# sourceMappingURL=03-feedback.51ae7244.js.map