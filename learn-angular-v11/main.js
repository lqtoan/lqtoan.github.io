(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/toan/Code/learn-angular-v11/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HomeComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B\u1EA1n \u0111\u00E3 gi\u00E0 r\u1ED3i!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "B\u1EA1n c\u00F2n tr\u1EBB qu\u00E1!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.name = 'Toàn';
        this.age = 18;
    }
    ngOnInit() { }
    resetName() {
        this.name = 'Toàn';
    }
    resetAge() {
        this.age = 18;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 8, consts: [[1, "home"], ["type", "text", 3, "ngModel", "title", "ngModelChange"], [3, "click"], ["type", "number", 3, "ngModel", "title", "ngModelChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["gia", ""], ["tre", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "B\u1EA1n t\u00EAn g\u00EC? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_4_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.resetName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "B\u1EA1n bao nhi\u00EAu tu\u1ED5i? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() { return ctx.resetAge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reset Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_ng_template_17_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_ng_template_19_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name)("title", "\u0110\u00E2y l\u00E0 " + ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ch\u00E0o b\u1EA1n ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.age)("title", "\u0110\u00E2y l\u00E0 " + ctx.age);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.age >= 18)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: VNF Comic Sans;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\nh3[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 7.5px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #81a1c1;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin: 10px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #e5e9f0;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #e5e9f0;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n.home[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 30px;\n  padding: 15px;\n  background-color: #ebcb8b;\n  border: 2px solid #3b4252;\n  border-radius: 10px;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19zaGFyZS5zY3NzIiwiLi4vLi4vLi4vaG9tZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsMkJFVVk7QURYZDs7QURJQTtFQUNFLFlBQUE7RUFDQSxhRUhRO0FERVY7O0FESUE7O0VBRUUsWUFBQTtBQ0RGOztBRElBOztFQUVFLFlBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGNFNUJLO0VGNkJMLHlCRTlCVTtFRitCVixjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkV2QmM7RUZ3QmQsbUNBQUE7QUNERjs7QURHQTtFQUNFLGNFbkNNO0FEbUNSOztBREdBOztFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkVwQ2M7RUZxQ2QsbUNBQUE7QUNBRjs7QURHQTs7RUFFRSxhQUFBO0VBQ0EsY0VuRE07RUZvRE4sWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkUxRFU7RUYyRFYsbUJFL0NjO0VGZ0RkLG1DQUFBO0FDQUY7O0FER0E7RUFDRSx5QkUvREs7QUQrRFA7O0FBaEVBO0VBQ0UsZ0JBQUE7RUFDQSxZQ0tPO0VESlAsYUNLUTtFREpSLHlCQ0xPO0VETVAseUJBQUE7RUFDQSxtQkNNYztFRExkLHFDQUFBO0FBbUVGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi92YXJpYWJsZVwiO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbn1cblxubmF2IHtcbiAgbWFyZ2luOiAkbWFyZ2luLzI7XG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAkbWFyZ2luLzI7XG59XG5cbmgzLFxuc3BhbiB7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAkbWFyZ2luLzQ7XG59XG5cbmEge1xuICBjb2xvcjogJGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRibGFjaztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLXZpc2libGUge1xuICBib3JkZXI6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGJsYWNrO1xufVxuXG5idXR0b24sXG5idXR0b246Zm9jdXMge1xuICBib3JkZXI6IHVuc2V0O1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGJsYWNrO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgJy9zcmMvYXNzZXRzL3Njc3Mvc2hhcmUnO1xuQGltcG9ydCAnL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZSc7XG5cbi5ob21lIHtcbiAgbWF4LXdpZHRoOiAkd2lkdGgvMjtcbiAgbWFyZ2luOiAkbWFyZ2luO1xuICBwYWRkaW5nOiAkcGFkZGluZztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcbiAgYm9yZGVyOiAkYm9yZGVyIHNvbGlkICRibGFjaztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzIgJHNoYWRvdy1yYWRpdXMvMiAkc2hhZG93LXN0cmVndGggJGJsYWNrO1xufVxuIiwiJHJlZDogI2JmNjE2YTtcbiRncmVlbjogI2EzYmU4YztcbiR5ZWxsb3c6ICNlYmNiOGI7XG4kZGFyay1ibHVlOiAjNWU4MWFjO1xuJGJsdWU6ICM4MWExYzE7XG4kbWFnZW50YTogI2I0OGVhZDtcbiRjeWFuOiAjODhjMGQwO1xuJHdoaXRlOiAjZTVlOWYwO1xuJGJsYWNrOiAjM2I0MjUyO1xuXG4kbWFyZ2luOiAzMHB4O1xuJHBhZGRpbmc6IDE1cHg7XG4kc2hhZG93LXJhZGl1czogNy41cHg7XG4kc2hhZG93LXN0cmVndGg6IDVweDtcbiRib3JkZXI6IDJweDtcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4kd2lkdGg6IDgwMHB4O1xuXG4kZm9udC1mYW1pbHk6IFZORiBDb21pYyBTYW5zO1xuIl19 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ProductComponent_tr_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ProductComponent_tr_15_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0110ang h\u1EA1 gi\u00E1!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trai_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trai_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trai_r1.khuyenMai);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trai_r1.price - trai_r1.price * trai_r1.khuyenMai / 100);
} }
function ProductComponent_tr_15_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kh\u00F4ng h\u1EA1 gi\u00E1!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trai_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trai_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trai_r1.price);
} }
function ProductComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductComponent_tr_15_div_5_Template, 1, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductComponent_tr_15_ng_template_6_Template, 8, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductComponent_tr_15_ng_template_8_Template, 8, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trai_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trai_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trai_r1.dangHaGia)("ngIfThen", _r4)("ngIfElse", _r6);
} }
class ProductComponent {
    constructor() {
        this.traiCay = [
            { name: 'cam', price: 26, dangHaGia: true, khuyenMai: 20 },
            { name: 'bưởi', price: 40, dangHaGia: false, khuyenMai: 50 },
            { name: 'táo', price: 18, dangHaGia: true, khuyenMai: 15 },
            { name: 'chanh', price: 8, dangHaGia: true, khuyenMai: 10 },
            { name: 'nho', price: 4, dangHaGia: false, khuyenMai: 5 },
        ];
    }
    ngOnInit() { }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 16, vars: 1, consts: [[1, "product"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["dangHaGia", ""], ["khongHaGia", ""], [1, "dangHaGia"], [1, "khongHaGia"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Th\u1EE9 t\u1EF1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tr\u1EA1ng th\u00E1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gi\u00E1 g\u1ED1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Khuy\u1EBFn m\u00E3i (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gi\u00E1 khuy\u1EBFn m\u00E3i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductComponent_tr_15_Template, 10, 5, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.traiCay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: VNF Comic Sans;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\nh3[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 7.5px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #81a1c1;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin: 10px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #e5e9f0;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #e5e9f0;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n.product[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 30px;\n  padding: 15px;\n  background-color: #88c0d0;\n  border: 2px solid #3b4252;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n  border-radius: 10px;\n}\n\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n}\n\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n  border: 2px solid #bf616a;\n  border-radius: 5px;\n}\n\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .dangHaGia[_ngcontent-%COMP%] {\n  color: #e5e9f0;\n  background-color: #bf616a;\n}\n\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .khongHaGia[_ngcontent-%COMP%] {\n  color: #bf616a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL19zaGFyZS5zY3NzIiwiLi4vLi4vLi4vcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsMkJFVVk7QURYZDs7QURJQTtFQUNFLFlBQUE7RUFDQSxhRUhRO0FERVY7O0FESUE7O0VBRUUsWUFBQTtBQ0RGOztBRElBOztFQUVFLFlBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLGNFNUJLO0VGNkJMLHlCRTlCVTtFRitCVixjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkV2QmM7RUZ3QmQsbUNBQUE7QUNERjs7QURHQTtFQUNFLGNFbkNNO0FEbUNSOztBREdBOztFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkVwQ2M7RUZxQ2QsbUNBQUE7QUNBRjs7QURHQTs7RUFFRSxhQUFBO0VBQ0EsY0VuRE07RUZvRE4sWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkUxRFU7RUYyRFYsbUJFL0NjO0VGZ0RkLG1DQUFBO0FDQUY7O0FER0E7RUFDRSx5QkUvREs7QUQrRFA7O0FBaEVBO0VBQ0UsZ0JDYU07RURaTixZQ0tPO0VESlAsYUNLUTtFREpSLHlCQ0RLO0VERUwseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQ0tjO0FEOERoQjs7QUFsRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFvRUo7O0FBakVNOztFQUVFLGtCQUFBO0VBQ0EsYUNSRTtFRFNGLHlCQUFBO0VBQ0Esa0JBQUE7QUFtRVI7O0FBakVNO0VBQ0UsY0NqQkE7RURrQkEseUJDekJGO0FENEZOOztBQWpFTTtFQUNFLGNDNUJGO0FEK0ZOIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi92YXJpYWJsZVwiO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbn1cblxubmF2IHtcbiAgbWFyZ2luOiAkbWFyZ2luLzI7XG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAkbWFyZ2luLzI7XG59XG5cbmgzLFxuc3BhbiB7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAkbWFyZ2luLzQ7XG59XG5cbmEge1xuICBjb2xvcjogJGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRibGFjaztcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLXZpc2libGUge1xuICBib3JkZXI6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGJsYWNrO1xufVxuXG5idXR0b24sXG5idXR0b246Zm9jdXMge1xuICBib3JkZXI6IHVuc2V0O1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGJsYWNrO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgJy9zcmMvYXNzZXRzL3Njc3Mvc2hhcmUnO1xuQGltcG9ydCAnL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZSc7XG5cbi5wcm9kdWN0IHtcbiAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gIG1hcmdpbjogJG1hcmdpbjtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjeWFuO1xuICBib3JkZXI6ICRib3JkZXIgc29saWQgJGJsYWNrO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8yICRzaGFkb3ctcmFkaXVzLzIgJHNoYWRvdy1zdHJlZ3RoICRibGFjaztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy8yO1xuICAgIHRyIHtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLzI7XG4gICAgICB0aCxcbiAgICAgIHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcbiAgICAgICAgYm9yZGVyOiAkYm9yZGVyIHNvbGlkICRyZWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLzI7XG4gICAgICB9XG4gICAgICAuZGFuZ0hhR2lhIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcbiAgICAgIH1cbiAgICAgIC5raG9uZ0hhR2lhIHtcbiAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkcmVkOiAjYmY2MTZhO1xuJGdyZWVuOiAjYTNiZThjO1xuJHllbGxvdzogI2ViY2I4YjtcbiRkYXJrLWJsdWU6ICM1ZTgxYWM7XG4kYmx1ZTogIzgxYTFjMTtcbiRtYWdlbnRhOiAjYjQ4ZWFkO1xuJGN5YW46ICM4OGMwZDA7XG4kd2hpdGU6ICNlNWU5ZjA7XG4kYmxhY2s6ICMzYjQyNTI7XG5cbiRtYXJnaW46IDMwcHg7XG4kcGFkZGluZzogMTVweDtcbiRzaGFkb3ctcmFkaXVzOiA3LjVweDtcbiRzaGFkb3ctc3RyZWd0aDogNXB4O1xuJGJvcmRlcjogMnB4O1xuJGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiR3aWR0aDogODAwcHg7XG5cbiRmb250LWZhbWlseTogVk5GIENvbWljIFNhbnM7XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/product"]; };
class AppComponent {
    constructor() {
        this.today = Date();
        this.title = 'learn-angular-v11';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 8, consts: [[3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Learn Angular 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ch\u00FAc b\u1EA1n th\u00E0nh c\u00F4ng!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 3, ctx.today, "yyyy - MM - dd"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: VNF Comic Sans;\n}\n\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\nh3[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 7.5px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #81a1c1;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin: 10px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #e5e9f0;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #e5e9f0;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 830px;\n  padding: 15px;\n  color: #3b4252;\n  background-color: #a3be8c;\n  box-shadow: 7.5px 7.5px 5px #3b4252;\n  border: 2px solid #3b4252;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL19zaGFyZS5zY3NzIiwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSwyQkVVWTtBRFhkOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFFSFE7QURFVjs7QURJQTs7RUFFRSxZQUFBO0FDREY7O0FESUE7O0VBRUUsWUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBRElBO0VBQ0UsY0U1Qks7RUY2QkwseUJFOUJVO0VGK0JWLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRXZCYztFRndCZCxtQ0FBQTtBQ0RGOztBREdBO0VBQ0UsY0VuQ007QURtQ1I7O0FER0E7O0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRXBDYztFRnFDZCxtQ0FBQTtBQ0FGOztBREdBOztFQUVFLGFBQUE7RUFDQSxjRW5ETTtFRm9ETixZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRTFEVTtFRjJEVixtQkUvQ2M7RUZnRGQsbUNBQUE7QUNBRjs7QURHQTtFQUNFLHlCRS9ESztBRCtEUDs7QUFoRUE7RUFDRSxZQUFBO0VBQ0EsYUNNUTtFRExSLGNDRU07RURETix5QkNOTTtFRE9OLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkNLYztBRDhEaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVcIjtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG59XG5cbm5hdiB7XG4gIG1hcmdpbjogJG1hcmdpbi8yO1xuICBwYWRkaW5nOiAkcGFkZGluZztcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogJG1hcmdpbi8yO1xufVxuXG5oMyxcbnNwYW4ge1xuICBtYXJnaW46ICRtYXJnaW4vMztcbn1cblxucCB7XG4gIG1hcmdpbjogJG1hcmdpbi80O1xufVxuXG5hIHtcbiAgY29sb3I6ICRibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xuICBwYWRkaW5nOiAkcGFkZGluZy8yO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctc3RyZWd0aCAkYmxhY2s7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuaW5wdXQsXG5pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRibGFjaztcbn1cblxuYnV0dG9uLFxuYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRibGFjaztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0ICcvc3JjL2Fzc2V0cy9zY3NzL3NoYXJlJztcbkBpbXBvcnQgJy9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGUnO1xuXG5kaXYge1xuICB3aWR0aDogJHdpZHRoICsgMiokcGFkZGluZztcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIGNvbG9yOiAkYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMgJHNoYWRvdy1yYWRpdXMgJHNoYWRvdy1zdHJlZ3RoICRibGFjaztcbiAgYm9yZGVyOiAkYm9yZGVyIHNvbGlkICRibGFjaztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59IiwiJHJlZDogI2JmNjE2YTtcbiRncmVlbjogI2EzYmU4YztcbiR5ZWxsb3c6ICNlYmNiOGI7XG4kZGFyay1ibHVlOiAjNWU4MWFjO1xuJGJsdWU6ICM4MWExYzE7XG4kbWFnZW50YTogI2I0OGVhZDtcbiRjeWFuOiAjODhjMGQwO1xuJHdoaXRlOiAjZTVlOWYwO1xuJGJsYWNrOiAjM2I0MjUyO1xuXG4kbWFyZ2luOiAzMHB4O1xuJHBhZGRpbmc6IDE1cHg7XG4kc2hhZG93LXJhZGl1czogNy41cHg7XG4kc2hhZG93LXN0cmVndGg6IDVweDtcbiRib3JkZXI6IDJweDtcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4kd2lkdGg6IDgwMHB4O1xuXG4kZm9udC1mYW1pbHk6IFZORiBDb21pYyBTYW5zO1xuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NOT FOUND!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map