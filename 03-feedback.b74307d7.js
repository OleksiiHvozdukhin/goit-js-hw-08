!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in r){var l=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=l);var o=l("1WSnx");let a=document.querySelector("form"),n=document.querySelector("form label input"),u=document.querySelector("form label textarea");document.querySelector("form button");let i={Email:"",textArea:""};if(null!=localStorage.getItem("feedback-form-state")){let e=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=e.Email,u.value=e.textArea}a.addEventListener("input",(0,o.throttle)(e=>{i.Email=n.value,i.textArea=u.value,localStorage.setItem("feedback-form-state",JSON.stringify(i))},500)),a.addEventListener("submit",e=>{e.preventDefault(),console.log(i),n.value="",u.value="",localStorage.clear()})}();
//# sourceMappingURL=03-feedback.b74307d7.js.map
