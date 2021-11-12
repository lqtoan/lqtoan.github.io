(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/toan/Code/learn-angular-v11/src/main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 3, vars: 0, consts: [[1, "about"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "about works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  margin: 10px;\n}\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #d8dee9;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin-left: 15px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ECEFF4;\n}\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #ECEFF4;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n\n\n.about[_ngcontent-%COMP%] {\n  background-color: #ebcb8b;\n  margin: 30px;\n  border: 2px solid #2e3440;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlLnNjc3MiLCIuLi8uLi8uLi9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsMEJBQUE7QUFDa0IsY0FBQTtBQUlZLGlDQUFBO0FDekI5QjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNFRjtBRENBOzs7OztFQUtFLGlCRE9ZO0VDTlosWUFBQTtBQ0VGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUROUTtBRVFWO0FEQ0E7RUFDRSxjRGZXO0VDZ0JYLHlCRHJCVTtFQ3NCVixjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJEWmM7RUNhZCxtQ0FBQTtBQ0VGO0FEQUE7RUFDRSxjRDFCTTtBRTZCUjtBREFBOztFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkR6QmM7RUMwQmQsbUNBQUE7QUNHRjtBREFBOztFQUVFLGFBQUE7RUFDQSxjRDFDTTtFQzJDTixZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRGpEVTtFQ2tEVixtQkRwQ2M7RUNxQ2QsbUNBQUE7QUNHRjtBREFBO0VBQ0UseUJEdERLO0FFeURQO0FGdkNBLDBCQUFBO0FBQ2tCLGNBQUE7QUFJWSxpQ0FBQTtBRXhCOUI7RUFDRSx5QkZGTztFRUdQLFlGT087RUVOUCx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJGU2M7QUV1RGhCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDogI2JmNjE2YTtcbiRncmVlbjogI2EzYmU4YztcbiR5ZWxsb3c6ICNlYmNiOGI7XG4kZGFyay1ibHVlOiAjNWU4MWFjO1xuJGJsdWU6ICM4MWExYzE7XG4kbWFnZW50YTogI2I0OGVhZDtcbiRjeWFuOiAjODhjMGQwO1xuJHdoaXRlOiAjRUNFRkY0O1xuJGRhcmstd2hpdGU6ICNkOGRlZTk7XG4kYmxhY2s6ICMyZTM0NDA7XG4kZ3JheTogIzNiNDI1MjtcblxuJG1hcmdpbjogMzBweDtcbiRwYWRkaW5nOiAxNXB4O1xuJHNoYWRvdy1yYWRpdXM6IDcuNXB4O1xuJHNoYWRvdy1zdHJlZ3RoOiA1cHg7XG4kYm9yZGVyOiAycHg7XG4kYm9yZGVyLXJhZGl1czogMTBweDtcblxuJHByaW1hcnktZm9udDogVk5GIENvbWljIFNhbnM7XG4kbGluZS1oZWlnaHQ6IDE1MCU7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludCAqL1xuJGRlc2t0b3A6IDEwMjZweDsgLyogbWluLXdpZHRoICovXG4kdGFibGV0OiAxMDI1cHg7XG4kbW9iaWxlOiA3NjdweDtcblxuJG1heC13aWR0aC1jb250YWluZXI6IDEzMjBweDsgLyogc2V0IG1heC13aWR0aCBsaWtlIGJvb3RzdHJhcCAqLyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlXCI7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnNwYW4sXG5wIHtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG59IFxuXG5uYXYge1xuICBtYXJnaW46ICRtYXJnaW4vMjtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG59XG5cbmEge1xuICBjb2xvcjogJGRhcmstd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLzI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuaW5wdXQsXG5pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xufVxuXG5idXR0b24sXG5idXR0b246Zm9jdXMge1xuICBib3JkZXI6IHVuc2V0O1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3Njc3Mvc2hhcmVcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlXCI7XG5cbi5hYm91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XG4gIG1hcmdpbjogJG1hcmdpbjtcbiAgYm9yZGVyOiAkYm9yZGVyIHNvbGlkICRibGFjaztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMiAkc2hhZG93LXJhZGl1cy8yICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59Il19 */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  margin: 10px;\n}\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #d8dee9;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin-left: 15px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ECEFF4;\n}\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #ECEFF4;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n\n\n.home[_ngcontent-%COMP%] {\n  margin: 30px;\n  padding: 15px;\n  background-color: #ebcb8b;\n  border: 2px solid #2e3440;\n  border-radius: 10px;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlLnNjc3MiLCIuLi8uLi8uLi9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSwwQkFBQTtBQUNrQixjQUFBO0FBSVksaUNBQUE7QUN6QjlCO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0VGO0FEQ0E7Ozs7O0VBS0UsaUJET1k7RUNOWixZQUFBO0FDRUY7QURDQTtFQUNFLFlBQUE7RUFDQSxhRE5RO0FFUVY7QURDQTtFQUNFLGNEZlc7RUNnQlgseUJEckJVO0VDc0JWLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkRaYztFQ2FkLG1DQUFBO0FDRUY7QURBQTtFQUNFLGNEMUJNO0FFNkJSO0FEQUE7O0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRHpCYztFQzBCZCxtQ0FBQTtBQ0dGO0FEQUE7O0VBRUUsYUFBQTtFQUNBLGNEMUNNO0VDMkNOLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJEakRVO0VDa0RWLG1CRHBDYztFQ3FDZCxtQ0FBQTtBQ0dGO0FEQUE7RUFDRSx5QkR0REs7QUV5RFA7QUZ2Q0EsMEJBQUE7QUFDa0IsY0FBQTtBQUlZLGlDQUFBO0FFeEI5QjtFQUVFLFlGT087RUVOUCxhRk9RO0VFTlIseUJGTE87RUVNUCx5QkFBQTtFQUNBLG1CRlFjO0VFUGQscUNBQUE7QUErREYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQ6ICNiZjYxNmE7XG4kZ3JlZW46ICNhM2JlOGM7XG4keWVsbG93OiAjZWJjYjhiO1xuJGRhcmstYmx1ZTogIzVlODFhYztcbiRibHVlOiAjODFhMWMxO1xuJG1hZ2VudGE6ICNiNDhlYWQ7XG4kY3lhbjogIzg4YzBkMDtcbiR3aGl0ZTogI0VDRUZGNDtcbiRkYXJrLXdoaXRlOiAjZDhkZWU5O1xuJGJsYWNrOiAjMmUzNDQwO1xuJGdyYXk6ICMzYjQyNTI7XG5cbiRtYXJnaW46IDMwcHg7XG4kcGFkZGluZzogMTVweDtcbiRzaGFkb3ctcmFkaXVzOiA3LjVweDtcbiRzaGFkb3ctc3RyZWd0aDogNXB4O1xuJGJvcmRlcjogMnB4O1xuJGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiRwcmltYXJ5LWZvbnQ6IFZORiBDb21pYyBTYW5zO1xuJGxpbmUtaGVpZ2h0OiAxNTAlO1xuXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnQgKi9cbiRkZXNrdG9wOiAxMDI2cHg7IC8qIG1pbi13aWR0aCAqL1xuJHRhYmxldDogMTAyNXB4O1xuJG1vYmlsZTogNzY3cHg7XG5cbiRtYXgtd2lkdGgtY29udGFpbmVyOiAxMzIwcHg7IC8qIHNldCBtYXgtd2lkdGggbGlrZSBib290c3RyYXAgKi8iLCJAaW1wb3J0IFwiLi92YXJpYWJsZVwiO1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5zcGFuLFxucCB7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xufSBcblxubmF2IHtcbiAgbWFyZ2luOiAkbWFyZ2luLzI7XG4gIHBhZGRpbmc6ICRwYWRkaW5nO1xufVxuXG5hIHtcbiAgY29sb3I6ICRkYXJrLXdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xuICBwYWRkaW5nOiAkcGFkZGluZy8yO1xuICBtYXJnaW4tbGVmdDogJG1hcmdpbi8yO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbmlucHV0LFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIGJvcmRlcjogdW5zZXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xuICBwYWRkaW5nOiAkcGFkZGluZy8yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbn1cblxuYnV0dG9uLFxuYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbiIsIkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zY3NzL3NoYXJlXCI7XG5AaW1wb3J0IFwiL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZVwiO1xuXG4uaG9tZSB7XG4gIC8vIG1heC13aWR0aDogJHdpZHRoLzI7XG4gIG1hcmdpbjogJG1hcmdpbjtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XG4gIGJvcmRlcjogJGJvcmRlciBzb2xpZCAkYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8yICRzaGFkb3ctcmFkaXVzLzIgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xufVxuIl19 */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  margin: 10px;\n}\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #d8dee9;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin-left: 15px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ECEFF4;\n}\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #ECEFF4;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n\n\n.product[_ngcontent-%COMP%] {\n  margin: 30px;\n  padding: 15px;\n  background-color: #88c0d0;\n  border: 2px solid #2e3440;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n  border-radius: 10px;\n}\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n}\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n  border: 2px solid #bf616a;\n  border-radius: 5px;\n}\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .dangHaGia[_ngcontent-%COMP%] {\n  color: #ECEFF4;\n  background-color: #bf616a;\n}\n.product[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .khongHaGia[_ngcontent-%COMP%] {\n  color: #bf616a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlLnNjc3MiLCIuLi8uLi8uLi9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSwwQkFBQTtBQUNrQixjQUFBO0FBSVksaUNBQUE7QUN6QjlCO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0VGO0FEQ0E7Ozs7O0VBS0UsaUJET1k7RUNOWixZQUFBO0FDRUY7QURDQTtFQUNFLFlBQUE7RUFDQSxhRE5RO0FFUVY7QURDQTtFQUNFLGNEZlc7RUNnQlgseUJEckJVO0VDc0JWLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkRaYztFQ2FkLG1DQUFBO0FDRUY7QURBQTtFQUNFLGNEMUJNO0FFNkJSO0FEQUE7O0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRHpCYztFQzBCZCxtQ0FBQTtBQ0dGO0FEQUE7O0VBRUUsYUFBQTtFQUNBLGNEMUNNO0VDMkNOLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJEakRVO0VDa0RWLG1CRHBDYztFQ3FDZCxtQ0FBQTtBQ0dGO0FEQUE7RUFDRSx5QkR0REs7QUV5RFA7QUZ2Q0EsMEJBQUE7QUFDa0IsY0FBQTtBQUlZLGlDQUFBO0FFeEI5QjtFQUNFLFlGUU87RUVQUCxhRlFRO0VFUFIseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJGUWM7QUV3RGhCO0FBL0RFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBaUVKO0FBOURNOztFQUVFLGtCQUFBO0VBQ0EsYUZMRTtFRU1GLHlCQUFBO0VBQ0Esa0JBQUE7QUFnRVI7QUE5RE07RUFDRSxjRmhCQTtFRWlCQSx5QkZ4QkY7QUV3Rk47QUE5RE07RUFDRSxjRjNCRjtBRTJGTiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDogI2JmNjE2YTtcbiRncmVlbjogI2EzYmU4YztcbiR5ZWxsb3c6ICNlYmNiOGI7XG4kZGFyay1ibHVlOiAjNWU4MWFjO1xuJGJsdWU6ICM4MWExYzE7XG4kbWFnZW50YTogI2I0OGVhZDtcbiRjeWFuOiAjODhjMGQwO1xuJHdoaXRlOiAjRUNFRkY0O1xuJGRhcmstd2hpdGU6ICNkOGRlZTk7XG4kYmxhY2s6ICMyZTM0NDA7XG4kZ3JheTogIzNiNDI1MjtcblxuJG1hcmdpbjogMzBweDtcbiRwYWRkaW5nOiAxNXB4O1xuJHNoYWRvdy1yYWRpdXM6IDcuNXB4O1xuJHNoYWRvdy1zdHJlZ3RoOiA1cHg7XG4kYm9yZGVyOiAycHg7XG4kYm9yZGVyLXJhZGl1czogMTBweDtcblxuJHByaW1hcnktZm9udDogVk5GIENvbWljIFNhbnM7XG4kbGluZS1oZWlnaHQ6IDE1MCU7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludCAqL1xuJGRlc2t0b3A6IDEwMjZweDsgLyogbWluLXdpZHRoICovXG4kdGFibGV0OiAxMDI1cHg7XG4kbW9iaWxlOiA3NjdweDtcblxuJG1heC13aWR0aC1jb250YWluZXI6IDEzMjBweDsgLyogc2V0IG1heC13aWR0aCBsaWtlIGJvb3RzdHJhcCAqLyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlXCI7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnNwYW4sXG5wIHtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG59IFxuXG5uYXYge1xuICBtYXJnaW46ICRtYXJnaW4vMjtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG59XG5cbmEge1xuICBjb2xvcjogJGRhcmstd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLzI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuaW5wdXQsXG5pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xufVxuXG5idXR0b24sXG5idXR0b246Zm9jdXMge1xuICBib3JkZXI6IHVuc2V0O1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3Njc3Mvc2hhcmVcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlXCI7XG5cbi5wcm9kdWN0IHtcbiAgbWFyZ2luOiAkbWFyZ2luO1xuICBwYWRkaW5nOiAkcGFkZGluZztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGN5YW47XG4gIGJvcmRlcjogJGJvcmRlciBzb2xpZCAkYmxhY2s7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzIgJHNoYWRvdy1yYWRpdXMvMiAkc2hhZG93LXN0cmVndGggJGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMvMjtcbiAgICB0ciB7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy8yO1xuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XG4gICAgICAgIGJvcmRlcjogJGJvcmRlciBzb2xpZCAkcmVkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy8yO1xuICAgICAgfVxuICAgICAgLmRhbmdIYUdpYSB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XG4gICAgICB9XG4gICAgICAua2hvbmdIYUdpYSB7XG4gICAgICAgIGNvbG9yOiAkcmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");



class AppComponent {
    constructor() {
        this.title = 'learn-angular-v11';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  margin: 10px;\n}\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #d8dee9;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin-left: 15px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ECEFF4;\n}\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #ECEFF4;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n\n\ndiv[_ngcontent-%COMP%] {\n  color: #2e3440;\n  background-color: #a3be8c;\n  border: 2px solid #2e3440;\n  box-shadow: 7.5px 7.5px 5px #3b4252;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlLnNjc3MiLCIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLDBCQUFBO0FBQ2tCLGNBQUE7QUFJWSxpQ0FBQTtBQ3pCOUI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDRUY7QURDQTs7Ozs7RUFLRSxpQkRPWTtFQ05aLFlBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLGFETlE7QUVRVjtBRENBO0VBQ0UsY0RmVztFQ2dCWCx5QkRyQlU7RUNzQlYsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRFpjO0VDYWQsbUNBQUE7QUNFRjtBREFBO0VBQ0UsY0QxQk07QUU2QlI7QURBQTs7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJEekJjO0VDMEJkLG1DQUFBO0FDR0Y7QURBQTs7RUFFRSxhQUFBO0VBQ0EsY0QxQ007RUMyQ04sWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkRqRFU7RUNrRFYsbUJEcENjO0VDcUNkLG1DQUFBO0FDR0Y7QURBQTtFQUNFLHlCRHRESztBRXlEUDtBRnZDQSwwQkFBQTtBQUNrQixjQUFBO0FBSVksaUNBQUE7QUV4QjlCO0VBQ0UsY0ZLTTtFRUpOLHlCRkpNO0VFS04seUJBQUE7RUFDQSxtQ0FBQTtBQWdFRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcmVkOiAjYmY2MTZhO1xuJGdyZWVuOiAjYTNiZThjO1xuJHllbGxvdzogI2ViY2I4YjtcbiRkYXJrLWJsdWU6ICM1ZTgxYWM7XG4kYmx1ZTogIzgxYTFjMTtcbiRtYWdlbnRhOiAjYjQ4ZWFkO1xuJGN5YW46ICM4OGMwZDA7XG4kd2hpdGU6ICNFQ0VGRjQ7XG4kZGFyay13aGl0ZTogI2Q4ZGVlOTtcbiRibGFjazogIzJlMzQ0MDtcbiRncmF5OiAjM2I0MjUyO1xuXG4kbWFyZ2luOiAzMHB4O1xuJHBhZGRpbmc6IDE1cHg7XG4kc2hhZG93LXJhZGl1czogNy41cHg7XG4kc2hhZG93LXN0cmVndGg6IDVweDtcbiRib3JkZXI6IDJweDtcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4kcHJpbWFyeS1mb250OiBWTkYgQ29taWMgU2FucztcbiRsaW5lLWhlaWdodDogMTUwJTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50ICovXG4kZGVza3RvcDogMTAyNnB4OyAvKiBtaW4td2lkdGggKi9cbiR0YWJsZXQ6IDEwMjVweDtcbiRtb2JpbGU6IDc2N3B4O1xuXG4kbWF4LXdpZHRoLWNvbnRhaW5lcjogMTMyMHB4OyAvKiBzZXQgbWF4LXdpZHRoIGxpa2UgYm9vdHN0cmFwICovIiwiQGltcG9ydCBcIi4vdmFyaWFibGVcIjtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDEsXG5oMixcbmgzLFxuc3BhbixcbnAge1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBtYXJnaW46ICRtYXJnaW4vMztcbn0gXG5cbm5hdiB7XG4gIG1hcmdpbjogJG1hcmdpbi8yO1xuICBwYWRkaW5nOiAkcGFkZGluZztcbn1cblxuYSB7XG4gIGNvbG9yOiAkZGFyay13aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4vMjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLXZpc2libGUge1xuICBib3JkZXI6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5cbmJ1dHRvbixcbmJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlcjogdW5zZXQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xuICBwYWRkaW5nOiAkcGFkZGluZy8yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc2Nzcy9zaGFyZVwiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVcIjtcblxuZGl2IHtcbiAgY29sb3I6ICRibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xuICBib3JkZXI6ICRib3JkZXIgc29saWQgJGJsYWNrO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cyAkc2hhZG93LXJhZGl1cyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG4iXX0= */"] });


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/product"]; };
const _c2 = function () { return ["/about"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 6, consts: [[1, "header"], [1, "header__logo"], [1, "header__menu"], [3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn Angular 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  margin: 10px;\n}\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #d8dee9;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin-left: 15px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ECEFF4;\n}\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #ECEFF4;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 3.75px;\n  background-color: #bf616a;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: stretch;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid #3b4252;\n  border-radius: 10px;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n}\n.header__logo[_ngcontent-%COMP%] {\n  background-color: #b48ead;\n  border-radius: 10px;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n}\n.header__menu[_ngcontent-%COMP%] {\n  border: unset;\n  border-radius: unset;\n  box-shadow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlLnNjc3MiLCIuLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLDBCQUFBO0FBQ2tCLGNBQUE7QUFJWSxpQ0FBQTtBQ3pCOUI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDRUY7QURDQTs7Ozs7RUFLRSxpQkRPWTtFQ05aLFlBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLGFETlE7QUVRVjtBRENBO0VBQ0UsY0RmVztFQ2dCWCx5QkRyQlU7RUNzQlYsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRFpjO0VDYWQsbUNBQUE7QUNFRjtBREFBO0VBQ0UsY0QxQk07QUU2QlI7QURBQTs7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJEekJjO0VDMEJkLG1DQUFBO0FDR0Y7QURBQTs7RUFFRSxhQUFBO0VBQ0EsY0QxQ007RUMyQ04sWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkRqRFU7RUNrRFYsbUJEcENjO0VDcUNkLG1DQUFBO0FDR0Y7QURBQTtFQUNFLHlCRHRESztBRXlEUDtBRnZDQSwwQkFBQTtBQUNrQixjQUFBO0FBSVksaUNBQUE7QUV4QjlCO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkZOSTtFRU9KLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CRkdjO0VFRmQscUNBQUE7QUFnRUY7QUEvREU7RUFDRSx5QkZaTTtFRWFOLG1CRkRZO0VFRVoscUNBQUE7QUFpRUo7QUEvREU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQWlFSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcmVkOiAjYmY2MTZhO1xuJGdyZWVuOiAjYTNiZThjO1xuJHllbGxvdzogI2ViY2I4YjtcbiRkYXJrLWJsdWU6ICM1ZTgxYWM7XG4kYmx1ZTogIzgxYTFjMTtcbiRtYWdlbnRhOiAjYjQ4ZWFkO1xuJGN5YW46ICM4OGMwZDA7XG4kd2hpdGU6ICNFQ0VGRjQ7XG4kZGFyay13aGl0ZTogI2Q4ZGVlOTtcbiRibGFjazogIzJlMzQ0MDtcbiRncmF5OiAjM2I0MjUyO1xuXG4kbWFyZ2luOiAzMHB4O1xuJHBhZGRpbmc6IDE1cHg7XG4kc2hhZG93LXJhZGl1czogNy41cHg7XG4kc2hhZG93LXN0cmVndGg6IDVweDtcbiRib3JkZXI6IDJweDtcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4kcHJpbWFyeS1mb250OiBWTkYgQ29taWMgU2FucztcbiRsaW5lLWhlaWdodDogMTUwJTtcblxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50ICovXG4kZGVza3RvcDogMTAyNnB4OyAvKiBtaW4td2lkdGggKi9cbiR0YWJsZXQ6IDEwMjVweDtcbiRtb2JpbGU6IDc2N3B4O1xuXG4kbWF4LXdpZHRoLWNvbnRhaW5lcjogMTMyMHB4OyAvKiBzZXQgbWF4LXdpZHRoIGxpa2UgYm9vdHN0cmFwICovIiwiQGltcG9ydCBcIi4vdmFyaWFibGVcIjtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaDEsXG5oMixcbmgzLFxuc3BhbixcbnAge1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBtYXJnaW46ICRtYXJnaW4vMztcbn0gXG5cbm5hdiB7XG4gIG1hcmdpbjogJG1hcmdpbi8yO1xuICBwYWRkaW5nOiAkcGFkZGluZztcbn1cblxuYSB7XG4gIGNvbG9yOiAkZGFyay13aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4vMjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLXZpc2libGUge1xuICBib3JkZXI6IHVuc2V0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5cbmJ1dHRvbixcbmJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlcjogdW5zZXQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIG1hcmdpbjogJG1hcmdpbi8zO1xuICBwYWRkaW5nOiAkcGFkZGluZy8yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG59XG4iLCJAaW1wb3J0IFwiL3NyYy9hc3NldHMvc2Nzcy9zaGFyZVwiO1xuQGltcG9ydCBcIi9zcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVcIjtcblxuLmhlYWRlciB7XG4gIG1hcmdpbjogJG1hcmdpbi8yO1xuICBwYWRkaW5nOiAkcGFkZGluZy80O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAkYm9yZGVyIHNvbGlkICRncmF5O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMiAkc2hhZG93LXJhZGl1cy8yICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbiAgJl9fbG9nbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hZ2VudGE7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1yYWRpdXMvMiAkc2hhZG93LXJhZGl1cy8yICRzaGFkb3ctc3RyZWd0aCAkZ3JheTtcbiAgfVxuICAmX19tZW51IHtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class FooterComponent {
    constructor() {
        this.today = Date();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 4, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ch\u00FAc b\u1EA1n th\u00E0nh c\u00F4ng!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx.today, "yyyy - MM - dd"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], span[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  line-height: 150%;\n  margin: 10px;\n}\nnav[_ngcontent-%COMP%] {\n  margin: 15px;\n  padding: 15px;\n}\na[_ngcontent-%COMP%] {\n  color: #d8dee9;\n  background-color: #5e81ac;\n  padding: 7.5px;\n  margin-left: 15px;\n  list-style: none;\n  text-decoration: none;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ECEFF4;\n}\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus-visible {\n  border: unset;\n  outline: none;\n  margin: 10px;\n  padding: 7.5px;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%], button[_ngcontent-%COMP%]:focus {\n  border: unset;\n  color: #ECEFF4;\n  margin: 10px;\n  padding: 7.5px;\n  background-color: #5e81ac;\n  border-radius: 10px;\n  box-shadow: 2.5px 2.5px 5px #3b4252;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #81a1c1;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #3b4252;\n  margin: 15px;\n  color: #ECEFF4;\n  border: 1px solid #d8dee9;\n  box-shadow: 3.75px 3.75px 5px #3b4252;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvX3NoYXJlLnNjc3MiLCIuLi8uLi8uLi9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLDBCQUFBO0FBQ2tCLGNBQUE7QUFJWSxpQ0FBQTtBQ3pCOUI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDRUY7QURDQTs7Ozs7RUFLRSxpQkRPWTtFQ05aLFlBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLGFETlE7QUVRVjtBRENBO0VBQ0UsY0RmVztFQ2dCWCx5QkRyQlU7RUNzQlYsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRFpjO0VDYWQsbUNBQUE7QUNFRjtBREFBO0VBQ0UsY0QxQk07QUU2QlI7QURBQTs7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJEekJjO0VDMEJkLG1DQUFBO0FDR0Y7QURBQTs7RUFFRSxhQUFBO0VBQ0EsY0QxQ007RUMyQ04sWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkRqRFU7RUNrRFYsbUJEcENjO0VDcUNkLG1DQUFBO0FDR0Y7QURBQTtFQUNFLHlCRHRESztBRXlEUDtBRnZDQSwwQkFBQTtBQUNrQixjQUFBO0FBSVksaUNBQUE7QUV4QjlCO0VBQ0UseUJGTUs7RUVMTCxZQUFBO0VBQ0EsY0ZDTTtFRUFOLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkZRYztBRXdEaEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJlZDogI2JmNjE2YTtcbiRncmVlbjogI2EzYmU4YztcbiR5ZWxsb3c6ICNlYmNiOGI7XG4kZGFyay1ibHVlOiAjNWU4MWFjO1xuJGJsdWU6ICM4MWExYzE7XG4kbWFnZW50YTogI2I0OGVhZDtcbiRjeWFuOiAjODhjMGQwO1xuJHdoaXRlOiAjRUNFRkY0O1xuJGRhcmstd2hpdGU6ICNkOGRlZTk7XG4kYmxhY2s6ICMyZTM0NDA7XG4kZ3JheTogIzNiNDI1MjtcblxuJG1hcmdpbjogMzBweDtcbiRwYWRkaW5nOiAxNXB4O1xuJHNoYWRvdy1yYWRpdXM6IDcuNXB4O1xuJHNoYWRvdy1zdHJlZ3RoOiA1cHg7XG4kYm9yZGVyOiAycHg7XG4kYm9yZGVyLXJhZGl1czogMTBweDtcblxuJHByaW1hcnktZm9udDogVk5GIENvbWljIFNhbnM7XG4kbGluZS1oZWlnaHQ6IDE1MCU7XG5cbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludCAqL1xuJGRlc2t0b3A6IDEwMjZweDsgLyogbWluLXdpZHRoICovXG4kdGFibGV0OiAxMDI1cHg7XG4kbW9iaWxlOiA3NjdweDtcblxuJG1heC13aWR0aC1jb250YWluZXI6IDEzMjBweDsgLyogc2V0IG1heC13aWR0aCBsaWtlIGJvb3RzdHJhcCAqLyIsIkBpbXBvcnQgXCIuL3ZhcmlhYmxlXCI7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnNwYW4sXG5wIHtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG59IFxuXG5uYXYge1xuICBtYXJnaW46ICRtYXJnaW4vMjtcbiAgcGFkZGluZzogJHBhZGRpbmc7XG59XG5cbmEge1xuICBjb2xvcjogJGRhcmstd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLzI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICR3aGl0ZTtcbn1cblxuaW5wdXQsXG5pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAkbWFyZ2luLzM7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLzI7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8zICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xufVxuXG5idXR0b24sXG5idXR0b246Zm9jdXMge1xuICBib3JkZXI6IHVuc2V0O1xuICBjb2xvcjogJHdoaXRlO1xuICBtYXJnaW46ICRtYXJnaW4vMztcbiAgcGFkZGluZzogJHBhZGRpbmcvMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctcmFkaXVzLzMgJHNoYWRvdy1yYWRpdXMvMyAkc2hhZG93LXN0cmVndGggJGdyYXk7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xufVxuIiwiQGltcG9ydCBcIi9zcmMvYXNzZXRzL3Njc3Mvc2hhcmVcIjtcbkBpbXBvcnQgXCIvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlXCI7XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcbiAgbWFyZ2luOiAkbWFyZ2luLzI7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJvcmRlcjogJGJvcmRlci8yIHNvbGlkICRkYXJrLXdoaXRlO1xuICBib3gtc2hhZG93OiAkc2hhZG93LXJhZGl1cy8yICRzaGFkb3ctcmFkaXVzLzIgJHNoYWRvdy1zdHJlZ3RoICRncmF5O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn0iXX0= */"] });


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
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "File not found");
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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


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