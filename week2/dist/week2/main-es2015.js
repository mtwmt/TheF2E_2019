(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-start></app-start>\n<app-main></app-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"box\">\n    <div class=\"box-put\">\n      <div class=\"box-left\">\n        <ul>\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n        </ul>\n      </div>\n      <div class=\"box-right\">\n        <ul>\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"box-cart\">\n\n      <div class=\"card-col\"\n        *ngFor=\"let items of putCard; let idx = index\"\n      >\n        <div class=\"card\"\n          *ngFor=\"let item of items; let i = index\"\n          [attr.data-icon]=\"item.icon\"\n          [attr.data-color]=\"item.color\"\n          [attr.data-num]=\"item.num\"\n          [attr.draggable]=\"false\"\n          [ngStyle]=\"{\n            'top': i*30 +'px',\n            'background-image': 'url('+ item.imgSrc +')'\n          }\"\n        ></div>\n      </div>\n\n      <!-- <div class=\"card\"\n        *ngFor=\"let item of cards; let idx = index\"\n        [ngStyle]=\"{\n          'background-image': 'url('+ item.imgSrc +')',\n          'left': item.initX +'px',\n          'top':item.initY +'px'\n        }\"\n      ></div> -->\n      <!-- <div class=\"box-left\">\n        <ul>\n          <li>\n            <div class=\"card\"></div>\n            <div class=\"card\"></div>\n            <div class=\"card\"></div>\n            <div class=\"card\"></div>\n            <div class=\"card\"></div>\n            <div class=\"card\"></div>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n        </ul>\n      </div>\n      <div class=\"box-right\">\n        <ul>\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n        </ul>\n      </div> -->\n    </div>\n  </div>\n  <footer>\n    <h1>FREECELL</h1>\n    <span>TIME 9:00</span>\n    <ul class=\"control\">\n      <li>RUKS</li>\n      <li>NEW GAME</li>\n      <li>UNDO</li>\n      <li>HINT</li>\n    </ul>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/start/start.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/start/start.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>start works!</p>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-start {\n  display: none;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n\napp-main {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #243037;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRoZUYyRV8yMDE5XFx3ZWVrMi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDWEY7O0FEYUE7RUFFRSxrQkFBQTtFQUNBLGNBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDYkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbntcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG5cclxuXHJcbi8vICAgd2lkdGg6IDEwMjRweDtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgYmFja2dyb3VuZDogIzI0MzAzNztcclxuLy8gfVxyXG5cclxuYXBwLXN0YXJ0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmFwcC1tYWlue1xyXG4gIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMyNDMwMzc7XHJcbn1cclxuIiwiYXBwLXN0YXJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5hcHAtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyNDMwMzc7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'week2';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
            _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.main {\n  position: relative;\n  margin: 0 auto;\n  width: 1200px;\n  height: 100%;\n  padding: 50px 0px 15px 0px;\n  color: #fff;\n  background: #243037;\n}\n\n.box-put {\n  display: flex;\n  justify-content: space-between;\n}\n\n.box-put .box-left {\n  margin: 30px 20px;\n}\n\n.box-put .box-left ul > li {\n  border: 1px solid #d97b44;\n}\n\n.box-put .box-right {\n  margin: 30px 20px;\n}\n\n.box-put .box-right ul > li {\n  border: 1px solid #7ea2b6;\n}\n\n.box-put .box-right ul > li:nth-child(1) {\n  background: url('TheF2E_2019/week2/dist/week2/bg_spade.svg') no-repeat center;\n}\n\n.box-put .box-right ul > li:nth-child(2) {\n  background: url('TheF2E_2019/week2/dist/week2/bg_heart.svg') no-repeat center;\n}\n\n.box-put .box-right ul > li:nth-child(3) {\n  background: url('TheF2E_2019/week2/dist/week2/bg_diamond.svg') no-repeat center;\n}\n\n.box-put .box-right ul > li:nth-child(4) {\n  background: url('TheF2E_2019/week2/dist/week2/bg_club.svg') no-repeat center;\n}\n\n.box-put ul > li {\n  height: 170px;\n}\n\n.box-cart {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  padding: 280px 20px 0 20px;\n  width: 100%;\n  height: 100%;\n}\n\n.box-cart ul {\n  background: #ccc;\n}\n\n.box ul > li {\n  position: relative;\n  display: inline-block;\n  margin: 0 15px;\n  width: 106px;\n  border-radius: 14px;\n}\n\n.card-col {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 170px;\n}\n\n.card-col:nth-child(4) {\n  margin-right: 36px;\n}\n\n.card-col:nth-child(5) {\n  margin-left: 36px;\n}\n\n.card {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 106px;\n  height: 170px;\n  background-size: contain;\n  border-radius: 15px;\n  box-shadow: 0px -1px 2px #999;\n  color: #000;\n}\n\nfooter {\n  position: absolute;\n  bottom: 15px;\n  left: 30px;\n  padding-bottom: 10px;\n  width: calc(100% - 60px);\n  font-size: 28px;\n  color: #7ea2b6;\n  border-bottom: 1px solid #d97b44;\n}\n\nfooter h1 {\n  color: #d97b44;\n  display: inline-block;\n  font-size: 40px;\n  margin-right: 32px;\n}\n\nfooter .control {\n  float: right;\n}\n\nfooter .control li {\n  display: inline-block;\n  margin: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcVGhlRjJFXzIwMTlcXHdlZWsyL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBSjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURNRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRElJO0VBQ0UsaUJBQUE7QUNGTjs7QURHTTtFQUNFLHlCQUFBO0FDRFI7O0FESUk7RUFDRSxpQkFBQTtBQ0ZOOztBREdNO0VBQ0UseUJBQUE7QUNEUjs7QURFUTtFQUNFLDZFQUFBO0FDQVY7O0FERVE7RUFDRSw2RUFBQTtBQ0FWOztBREVRO0VBQ0UsK0VBQUE7QUNBVjs7QURFUTtFQUNFLDRFQUFBO0FDQVY7O0FES007RUFDRSxhQUFBO0FDSFI7O0FET0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMSjs7QURNSTtFQUNFLGdCQUFBO0FDSk47O0FEUUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05OOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNSRjs7QURTRTtFQUNFLGtCQUFBO0FDUEo7O0FEU0U7RUFDRSxpQkFBQTtBQ1BKOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1BGOztBRFFFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUUU7RUFDRSxZQUFBO0FDTko7O0FET0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVjbGVhciB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDUwcHggMHB4IDE1cHggMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyNDMwMzc7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIEBleHRlbmQgJWNsZWFyO1xyXG4gICYtcHV0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5ib3gtbGVmdCB7XHJcbiAgICAgIG1hcmdpbjogMzBweCAyMHB4O1xyXG4gICAgICB1bCA+IGxpIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDk3YjQ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94LXJpZ2h0IHtcclxuICAgICAgbWFyZ2luOiAzMHB4IDIwcHg7XHJcbiAgICAgIHVsID4gbGkge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ZWEyYjY7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfc3BhZGUuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfaGVhcnQuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfZGlhbW9uZC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0KXtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZ19jbHViLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgID4gbGkge1xyXG4gICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi1jYXJ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyODBweCAyMHB4IDAgMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdWx7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgID4gbGkge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWNvbHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gICY6bnRoLWNoaWxkKDQpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCg1KXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xyXG4gIH1cclxufVxyXG4uY2FyZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDEwNnB4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMnB4ICM5OTk7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogIzdlYTJiNjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5N2I0NDtcclxuICBoMXtcclxuICAgIGNvbG9yOiAjZDk3YjQ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiA0MHB4OztcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICB9XHJcbiAgLmNvbnRyb2x7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaXtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgMTZweDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIuYm94OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNTBweCAwcHggMTVweCAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMjQzMDM3O1xufVxuXG4uYm94LXB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib3gtcHV0IC5ib3gtbGVmdCB7XG4gIG1hcmdpbjogMzBweCAyMHB4O1xufVxuLmJveC1wdXQgLmJveC1sZWZ0IHVsID4gbGkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDk3YjQ0O1xufVxuLmJveC1wdXQgLmJveC1yaWdodCB7XG4gIG1hcmdpbjogMzBweCAyMHB4O1xufVxuLmJveC1wdXQgLmJveC1yaWdodCB1bCA+IGxpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdlYTJiNjtcbn1cbi5ib3gtcHV0IC5ib3gtcmlnaHQgdWwgPiBsaTpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JnX3NwYWRlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLmJveC1wdXQgLmJveC1yaWdodCB1bCA+IGxpOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfaGVhcnQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uYm94LXB1dCAuYm94LXJpZ2h0IHVsID4gbGk6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZ19kaWFtb25kLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLmJveC1wdXQgLmJveC1yaWdodCB1bCA+IGxpOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfY2x1Yi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5ib3gtcHV0IHVsID4gbGkge1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuLmJveC1jYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI4MHB4IDIwcHggMCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJveC1jYXJ0IHVsIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cbi5ib3ggdWwgPiBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTVweDtcbiAgd2lkdGg6IDEwNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4uY2FyZC1jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3MHB4O1xufVxuLmNhcmQtY29sOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbn1cbi5jYXJkLWNvbDpudGgtY2hpbGQoNSkge1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAxMDZweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwcHggLTFweCAycHggIzk5OTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjN2VhMmI2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5N2I0NDtcbn1cbmZvb3RlciBoMSB7XG4gIGNvbG9yOiAjZDk3YjQ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xufVxuZm9vdGVyIC5jb250cm9sIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuZm9vdGVyIC5jb250cm9sIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor(el) {
        this.el = el;
        this.type = [
            { icon: 'spade', color: 'black' },
            { icon: 'heart', color: 'red' },
            { icon: 'diamond', color: 'red' },
            { icon: 'club', color: 'black' },
        ];
        this.imgSrc = {
            type: ['club', 'diamond', 'heart', 'spade'],
            num: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            template: 'TheF2E_2019/week2/dist/week2/assets/images/cards/{{ type }}/{{ num }}_{{ type }}.svg'
        };
        this.cards = [];
        this.putCard = [[], [], [], [], [], [], [], []];
        for (let i in this.type) {
            if (this.type.hasOwnProperty(i)) {
                for (let j = 0; j < 13; j++) {
                    let imaSrc = this.imgSrc.template;
                    imaSrc = imaSrc.replace(/{{ type }}/g, this.type[i].icon);
                    imaSrc = imaSrc.replace('{{ num }}', this.imgSrc.num[j]);
                    this.cards.push({
                        imgSrc: imaSrc,
                        initX: 0,
                        initY: 0,
                        icon: this.type[i].icon,
                        color: this.type[i].color,
                        num: (j + 1) + (13 * +i)
                    });
                }
            }
        }
        this.doRandom(this.cards);
    }
    ngOnInit() {
        // this.getElement();
        this.setCartPos();
        // const down$ = fromEvent(document.getElementsByClassName('.card'), 'mousedown');
        // const move$ = fromEvent(document, 'mousemove');
        // const up$ = fromEvent(document, 'mouseup');
        // down$.pipe()
    }
    setCartPos() {
        this.cards.map((e, i) => {
            this.putCard[i % this.putCard.length].push(this.cards[i]);
        });
    }
    // getElement() {
    //   let $el = this.el.nativeElement.querySelectorAll('.box-put li');
    //   $el.forEach((e, i) => {
    //     console.log( 'e',e )
    //     // console.log(123, e.offsetLeft, e.offsetTop )
    //     // this.refPos.push( { 'refX': e.offsetLeft, 'refY':e.offsetTop} );
    //   });
    // }
    // shuffle 亂數排列(洗牌)
    doRandom(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], MainComponent);



/***/ }),

/***/ "./src/app/start/start.component.scss":
/*!********************************************!*\
  !*** ./src/app/start/start.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartComponent = class StartComponent {
    constructor() { }
    ngOnInit() {
    }
};
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: __webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/index.js!./src/app/start/start.component.html"),
        styles: [__webpack_require__(/*! ./start.component.scss */ "./src/app/start/start.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StartComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TheF2E_2019\week2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map