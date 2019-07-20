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

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Pomodoro</h1>\n  <div class=\"time\">{{ time }}</div>\n</div>\n<div class=\"main\">\n  <div class=\"row\">\n    <div class=\"clock\">\n      <div class=\"clock-main\">\n        <div\n          class=\"point\"\n          *ngFor=\"let item of Arr(12).fill(12); let idx = index\"\n          [ngStyle]=\"{ transform: 'rotate(' + idx * (360 / 12) + 'deg) translateY(9.5rem)' }\"\n        ></div>\n      </div>\n      <div class=\"clock-min\"></div>\n      <div class=\"clock-hour\">25:00</div>\n    </div>\n    <div class=\"btns\">\n      <div class=\"btn btns-cancle\"></div>\n      <div class=\"btn btns-start\">Start</div>\n      <div class=\"btn btns-reset\"></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <ul class=\"dots\">\n      <li *ngFor=\"let item of Arr(5).fill(5); let idx = index\"\n        [ngClass]=\"{'is-on': taskList[0].level > idx }\"\n      ></li>\n    </ul>\n  </div>\n  <div class=\"row\">\n    <div class=\"task\">\n      <div class=\"task-tit\">\n        First task today <i></i>\n      </div>\n      <div class=\"task-cont\">\n        <ul>\n          <li\n            *ngFor=\"let item of taskList; let idx = index\"\n          >{{ idx + 1 }}.{{ item.tit }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/analysis/analysis.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/analysis/analysis.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>analysis works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-bar\">\n  <div class=\"side-bar_btn\"\n    (click)=\"open('task')\"\n    [ngClass]=\"{'is-on': currect === 'task'}\"\n  >\n    <i class=\"side-bar_task\"></i>\n  </div>\n  <div class=\"side-bar_btn\"\n    (click)=\"open('analysis')\"\n    [ngClass]=\"{'is-on': currect === 'analysis'}\"\n  >\n    <i class=\"side-bar_analysis\"></i>\n  </div>\n  <div class=\"side-bar_btn\"\n    (click)=\"open('sound')\"\n    [ngClass]=\"{'is-on': currect === 'sound'}\"\n  >\n    <i class=\"side-bar_sound\"></i>\n  </div>\n</div>\n<div class=\"side-cont\">\n  <!-- <app-task ></app-task>\n  <app-analysis></app-analysis>\n  <app-sound></app-sound> -->\n  <ng-container *ngComponentOutlet=\"comps.get(currect)\"></ng-container>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sound/sound.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sound/sound.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sound works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/task/task.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/task/task.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Add a new task...\"\n  (keyup.enter)=\"onKey($event)\"\n/>\n<div class=\"list\">\n  <div class=\"list-tit\">Today</div>\n  <ul>\n    <li\n      *ngFor=\"let item of taskList; let idx = index\"\n    > <i></i>{{ item.tit }}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-main {\n  position: relative;\n  padding: 2.4rem 3.7rem;\n  width: calc(100% - 7rem);\n  height: 100%;\n}\n\napp-sidebar {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 35rem;\n  height: 100%;\n  background: #F1EDE6;\n  flex: 0 0 auto;\n  transition: 0.3s;\n  -webkit-transform: translateX(28rem);\n          transform: translateX(28rem);\n  display: flex;\n}\n\napp-sidebar.is-open {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRoZUYyRV8yMDE5XFx3ZWVrMS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFFQSxhQUFBO0FDRkY7O0FER0U7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy9fY29tbW9uJztcclxuXHJcbmFwcC1tYWlue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiByZW0oNDhweCkgcmVtKDc0cHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3cmVtKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcbmFwcC1zaWRlYmFye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IHJlbSgxNDAgKyA1NjBweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGMUVERTY7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChyZW0oNTYwcHgpKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAmLmlzLW9wZW57XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoIDAgKTtcclxuXHJcbiAgfVxyXG59XHJcbiIsImFwcC1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyLjRyZW0gMy43cmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gN3JlbSk7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYXBwLXNpZGViYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRjFFREU2O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4cmVtKTtcbiAgZGlzcGxheTogZmxleDtcbn1cbmFwcC1zaWRlYmFyLmlzLW9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59Il19 */"

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
        this.title = 'Pomdoro';
        this.isOpen = false;
    }
    ngOnInit() {
    }
    getOpen(data) {
        this.isOpen = data;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
  <app-main></app-main>
  <app-sidebar
    (doOpen)="getOpen($event)"
    [ngClass]="{'is-open': isOpen}"
  ></app-sidebar>
  `,
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
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _sidebar_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/task/task.component */ "./src/app/sidebar/task/task.component.ts");
/* harmony import */ var _sidebar_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/analysis/analysis.component */ "./src/app/sidebar/analysis/analysis.component.ts");
/* harmony import */ var _sidebar_sound_sound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sound/sound.component */ "./src/app/sidebar/sound/sound.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            _sidebar_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"],
            _sidebar_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_7__["AnalysisComponent"],
            _sidebar_sound_sound_component__WEBPACK_IMPORTED_MODULE_8__["SoundComponent"],
        ],
        entryComponents: [
            _sidebar_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"],
            _sidebar_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_7__["AnalysisComponent"],
            _sidebar_sound_sound_component__WEBPACK_IMPORTED_MODULE_8__["SoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppService = class AppService {
    // doneList: Array(any) = [
    // ];
    constructor() {
        this.taskList = [
            {
                tit: 'Lorem ipsum dolor sit amet',
                level: '3'
            },
        ];
    }
    getTask(tit, level) {
        level = (!level) ? '0' : level;
        this.taskList.push({
            tit: tit,
            level: level
        });
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppService);



/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: relative;\n  color: #003ca1;\n  font-size: 1.75rem;\n}\n.header h1 {\n  font-weight: bold;\n}\n.header .time {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.main {\n  position: relative;\n  height: 90%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.row {\n  position: relative;\n}\n.row:nth-child(1) {\n  width: 30rem;\n  flex: 0 1 auto;\n}\n.row:nth-child(2) {\n  flex: 0 1 auto;\n}\n.row:nth-child(3) {\n  width: 27.5rem;\n  flex: 0 1 auto;\n  align-self: flex-end;\n  padding-bottom: 5rem;\n}\n.clock {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n}\n.clock-main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 23.5rem;\n  height: 23.5rem;\n  border-radius: 50%;\n  background-color: #003ca1;\n}\n.clock-main .point {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0.2rem;\n  height: 0.8rem;\n  background: #F5F1EE;\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-transform: rotate(180deg) translateY(9.5rem);\n          transform: rotate(180deg) translateY(9.5rem);\n}\n.clock-min {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(310deg);\n          transform: translate(-50%, -50%) rotate(310deg);\n  margin-left: -6.45rem;\n  width: 12.9rem;\n  height: 25.8rem;\n  border-radius: 100% 0% 0% 100%/50% 0% 0% 50%;\n  border: 0.15rem solid #003ca1;\n  background-color: rgba(245, 241, 238, 0.8);\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n}\n.clock-hour {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(0deg);\n          transform: translate(-50%, -50%) rotate(0deg);\n  margin-left: -7.5rem;\n  width: 15rem;\n  height: 30rem;\n  border-radius: 100% 0% 0% 100%/50% 0% 0% 50%;\n  border: 0.15rem solid #003ca1;\n  background: #f5f1ee;\n  -webkit-transform-origin: 100% 50%;\n          transform-origin: 100% 50%;\n  font-size: 4rem;\n  text-align: center;\n  line-height: 30rem;\n  color: #003CA1;\n}\n.btns {\n  margin-top: 40rem;\n  text-align: center;\n  color: #003CA1;\n}\n.btns .btn {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0.8rem;\n}\n.btns-start {\n  width: 13rem;\n  line-height: 3.5rem;\n  text-align: center;\n  font-weight: bold;\n  border: 0.15rem solid #003ca1;\n  border-radius: 0.5rem;\n  font-size: 1.8rem;\n}\n.btns-cancle {\n  width: 2.25rem;\n  height: 2.25rem;\n  background-color: #003ca1;\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-close-circle-outline.svg\");\n}\n.btns-reset {\n  width: 2.25rem;\n  height: 2.25rem;\n  background-color: #003ca1;\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-refresh.svg\");\n}\n.dots li {\n  width: 2.8rem;\n  height: 2.8rem;\n  border: 0.15rem solid #003CA1;\n  border-radius: 50%;\n  margin: 2.5rem;\n  font-size: 1.5rem;\n}\n.dots li.is-on {\n  background: #003CA1;\n}\n.task {\n  color: #003CA1;\n}\n.task-tit {\n  font-size: 2.5rem;\n  text-align: right;\n}\n.task-tit i {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-color: #003ca1;\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-arrow-dropdown-circle.svg\");\n}\n.task-cont {\n  margin-top: 0.8rem;\n  padding: 2rem 1.5rem;\n  font-size: 1.5rem;\n  line-height: 2;\n  background: #fff;\n  box-shadow: 1px 0.3rem 0.3rem rgba(0, 0, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcVGhlRjJFXzIwMTlcXHdlZWsxL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0FKO0FESUE7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtBQ0ZGO0FETUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0pKO0FETUU7RUFHRSxjQUFBO0FDTko7QURRRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQ05KO0FEVUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUEY7QURRRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTko7QURPSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUNMTjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ05KO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTko7QURVQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUEY7QURRRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTko7QURRRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHdGQUFBO0FDTko7QURRRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyRUFBQTtBQ05KO0FEV0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFNJO0VBQ0UsbUJBQUE7QUNQTjtBRFlBO0VBRUUsY0FBQTtBQ1ZGO0FEV0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDVEo7QURVSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlGQUFBO0FDUk47QURXRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9fY29tbW9uJztcclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzAwM2NhMTtcclxuICBmb250LXNpemU6IHJlbSgzNXB4KTtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnRpbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogcmVtKDQ4cHgpO1xyXG59XHJcbi5yb3d7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogcmVtKDQ4cHgpO1xyXG4gICY6bnRoLWNoaWxkKDEpe1xyXG4gICAgd2lkdGg6IHJlbSg2MDBweCk7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxuICB9XHJcbiAgJjpudGgtY2hpbGQoMil7XHJcbiAgICAvLyB3aWR0aDogMTAlO1xyXG4gICAgLy8gd2lkdGg6IHJlbSg0MHB4KTtcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4gIH1cclxuICAmOm50aC1jaGlsZCgzKXtcclxuICAgIHdpZHRoOiByZW0oNTUwcHgpO1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiByZW0oMTAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb2NrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAmLW1haW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiByZW0oNDcwcHgpO1xyXG4gICAgaGVpZ2h0OiByZW0oNDcwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2NhMTtcclxuICAgIC5wb2ludHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB3aWR0aDogcmVtKDRweCk7XHJcbiAgICAgIGhlaWdodDogcmVtKDE2cHgpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjVGMUVFO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVkoIHJlbSgxOTBweCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLW1pbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzMTBkZWcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IHJlbSgtMTI5cHgpO1xyXG4gICAgd2lkdGg6IHJlbSgyNThweCk7XHJcbiAgICBoZWlnaHQ6IHJlbSg1MTZweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlIDAlIDAlIDEwMCUvNTAlIDAlIDAlIDUwJTtcclxuICAgIGJvcmRlcjogcmVtKDNweCkgc29saWQgIzAwM2NhMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2Y1ZjFlZSwwLjgpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgfVxyXG4gICYtaG91ciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiByZW0oLTE1MHB4KTtcclxuICAgIHdpZHRoOiByZW0oMzAwcHgpO1xyXG4gICAgaGVpZ2h0OiByZW0oNjAwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAwJSAwJSAxMDAlLzUwJSAwJSAwJSA1MCU7XHJcbiAgICBib3JkZXI6IHJlbSgzcHgpIHNvbGlkICMwMDNjYTE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmMWVlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSA1MCU7XHJcbiAgICBmb250LXNpemU6IHJlbSg4MHB4KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiByZW0oNjAwcHgpO1xyXG4gICAgY29sb3I6ICMwMDNDQTE7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRucyB7XHJcbiAgbWFyZ2luLXRvcDogcmVtKDgwMHB4KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDNDQTE7XHJcbiAgLmJ0bntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW46IHJlbSgxNnB4KTtcclxuICB9XHJcbiAgJi1zdGFydCB7XHJcbiAgICB3aWR0aDogcmVtKDI2MHB4KTtcclxuICAgIGxpbmUtaGVpZ2h0OiByZW0oNzBweCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogcmVtKDNweCkgc29saWQgIzAwM2NhMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHJlbSgxMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogcmVtKDM2cHgpO1xyXG4gIH1cclxuICAmLWNhbmNsZSB7XHJcbiAgICB3aWR0aDogcmVtKDQ1cHgpO1xyXG4gICAgaGVpZ2h0OiByZW0oNDVweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzY2ExO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW9uaWNvbnMuY29tL2lvbmljb25zL3N2Zy9tZC1jbG9zZS1jaXJjbGUtb3V0bGluZS5zdmcnKTtcclxuICB9XHJcbiAgJi1yZXNldCB7XHJcbiAgICB3aWR0aDogcmVtKDQ1cHgpO1xyXG4gICAgaGVpZ2h0OiByZW0oNDVweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzY2ExO1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW9uaWNvbnMuY29tL2lvbmljb25zL3N2Zy9tZC1yZWZyZXNoLnN2ZycpO1xyXG4gIH1cclxufVxyXG5cclxuLmRvdHN7XHJcbiAgbGl7XHJcbiAgICB3aWR0aDogcmVtKDU2cHgpO1xyXG4gICAgaGVpZ2h0OiByZW0oNTZweCk7XHJcbiAgICBib3JkZXI6IHJlbSgzcHgpIHNvbGlkICMwMDNDQTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IHJlbSg1MHB4KTtcclxuICAgIGZvbnQtc2l6ZTogcmVtKDMwcHgpO1xyXG4gICAgJi5pcy1vbntcclxuICAgICAgYmFja2dyb3VuZDogIzAwM0NBMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YXNre1xyXG5cclxuICBjb2xvcjogIzAwM0NBMTtcclxuICAmLXRpdHtcclxuICAgIGZvbnQtc2l6ZTogcmVtKDUwcHgpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBpe1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiByZW0oNDBweCk7XHJcbiAgICAgIGhlaWdodDogcmVtKDQwcHgpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzY2ExO1xyXG4gICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaHR0cHM6Ly9pb25pY29ucy5jb20vaW9uaWNvbnMvc3ZnL21kLWFycm93LWRyb3Bkb3duLWNpcmNsZS5zdmcnKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi1jb250e1xyXG4gICAgbWFyZ2luLXRvcDogcmVtKDE2cHgpO1xyXG4gICAgcGFkZGluZzogcmVtKDQwcHgpIHJlbSgzMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogcmVtKDMwcHgpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IHJlbSg2cHgpIHJlbSg2cHgpIHJnYmEoIzAwMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMDAzY2ExO1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG4uaGVhZGVyIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyIC50aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4ubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJvdzpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMzByZW07XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuLnJvdzpudGgtY2hpbGQoMikge1xuICBmbGV4OiAwIDEgYXV0bztcbn1cbi5yb3c6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDI3LjVyZW07XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XG59XG5cbi5jbG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2xvY2stbWFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAyMy41cmVtO1xuICBoZWlnaHQ6IDIzLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2NhMTtcbn1cbi5jbG9jay1tYWluIC5wb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDAuMnJlbTtcbiAgaGVpZ2h0OiAwLjhyZW07XG4gIGJhY2tncm91bmQ6ICNGNUYxRUU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSg5LjVyZW0pO1xufVxuLmNsb2NrLW1pbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDMxMGRlZyk7XG4gIG1hcmdpbi1sZWZ0OiAtNi40NXJlbTtcbiAgd2lkdGg6IDEyLjlyZW07XG4gIGhlaWdodDogMjUuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwJSAwJSAxMDAlLzUwJSAwJSAwJSA1MCU7XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCAjMDAzY2ExO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQxLCAyMzgsIDAuOCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgNTAlO1xufVxuLmNsb2NrLWhvdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IC03LjVyZW07XG4gIHdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwJSAwJSAxMDAlLzUwJSAwJSAwJSA1MCU7XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCAjMDAzY2ExO1xuICBiYWNrZ3JvdW5kOiAjZjVmMWVlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDUwJTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHJlbTtcbiAgY29sb3I6ICMwMDNDQTE7XG59XG5cbi5idG5zIHtcbiAgbWFyZ2luLXRvcDogNDByZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDNDQTE7XG59XG4uYnRucyAuYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAuOHJlbTtcbn1cbi5idG5zLXN0YXJ0IHtcbiAgd2lkdGg6IDEzcmVtO1xuICBsaW5lLWhlaWdodDogMy41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgIzAwM2NhMTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5idG5zLWNhbmNsZSB7XG4gIHdpZHRoOiAyLjI1cmVtO1xuICBoZWlnaHQ6IDIuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNjYTE7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pb25pY29ucy5jb20vaW9uaWNvbnMvc3ZnL21kLWNsb3NlLWNpcmNsZS1vdXRsaW5lLnN2Z1wiKTtcbn1cbi5idG5zLXJlc2V0IHtcbiAgd2lkdGg6IDIuMjVyZW07XG4gIGhlaWdodDogMi4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2NhMTtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCJodHRwczovL2lvbmljb25zLmNvbS9pb25pY29ucy9zdmcvbWQtcmVmcmVzaC5zdmdcIik7XG59XG5cbi5kb3RzIGxpIHtcbiAgd2lkdGg6IDIuOHJlbTtcbiAgaGVpZ2h0OiAyLjhyZW07XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCAjMDAzQ0ExO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMi41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5kb3RzIGxpLmlzLW9uIHtcbiAgYmFja2dyb3VuZDogIzAwM0NBMTtcbn1cblxuLnRhc2sge1xuICBjb2xvcjogIzAwM0NBMTtcbn1cbi50YXNrLXRpdCB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50YXNrLXRpdCBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzY2ExO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcImh0dHBzOi8vaW9uaWNvbnMuY29tL2lvbmljb25zL3N2Zy9tZC1hcnJvdy1kcm9wZG93bi1jaXJjbGUuc3ZnXCIpO1xufVxuLnRhc2stY29udCB7XG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDAuM3JlbSAwLjNyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn0iXX0= */"

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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



let MainComponent = class MainComponent {
    constructor(appService) {
        this.appService = appService;
        this.Arr = Array;
        this.taskList = [];
    }
    ngOnInit() {
        this.getTime('Asia/Taipei');
        this.updateTime = setInterval(() => { this.getTime('Asia/Taipei'); }, 5000);
        this.taskList = this.appService.taskList;
    }
    getTime(area) {
        // tslint:disable-next-line: one-variable-per-declaration
        const date = new Date(), time = date.toLocaleString('en-US', {
            timeZone: area,
            hour12: false,
            hour: 'numeric',
            minute: 'numeric'
        }), year = date.toLocaleString('en-US', { timeZone: area, year: 'numeric' }), month = date.toLocaleString('en-US', { timeZone: area, month: '2-digit' }), day = date.toLocaleString('en-US', { timeZone: area, day: 'numeric' }), week = date.toLocaleString('en-US', { timeZone: area, weekday: 'long' });
        this.time = `${year}.${month}.${day}　${week} ${time}`;
    }
};
MainComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
], MainComponent);



/***/ }),

/***/ "./src/app/sidebar/analysis/analysis.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sidebar/analysis/analysis.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvYW5hbHlzaXMvYW5hbHlzaXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sidebar/analysis/analysis.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sidebar/analysis/analysis.component.ts ***!
  \********************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnalysisComponent = class AnalysisComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analysis',
        template: __webpack_require__(/*! raw-loader!./analysis.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/analysis/analysis.component.html"),
        styles: [__webpack_require__(/*! ./analysis.component.scss */ "./src/app/sidebar/analysis/analysis.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnalysisComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-bar {\n  position: relative;\n  width: 7rem;\n  height: 100%;\n  padding: 0.25rem 0;\n  background: #2A56A5;\n  color: #F5F1EE;\n  box-shadow: 0.15rem 0.3rem 0.3rem rgba(0, 0, 0, 0.16);\n}\n.side-bar_btn {\n  position: relative;\n  margin: 0.75rem auto;\n  width: 100%;\n  height: 4rem;\n}\n.side-bar_btn.is-on {\n  background: #F1EDE6;\n}\n.side-bar_btn.is-on i {\n  background-color: #003CA1;\n}\n.side-bar i {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 2rem;\n  height: 2rem;\n  margin: 0 auto;\n  background-color: #F7F5F1;\n}\n.side-bar_task {\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-list-box.svg\");\n}\n.side-bar_analysis {\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-analytics.svg\");\n}\n.side-bar_sound {\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-musical-notes.svg\");\n}\n.side-cont {\n  padding: 1.5rem 2rem;\n  position: relative;\n  width: calc(100% - 7rem);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9EOlxcVGhlRjJFXzIwMTlcXHdlZWsxL3NyY1xcYXBwXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQ0ZGO0FER0U7RUFDRSxrQkFBQTtFQUtBLG9CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUNOSjtBRE9JO0VBQ0UsbUJBQUE7QUNMTjtBRE1NO0VBQ0UseUJBQUE7QUNKUjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ1JKO0FEVUU7RUFDRSw0RUFBQTtBQ1JKO0FEVUU7RUFDRSw2RUFBQTtBQ1JKO0FEVUU7RUFDRSxpRkFBQTtBQ1JKO0FEWUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9fY29tbW9uJztcclxuXHJcblxyXG4uc2lkZS1iYXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiByZW0oMTQwcHgpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiByZW0oNXB4KSAwO1xyXG4gIGJhY2tncm91bmQ6ICMyQTU2QTU7XHJcbiAgY29sb3I6ICNGNUYxRUU7XHJcbiAgYm94LXNoYWRvdzogcmVtKDNweCkgcmVtKDZweCkgcmVtKDZweCkgcmdiYSgjMDAwLDAuMTYpO1xyXG4gICZfYnRue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gd2lkdGg6IHJlbSg0MHB4KTtcclxuICAgIC8vIGhlaWdodDogcmVtKDQwcHgpO1xyXG4gICAgLy8gbWFyZ2luOiByZW0oNTVweCkgYXV0bztcclxuICAgIC8vIHBhZGRpbmc6IHJlbSg1NXB4KSAwO1xyXG4gICAgbWFyZ2luOiByZW0oMTVweCkgYXV0bztcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogcmVtKDgwcHgpO1xyXG4gICAgJi5pcy1vbntcclxuICAgICAgYmFja2dyb3VuZDogI0YxRURFNjtcclxuICAgICAgaXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzQ0ExO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiByZW0oNDBweCk7XHJcbiAgICBoZWlnaHQ6IHJlbSg0MHB4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjVGMTtcclxuICB9XHJcbiAgJl90YXNre1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW9uaWNvbnMuY29tL2lvbmljb25zL3N2Zy9tZC1saXN0LWJveC5zdmcnKTtcclxuICB9XHJcbiAgJl9hbmFseXNpc3tcclxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdodHRwczovL2lvbmljb25zLmNvbS9pb25pY29ucy9zdmcvbWQtYW5hbHl0aWNzLnN2ZycpO1xyXG4gIH1cclxuICAmX3NvdW5ke1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW9uaWNvbnMuY29tL2lvbmljb25zL3N2Zy9tZC1tdXNpY2FsLW5vdGVzLnN2ZycpO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGUtY29udHtcclxuICBwYWRkaW5nOiByZW0oMzBweCkgcmVtKDQwcHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gN3JlbSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8vIGJhY2tncm91bmQ6ICNGMUVERTY7XHJcbn1cclxuIiwiLnNpZGUtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogN3JlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIGJhY2tncm91bmQ6ICMyQTU2QTU7XG4gIGNvbG9yOiAjRjVGMUVFO1xuICBib3gtc2hhZG93OiAwLjE1cmVtIDAuM3JlbSAwLjNyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbi5zaWRlLWJhcl9idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC43NXJlbSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuLnNpZGUtYmFyX2J0bi5pcy1vbiB7XG4gIGJhY2tncm91bmQ6ICNGMUVERTY7XG59XG4uc2lkZS1iYXJfYnRuLmlzLW9uIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzQ0ExO1xufVxuLnNpZGUtYmFyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjVGMTtcbn1cbi5zaWRlLWJhcl90YXNrIHtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCJodHRwczovL2lvbmljb25zLmNvbS9pb25pY29ucy9zdmcvbWQtbGlzdC1ib3guc3ZnXCIpO1xufVxuLnNpZGUtYmFyX2FuYWx5c2lzIHtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCJodHRwczovL2lvbmljb25zLmNvbS9pb25pY29ucy9zdmcvbWQtYW5hbHl0aWNzLnN2Z1wiKTtcbn1cbi5zaWRlLWJhcl9zb3VuZCB7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pb25pY29ucy5jb20vaW9uaWNvbnMvc3ZnL21kLW11c2ljYWwtbm90ZXMuc3ZnXCIpO1xufVxuXG4uc2lkZS1jb250IHtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDdyZW0pO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/task.component */ "./src/app/sidebar/task/task.component.ts");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analysis/analysis.component */ "./src/app/sidebar/analysis/analysis.component.ts");
/* harmony import */ var _sound_sound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound/sound.component */ "./src/app/sidebar/sound/sound.component.ts");





let SidebarComponent = class SidebarComponent {
    constructor() {
        this.comps = new Map([
            ['task', _task_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]],
            ['analysis', _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_3__["AnalysisComponent"]],
            ['sound', _sound_sound_component__WEBPACK_IMPORTED_MODULE_4__["SoundComponent"]],
        ]);
        this.doOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currect = '';
    }
    ngOnInit() {
    }
    open(el) {
        if (this.currect === el && this.isOpen) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
        this.currect = (!this.isOpen) ? '' : el;
        this.doOpen.emit(this.isOpen);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SidebarComponent.prototype, "doOpen", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/sidebar/sound/sound.component.scss":
/*!****************************************************!*\
  !*** ./src/app/sidebar/sound/sound.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc291bmQvc291bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sidebar/sound/sound.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sidebar/sound/sound.component.ts ***!
  \**************************************************/
/*! exports provided: SoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundComponent", function() { return SoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SoundComponent = class SoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
SoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sound',
        template: __webpack_require__(/*! raw-loader!./sound.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sound/sound.component.html"),
        styles: [__webpack_require__(/*! ./sound.component.scss */ "./src/app/sidebar/sound/sound.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SoundComponent);



/***/ }),

/***/ "./src/app/sidebar/task/task.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sidebar/task/task.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n  padding: 0 1.25rem;\n  width: 100%;\n  line-height: 3.85rem;\n  font-size: 1.75rem;\n  border: 0.15rem solid #2A56A5;\n  color: #2A56A5;\n  background: #F1EDE6;\n}\ninput[type=text]::-webkit-input-placeholder {\n  color: #2A56A5;\n}\n.list {\n  padding: 1rem;\n}\n.list-tit {\n  font-size: 2rem;\n  line-height: 3.5rem;\n  color: #003CA1;\n  border-bottom: 0.15rem solid #2A56A5;\n}\n.list ul {\n  margin-top: 1rem;\n}\n.list ul > li {\n  font-size: 1.5rem;\n  color: #003CA1;\n  line-height: 2;\n}\n.list ul > li i {\n  position: relative;\n  top: 0.2rem;\n  margin-right: 0.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  background-color: #003ca1;\n  -webkit-mask-image: url(\"https://ionicons.com/ionicons/svg/md-play-circle.svg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci90YXNrL0Q6XFxUaGVGMkVfMjAxOVxcd2VlazEvc3JjXFxhcHBcXHNpZGViYXJcXHRhc2tcXHRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRkY7QURHRTtFQUNFLGNBQUE7QUNESjtBREtBO0VBQ0UsYUFBQTtBQ0ZGO0FER0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUNESjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBREVJO0VBRUUsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ROO0FERU07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLCtFQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19jb21tb24nO1xyXG5cclxuXHJcbmlucHV0W3R5cGU9dGV4dF17XHJcbiAgcGFkZGluZzogMCByZW0oMjVweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IHJlbSg3N3B4KTtcclxuICBmb250LXNpemU6IHJlbSgzNXB4KTtcclxuICBib3JkZXI6IHJlbSgzcHgpIHNvbGlkICMyQTU2QTU7XHJcbiAgY29sb3I6ICMyQTU2QTU7XHJcbiAgYmFja2dyb3VuZDogI0YxRURFNjtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMyQTU2QTU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdHtcclxuICBwYWRkaW5nOiByZW0oMjBweCk7XHJcbiAgJi10aXR7XHJcbiAgICBmb250LXNpemU6IHJlbSg0MHB4KTtcclxuICAgIGxpbmUtaGVpZ2h0OiByZW0oNzBweCk7XHJcbiAgICBjb2xvcjogIzAwM0NBMTtcclxuICAgIGJvcmRlci1ib3R0b206IHJlbSgzcHgpIHNvbGlkICMyQTU2QTU7XHJcbiAgfVxyXG4gIHVse1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgID5saXtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogcmVtKDMwcHgpO1xyXG4gICAgICBjb2xvcjogIzAwM0NBMTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgIGl7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogcmVtKDRweCk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiByZW0oMTBweCk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiByZW0oMzBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiByZW0oMzBweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2NhMTtcclxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaHR0cHM6Ly9pb25pY29ucy5jb20vaW9uaWNvbnMvc3ZnL21kLXBsYXktY2lyY2xlLnN2ZycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlucHV0W3R5cGU9dGV4dF0ge1xuICBwYWRkaW5nOiAwIDEuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMy44NXJlbTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgIzJBNTZBNTtcbiAgY29sb3I6ICMyQTU2QTU7XG4gIGJhY2tncm91bmQ6ICNGMUVERTY7XG59XG5pbnB1dFt0eXBlPXRleHRdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMyQTU2QTU7XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5saXN0LXRpdCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgY29sb3I6ICMwMDNDQTE7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgIzJBNTZBNTtcbn1cbi5saXN0IHVsIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5saXN0IHVsID4gbGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMwMDNDQTE7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLmxpc3QgdWwgPiBsaSBpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNjYTE7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pb25pY29ucy5jb20vaW9uaWNvbnMvc3ZnL21kLXBsYXktY2lyY2xlLnN2Z1wiKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/task/task.component.ts":
/*!************************************************!*\
  !*** ./src/app/sidebar/task/task.component.ts ***!
  \************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");



let TaskComponent = class TaskComponent {
    constructor(appService) {
        this.appService = appService;
        this.taskList = [];
    }
    ngOnInit() {
        this.taskList = this.appService.taskList;
    }
    onKey(e) {
        this.appService.getTask(e.target.value);
        e.target.value = '';
    }
};
TaskComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/task/task.component.html"),
        styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/sidebar/task/task.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
], TaskComponent);



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

module.exports = __webpack_require__(/*! D:\TheF2E_2019\week1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map