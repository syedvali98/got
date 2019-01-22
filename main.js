(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand mx-auto\" [routerLink]=\"['/home']\">Game Of Thrones</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto mx-auto text-center\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/characters']\">Characters</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/books']\">Books</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/houses']\">Houses</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'got';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _houses_houses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./houses/houses.component */ "./src/app/houses/houses.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./request.service */ "./src/app/request.service.ts");
/* harmony import */ var _no_search_found_no_search_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./no-search-found/no-search-found.component */ "./src/app/no-search-found/no-search-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"],
                _characters_characters_component__WEBPACK_IMPORTED_MODULE_8__["CharactersComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"],
                _houses_houses_component__WEBPACK_IMPORTED_MODULE_10__["HousesComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _no_search_found_no_search_found_component__WEBPACK_IMPORTED_MODULE_13__["NoSearchFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: 'characters', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_8__["CharactersComponent"] },
                    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"] },
                    { path: 'houses', component: _houses_houses_component__WEBPACK_IMPORTED_MODULE_10__["HousesComponent"] },
                    { path: 'no-search-found', component: _no_search_found_no_search_found_component__WEBPACK_IMPORTED_MODULE_13__["NoSearchFoundComponent"] },
                    { path: 'view/:url', component: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_request_service__WEBPACK_IMPORTED_MODULE_12__["RequestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mb-3 col-6 mx-auto\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"bookName\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-dark\" (click)=\"searchBook()\">Search</button>\n  </div>\n</div>\n<app-no-search-found *ngIf=\"allBooks.length==0\"></app-no-search-found>\n<div class=\"row text-center\" *ngIf=\"allBooks.length>0\">\n  <div class=\"mx-auto\" *ngFor=\"let book of allBooks\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://juniperbooks.com/wp-content/uploads/2016/07/RHGM5-game-thrones-armor-front-1200.jpg\" class=\"card-img-top\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{book.name | uppercase}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">By {{book.publisher}}</h6>\n        <a [routerLink]=\"['/view',book.url]\" class=\"card-link\">Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-5 col-sm-4\"></div>\n  <div class=\"col-3\">\n    <div *ngIf=\"pagination\" style=\"padding:25px\">\n      <div class=\"text-center\">\n        <ul class=\"pagination\">\n          <li *ngIf=\"bookConstant<=1\" class=\"page-item disabled\">\n            <a class=\"page-link\" (click)=\"paginationPrev()\">Previous</a>\n          </li>\n          <li *ngIf=\"bookConstant>1\" class=\"page-item\">\n            <a class=\"page-link\" (click)=\"paginationPrev()\">Previous</a>\n          </li>\n          <li *ngIf=\"bookConstant>=2\" class=\"page-item disabled\">\n            <a class=\"page-link\" (click)=\"paginationNext()\">Next</a>\n          </li>\n          <li *ngIf=\"bookConstant<2\" class=\"page-item\">\n            <a class=\"page-link\" (click)=\"paginationNext()\">Next</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksComponent = /** @class */ (function () {
    function BooksComponent(_request, router) {
        this._request = _request;
        this.router = router;
        this.bookConstant = 1;
        this.pagination = true;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBooks = this._request.getAllBooks(this.bookConstant).subscribe(function (data) {
            _this.allBooks = data;
            (function (error) {
                console.log(error);
            });
        });
    };
    BooksComponent.prototype.paginationNext = function () {
        var _this = this;
        this.bookConstant = this.bookConstant + 1;
        this.allBooks = this._request.getAllBooks(this.bookConstant).subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log(error);
        });
    };
    BooksComponent.prototype.paginationPrev = function () {
        var _this = this;
        this.bookConstant = this.bookConstant - 1;
        this.allBooks = this._request.getAllBooks(this.bookConstant).subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log(error);
        });
    };
    BooksComponent.prototype.searchBook = function () {
        var _this = this;
        this.pagination = false;
        this.allBooks = this._request.getParticularBook(this.bookName).subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log(error);
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/characters/characters.component.css":
/*!*****************************************************!*\
  !*** ./src/app/characters/characters.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/characters/characters.component.html":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mb-3 col-6 mx-auto\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"characterName\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-dark\" (click)=\"searchCharacter()\">Search</button>\n  </div>\n</div>\n<app-no-search-found *ngIf=\"allCharacters.length==0\"></app-no-search-found>\n<div class=\"row\" *ngIf=\"allCharacters.length>0\">\n  <div class=\"mx-auto\" *ngFor=\"let char of allCharacters\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://i.ytimg.com/vi/XdDziX5x030/maxresdefault.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div *ngIf=\"char.name.length!=''\" class=\"card-body\">\n        <h5 class=\"card-title\">{{char.name | uppercase}}</h5>\n        <p class=\"card-text\">{{char.gender}}</p>\n        <a [routerLink]=\"['/view',char.url]\" class=\"card-link\">Details</a>\n      </div>\n      <div *ngIf=\"char.name.length==''\" class=\"card-body\">\n        <h5 class=\"card-title\">No Name</h5>\n        <p class=\"card-text\">{{char.gender}}</p>\n        <a [routerLink]=\"['/view',char.url]\" class=\"card-link\">Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-5 col-sm-4\"></div>\n  <div class=\"col-3\">\n    <nav *ngIf=\"pagination\" aria-label=\"...\" style=\"padding:25px;\">\n      <ul class=\"pagination\">\n        <li *ngIf=\"charConst<=1\" class=\"page-item disabled\">\n          <a class=\"page-link\" (click)=\"paginationPrev()\">Previous</a>\n        </li>\n        <li *ngIf=\"charConst>1\" class=\"page-item\">\n          <a class=\"page-link\" (click)=\"paginationPrev()\">Previous</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"paginationNext()\">Next</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(_request) {
        this._request = _request;
        this.charConst = 1;
        this.pagination = true;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCharacters = this._request.getAllCharacters(this.charConst).subscribe(function (data) {
            _this.allCharacters = data;
        }, function (error) {
            console.log(error);
        });
    };
    CharactersComponent.prototype.paginationNext = function () {
        var _this = this;
        this.charConst = this.charConst + 1;
        this.allCharacters = this._request.getAllCharacters(this.charConst).subscribe(function (data) {
            _this.allCharacters = data;
        }, function (error) {
            console.log(error);
        });
    };
    CharactersComponent.prototype.paginationPrev = function () {
        var _this = this;
        this.charConst = this.charConst - 1;
        this.allCharacters = this._request.getAllCharacters(this.charConst).subscribe(function (data) {
            _this.allCharacters = data;
        }, function (error) {
            console.log(error);
        });
    };
    CharactersComponent.prototype.searchCharacter = function () {
        var _this = this;
        this.pagination = false;
        this.allCharacters = this._request.getParticularCharacter(this.characterName).subscribe(function (data) {
            _this.allCharacters = data;
        }, function (error) {
            console.log(error);
        });
    };
    CharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-bottom:50px\" class=\"row text-center\" *ngIf=\"allBooks.length>0\">\n  <h2 class=\"col-12 text-center\">Books</h2>\n  <div class=\"mx-auto\" *ngFor=\"let book of allBooks\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://juniperbooks.com/wp-content/uploads/2016/07/RHGM5-game-thrones-armor-front-1200.jpg\" class=\"card-img-top\"\n        alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{book.name | uppercase}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">By {{book.publisher}}</h6>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" [routerLink]=\"['/books']\" class=\"btn btn-link btn-lg btn-block\">Show all Books</button>\n</div>\n<div style=\"padding-bottom:50px\" class=\"row text-center\" *ngIf=\"allHouses.length>0\">\n  <h2 class=\"col-12 text-center\">Houses</h2>\n  <div class=\"mx-auto\" *ngFor=\"let house of allHouses\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://i.ebayimg.com/images/g/dIUAAOSwjIVaW1bm/s-l300.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{house.name | uppercase}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">At {{house.region}}</h6>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" [routerLink]=\"['/houses']\" class=\"btn btn-link btn-lg btn-block\">Show all Houses</button>\n</div>\n<div style=\"padding-bottom:50px\" class=\"row text-center\" *ngIf=\"allCharacters.length>0\">\n  <h2 class=\"col-12 text-center\">Characters</h2>\n  <div class=\"mx-auto\" *ngFor=\"let char of allCharacters\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://i.ytimg.com/vi/XdDziX5x030/maxresdefault.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div *ngIf=\"char.name.length!=''\" class=\"card-body\">\n        <h5 class=\"card-title\">{{char.name | uppercase}}</h5>\n        <p class=\"card-text\">{{char.gender}}</p>\n      </div>\n      <div *ngIf=\"char.name.length==''\" class=\"card-body\">\n        <h5 class=\"card-title\">No Name</h5>\n        <p class=\"card-text\">{{char.gender}}</p>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" [routerLink]=\"['/characters']\" class=\"btn btn-link btn-lg btn-block\">Show all Characters</button>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_request) {
        this._request = _request;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBooks = this._request.getAllBooks(1).subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log(error);
        });
        this.allHouses = this._request.getAllHouses(1).subscribe(function (data) {
            _this.allHouses = data;
        }, function (error) {
            console.log(error);
        });
        this.allCharacters = this._request.getAllCharacters(3).subscribe(function (data) {
            _this.allCharacters = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/houses/houses.component.css":
/*!*********************************************!*\
  !*** ./src/app/houses/houses.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/houses/houses.component.html":
/*!**********************************************!*\
  !*** ./src/app/houses/houses.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mb-3 col-6 mx-auto\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"houseName\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-dark\" (click)=\"searchHouse()\">Search</button>\n  </div>\n</div>\n<app-no-search-found *ngIf=\"allHouses.length==0\"></app-no-search-found>\n<div class=\"row\" *ngIf=\"allHouses.length>0\">\n  <div class=\"text-center mx-auto\" *ngFor=\"let house of allHouses\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"https://i.ebayimg.com/images/g/dIUAAOSwjIVaW1bm/s-l300.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{house.name | uppercase}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">By {{house.region}}</h6>\n        <a [routerLink]=\"['/view',house.url]\" class=\"card-link\">Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-5 col-sm-4\"></div>\n  <div class=\"col-3\">\n    <nav aria-label=\"...\" style=\"padding:25px\">\n      <ul *ngIf=\"pagination\" class=\"pagination\">\n        <li *ngIf=\"houseConst<=1\" class=\"page-item disabled\">\n          <a class=\"page-link\" (click)=\"paginationPrev()\">Previous</a>\n        </li>\n        <li *ngIf=\"houseConst>1\" class=\"page-item\">\n          <a class=\"page-link\" (click)=\"paginationPrev()\">Previous</a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" (click)=\"paginationNext()\">Next</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/houses/houses.component.ts":
/*!********************************************!*\
  !*** ./src/app/houses/houses.component.ts ***!
  \********************************************/
/*! exports provided: HousesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesComponent", function() { return HousesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HousesComponent = /** @class */ (function () {
    function HousesComponent(_request) {
        this._request = _request;
        this.houseConst = 1;
        this.pagination = true;
    }
    HousesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allHouses = this._request.getAllHouses(this.houseConst).subscribe(function (data) {
            _this.allHouses = data;
        }, function (error) {
            console.log(error);
        });
    };
    HousesComponent.prototype.paginationNext = function () {
        var _this = this;
        this.houseConst = this.houseConst + 1;
        this.allHouses = this._request.getAllHouses(this.houseConst).subscribe(function (data) {
            _this.allHouses = data;
        }, function (error) {
            console.log(error);
        });
    };
    HousesComponent.prototype.paginationPrev = function () {
        var _this = this;
        this.houseConst = this.houseConst - 1;
        this.allHouses = this._request.getAllHouses(this.houseConst).subscribe(function (data) {
            _this.allHouses = data;
        }, function (error) {
            console.log(error);
        });
    };
    HousesComponent.prototype.searchHouse = function () {
        var _this = this;
        this.pagination = false;
        this.allHouses = this._request.getParticularHouse(this.houseName).subscribe(function (data) {
            _this.allHouses = data;
        }, function (error) {
            console.log(error);
        });
    };
    HousesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-houses',
            template: __webpack_require__(/*! ./houses.component.html */ "./src/app/houses/houses.component.html"),
            styles: [__webpack_require__(/*! ./houses.component.css */ "./src/app/houses/houses.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], HousesComponent);
    return HousesComponent;
}());



/***/ }),

