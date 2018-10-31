webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EsportePage = /** @class */ (function () {
    function EsportePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    EsportePage_1 = EsportePage;
    EsportePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(EsportePage_1, {
            item: item
        });
    };
    EsportePage = EsportePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-esporte',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatEsporte\esporte.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Esportes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatEsporte\esporte.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EsportePage);
    return EsportePage;
    var EsportePage_1;
}());

//# sourceMappingURL=esporte.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EletronicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EletronicoPage = /** @class */ (function () {
    function EletronicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    EletronicoPage_1 = EletronicoPage;
    EletronicoPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(EletronicoPage_1, {
            item: item
        });
    };
    EletronicoPage = EletronicoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eletronico',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatEletronico\eletronico.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Eletrônicos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatEletronico\eletronico.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EletronicoPage);
    return EletronicoPage;
    var EletronicoPage_1;
}());

//# sourceMappingURL=eletronico.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpregoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmpregoPage = /** @class */ (function () {
    function EmpregoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    EmpregoPage_1 = EmpregoPage;
    EmpregoPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(EmpregoPage_1, {
            item: item
        });
    };
    EmpregoPage = EmpregoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emprego',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatEmprego\emprego.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Empregos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatEmprego\emprego.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmpregoPage);
    return EmpregoPage;
    var EmpregoPage_1;
}());

//# sourceMappingURL=emprego.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImovelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImovelPage = /** @class */ (function () {
    function ImovelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ImovelPage_1 = ImovelPage;
    ImovelPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ImovelPage_1, {
            item: item
        });
    };
    ImovelPage = ImovelPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imovel',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatImovel\imovel.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Imovéis</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatImovel\imovel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ImovelPage);
    return ImovelPage;
    var ImovelPage_1;
}());

//# sourceMappingURL=imovel.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicaPage = /** @class */ (function () {
    function MusicaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    MusicaPage_1 = MusicaPage;
    MusicaPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(MusicaPage_1, {
            item: item
        });
    };
    MusicaPage = MusicaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musica',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatMusica\musica.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Músicas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n        {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatMusica\musica.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MusicaPage);
    return MusicaPage;
    var MusicaPage_1;
}());

//# sourceMappingURL=musica.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimalPage = /** @class */ (function () {
    function AnimalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-animal',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatAnimal\animal.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Animais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="filterProdutos($event)" [(ngModel)]="searchText"></ion-searchbar>\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items">\n        <h1>{{item.nome}}</h1>\n        <h2>{{item.valor}}</h2>\n        <h2>{{item.descricao}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatAnimal\animal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AnimalPage);
    return AnimalPage;
}());

//# sourceMappingURL=animal.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VeiculoPage = /** @class */ (function () {
    function VeiculoPage(navCtrl, navParams, restApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restApiProvider = restApiProvider;
        this.MostraProdutos();
    }
    VeiculoPage.prototype.MostraProdutos = function () {
        var _this = this;
        this.restApiProvider.getProduto().then(function (data) {
            _this.produtos = data;
            console.log(_this.produtos);
        });
    };
    VeiculoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-veiculo',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\categoria\CatVeiculo\veiculo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Veículos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="filterProdutos($event)" [(ngModel)]="searchText"></ion-searchbar>\n  <ion-list inset>\n    <ion-item *ngFor="let produto of produtos" (click)="itemTapped($event, produto)">\n      <h1>{{produto.nome}}</h1>\n      <h2>{{produto.valor}}</h2>\n      <p>{{produto.descricao}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\categoria\CatVeiculo\veiculo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], VeiculoPage);
    return VeiculoPage;
}());