/***/ "./src/app/no-search-found/no-search-found.component.css":
/*!***************************************************************!*\
  !*** ./src/app/no-search-found/no-search-found.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/no-search-found/no-search-found.component.html":
/*!****************************************************************!*\
  !*** ./src/app/no-search-found/no-search-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-muted text-center\">\nNothing Found, Try to be accurate\n</p>\n"

/***/ }),

/***/ "./src/app/no-search-found/no-search-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/no-search-found/no-search-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NoSearchFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSearchFoundComponent", function() { return NoSearchFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoSearchFoundComponent = /** @class */ (function () {
    function NoSearchFoundComponent() {
    }
    NoSearchFoundComponent.prototype.ngOnInit = function () {
    };
    NoSearchFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-search-found',
            template: __webpack_require__(/*! ./no-search-found.component.html */ "./src/app/no-search-found/no-search-found.component.html"),
            styles: [__webpack_require__(/*! ./no-search-found.component.css */ "./src/app/no-search-found/no-search-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoSearchFoundComponent);
    return NoSearchFoundComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/request.service.ts":
/*!************************************!*\
  !*** ./src/app/request.service.ts ***!
  \************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.baseurl = "https://anapioficeandfire.com/api";
    }
    RequestService.prototype.getAllBooks = function (bookconst) {
        var bookResponse = this.http.get(this.baseurl + "/books?page=" + bookconst + "&pageSize=8");
        console.log(this.baseurl + "/books?page=" + bookconst + "&pageSize=10");
        return bookResponse;
    };
    RequestService.prototype.getAllHouses = function (houseConst) {
        var houseResponse = this.http.get(this.baseurl + "/houses?page=" + houseConst + "&pageSize=8");
        return houseResponse;
    };
    RequestService.prototype.getAllCharacters = function (charConst) {
        var characterResponse = this.http.get(this.baseurl + "/characters?page=" + charConst + "&pageSize=8");
        return characterResponse;
    };
    RequestService.prototype.getParticularBook = function (bookName) {
        var response = this.http.get(this.baseurl + '/books?name=' + bookName);
        console.log(this.baseurl + '/Books?name=' + bookName);
        return response;
    };
    RequestService.prototype.getParticularHouse = function (houseName) {
        var response = this.http.get(this.baseurl + '/houses?name=' + houseName);
        console.log(this.baseurl + '/houses?name=' + houseName);
        return response;
    };
    RequestService.prototype.getParticularCharacter = function (characterName) {
        var response = this.http.get(this.baseurl + '/characters?name=' + characterName);
        console.log(this.baseurl + '/characters?name=' + characterName);
        return response;
    };
    RequestService.prototype.singleInfo = function (apiUrl) {
        var singleResponse = this.http.get(apiUrl);
        return singleResponse;
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-muted text-center\">Information</p>\n<!--Character View-->\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-2\"></div>\n  <div class=\"col-4\" *ngIf=\"currentView.gender\">\n    <div class=\"card\" style=\"width: 24rem;\">\n      <div class=\"card-body\">\n        <h5 *ngIf=\"currentView.name\" class=\"card-title\">Name: {{currentView.name}}</h5>\n        <h6 *ngIf=\"currentView.gender\" class=\"card-subtitle mb-2 text-muted\">Gender: {{currentView.gender}}</h6>\n        <p *ngIf=\"currentView.culture\" class=\"card-text\">Culture: {{currentView.culture}}</p>\n        <p *ngIf=\"currentView.born\" class=\"card-text\">Born: {{currentView.born}}</p>\n        <p *ngIf=\"currentView.died\" class=\"card-text\">Died: {{currentView.died}}</p>\n        <p *ngIf=\"currentView.titles\" class=\"card-text\">Titles: {{currentView.titles}}</p>\n        <p *ngIf=\"currentView.aliases\" class=\"card-text\">Aliases: {{currentView.aliases}}</p>\n        <p *ngIf=\"currentView.father\" class=\"card-text\">Father: {{currentView.father}}</p>\n        <p *ngIf=\"currentView.mother\" class=\"card-text\">Mother: {{currentView.mother}}</p>\n        <p *ngIf=\"currentView.spouse\" class=\"card-text\">Spouse: {{currentView.spouse}}</p>\n        <p *ngIf=\"currentView.allegiances\" class=\"card-text\">Allegiances: {{currentView.allegiances}}</p>\n        <p *ngIf=\"currentView.books\" class=\"card-text\">Books: {{currentView.books}}</p>\n        <p *ngIf=\"currentView.povBooks\" class=\"card-text\">Featured Books: {{currentView.povBooks}}</p>\n        <p *ngIf=\"currentView.tvSeries\" class=\"card-text\">TV Series: {{currentView.tvSeries}}</p>\n        <p *ngIf=\"currentView.playedBy\" class=\"card-text\">Played By: {{currentView.playedBy}}</p>\n        <p class=\"text-muted\">End of the Information</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--House View-->\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-2\"></div>\n  <div *ngIf=\"currentView.region\" class=\"col-4\">\n    <div class=\"card\" style=\"width: 24rem;\">\n      <div class=\"card-body\">\n        <h5 *ngIf=\"currentView.name\" class=\"card-title\">Name: {{currentView.name}}</h5>\n        <h6 *ngIf=\"currentView.region\" class=\"card-subtitle mb-2 text-muted\">Region: {{currentView.region}}</h6>\n        <p *ngIf=\"currentView.coatOfArms\" class=\"card-text\">Coat of Arms: {{currentView.coatOfArms}}</p>\n        <p *ngIf=\"currentView.words\" class=\"card-text\">Words: {{currentView.words}}</p>\n        <p *ngIf=\"currentView.titles\" class=\"card-text\">Titles: {{currentView.titles}}</p>\n        <p *ngIf=\"currentView.seats\" class=\"card-text\">Seats: {{currentView.seats}}</p>\n        <p *ngIf=\"currentView.currentLord\" class=\"card-text\">Current Lord: {{currentView.currentLord}}</p>\n        <p *ngIf=\"currentView.heir\" class=\"card-text\">Heir: {{currentView.heir}}</p>\n        <p *ngIf=\"currentView.overlord\" class=\"card-text\">OverLord: {{currentView.overlord}}</p>\n        <p *ngIf=\"currentView.founded\" class=\"card-text\">Founded: {{currentView.founded}}</p>\n        <p *ngIf=\"currentView.founder\" class=\"card-text\">Founder: {{currentView.founder}}</p>\n        <p *ngIf=\"currentView.diedOut\" class=\"card-text\">Died Out: {{currentView.diedOut}}</p>\n        <p *ngIf=\"currentView.ancestralWeapons\" class=\"card-text\">Ancestral Weapons: {{currentView.ancestralWeapons}}</p>\n        <p *ngIf=\"currentView.cadetBranches\" class=\"card-text\">Cadet Branches: {{currentView.cadetBranches}}</p>\n        <p *ngIf=\"currentView.swornMembers\" class=\"card-text\">Sworn Members: {{currentView.swornMembers}}</p>\n        <p class=\"text-muted\">End of the Information</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--Book View-->\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-2\"></div>\n  <div *ngIf=\"currentView.publisher\" class=\"col-4\">\n    <div class=\"card\" style=\"width: 24rem;\">\n      <div class=\"card-body\">\n        <h5 *ngIf=\"currentView.name\" class=\"card-title\">Name: {{currentView.name}}</h5>\n        <h6 *ngIf=\"currentView.isbn\" class=\"card-subtitle mb-2 text-muted\">ISBN: {{currentView.isbn}}</h6>\n        <p *ngIf=\"currentView.authors\" class=\"card-text\">Authors: {{currentView.authors}}</p>\n        <p *ngIf=\"currentView.noOfPages\" class=\"card-text\">No Of Pages: {{currentView.noOfPages}}</p>\n        <p *ngIf=\"currentView.publisher\" class=\"card-text\">Publisher: {{currentView.publisher}}</p>\n        <p *ngIf=\"currentView.country\" class=\"card-text\">Country: {{currentView.country}}</p>\n        <p *ngIf=\"currentView.mediaType\" class=\"card-text\">Media Type: {{currentView.mediaType}}</p>\n        <p *ngIf=\"currentView.released\" class=\"card-text\">Released On: {{currentView.released | date}}</p>\n        <p *ngIf=\"currentView.characters\" class=\"card-text\">Characters: {{currentView.characters}}</p>\n        <p *ngIf=\"currentView.povCharacters\" class=\"card-text\">Featured Characters: {{currentView.povCharacters}}</p>\n        <p class=\"text-muted\">End of the Information</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(request, router, activatedRoute) {
        this.request = request;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewUrl = this.activatedRoute.snapshot.paramMap.get('url');
        console.log(this.viewUrl);
        this.request.singleInfo(this.viewUrl).subscribe(function (data) {
            _this.currentView = data;
        }, function (error) {
            console.log(error);
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewComponent);
    return ViewComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/syedvali/Desktop/got/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map