//# sourceMappingURL=veiculo.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnuncioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoria_CatEsporte_esporte__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_CatEletronico_eletronico__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categoria_CatEmprego_emprego__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categoria_CatImovel_imovel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoria_CatMusica_musica__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categoria_CatAnimal_animal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categoria_CatVeiculo_veiculo__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnuncioPage = /** @class */ (function () {
    function AnuncioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
        this.items = [
            { title: 'Esportes', icon: 'md-bicycle' },
            { title: 'Veículos', icon: 'md-car' },
            { title: 'Imóveis', icon: 'ios-home' },
            { title: 'Animais', icon: 'md-paw' },
            { title: 'Música', icon: 'ios-musical-notes' },
            { title: 'Eletrônicos', icon: 'md-game-controller-b' },
            { title: 'Empregos', icon: 'ios-people' }
        ];
    }
    AnuncioPage_1 = AnuncioPage;
    AnuncioPage.prototype.itemTapped = function (event, item) {
        switch (item.title) {
            case "Esportes": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categoria_CatEsporte_esporte__["a" /* EsportePage */]);
                break;
            }
            case "Veículos": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__categoria_CatVeiculo_veiculo__["a" /* VeiculoPage */]);
                break;
            }
            case "Imóveis": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categoria_CatImovel_imovel__["a" /* ImovelPage */]);
                break;
            }
            case "Animais": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__categoria_CatAnimal_animal__["a" /* AnimalPage */]);
                break;
            }
            case "Música": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__categoria_CatMusica_musica__["a" /* MusicaPage */]);
                break;
            }
            case "Eletrônicos": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoria_CatEletronico_eletronico__["a" /* EletronicoPage */]);
                break;
            }
            case "Empregos": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__categoria_CatEmprego_emprego__["a" /* EmpregoPage */]);
                break;
            }
            default: {
                this.navCtrl.push(AnuncioPage_1);
                break;
            }
        }
    };
    AnuncioPage = AnuncioPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anuncio',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\anuncio\anuncio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Anúncios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n        {{item.title}}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\anuncio\anuncio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AnuncioPage);
    return AnuncioPage;
    var AnuncioPage_1;
}());

//# sourceMappingURL=anuncio.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoria_CatEsporte_esporte__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoria_CatEletronico_eletronico__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categoria_CatEmprego_emprego__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categoria_CatImovel_imovel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoria_CatMusica_musica__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categoria_CatAnimal_animal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categoria_CatVeiculo_veiculo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__anuncio_anuncio__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Categorias








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
        this.items = [
            { title: 'Esportes', icon: 'md-bicycle' },
            { title: 'Veículos', icon: 'md-car' },
            { title: 'Imóveis', icon: 'ios-home' },
            { title: 'Animais', icon: 'md-paw' },
            { title: 'Música', icon: 'ios-musical-notes' },
            { title: 'Eletrônicos', icon: 'md-game-controller-b' },
            { title: 'Empregos', icon: 'ios-people' }
        ];
    }
    HomePage.prototype.itemTapped = function (event, item) {
        switch (item.title) {
            case "Esportes": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categoria_CatEsporte_esporte__["a" /* EsportePage */]);
                break;
            }
            case "Veículos": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__categoria_CatVeiculo_veiculo__["a" /* VeiculoPage */]);
                break;
            }
            case "Imóveis": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categoria_CatImovel_imovel__["a" /* ImovelPage */]);
                break;
            }
            case "Animais": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__categoria_CatAnimal_animal__["a" /* AnimalPage */]);
                break;
            }
            case "Música": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__categoria_CatMusica_musica__["a" /* MusicaPage */]);
                break;
            }
            case "Eletrônicos": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoria_CatEletronico_eletronico__["a" /* EletronicoPage */]);
                break;
            }
            case "Empregos": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__categoria_CatEmprego_emprego__["a" /* EmpregoPage */]);
                break;
            }
            default: {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__anuncio_anuncio__["a" /* AnuncioPage */]);
                break;
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card>\n    <img src="../assets/imgs/esportes.jpg"/>\n    <div class="card-title">Esportes</div>\n    <div class="card-subtitle"> </div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/eletronicos.jpg"/>\n    <div class="card-title">Eletrônicos</div>\n    <div class="card-subtitle"> </div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/animais.jpg"/>\n    <div class="card-title">Animais</div>\n    <div class="card-subtitle"> </div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/imgs/imoveis.jpg"/>\n    <div class="card-title">Imovéis</div>\n    <div class="card-subtitle"> </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestApiProvider = /** @class */ (function () {
    function RestApiProvider(http) {
        this.http = http;
        this.urlAPI = 'http://localhost:3000';
    }
    RestApiProvider.prototype.getProduto = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.urlAPI + '/produto').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioPage = /** @class */ (function () {
    function UsuarioPage() {
        this.email = false;
        this.sexoForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "sexo": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 'F', disabled: false })
        });
    }
    UsuarioPage.prototype.change = function () {
        console.log(this.email);
    };
    UsuarioPage.prototype.doSubmit = function (event) {
        console.log(this.sexoForm.value);
        event.preventDefault();
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuario',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\usuario\usuario.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastro de Usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" name="nomeUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input type="password" name="senhaUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Data de Nascimento</ion-label>\n      <ion-input type="date" name="dataUsuario"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Endereço</ion-label>\n      <ion-input type="text" name="enderecoUsuario"></ion-input>\n    </ion-item>\n\n    <form (submit)="doSubmit($event)" [formGroup]="sexoForm">\n      <ion-list radio-group formControlName="sexo">\n        <ion-item>\n          <ion-radio checked="true" value="M"></ion-radio>\n          <ion-label>Masculino</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-radio value="F"></ion-radio>\n          <ion-label>Feminino</ion-label>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item>\n      <ion-label>Deseja Receber Email?</ion-label>\n      <ion-toggle [(ngModel)]="email" (ionChange)="change()" color="energized" name="emailConfirma"></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf="email">\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" name="emailUsuario"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button secondary padding>Cadastrar</button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\usuario\usuario.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProdutoPage.prototype.itemTapped = function ($event) {
        this.navCtrl.push('CameraPage');
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\produto\produto.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastro de Produto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Produto</ion-label>\n      <ion-input type="text" name="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Categoria</ion-label>\n      <ion-select name="categoria_id">\n        <ion-option value="1">Veículos</ion-option>\n        <ion-option value="2">Animais</ion-option>\n        <ion-option value="3">Empregos</ion-option>\n        <ion-option value="4">Imovéis</ion-option>        \n        <ion-option value="5">Eletrônicos</ion-option>\n        <ion-option value="6">Musicas</ion-option>\n        <ion-option value="7">Esportes</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Valor</ion-label>\n      <ion-input type="number" name="valor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Descrição</ion-label>\n      <ion-input type="text" name="descricao"></ion-input>\n    </ion-item>\n\n    <ion-fab right top>\n      <button ion-fab color="secondary"><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab (click)="itemTapped($event)">\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n    <br>\n    <button ion-button color="secondary" (click)="save()">Cadastrar</button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\produto\produto.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], ProdutoPage);
    return ProdutoPage;
    var _a, _b;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_produto_produto__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_anuncio_anuncio__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_camera_camera__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pesquisar_pesquisar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categoria_CatEsporte_esporte__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_categoria_CatEletronico_eletronico__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_categoria_CatEmprego_emprego__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categoria_CatImovel_imovel__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_categoria_CatMusica_musica__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_categoria_CatAnimal_animal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_categoria_CatVeiculo_veiculo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_api_rest_api__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Categoria dos Anúncios









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anuncio_anuncio__["a" /* AnuncioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pesquisar_pesquisar__["a" /* PesquisaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categoria_CatEsporte_esporte__["a" /* EsportePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_categoria_CatEletronico_eletronico__["a" /* EletronicoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_categoria_CatEmprego_emprego__["a" /* EmpregoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_categoria_CatImovel_imovel__["a" /* ImovelPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categoria_CatMusica_musica__["a" /* MusicaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_categoria_CatAnimal_animal__["a" /* AnimalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_categoria_CatVeiculo_veiculo__["a" /* VeiculoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anuncio_anuncio__["a" /* AnuncioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_camera_camera__["a" /* CameraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pesquisar_pesquisar__["a" /* PesquisaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_categoria_CatEsporte_esporte__["a" /* EsportePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_categoria_CatEletronico_eletronico__["a" /* EletronicoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_categoria_CatEmprego_emprego__["a" /* EmpregoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_categoria_CatImovel_imovel__["a" /* ImovelPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_categoria_CatMusica_musica__["a" /* MusicaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_categoria_CatAnimal_animal__["a" /* AnimalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_categoria_CatVeiculo_veiculo__["a" /* VeiculoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' },
                __WEBPACK_IMPORTED_MODULE_19__providers_rest_api_rest_api__["a" /* RestApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_usuario_usuario__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_produto_produto__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_anuncio_anuncio__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // Menu em exibição na Tela
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Usuário', component: __WEBPACK_IMPORTED_MODULE_5__pages_usuario_usuario__["a" /* UsuarioPage */] },
            { title: 'Anúncio', component: __WEBPACK_IMPORTED_MODULE_7__pages_anuncio_anuncio__["a" /* AnuncioPage */] },
            { title: 'Produto', component: __WEBPACK_IMPORTED_MODULE_6__pages_produto_produto__["a" /* ProdutoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic\projeto\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\ionic\projeto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CameraPage = /** @class */ (function () {
    function CameraPage() {
    }
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\camera\camera.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Camera</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\camera\camera.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PesquisaPage = /** @class */ (function () {
    function PesquisaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    PesquisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"C:\ionic\projeto\src\pages\pesquisar\pesquisar.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pesquisar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="selectedItem" padding>\n    <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\projeto\src\pages\pesquisar\pesquisar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PesquisaPage);
    return PesquisaPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map