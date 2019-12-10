(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n  <router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accept/accept.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accept/accept.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"row\">\n    <div class=\"container-fluid\" style=\"margin-top: 1%\">\n        <div class=\"jumbotron\">\n            <h1 class=\"display-4\">Félicitations !</h1>\n            <p class=\"lead\">Vous êtes maintenant contributeur dans le projet !</p>\n            <hr class=\"my-4\">\n            <p>Connectez-vous pour continuer </p>\n            <a class=\"btn btn-primary btn-lg\" href=\"/login\" role=\"button\">Se connecter</a>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"navbar-header\" *ngIf=\"userInfos\">\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">MyProjectManager</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n      </ul>\n    </div>\n    <div id=\"navbar-username\">\n        <ul class=\"navbar-nav\">\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ userInfos.name}}<span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li><a href=\"javascript:void(0)\" (click)=\"logout()\" class=\"fa fa-sign-out\">Déconnexion</a></li>\n              </ul>\n            </li>\n        </ul>\n    </div>\n  </nav>\n</div>\n\n<div id=\"viewport\" style=\"padding-top:50px\">\n  <!-- Sidebar -->\n  <div *ngIf=\"userInfos\" id=\"sidebar\">\n\n    <ul class=\"nav\" style=\"padding-top:20px\">\n      <li>\n        <a routerLink=\"projects\">\n          <em class=\"zmdi zmdi-view-dashboard fa fa-folder-open-o\"></em> Mes projets\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"userdetail\">\n          <em class=\"zmdi zmdi-view-dashboard fa fa-user\"></em> Mon profil\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- Content -->\n  <div id=\"content\">\n    <div class=\"container-fluid\" style=\"margin-top: 1%\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/contributor/contributor.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/contributor/contributor.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Liste des contributeurs</h5>\n            <button *ngIf=\"isCreator\" type=\"button\" data-toggle=\"modal\" data-target=\"#invitationModel\"\n                class=\"btn btn-info\">Invitations</button>\n        </div>\n        <table class=\"table table-striped\">\n            <caption>Liste des issues</caption>\n            <thead class=\"thead\">\n                <tr>\n                    <th scope=\"col\">Nom </th>\n                    <th scope=\"col\">Email </th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let contributor of contributors\">\n                    <td>{{contributor?.name}}</td>\n                    <td>{{contributor?.email}}</td>\n\n                    <td>\n                        <button *ngIf=\"isCreator\" type=\"button\" (click)=\"removeContributor(contributor?._id)\"\n                            class=\"btn btn-danger\"><em class=\"fa fa-trash-o\"></em></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div *ngIf=\"isCreator\" class=\"modal fade\" id=\"invitationModel\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Liste des invitations</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Invitation</h5>\n                    <div class=\"form-group\">\n                        <ng-select (add)=\"onAdd($event)\" class=\"custom\" placeholder=\"+ Inviter un contributeur\"\n                            [(ngModel)]=\"selectedUser\" [multiple]=\"true\">\n                            <ng-option *ngFor=\"let user of users\" [value]=\"user?.email\">{{user?.email}} - {{user?.name}}\n                            </ng-option>\n                        </ng-select>\n                    </div>\n                    <div *ngIf=\"waiting\" class=\"text-center\">\n                        <div class=\"spinner-border\" role=\"status\">\n                            <span class=\"sr-only\">Loading...</span>\n                        </div>\n                        Envoi de l'invitation en cours\n                    </div>\n                    <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n                        L'invitation a été envoyé avec succès\n                    </div>\n                </div>\n                <!--<ul class=\"list-group\">\n                    <li *ngFor=\"let invitation of invitations\"\n                        class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        {{invitation?.emailUser}}\n                        <span class=\"badge badge-secondary badge-pill\"> {{invitation?.date}}</span>\n                        <span *ngIf=\"invitation?.status===0\" class=\"badge badge-dark badge-pill\">En attente</span>\n                        <span *ngIf=\"invitation?.status===1\" class=\"badge badge-success badge-pill\">Acceptée</span>\n                    </li>\n                </ul>-->\n                <div class=\"row justify-content-center\">\n                <table style=\"width: 80%;\">\n                    <tr *ngFor=\"let invitation of invitations\">\n                        <td>{{invitation?.emailUser}}</td>\n                        <td><span class=\"badge badge-secondary badge-pill\"> {{invitation?.date}}</span></td>\n                        <td>\n                            <span *ngIf=\"invitation?.status===1\" class=\"badge badge-success badge-pill\">Acceptée</span>\n                            <span *ngIf=\"invitation?.status===0\" class=\"badge badge-dark badge-pill\">En attente</span>\n                        </td>\n                        <td><a href=\"javascript:void(0);\" *ngIf=\"invitation?.status===0\" (click)='deleteInvitation(invitation?._id)' class=\"badge badge-danger badge-pill\">X</a>\n                        </td>\n                    </tr>\n                </table>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailprojet.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailprojet.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card w-100\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">{{ project?.title }}</h4>\n        <p class=\"card-text\" style=\"color: gray;\">{{ project?.description }}</p>\n        <a *ngIf=\"isCreator\" class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#editproject\" role=\"button\"\n            aria-expanded=\"false\" aria-controls=\"editproject\">Editer <em class=\"fa fa-pencil\"></em></a>\n    </div>\n\n    <div class=\"collapse multi-collapse\" id=\"editproject\">\n        <div class=\"card card-body\">\n            <div class=\"col-md-5\">\n                <fieldset>\n                    <legend>Modifier le projet</legend>\n                    <form #editproject=\"ngForm\" (ngSubmit)=\"editProject(editproject)\">\n                        <div class=\"form-group\">\n                            <input style=\"width: 100%;\" required type=\"email\" [(ngModel)]=\"modelproject.title\"\n                                class=\"form-control\" name=\"title\" id=\"title\" ng-init=\"myText='Hello World!'\">\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" required style=\"width: 100%;resize: none;\"\n                                [(ngModel)]=\"modelproject.description\" id=\"description\" name=\"description\"\n                                rows=\"4\">{{project?.description}}</textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <select style=\"width: 100%;\" class=\"custom-select\" id=\"status\" name=\"status\"\n                                [(ngModel)]=\"modelproject.status\" [value]='0'>\n                                <option disabled value='0'>Status</option>\n                                <option>En cours</option>\n                                <option>Terminé</option>\n                            </select>\n                        </div>\n                        <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#editproject\" role=\"button\"\n                            (click)=\"editProject(editproject)\" aria-expanded=\"false\"\n                            aria-controls=\"editproject\">Confirmer</a>\n                    </form>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div><br>\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"home-tab\" data-toggle=\"tab\" routerLinkActive=\"active\" routerLink='issues' role=\"tab\"\n            aria-controls=\"home\" aria-selected=\"true\">Issues</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"taches-tab\" data-toggle=\"tab\" routerLinkActive=\"active\" routerLink='tasks' role=\"tab\"\n            aria-controls=\"taches\" aria-selected=\"false\">Tâches</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"sprints-tab\" data-toggle=\"tab\" routerLinkActive=\"active\" routerLink='sprints' role=\"tab\"\n            aria-controls=\"sprints\" aria-selected=\"false\">Sprints</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" routerLinkActive=\"active\" routerLink='tests' role=\"tab\"\n            aria-controls=\"tests\" aria-selected=\"false\">Tests</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"releases-tab\" data-toggle=\"tab\" routerLinkActive=\"active\" routerLink='releases'\n            role=\"tab\" aria-controls=\"releases\" aria-selected=\"false\">Releases</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"documentations-tab\" data-toggle=\"tab\" routerLinkActive=\"active\"\n            routerLink='documentations' role=\"tab\" aria-controls=\"documentations\"\n            aria-selected=\"false\">Documentations</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"contributor-tab\" data-toggle=\"tab\" routerLinkActive=\"active\" routerLink='contributors' role=\"tab\"\n            aria-controls=\"contributor\" aria-selected=\"false\">Contributeurs</a>\n    </li>\n</ul>\n\n<div class=\"tab-content\">\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n        <app-root></app-root>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"card\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">{{sprint?.title}} <span class=\"badge badge-secondary\">{{sprint?.status}}</span></h4>\n        <h5><span class=\"badge badge-info\">{{sprint?.startDate}} au {{sprint?.endDate}}</span></h5>\n        <p>Nombre d'issues: <span class=\"badge badge-dark\">{{sprint?.issues.length}}</span></p>\n        <p>Difficultés totales: <span class=\"badge badge-danger\">{{nbrDifficulte}}</span></p>\n        <p>Difficultés résolues: <span class=\"badge badge-success\">{{nbrDifficulteRe}}</span></p>\n    </div>\n</div>\n<div class=\"card\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Issues</h5>\n        <div class=\"form-group\">\n            <ng-select (add)=\"onAdd($event)\" class=\"custom\" placeholder=\"+ Ajouter des issues\" [(ngModel)]=\"selectedItems\" [multiple]=\"true\">\n                <ng-option *ngFor=\"let issue of issues\" [value]=\"issue?._id\" >{{issue?.issueID}} - {{issue?.description}}</ng-option>\n            </ng-select>\n        </div>\n        <table class=\"table table-striped\">\n            <caption>Liste des issues du sprint</caption>\n            <thead class=\"thead\">\n                <tr>\n                    <th scope=\"col\">ID</th>\n                    <th scope=\"col\">Description</th>\n                    <th scope=\"col\">Priorité </th>\n                    <th scope=\"col\">Difficulté </th>\n                    <th scope=\"col\">Status </th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let issue of sprint?.issues\">\n                    <td>#{{issue?.issueID}}</td>\n                    <td style=\"width: 40%;\">{{issue?.description}}</td>\n                    <td>{{issue?.priorite}}</td>\n                    <td>{{issue?.difficulte}}</td>\n                    <td>{{issue?.status}}</td>\n\n                    <td>\n                        <button type=\"button\" (click)=\"updateModalEditIssue(issue)\" data-toggle=\"modal\"\n                            data-target=\"#editIssueModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                        <button type=\"button\" (click)=\"removeIssueFromSprint(issue?._id)\" class=\"btn btn-danger\"><em\n                                class=\"fa fa-trash-o\"></em></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"editIssueModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer issue</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form #editIssue=\"ngForm\" (ngSubmit)=\"editIssue.valid\">\n                <div class=\"from row\">\n                    <div class=\"form-group col-md-12\">\n                        <textarea class=\"form-control\" placeholder=\"Décrire votre issue\"\n                            style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                            [(ngModel)]=\"modelIssueEdit.description\" rows=\"4\"></textarea>\n                    </div>\n                </div>\n                <div class=\"from row\">\n                    <div class=\"form-group col\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"ID\" name=\"issueID\" id=\"issueID\"\n                            rows=\"3\" [(ngModel)]=\"modelIssueEdit.issueID\">\n                    </div>\n\n                    <div class=\"form-group col\">\n                        <select class=\"custom-select\" id=\"priorite\" name=\"priorite\"\n                            [(ngModel)]=\"modelIssueEdit.priorite\">\n                            <option disabled value='0'>Priorité</option>\n                            <option>Basse</option>\n                            <option>Moyenne</option>\n                            <option>Elevée</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group col\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Difficulté\" name=\"difficulte\"\n                            id=\"difficulte\" rows=\"3\" [(ngModel)]=\"modelIssueEdit.difficulte\">\n                    </div>\n                    <div class=\"form-group col\">\n                        <select (change)=\"ChangingValue($event)\" class=\"custom-select\" id=\"status\" name=\"status\"\n                            [(ngModel)]=\"modelIssueEdit.status\" [value]='0'>\n                            <option disabled value='0'>Status</option>\n                            <option>En cours</option>\n                            <option>Terminé</option>\n                        </select>\n\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n            <button type=\"button\" (click)=\"onSubmitEditIssue(editIssue)\" data-dismiss=\"modal\"\n                class=\"btn btn-primary\">Confirmer</button>\n        </div>\n    </div>\n</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/documentation/documentation.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/documentation/documentation.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <h5 class=\"card-title\">Liste de la documentation</h5>\n    <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#multiCollapseExample4\" role=\"button\" aria-expanded=\"false\"\n        aria-controls=\"multiCollapseExample4\">Ajouter <em class=\"fa fa-plus\"></em></a>\n</div>\n<div class=\"collapse multi-collapse\" id=\"multiCollapseExample4\">\n    <div class=\"card card-body\">\n        <div class=\"col-md-5\">\n            <fieldset>\n                <legend>Nouvelle documentation</legend>\n                <form #newDocumentation=\"ngForm\" (ngSubmit)=\"newDocumentation.valid\">\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelDocumentation.title\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre documentation\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelDocumentation.description\" rows=\"4\"></textarea>\n                        </div>\n\n                        <div class=\"form-group col\">    \n                            <input type=\"email\" class=\"form-control\" placeholder=\"Link\" name=\"link\" id=\"link\" rows=\"3\"\n                                [(ngModel)]=\"modelDocumentation.link\">\n                        </div>\n                    </div>        \n                       \n\n                  \n                    <a class=\"btn btn-success\" (click)=\"onSubmitDocumentation(newDocumentation)\" data-toggle=\"collapse\"\n                        href=\"#multiCollapseExample4\" role=\"button\" aria-expanded=\"false\"\n                        aria-controls=\"multiCollapseExample4\">Confirmer</a>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>\n\n<table class=\"table table-striped\">\n    <caption>Liste de la documentation</caption>\n    <thead class=\"thead\">\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Description</th>    \n            <th scope=\"col\">Lien</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let documentation of documentations\">\n            <td>{{documentation?.title}}</td>\n            <td style=\"width: 40%;\">{{documentation?.description}}</td>\n            <td>{{documentation?.link}}</td>\n\n            <td>\n                <button type=\"button\" (click)=\"updateModalEditDocumentation(documentation)\" data-toggle=\"modal\"\n                    data-target=\"#editDocumentationModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                <button type=\"button\" (click)=\"removeDocumentation(documentation._id)\" class=\"btn btn-danger\"><em\n                        class=\"fa fa-trash-o\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div class=\"modal fade\" id=\"editDocumentationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer documentation</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #editDocumentation=\"ngForm\" (ngSubmit)=\"editDocumentation.valid\">\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelDocumentationEdit.title\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre documentation\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelDocumentationEdit.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n               \n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Link\" name=\"link\" id=\"link\" rows=\"3\"\n                                [(ngModel)]=\"modelDocumentationEdit.link\">\n                        </div>\n                        \n\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" (click)=\"onSubmitEditDocumentation(editDocumentation)\" data-dismiss=\"modal\"\n                    class=\"btn btn-primary\">Confirmer</button>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/issue/issue.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/issue/issue.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <h5 class=\"card-title\">Liste des issues</h5>\n    <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#addIssue\" role=\"button\" aria-expanded=\"false\"\n        aria-controls=\"addIssue\">Ajouter <em class=\"fa fa-plus\"></em></a>\n</div>\n\n<div class=\"collapse multi-collapse\" id=\"addIssue\">\n    <div class=\"card card-body\">\n        <div class=\"col-md-6\">\n            <fieldset>\n                <legend>Nouvelle issue</legend>\n                <form #newIssue=\"ngForm\" (ngSubmit)=\"newIssue.valid\">\n                    <div class=\"from row\">\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre issue\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelIssue.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"number\" class=\"form-control\" placeholder=\"ID\" name=\"issueID\" id=\"issueID\"\n                                rows=\"3\" [(ngModel)]=\"modelIssue.issueID\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"priorite\" name=\"priorite\"\n                                [(ngModel)]=\"modelIssue.priorite\">\n                                <option disabled value=\"\">Priorité</option>\n                                <option>Basse</option>\n                                <option>Moyenne</option>\n                                <option>Elevée</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col\">\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Difficulté\" name=\"difficulte\"\n                                id=\"difficulte\" rows=\"3\" [(ngModel)]=\"modelIssue.difficulte\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <select (change)=\"ChangingValue($event)\" class=\"custom-select\" id=\"status\" name=\"status\"\n                                [(ngModel)]=\"modelIssue.status\" [value]='0'>\n                                <option disabled value='0'>Status</option>\n                                <option>En cours</option>\n                                <option>Terminé</option>\n                            </select>\n\n                        </div>\n                    </div>\n                    <a class=\"btn btn-success\" (click)=\"onSubmitIssue(newIssue)\" data-toggle=\"collapse\" href=\"#addIssue\"\n                        role=\"button\" aria-expanded=\"false\" aria-controls=\"addIssue\">Ajouter</a>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>\n<div class=\"row justify-content-center\">\n    <div class=\"form-group col-md-3\">\n        <ng-select (change)=\"sort($event)\" (clear)=\"getIssues()\" [searchable]=\"false\" class=\"custom\" [(ngModel)]=\"selectedItem\" placeholder=\"Trier par\">\n            <ng-option [value]=\"issueID\" >ID</ng-option>\n            <ng-option [value]=\"priorite\">Priorité</ng-option>\n            <ng-option [value]=\"difficulte\">Difficulté</ng-option>\n        </ng-select>\n    </div>\n</div>\n<table class=\"table table-striped\">\n    <caption>Liste des issues</caption>\n    <thead class=\"thead\">\n        <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Priorité </th>\n            <th scope=\"col\">Difficulté </th>\n            <th scope=\"col\">Status </th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let issue of issues\">\n            <td>#{{issue?.issueID}}</td>\n            <td style=\"width: 40%;\">{{issue?.description}}</td>\n            <td>{{issue?.priorite}}</td>\n            <td>{{issue?.difficulte}}</td>\n            <td>{{issue?.status}}</td>\n\n            <td>\n                <button type=\"button\" (click)=\"updateModalEditIssue(issue)\" data-toggle=\"modal\"\n                    data-target=\"#editIssueModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                <button type=\"button\" (click)=\"removeIssue(issue._id)\" class=\"btn btn-danger\"><em\n                        class=\"fa fa-trash-o\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div class=\"modal fade\" id=\"editIssueModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer issue</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #editIssue=\"ngForm\" (ngSubmit)=\"editIssue.valid\">\n                    <div class=\"from row\">\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre issue\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelIssueEdit.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"ID\" name=\"issueID\" id=\"issueID\"\n                                rows=\"3\" [(ngModel)]=\"modelIssueEdit.issueID\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"priorite\" name=\"priorite\"\n                                [(ngModel)]=\"modelIssueEdit.priorite\">\n                                <option disabled value='0'>Priorité</option>\n                                <option>Basse</option>\n                                <option>Moyenne</option>\n                                <option>Elevée</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Difficulté\" name=\"difficulte\"\n                                id=\"difficulte\" rows=\"3\" [(ngModel)]=\"modelIssueEdit.difficulte\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <select (change)=\"ChangingValue($event)\" class=\"custom-select\" id=\"status\" name=\"status\"\n                                [(ngModel)]=\"modelIssueEdit.status\" [value]='0'>\n                                <option disabled value='0'>Status</option>\n                                <option>En cours</option>\n                                <option>Terminé</option>\n                            </select>\n\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" (click)=\"onSubmitEditIssue(editIssue)\" data-dismiss=\"modal\"\n                    class=\"btn btn-primary\">Confirmer</button>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/release/release.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/release/release.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <h5 class=\"card-title\">Liste des releases</h5>\n    <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#multiCollapseExample4\" role=\"button\" aria-expanded=\"false\"\n        aria-controls=\"multiCollapseExample4\">Ajouter <em class=\"fa fa-plus\"></em></a>\n</div>\n<div class=\"collapse multi-collapse\" id=\"multiCollapseExample4\">\n    <div class=\"card card-body\">\n        <div class=\"col-md-5\">\n            <fieldset>\n                <legend>Nouvelle release</legend>\n                <form #newRelease=\"ngForm\" (ngSubmit)=\"newRelease.valid\">\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelRelease.title\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre release\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelRelease.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Version\" name=\"version\" id=\"version\"\n                                rows=\"1\" [(ngModel)]=\"modelRelease.version\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date\" name=\"date\"\n                                    [(ngModel)]=\"modelRelease.date\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\"\n                                        (click)=\"d.toggle()\" type=\"button\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"sprintNumber\" name=\"sprintNumber\"\n                                [(ngModel)]=\"modelRelease.sprintNumber\">\n                                <option disabled value='0'>Choisir le sprint</option>\n                                <option [value]='sprint?.title' *ngFor=\"let sprint of sprints\">\n                                    {{sprint?.title}}\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Link\" name=\"link\" id=\"link\" rows=\"3\"\n                                [(ngModel)]=\"modelRelease.link\">\n                        </div>\n                    </div>\n                    <a class=\"btn btn-success\" (click)=\"onSubmitRelease(newRelease)\" data-toggle=\"collapse\"\n                        href=\"#multiCollapseExample4\" role=\"button\" aria-expanded=\"false\"\n                        aria-controls=\"multiCollapseExample4\">Confirmer</a>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>\n\n<table class=\"table table-striped\">\n    <caption>Liste des Releases</caption>\n    <thead class=\"thead\">\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Version</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Sprint</th>\n            <th scope=\"col\">Lien</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let release of releases\">\n            <td>{{release?.title}}</td>\n            <td style=\"width: 40%;\">{{release?.description}}</td>\n            <td>{{release?.version}}</td>\n            <td>{{release?.date}}</td>\n            <td>{{release?.sprintNumber}}</td>\n            <td>\n                <a href={{release?.link}}>{{release?.link}}</a>\n            </td>\n            <td>\n                <button type=\"button\" (click)=\"updateModalEditRelease(release)\" data-toggle=\"modal\"\n                    data-target=\"#editReleaseModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                <button type=\"button\" (click)=\"removeRelease(release._id)\" class=\"btn btn-danger\"><em\n                        class=\"fa fa-trash-o\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div class=\"modal fade\" id=\"editReleaseModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer release</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #editRelease=\"ngForm\" (ngSubmit)=\"editRelease.valid\">\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelReleaseEdit.title\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre release\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelReleaseEdit.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Version\" name=\"version\" id=\"version\"\n                                rows=\"1\" [(ngModel)]=\"modelReleaseEdit.version\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date\" name=\"date\"\n                                    [(ngModel)]=\"modelReleaseEdit.date\" ngbDatepicker #dedit=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\"\n                                        (click)=\"dedit.toggle()\" type=\"button\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Link\" name=\"link\" id=\"link\" rows=\"3\"\n                                [(ngModel)]=\"modelReleaseEdit.link\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"sprintNumber\" name=\"sprintNumber\"\n                                [(ngModel)]=\"modelReleaseEdit.sprintNumber\">\n                                <option disabled value='0'>Choisir le sprint</option>\n                                <option [value]='sprint?.title' *ngFor=\"let sprint of sprints\">\n                                    {{sprint?.title}}\n                                </option>\n                            </select>\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" (click)=\"onSubmitEditRelease(editRelease)\" data-dismiss=\"modal\"\n                    class=\"btn btn-primary\">Confirmer</button>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/sprint/sprint.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/sprint/sprint.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <h5 class=\"card-title\">Liste des sprints</h5>\n    <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#multiCollapseExample3\" role=\"button\" aria-expanded=\"false\"\n        aria-controls=\"multiCollapseExample3\">Ajouter <em class=\"fa fa-plus\"></em></a>\n</div>\n<div class=\"collapse multi-collapse\" id=\"multiCollapseExample3\">\n    <div class=\"card card-body\">\n        <div class=\"col-md-5\">\n            <fieldset>\n                <legend>Nouveau sprint</legend>\n                <form #newSprint=\"ngForm\" (ngSubmit)=\"newSprint.valid\">\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelSprint.title\">\n                        </div>\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date du début\" name=\"dp1\"\n                                    [(ngModel)]=\"modelSprint.startDate\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"d.toggle()\"\n                                        type=\"button\"></button>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date de fin\" name=\"dp2\"\n                                    [(ngModel)]=\"modelSprint.endDate\" ngbDatepicker #dd=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"dd.toggle()\"\n                                        type=\"button\"></button>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col-md-12\">\n                            <select class=\"custom-select\" id=\"status\" name=\"status\" [(ngModel)]=\"modelSprint.status\"\n                                [value]='0'>\n                                <option disabled value='0'>Statut</option>\n                                <option>En cours</option>\n                                <option>Terminé</option>\n                            </select>\n                        </div>\n\n                    </div>\n\n                    <a class=\"btn btn-success\" (click)=\"onSubmitSprint(newSprint)\" data-toggle=\"collapse\"\n                        href=\"#multiCollapseExample3\" role=\"button\" aria-expanded=\"false\"\n                        aria-controls=\"multiCollapseExample3\">Confirmer</a>\n\n\n\n\n                </form>\n\n            </fieldset>\n        </div>\n    </div>\n</div>\n<table class=\"table table-striped\">\n    <caption>Liste des sprints</caption>\n    <thead class=\"thead\">\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Période</th>\n            <th scope=\"col\">Statut</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let sprint of sprints\">\n\n            <td><a routerLink={{sprint?._id}}>{{sprint?.title}}</a></td>\n            <td>{{sprint?.startDate}} - {{sprint?.endDate}}</td>\n            <td>{{sprint?.status}}</td>\n            <td>\n                <button type=\"button\" (click)=\"updateModalEditSprint(sprint)\" data-toggle=\"modal\"\n                    data-target=\"#editSprintModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                <button type=\"button\" (click)=\"removeSprint(sprint._id)\" class=\"btn btn-danger\"><em\n                        class=\"fa fa-trash-o\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div class=\"modal fade\" id=\"editSprintModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer sprint</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #editSprint=\"ngForm\" (ngSubmit)=\"newSprint.valid\">\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelSprintEdit.title\">\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date de début\" name=\"dp1\"\n                                    [(ngModel)]=\"modelSprintEdit.startDate\" ngbDatepicker #ddedit=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"ddedit.toggle()\"\n                                        type=\"button\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date de fin\" name=\"dp2\"\n                                    [(ngModel)]=\"modelSprintEdit.endDate\" ngbDatepicker #ddedit2=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"ddedit2.toggle()\"\n                                        type=\"button\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"status\" name=\"status\" [(ngModel)]=\"modelSprintEdit.status\"\n                                [value]='0'>\n                                <option disabled value='0'>Statut</option>\n                                <option>En cours</option>\n                                <option>Terminé</option>\n                            </select>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" (click)=\"onSubmitEditSprint(editSprint)\" data-dismiss=\"modal\"\n                    class=\"btn btn-primary\">Confirmer</button>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/task/task.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/task/task.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <h5 class=\"card-title\">Liste des tâches</h5>\n    <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#multiCollapseExample2\" role=\"button\" aria-expanded=\"false\"\n        aria-controls=\"multiCollapseExample2\">Ajouter <em class=\"fa fa-plus\"></em></a>\n</div>\n<div class=\"collapse multi-collapse\" id=\"multiCollapseExample2\">\n    <div class=\"card card-body\">\n        <div class=\"col-md-5\">\n            <fieldset>\n                <legend>Nouvelle tâche</legend>\n                <form #newTask=\"ngForm\" (ngSubmit)=\"newTask.valid\">\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <ng-select name=\"issues\" placeholder=\"+ Ajouter des issues\" [(ngModel)]=\"modelTask.issue\"\n                                [multiple]=\"true\">\n                                <ng-option *ngFor=\"let issue of issues\" [value]=\"issue?.issueID\">{{issue?.issueID}} -\n                                    {{issue?.description}}</ng-option>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre tâche\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelTask.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Côut\" name=\"cout\" id=\"cout\" rows=\"3\"\n                                [(ngModel)]=\"modelTask.cout\">\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <ng-select class=\"custom\" placeholder=\"Choisir le développeur\"\n                                [(ngModel)]=\"modelTask.developer\" name=\"developer\">\n                                <ng-option *ngFor=\"let contributor of contributors\" [value]=\"contributor?.name\">\n                                    {{contributor?.name}} /\n                                    {{contributor?.email}}</ng-option>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <a class=\"btn btn-success\" (click)=\"onSubmitTask(newTask)\" data-toggle=\"collapse\"\n                        href=\"#multiCollapseExample2\" role=\"button\" aria-expanded=\"false\"\n                        aria-controls=\"multiCollapseExample2\">Confirmer</a>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>\n\n<table class=\"table table-striped\">\n    <caption>Liste des tâches</caption>\n    <thead class=\"thead\">\n        <tr>\n            <th scope=\"col\">Issues</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Coût</th>\n            <th scope=\"col\">Développeur</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let task of tasks\">\n            <td>\n                <p *ngFor=\"let issue of task?.idIssues\"><span class=\"badge badge-pill badge-primary\">US\n                        {{issue}}</span></p>\n            </td>\n            <td style=\"width: 40%;\">{{task?.description}}</td>\n            <td>{{task?.cout}}</td>\n            <td>{{task?.developer}}</td>\n\n            <td>\n                <button type=\"button\" (click)=\"updateModalEditTask(task)\" data-toggle=\"modal\"\n                    data-target=\"#editTaskModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                <button type=\"button\" (click)=\"removeTask(task._id)\" class=\"btn btn-danger\"><em\n                        class=\"fa fa-trash-o\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div class=\"modal fade\" id=\"editTaskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer tâche</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #editTask=\"ngForm\" (ngSubmit)=\"editTask.valid\">\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <ng-select name=\"issues\" placeholder=\"+ Ajouter des issues\"\n                                [(ngModel)]=\"modelTaskEdit.issue\" bindLabel=\"idIssue\" bindValue=\"idIssue\"\n                                [multiple]=\"true\">\n                                <ng-option *ngFor=\"let issue of issues\" [value]=\"issue?.issueID\">{{issue?.issueID}} -\n                                    {{issue?.description}}</ng-option>\n                            </ng-select>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre tâche\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelTaskEdit.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Côut\" name=\"cout\" id=\"cout\" rows=\"3\"\n                                [(ngModel)]=\"modelTaskEdit.cout\">\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <ng-select class=\"custom\" placeholder=\"Choisir le développeur\"\n                                [(ngModel)]=\"modelTaskEdit.developer\" name=\"developer\">\n                                <ng-option *ngFor=\"let contributor of contributors\" [value]=\"contributor?.name\">\n                                    {{contributor?.name}} /\n                                    {{contributor?.email}}</ng-option>\n                            </ng-select>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" (click)=\"onSubmitEditTask(editTask)\" data-dismiss=\"modal\"\n                    class=\"btn btn-primary\">Confirmer</button>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/test/test.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/test/test.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <h5 class=\"card-title\">Liste des tests <span class=\"badge badge-pill badge-dark\">Waiting {{notYet}}</span>\n        <span class=\"badge badge-pill badge-success\">Passed {{nbrPass}}</span>\n        <span class=\"badge badge-pill badge-danger\">Failed {{nbrFailed}}</span></h5>\n    <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#multiCollapseExample4\" role=\"button\" aria-expanded=\"false\"\n        aria-controls=\"multiCollapseExample4\">Ajouter <em class=\"fa fa-plus\"></em></a>\n</div>\n<div class=\"collapse multi-collapse\" id=\"multiCollapseExample4\">\n    <div class=\"card card-body\">\n        <div class=\"col-md-5\">\n            <fieldset>\n                <legend>Nouveau test</legend>\n                <form #newTest=\"ngForm\" (ngSubmit)=\"newTest.valid\">\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelTest.title\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre test\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelTest.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"type\" name=\"type\" [(ngModel)]=\"modelTest.type\"\n                                [value]='0'>\n                                <option disabled value='0'>Type</option>\n                                <option>Test unitaire</option>\n                                <option>Test d'intégration</option>\n                                <option>Test de validation</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date\" name=\"dp\" [(ngModel)]=\"modelTest.date\"\n                                    ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\"\n                                        (click)=\"d.toggle()\" type=\"button\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Lien\" name=\"Lien\" id=\"lien\" rows=\"3\"\n                                [(ngModel)]=\"modelTest.link\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <select class=\"custom-select\" id=\"status\" name=\"status\" [(ngModel)]=\"modelTest.status\"\n                                [value]='0'>\n                                <option disabled value='0'>Statut</option>\n                                <option>En cours</option>\n                                <option>Echoué</option>\n                                <option>Passé</option>\n                            </select>\n                        </div>\n                    </div>\n                    <a class=\"btn btn-success\" (click)=\"onSubmitTest(newTest)\" data-toggle=\"collapse\"\n                        href=\"#multiCollapseExample4\" role=\"button\" aria-expanded=\"false\"\n                        aria-controls=\"multiCollapseExample4\">Confirmer</a>\n                </form>\n            </fieldset>\n        </div>\n    </div>\n</div>\n<div class=\"row justify-content-center\">\n    <div class=\"form-group col-md-3\">\n        <ng-select (change)=\"filter($event)\" (clear)=\"getTests()\" [searchable]=\"false\" class=\"custom\"\n            [(ngModel)]=\"selectedItem\" placeholder=\"Filtrer par status\">\n            <ng-option>En cours</ng-option>\n            <ng-option>Passé</ng-option>\n            <ng-option>Echoué</ng-option>\n        </ng-select>\n    </div>\n</div>\n<table class=\"table table-striped\">\n    <caption>Liste des tests</caption>\n    <thead class=\"thead\">\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Type</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">Lien</th>\n            <th scope=\"col\">Statut</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr *ngFor=\"let test of tests\"\n            [ngStyle]=\"{'color':test?.status === 'En cours' ? 'black' : test?.status === 'Echoué' ? 'red' : 'green' }\">\n            <td>{{test?.title}}</td>\n            <td style=\"width: 40%;\">{{test?.description}}</td>\n            <td>{{test?.type}}</td>\n            <td>{{test?.date}}</td>\n            <td><a style=\"text-decoration: none;color: inherit;\" href=\"{{test?.link}}\">Fichier test</a></td>\n            <td *ngIf=\"test?.status === 'Echoué'\"><span class=\"badge badge-pill badge-danger\">Failed</span></td>\n            <td *ngIf=\"test?.status === 'Passé'\"><span class=\"badge badge-pill badge-success\">Passed</span></td>\n            <td *ngIf=\"test?.status === 'En cours'\"><span class=\"badge badge-pill badge-dark\">Not yet</span></td>\n            <td>\n                <button type=\"button\" (click)=\"updateModalEditTest(test)\" data-toggle=\"modal\"\n                    data-target=\"#editTestModal\" class=\"btn btn-info\"><em class=\"fa fa-edit\"></em></button>&nbsp;\n                <button type=\"button\" (click)=\"removeTest(test._id)\" class=\"btn btn-danger\"><em\n                        class=\"fa fa-trash-o\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div class=\"modal fade\" id=\"editTestModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer test</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #editTest=\"ngForm\" (ngSubmit)=\"editTest.valid\">\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Titre\" name=\"title\" id=\"title\"\n                                rows=\"1\" [(ngModel)]=\"modelTestEdit.title\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <textarea class=\"form-control\" placeholder=\"Décrire votre test\"\n                                style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                [(ngModel)]=\"modelTestEdit.description\" rows=\"4\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"from row\">\n\n                        <div class=\"form-group col\">\n                            <select class=\"custom-select\" id=\"type\" name=\"type\" [(ngModel)]=\"modelTestEdit.type\"\n                                [value]='0'>\n                                <option disabled value='0'>Type</option>\n                                <option>Test unitaire</option>\n                                <option>Test d'intégration</option>\n                                <option>Test de validation</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"Date\" name=\"dp\"\n                                    [(ngModel)]=\"modelTestEdit.date\" ngbDatepicker #dedit=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary calendar fa fa-calendar\"\n                                        (click)=\"dedit.toggle()\" type=\"button\"></button>\n                                </div>\n                            </div>\n                        </div>\n\n\n\n\n                    </div>\n                    <div class=\"from row\">\n                        <div class=\"form-group col\">\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Lien\" name=\"Lien\" id=\"lien\" rows=\"3\"\n                                [(ngModel)]=\"modelTestEdit.link\">\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <select class=\"custom-select\" id=\"status\" name=\"status\" [(ngModel)]=\"modelTestEdit.status\"\n                                [value]='0'>\n                                <option disabled value='0'>Statut</option>\n                                <option>En cours</option>\n                                <option>Echoué</option>\n                                <option>Passé</option>\n                            </select>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" (click)=\"onSubmitEditTest(editTest)\" data-dismiss=\"modal\"\n                    class=\"btn btn-primary\">Confirmer</button>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/listprojets/listprojets.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/listprojets/listprojets.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Mes projets</h3>\n        <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#addproject\" role=\"button\"\n            aria-expanded=\"false\" aria-controls=\"addproject\">Nouveau projet<em class=\"fa fa-plus\" style=\"padding-left: 10px;\"></em></a>\n    </div>\n    <div class=\"collapse multi-collapse\" id=\"addproject\">\n        <div class=\"card card-body\">\n            <div class=\"col-md-5\">\n                <fieldset>\n                    <form #newProject=\"ngForm\" (ngSubmit)=\"newProject.valid\">\n                        <legend>Nouveau projet</legend>\n                        <div class=\"form-group\">\n                            <label for=\"title\">Titre</label>\n                            <input type=\"email\" class=\"form-control\" name=\"title\" id=\"title\" [(ngModel)]=\"model.title\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <textarea class=\"form-control\" id=\"description\" name=\"description\" rows=\"3\" [(ngModel)]=\"model.description\"></textarea>\n                        </div>\n                        <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#addproject\" role=\"button\"\n                            (click)=\"onSubmit(newProject)\" aria-expanded=\"false\"\n                            aria-controls=\"editproject\">Confirmer</a>\n                    </form>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div>\n<table class=\"table\">\n    <caption>Liste des projets</caption>\n    <thead>\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Manager</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let project of projects.result\">\n            <td><a routerLink={{project?._id}}>{{project?.title}}</a></td>\n            <td>{{project?.description}}</td>\n            <td>{{project?.creator?.name}}</td>\n            <td>{{project?.status}}</td>\n            <td *ngIf=\"project?.creator?._id === projects?.idlogged\">\n                <button type=\"button\" (click)=\"removeProject(project._id)\" class=\"btn btn-danger\"><em class=\"fa fa-trash\"></em></button>\n            </td>\n            <td *ngIf=\"project?.creator?._id !== projects?.idlogged\">\n                <button type=\"button\" (click)=\"removeContributor(project._id,projects?.idlogged)\" class=\"btn btn-danger\">Quitter <em class=\"fa fa-user-times\"></em></button>\n            </td>\n        </tr>\n    </tbody>\n</table>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/userdetail/userdetail.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/userdetail/userdetail.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6\">\n  <h3 class=\"card-title\">Modifier mes informations</h3>\n  <form #editForm=\"ngForm\" (ngSubmit)=\"editForm.valid\">\n    <div class=\"form-group\">\n      <label for=\"email\">Adresse email:</label>\n      <input type=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\"\n      [(ngModel)]=\"this.userService.user.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Nom:</label>\n      <input placeholder=\"Nom\" name=\"Name\" class=\"form-control\" id=\"Name\"\n      [(ngModel)]=\"this.userService.user.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Mot de passe:</label>\n      <input type=\"password\" placeholder=\"Mot de passe\" name=\"password\" class=\"form-control\" id=\"password\"\n      [(ngModel)]=\"this.userService.user.password\">\n    </div>\n    <button class=\"btn btn-success\" (click)=\"onSubmit(editForm)\">Appliquer</button>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/login/login.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/login/login.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onSubmit(loginForm)\">\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"model.email\" [pattern]=\"emailRegex\"\n        [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !email.valid}\" name=\"email\"\n        placeholder=\"Entrez votre email\" required>\n    <div *ngIf=\"loginForm.submitted && email.errors?.pattern\">\n        <label class=\"validation-message\">L'adresse mail n'est pas valide</label>\n    </div>\n    <input type=\"password\" minlength=\"8\" #password=\"ngModel\"\n        [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !password.valid}\" [(ngModel)]=\"model.password\"\n        name=\"password\" placeholder=\"Entrez votre mot de passe\" required>\n    <div *ngIf=\"loginForm.submitted && password.errors?.minlength\">\n        <label class=\"validation-message\">Le mot de passe doit contenir au moins 8 caractères</label>\n    </div>\n    <input type=\"submit\" id=\"submit\" value=\"Se connecter\">\n</form>\n\n<div class=\"alertt\" *ngIf=\"errormessage\">\n    {{ errormessage }}\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/register/register.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/register/register.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n    <input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"this.userService.user.name\" name=\"name\"\n        placeholder=\"Nom\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !name.valid }\">\n    <div *ngIf=\"signUpForm.submitted && !name.valid\">\n        <label class=\"validation-message\">Ce champs est obligatoire.</label>\n    </div>\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"this.userService.user.email\" name=\"email\" placeholder=\"Email\"\n        required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n    <div *ngIf=\"signUpForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">Ce champs est obligatoire.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">L'adresse mail n'est pas valide.</label>\n    </div>\n    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"this.userService.user.password\" name=\"password\"\n        placeholder=\"Mot de passe\" minlength=\"8\" required\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n    <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">Ce champs est obligatoire.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Le mot de passe doit contenir au moins 8 caractères.</label>\n    </div>\n    <input type=\"submit\" id=\"submit\" value=\"Sign Up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"successmessage\">\n    Inscription réussie\n</div>\n\n<!-- Error message -->\n<div class=\"alertt\" *ngIf=\"errormessage\">\n    {{errormessage}}\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div id=\"formContent\">\n    <h2 class=\"underlineHover\" routerLink=\"/login\" routerLinkActive=\"active\"> Se connecter </h2>\n    <h2 class=\"underlineHover\" routerLink=\"/register\" routerLinkActive=\"active\"> S'inscrire </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
            /* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
            /* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/listprojets/listprojets.component */ "./src/app/components/dashboard/listprojets/listprojets.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/detailprojet/detailprojet.component */ "./src/app/components/dashboard/detailprojet/detailprojet.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_issue_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/detailprojet/issue/issue.component */ "./src/app/components/dashboard/detailprojet/issue/issue.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_task_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/detailprojet/task/task.component */ "./src/app/components/dashboard/detailprojet/task/task.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_sprint_sprint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/detailprojet/sprint/sprint.component */ "./src/app/components/dashboard/detailprojet/sprint/sprint.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_detailsprint_detailsprint_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/detailprojet/detailsprint/detailsprint.component */ "./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_test_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/detailprojet/test/test.component */ "./src/app/components/dashboard/detailprojet/test/test.component.ts");
            /* harmony import */ var _components_dashboard_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/userdetail/userdetail.component */ "./src/app/components/dashboard/userdetail/userdetail.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_release_release_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/detailprojet/release/release.component */ "./src/app/components/dashboard/detailprojet/release/release.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/detailprojet/documentation/documentation.component */ "./src/app/components/dashboard/detailprojet/documentation/documentation.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_contributor_contributor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/detailprojet/contributor/contributor.component */ "./src/app/components/dashboard/detailprojet/contributor/contributor.component.ts");
            /* harmony import */ var _components_accept_accept_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/accept/accept.component */ "./src/app/components/accept/accept.component.ts");
            var routes = [
                {
                    path: 'accept', component: _components_accept_accept_component__WEBPACK_IMPORTED_MODULE_19__["AcceptComponent"]
                },
                {
                    path: 'register', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                    children: [{
                            path: '', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
                        }]
                },
                {
                    path: 'login', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                    children: [{
                            path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
                        }]
                },
                {
                    path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                    children: [
                        { path: '', redirectTo: 'projects', pathMatch: 'full' },
                        { path: 'projects', component: _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_8__["ListprojetsComponent"], pathMatch: 'full' },
                        { path: 'userdetail', component: _components_dashboard_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_15__["UserdetailComponent"] },
                        {
                            path: 'projects/:id', component: _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_9__["DetailprojetComponent"], children: [
                                { path: '', redirectTo: 'issues', pathMatch: 'full' },
                                { path: 'contributors', component: _components_dashboard_detailprojet_contributor_contributor_component__WEBPACK_IMPORTED_MODULE_18__["ContributorComponent"] },
                                { path: 'issues', component: _components_dashboard_detailprojet_issue_issue_component__WEBPACK_IMPORTED_MODULE_10__["IssueComponent"] },
                                { path: 'tasks', component: _components_dashboard_detailprojet_task_task_component__WEBPACK_IMPORTED_MODULE_11__["TaskComponent"] },
                                { path: 'tests', component: _components_dashboard_detailprojet_test_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"] },
                                { path: 'sprints', component: _components_dashboard_detailprojet_sprint_sprint_component__WEBPACK_IMPORTED_MODULE_12__["SprintComponent"] },
                                { path: 'sprints/:idSprint', component: _components_dashboard_detailprojet_detailsprint_detailsprint_component__WEBPACK_IMPORTED_MODULE_13__["DetailsprintComponent"] },
                                { path: 'releases', component: _components_dashboard_detailprojet_release_release_component__WEBPACK_IMPORTED_MODULE_16__["ReleaseComponent"] },
                                { path: 'documentations', component: _components_dashboard_detailprojet_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_17__["DocumentationComponent"] }
                            ]
                        }
                    ]
                },
                {
                    path: '', redirectTo: 'dashboard', pathMatch: 'full'
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(userService, activated, router) {
                    this.title = 'front-cdp2019-grp2-eq3';
                    if (window.location.href.includes('login') && userService.getIDOflogged() !== undefined) {
                        router.navigate(['dashboard']);
                    }
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
            /* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
            /* harmony import */ var _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/listprojets/listprojets.component */ "./src/app/components/dashboard/listprojets/listprojets.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/detailprojet/detailprojet.component */ "./src/app/components/dashboard/detailprojet/detailprojet.component.ts");
            /* harmony import */ var _services_projet_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var _services_issues_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/issues.service */ "./src/app/services/issues.service.ts");
            /* harmony import */ var _components_dashboard_detailprojet_issue_issue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/detailprojet/issue/issue.component */ "./src/app/components/dashboard/detailprojet/issue/issue.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_task_task_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dashboard/detailprojet/task/task.component */ "./src/app/components/dashboard/detailprojet/task/task.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_sprint_sprint_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/detailprojet/sprint/sprint.component */ "./src/app/components/dashboard/detailprojet/sprint/sprint.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_dashboard_detailprojet_detailsprint_detailsprint_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dashboard/detailprojet/detailsprint/detailsprint.component */ "./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.ts");
            /* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
            /* harmony import */ var _components_dashboard_detailprojet_test_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard/detailprojet/test/test.component */ "./src/app/components/dashboard/detailprojet/test/test.component.ts");
            /* harmony import */ var _components_dashboard_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard/userdetail/userdetail.component */ "./src/app/components/dashboard/userdetail/userdetail.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_release_release_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashboard/detailprojet/release/release.component */ "./src/app/components/dashboard/detailprojet/release/release.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dashboard/detailprojet/documentation/documentation.component */ "./src/app/components/dashboard/detailprojet/documentation/documentation.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_contributor_contributor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dashboard/detailprojet/contributor/contributor.component */ "./src/app/components/dashboard/detailprojet/contributor/contributor.component.ts");
            /* harmony import */ var _services_contributor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/contributor.service */ "./src/app/services/contributor.service.ts");
            /* harmony import */ var _components_accept_accept_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/accept/accept.component */ "./src/app/components/accept/accept.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                        _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                        _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                        _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_14__["ListprojetsComponent"],
                        _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_15__["DetailprojetComponent"],
                        _components_dashboard_detailprojet_issue_issue_component__WEBPACK_IMPORTED_MODULE_18__["IssueComponent"],
                        _components_dashboard_detailprojet_task_task_component__WEBPACK_IMPORTED_MODULE_19__["TaskComponent"],
                        _components_dashboard_detailprojet_sprint_sprint_component__WEBPACK_IMPORTED_MODULE_20__["SprintComponent"],
                        _components_dashboard_detailprojet_detailsprint_detailsprint_component__WEBPACK_IMPORTED_MODULE_22__["DetailsprintComponent"],
                        _components_dashboard_detailprojet_test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
                        _components_dashboard_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_25__["UserdetailComponent"],
                        _components_dashboard_detailprojet_release_release_component__WEBPACK_IMPORTED_MODULE_26__["ReleaseComponent"],
                        _components_dashboard_detailprojet_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_27__["DocumentationComponent"],
                        _components_dashboard_detailprojet_contributor_contributor_component__WEBPACK_IMPORTED_MODULE_28__["ContributorComponent"],
                        _components_accept_accept_component__WEBPACK_IMPORTED_MODULE_30__["AcceptComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
                        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__["NgSelectModule"]
                    ],
                    providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_projet_service__WEBPACK_IMPORTED_MODULE_16__["ProjetService"], _services_issues_service__WEBPACK_IMPORTED_MODULE_17__["IssuesService"], _services_contributor_service__WEBPACK_IMPORTED_MODULE_29__["ContributorService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                            multi: true
                        }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router) {
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.interceptor.ts": 
        /*!******************************************!*\
          !*** ./src/app/auth/auth.interceptor.ts ***!
          \******************************************/
        /*! exports provided: AuthInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    req = req.clone({
                        withCredentials: true
                    });
                    return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) { }, function (err) {
                        if (err.error.auth === false) {
                            _this.router.navigateByUrl('/login');
                        }
                    }));
                };
                return AuthInterceptor;
            }());
            AuthInterceptor.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthInterceptor);
            /***/ 
        }),
        /***/ "./src/app/components/accept/accept.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/accept/accept.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjZXB0L2FjY2VwdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/accept/accept.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/accept/accept.component.ts ***!
          \*******************************************************/
        /*! exports provided: AcceptComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptComponent", function () { return AcceptComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AcceptComponent = /** @class */ (function () {
                function AcceptComponent() {
                }
                AcceptComponent.prototype.ngOnInit = function () {
                };
                return AcceptComponent;
            }());
            AcceptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-accept',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accept.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accept/accept.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accept.component.scss */ "./src/app/components/accept/accept.component.scss")).default]
                })
            ], AcceptComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.ts ***!
          \*************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                /**
                 * Initialize the Dashboard component.
                 */
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getDashboard().subscribe(function (res) {
                        var user = 'user';
                        _this.userService.setToken(res[user]);
                        _this.userInfos = res[user];
                    }, function (err) { });
                };
                /**
                 * Logout the current user.
                 */
                DashboardComponent.prototype.logout = function () {
                    var _this = this;
                    this.userService.logout().subscribe(function (res) {
                        localStorage.removeItem('userinfos');
                        _this.router.navigate(['login']);
                    }, function (err) { });
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/contributor/contributor.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/contributor/contributor.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: ContributorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorComponent", function () { return ContributorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var src_app_services_contributor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/contributor.service */ "./src/app/services/contributor.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var ContributorComponent = /** @class */ (function () {
                function ContributorComponent(route, projectService, contributorService, userService) {
                    this.route = route;
                    this.projectService = projectService;
                    this.contributorService = contributorService;
                    this.userService = userService;
                    this.contributors = [];
                    this.invitations = [];
                    this.waiting = false;
                    this.success = false;
                    this.users = [];
                    this.isCreator = false;
                }
                /**
                 * Initialization of contributor component.
                 */
                ContributorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.parent.params.subscribe(function (params) {
                        var id = 'id';
                        _this.projectId = params[id];
                        _this.getContributors();
                        _this.getInvitations();
                    });
                };
                /**
                 * Get the contributor list of the current project.
                 */
                ContributorComponent.prototype.getContributors = function () {
                    var _this = this;
                    this.projectService.getProject(this.projectId).subscribe(function (data) {
                        var project = 'project';
                        var id = '_id';
                        var contributors = 'contributors';
                        _this.project = data[project];
                        _this.idLogged = _this.userService.getIDOflogged();
                        if (_this.project.creator[id] === _this.idLogged) {
                            _this.isCreator = true;
                        }
                        _this.contributors = _this.project[contributors];
                        _this.getUsers();
                    });
                };
                /**
                 * Get pending invitations for the current user and project.
                 */
                ContributorComponent.prototype.getInvitations = function () {
                    var _this = this;
                    this.contributorService.getInvitations(this.projectId).subscribe(function (data) {
                        _this.invitations = data;
                    });
                };
                /**
                  * Get pending invitations for the current user and project.
                  */
                ContributorComponent.prototype.deleteInvitation = function (id) {
                    var _this = this;
                    this.contributorService.deleteInvitation(this.projectId, id).subscribe(function (data) { return _this.getInvitations(); });
                };
                /**
                 * Get current project user list.
                 */
                ContributorComponent.prototype.getUsers = function () {
                    var _this = this;
                    var users = 'users';
                    var creator = 'creator';
                    this.userService.getUsers().subscribe(function (data) {
                        _this.users = data[users].filter(function (item) { return !_this.contributors.some(function (d) { return d._id === item._id || item._id === _this.project[creator]._id; }); });
                    });
                };
                /**
                 * Invite a new contributor.
                 * @param $event invite event
                 */
                ContributorComponent.prototype.onAdd = function ($event) {
                    var _this = this;
                    this.waiting = true;
                    this.contributorService.inviteContributor(this.projectId, $event).subscribe(function (res) {
                        _this.waiting = false;
                        _this.success = true;
                        setTimeout(function () { return _this.success = false; }, 2000);
                        _this.getInvitations();
                        _this.selectedUser = null;
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove a contributor from project
                 * @param id id of contributor
                 */
                ContributorComponent.prototype.removeContributor = function (id) {
                    var _this = this;
                    this.contributorService.removeContributor(this.projectId, id).subscribe(function (data) {
                        _this.getContributors();
                        _this.getUsers();
                        _this.getInvitations();
                    });
                };
                return ContributorComponent;
            }());
            ContributorComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"] },
                { type: src_app_services_contributor_service__WEBPACK_IMPORTED_MODULE_4__["ContributorService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
            ]; };
            ContributorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contributor',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contributor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/contributor/contributor.component.html")).default,
                })
            ], ContributorComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/detailprojet.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/detailprojet.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: DetailprojetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailprojetComponent", function () { return DetailprojetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var DetailprojetComponent = /** @class */ (function () {
                function DetailprojetComponent(projetService, userService, route) {
                    this.projetService = projetService;
                    this.userService = userService;
                    this.route = route;
                    this.users = [];
                    this.modelproject = {
                        title: '',
                        description: '',
                        status: ''
                    };
                    this.isCreator = false;
                }
                /**
                 * Initialize the detaiProjet component.
                 */
                DetailprojetComponent.prototype.ngOnInit = function () {
                    this.projectId = this.route.snapshot.paramMap.get('id');
                    this.getProject();
                };
                /**
                 * Get the selected project.
                 */
                DetailprojetComponent.prototype.getProject = function () {
                    var _this = this;
                    this.projetService.getProject(this.projectId).subscribe(function (data) {
                        var project = 'project';
                        var id = '_id';
                        _this.project = data[project];
                        _this.idLogged = _this.userService.getIDOflogged();
                        if (_this.project.creator[id] === _this.idLogged) {
                            _this.isCreator = true;
                        }
                        else {
                            _this.isCreator = false;
                        }
                        _this.modelproject.title = _this.project.title;
                        _this.modelproject.description = _this.project.description;
                        _this.modelproject.status = _this.project.status;
                    });
                };
                /**
                 * Edit the selected project title and/or description form form info
                 * @param form the form containing the new title and description.
                 */
                DetailprojetComponent.prototype.editProject = function (form) {
                    var _this = this;
                    if (form.value.title === '' || form.value.description === '') {
                        this.getProject();
                        return;
                    }
                    var id = '_id';
                    this.projetService.editProject(this.project[id], form.value).subscribe(function (res) {
                        _this.getProject();
                    }, function (err) {
                        console.log(err);
                    });
                };
                return DetailprojetComponent;
            }());
            DetailprojetComponent.ctorParameters = function () { return [
                { type: src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_2__["ProjetService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            DetailprojetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detailprojet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailprojet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailprojet.component.html")).default
                })
            ], DetailprojetComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: DetailsprintComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsprintComponent", function () { return DetailsprintComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_sprint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sprint.service */ "./src/app/services/sprint.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/issues.service */ "./src/app/services/issues.service.ts");
            var DetailsprintComponent = /** @class */ (function () {
                function DetailsprintComponent(sprintService, issueService, route) {
                    this.sprintService = sprintService;
                    this.issueService = issueService;
                    this.route = route;
                    this.nbrDifficulte = 0;
                    this.nbrDifficulteRe = 0;
                    this.sprint = {};
                    this.issues = [];
                    this.modelIssueEdit = {
                        _id: '',
                        issueID: '',
                        description: '',
                        priorite: '',
                        difficulte: '0',
                        status: '0'
                    };
                    this.events = [];
                }
                /**
                 * Initialization of detailSprint component.
                 */
                DetailsprintComponent.prototype.ngOnInit = function () {
                    this.getSprint();
                };
                /**
                 * Get selected sprint infos.
                 */
                DetailsprintComponent.prototype.getSprint = function () {
                    var _this = this;
                    this.route.parent.params.subscribe(function (params) {
                        var id = 'id';
                        _this.projectId = params[id];
                    });
                    this.sprintID = this.route.snapshot.paramMap.get('idSprint');
                    this.sprintService.getSprint(this.projectId, this.sprintID).subscribe(function (data) {
                        var sprint = 'sprint';
                        var issues = 'issues';
                        _this.sprint = data[sprint];
                        _this.issueService.getIssues(_this.projectId).subscribe(function (dataIssues) {
                            var res = dataIssues[issues].filter(function (item1) { return !_this.sprint[issues].some(function (item2) { return (item2._id === item1._id); }); });
                            _this.issues = res;
                            _this.nbrDifficulte = 0;
                            _this.nbrDifficulteRe = 0;
                            _this.sprint[issues].forEach(function (e) {
                                _this.nbrDifficulte = _this.nbrDifficulte + parseInt(e.difficulte, 10);
                                if (e.status === 'Terminé') {
                                    _this.nbrDifficulteRe = _this.nbrDifficulteRe + parseInt(e.difficulte, 10);
                                }
                            });
                        });
                    });
                };
                /**
                 * Add an issue to the sprint.
                 * @param $event Add event
                 */
                DetailsprintComponent.prototype.onAdd = function ($event) {
                    var _this = this;
                    this.sprintService.addIssueSprint(this.projectId, this.sprintID, { idIssue: $event }).subscribe(function (res) {
                        _this.getSprint();
                        _this.selectedItems = null;
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Update the edit issue template.
                 * @param issue issue reference
                 */
                DetailsprintComponent.prototype.updateModalEditIssue = function (issue) {
                    this.modelIssueEdit._id = issue._id;
                    this.modelIssueEdit.issueID = issue.issueID;
                    this.modelIssueEdit.description = issue.description;
                    this.modelIssueEdit.priorite = issue.priorite;
                    this.modelIssueEdit.difficulte = issue.difficulte;
                    this.modelIssueEdit.status = issue.status;
                };
                /**
                 * Edit an issue
                 * @param form form containing the issue infos.
                 */
                DetailsprintComponent.prototype.onSubmitEditIssue = function (form) {
                    var _this = this;
                    this.issueService.editIssue(this.projectId, this.modelIssueEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getSprint();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove an issue from the sprint.
                 * @param issueId id of issue to remove
                 */
                DetailsprintComponent.prototype.removeIssueFromSprint = function (issueId) {
                    var _this = this;
                    this.sprintService.removeIssue(this.projectId, this.sprintID, issueId).subscribe(function (data) { return _this.getSprint(); });
                };
                return DetailsprintComponent;
            }());
            DetailsprintComponent.ctorParameters = function () { return [
                { type: src_app_services_sprint_service__WEBPACK_IMPORTED_MODULE_2__["SprintService"] },
                { type: src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_4__["IssuesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            DetailsprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detailsprint',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailsprint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailsprint/detailsprint.component.html")).default
                })
            ], DetailsprintComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/documentation/documentation.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/documentation/documentation.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: DocumentationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () { return DocumentationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/issues.service */ "./src/app/services/issues.service.ts");
            /* harmony import */ var src_app_services_documentations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/documentations.service */ "./src/app/services/documentations.service.ts");
            var DocumentationComponent = /** @class */ (function () {
                function DocumentationComponent(documentationService, issueService, route) {
                    this.documentationService = documentationService;
                    this.issueService = issueService;
                    this.route = route;
                    this.issues = [];
                    this.documentations = [];
                    this.modelDocumentation = {
                        title: '',
                        description: '',
                        link: ''
                    };
                    this.modelDocumentationEdit = {
                        _id: '',
                        title: '',
                        description: '',
                        link: ''
                    };
                }
                /**
                 * Initialization of documentation component.
                 */
                DocumentationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.parent.params.subscribe(function (params) {
                        var id = 'id';
                        _this.projectId = params[id];
                    });
                    this.getDocumentations();
                    this.getIssues();
                };
                /**
                 * Get the current project issue list.
                 */
                DocumentationComponent.prototype.getIssues = function () {
                    var _this = this;
                    var issues = 'issues';
                    this.issueService.getIssues(this.projectId).subscribe(function (data) { return _this.issues = data[issues]; });
                };
                /**
                 * Get the current project documentation list.
                 */
                DocumentationComponent.prototype.getDocumentations = function () {
                    var _this = this;
                    var documentations = 'documentations';
                    this.documentationService.getDocumentations(this.projectId).subscribe(function (data) { return _this.documentations = data[documentations]; });
                };
                /**
                 * Add documentation from form info
                 * @param form the form containing the documentation info
                 */
                DocumentationComponent.prototype.onSubmitDocumentation = function (form) {
                    var _this = this;
                    this.documentationService.addDocumentation(this.projectId, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getDocumentations();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove a documentation reference
                 * @param id id of the documentation reference
                 */
                DocumentationComponent.prototype.removeDocumentation = function (id) {
                    var _this = this;
                    this.documentationService.removeDocumentation(this.projectId, id).subscribe(function (data) { return _this.getDocumentations(); });
                };
                /**
                 * Update the edit documentation form with the documentation info
                 * @param documentation documentation info
                 */
                DocumentationComponent.prototype.updateModalEditDocumentation = function (documentation) {
                    this.modelDocumentationEdit._id = documentation._id;
                    this.modelDocumentationEdit.title = documentation.title;
                    this.modelDocumentationEdit.description = documentation.description;
                    this.modelDocumentationEdit.link = documentation.link;
                };
                /**
                 * Edit documentation from form info
                 * @param form the form containing documentation info
                 */
                DocumentationComponent.prototype.onSubmitEditDocumentation = function (form) {
                    var _this = this;
                    this.documentationService.editDocumentation(this.projectId, this.modelDocumentationEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getDocumentations();
                    }, function (err) {
                        console.log(err);
                    });
                };
                return DocumentationComponent;
            }());
            DocumentationComponent.ctorParameters = function () { return [
                { type: src_app_services_documentations_service__WEBPACK_IMPORTED_MODULE_4__["DocumentationsService"] },
                { type: src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_3__["IssuesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-documentation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./documentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/documentation/documentation.component.html")).default
                })
            ], DocumentationComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/issue/issue.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/issue/issue.component.ts ***!
          \****************************************************************************/
        /*! exports provided: IssueComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueComponent", function () { return IssueComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/issues.service */ "./src/app/services/issues.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var IssueComponent = /** @class */ (function () {
                function IssueComponent(issueService, route) {
                    this.issueService = issueService;
                    this.route = route;
                    this.issues = [];
                    this.modelIssue = {
                        issueID: '',
                        description: '',
                        priorite: '',
                        difficulte: '',
                        status: '0'
                    };
                    this.modelIssueEdit = {
                        _id: '',
                        issueID: '',
                        description: '',
                        priorite: '',
                        difficulte: '0',
                        status: '0'
                    };
                }
                /**
                 * Initialize issue component.
                 */
                IssueComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = 'id';
                    this.route.parent.params.subscribe(function (params) {
                        _this.projectId = params[id];
                    });
                    this.getIssues();
                };
                /**
                 * Get the current project issue list
                 */
                IssueComponent.prototype.getIssues = function () {
                    var _this = this;
                    var issues = 'issues';
                    this.issueService.getIssues(this.projectId).subscribe(function (data) { return _this.issues = data[issues]; });
                };
                /**
                 * Add an issue from form info
                 * @param form form containing the issue info
                 */
                IssueComponent.prototype.onSubmitIssue = function (form) {
                    var _this = this;
                    this.issueService.addIssue(this.projectId, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelIssue.status = '0';
                        _this.modelIssue.difficulte = '0';
                        _this.getIssues();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove an issue
                 * @param id id of the issue to remove
                 */
                IssueComponent.prototype.removeIssue = function (id) {
                    var _this = this;
                    this.issueService.removeIssue(this.projectId, id).subscribe(function (data) { return _this.getIssues(); });
                };
                /**
                 * Update issue edit form from issue info
                 * @param issue issue info
                 */
                IssueComponent.prototype.updateModalEditIssue = function (issue) {
                    this.modelIssueEdit._id = issue._id;
                    this.modelIssueEdit.issueID = issue.issueID;
                    this.modelIssueEdit.description = issue.description;
                    this.modelIssueEdit.priorite = issue.priorite;
                    this.modelIssueEdit.difficulte = issue.difficulte;
                    this.modelIssueEdit.status = issue.status;
                };
                /**
                 * Edit an issue from form info
                 * @param form form containing the issue info
                 */
                IssueComponent.prototype.onSubmitEditIssue = function (form) {
                    var _this = this;
                    this.issueService.editIssue(this.projectId, this.modelIssueEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.selectedItem = null;
                        _this.getIssues();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Sort issues by criteria : "ID", "Priorité" or "Difficulté".
                 * @param $event the criteria on which issues are sorted.
                 */
                IssueComponent.prototype.sort = function ($event) {
                    if ($event !== undefined) {
                        var clicked = $event.$ngOptionLabel;
                        switch (clicked) {
                            case 'ID': {
                                this.issues = this.issues.sort(function (a, b) { return parseInt(a.issueID, 10) - parseInt(b.issueID, 10); });
                                break;
                            }
                            case 'Priorité': {
                                this.issues = this.issues.sort(function (a, b) { return a.priorite.localeCompare(b.priorite); });
                                break;
                            }
                            case 'Difficulté': {
                                this.issues = this.issues.sort(function (a, b) { return parseInt(a.difficulte, 10) - parseInt(b.difficulte, 10); });
                                break;
                            }
                        }
                    }
                };
                return IssueComponent;
            }());
            IssueComponent.ctorParameters = function () { return [
                { type: src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            IssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-issue',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./issue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/issue/issue.component.html")).default
                })
            ], IssueComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/release/release.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/release/release.component.ts ***!
          \********************************************************************************/
        /*! exports provided: ReleaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseComponent", function () { return ReleaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var src_app_services_releases_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/releases.service */ "./src/app/services/releases.service.ts");
            /* harmony import */ var src_app_services_sprint_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sprint.service */ "./src/app/services/sprint.service.ts");
            /* harmony import */ var src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/issues.service */ "./src/app/services/issues.service.ts");
            var ReleaseComponent = /** @class */ (function () {
                function ReleaseComponent(releasesService, sprintService, issueService, route, calendar) {
                    this.releasesService = releasesService;
                    this.sprintService = sprintService;
                    this.issueService = issueService;
                    this.route = route;
                    this.calendar = calendar;
                    this.releases = [];
                    this.sprints = [];
                    this.issues = [];
                    this.modelRelease = {
                        title: '',
                        description: '',
                        version: '',
                        date: {},
                        sprintNumber: '0',
                        link: ''
                    };
                    this.modelReleaseEdit = {
                        _id: '',
                        title: '',
                        description: '',
                        version: '',
                        date: {},
                        sprintNumber: '',
                        link: ''
                    };
                }
                /**
                 * Initialize the release component.
                 */
                ReleaseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = 'id';
                    this.route.parent.params.subscribe(function (params) {
                        _this.projectId = params[id];
                    });
                    this.getReleases();
                    this.getSprints();
                    this.getIssues();
                    this.modelRelease.date = this.calendar.getToday();
                };
                /**
                 * Get the current project issue list.
                 */
                ReleaseComponent.prototype.getIssues = function () {
                    var _this = this;
                    var issues = 'issues';
                    this.issueService.getIssues(this.projectId).subscribe(function (data) { return _this.issues = data[issues]; });
                };
                /**
                 * Get the current project release list.
                 */
                ReleaseComponent.prototype.getReleases = function () {
                    var _this = this;
                    var releases = 'releases';
                    this.releasesService.getReleases(this.projectId).subscribe(function (data) { return _this.releases = data[releases]; });
                };
                /**
                 * Get the current project sprint list.
                 */
                ReleaseComponent.prototype.getSprints = function () {
                    var _this = this;
                    var sprints = 'sprints';
                    this.sprintService.getSprints(this.projectId).subscribe(function (data) { return _this.sprints = data[sprints]; });
                };
                /**
                 * Add a release from form info.
                 * @param form form containing the release info.
                 */
                ReleaseComponent.prototype.onSubmitRelease = function (form) {
                    var _this = this;
                    var date = form.value.date;
                    form.value.date = date.day + '/' + date.month + '/' + date.year;
                    this.releasesService.addRelease(this.projectId, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getReleases();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove a release from project.
                 * @param id id of release to remove.
                 */
                ReleaseComponent.prototype.removeRelease = function (id) {
                    var _this = this;
                    this.releasesService.removeRelease(this.projectId, id).subscribe(function (data) { return _this.getReleases(); });
                };
                /**
                 * Update release edit form from release info
                 * @param release release info
                 */
                ReleaseComponent.prototype.updateModalEditRelease = function (release) {
                    this.modelReleaseEdit._id = release._id;
                    this.modelReleaseEdit.title = release.title;
                    this.modelReleaseEdit.description = release.description;
                    this.modelReleaseEdit.version = release.version;
                    var tmpDate = release.date.split('/');
                    this.modelReleaseEdit.date = { year: parseInt(tmpDate[2], 10), month: parseInt(tmpDate[1], 10), day: parseInt(tmpDate[0], 10) };
                    this.modelReleaseEdit.sprintNumber = release.sprintNumber;
                    this.modelReleaseEdit.link = release.link;
                };
                /**
                 * Edit a release from form info
                 * @param form form containing the release info
                 */
                ReleaseComponent.prototype.onSubmitEditRelease = function (form) {
                    var _this = this;
                    var date = form.value.date;
                    form.value.date = date.day + '/' + date.month + '/' + date.year;
                    this.releasesService.editRelease(this.projectId, this.modelReleaseEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getReleases();
                    }, function (err) {
                        console.log(err);
                    });
                };
                return ReleaseComponent;
            }());
            ReleaseComponent.ctorParameters = function () { return [
                { type: src_app_services_releases_service__WEBPACK_IMPORTED_MODULE_4__["ReleasesService"] },
                { type: src_app_services_sprint_service__WEBPACK_IMPORTED_MODULE_5__["SprintService"] },
                { type: src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] }
            ]; };
            ReleaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-release',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./release.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/release/release.component.html")).default
                })
            ], ReleaseComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/sprint/sprint.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/sprint/sprint.component.ts ***!
          \******************************************************************************/
        /*! exports provided: SprintComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintComponent", function () { return SprintComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_sprint_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sprint.service */ "./src/app/services/sprint.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var SprintComponent = /** @class */ (function () {
                function SprintComponent(sprintService, route, calendar) {
                    this.sprintService = sprintService;
                    this.route = route;
                    this.calendar = calendar;
                    this.sprints = [];
                    this.modelSprint = {
                        title: '',
                        startDate: {},
                        endDate: {},
                        status: '0',
                        issues: ''
                    };
                    this.modelSprintEdit = {
                        _id: '',
                        title: '',
                        startDate: {},
                        endDate: {},
                        status: '0',
                        issues: ''
                    };
                }
                /**
                 * Initialize the sprint component.
                 */
                SprintComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = 'id';
                    this.route.parent.params.subscribe(function (params) {
                        _this.projectId = params[id];
                    });
                    this.getSprints();
                    this.modelSprint.startDate = this.calendar.getToday();
                    this.modelSprint.endDate = this.calendar.getToday();
                };
                /**
                 * Get the current project sprint list.
                 */
                SprintComponent.prototype.getSprints = function () {
                    var _this = this;
                    var sprints = 'sprints';
                    this.sprintService.getSprints(this.projectId).subscribe(function (data) { return _this.sprints = data[sprints]; });
                };
                /**
                 * Add a sprint from form info.
                 * @param form form containing the sprint info.
                 */
                SprintComponent.prototype.onSubmitSprint = function (form) {
                    var _this = this;
                    var startDate = form.value.dp1;
                    var endDate = form.value.dp2;
                    form.value.dp1 = startDate.day + '/' + startDate.month + '/' + startDate.year;
                    form.value.dp2 = endDate.day + '/' + endDate.month + '/' + endDate.year;
                    console.log(form.value);
                    this.sprintService.addSprint(this.projectId, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelSprint.status = '0';
                        _this.getSprints();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Update sprint edit form from sprint info
                 * @param sprint sprint info
                 */
                SprintComponent.prototype.updateModalEditSprint = function (sprint) {
                    this.modelSprintEdit._id = sprint._id;
                    this.modelSprintEdit.title = sprint.title;
                    var tmpDateStart = sprint.startDate.split('/');
                    this.modelSprintEdit.startDate = { year: parseInt(tmpDateStart[2], 10),
                        month: parseInt(tmpDateStart[1], 10),
                        day: parseInt(tmpDateStart[0], 10) };
                    var tmpDateEnd = sprint.endDate.split('/');
                    this.modelSprintEdit.endDate = { year: parseInt(tmpDateEnd[2], 10),
                        month: parseInt(tmpDateEnd[1], 10),
                        day: parseInt(tmpDateEnd[0], 10) };
                    this.modelSprintEdit.status = sprint.status;
                };
                /**
                 * Edit a sprint from form info
                 * @param form form containing the sprint info
                 */
                SprintComponent.prototype.onSubmitEditSprint = function (form) {
                    var _this = this;
                    var startDate = form.value.dp1;
                    var endDate = form.value.dp2;
                    form.value.dp1 = startDate.day + '/' + startDate.month + '/' + startDate.year;
                    form.value.dp2 = endDate.day + '/' + endDate.month + '/' + endDate.year;
                    this.sprintService.editSprint(this.projectId, this.modelSprintEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelSprintEdit.status = '0';
                        _this.getSprints();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove a sprint from project.
                 * @param id id of sprint to remove.
                 */
                SprintComponent.prototype.removeSprint = function (id) {
                    var _this = this;
                    this.sprintService.removeSprint(this.projectId, id).subscribe(function (data) { return _this.getSprints(); });
                };
                return SprintComponent;
            }());
            SprintComponent.ctorParameters = function () { return [
                { type: src_app_services_sprint_service__WEBPACK_IMPORTED_MODULE_2__["SprintService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCalendar"] }
            ]; };
            SprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sprint',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sprint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/sprint/sprint.component.html")).default
                })
            ], SprintComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/task/task.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/task/task.component.ts ***!
          \**************************************************************************/
        /*! exports provided: TaskComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function () { return TaskComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/issues.service */ "./src/app/services/issues.service.ts");
            /* harmony import */ var src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/projet.service */ "./src/app/services/projet.service.ts");
            var TaskComponent = /** @class */ (function () {
                function TaskComponent(tasksService, issueService, projectService, route) {
                    this.tasksService = tasksService;
                    this.issueService = issueService;
                    this.projectService = projectService;
                    this.route = route;
                    this.tasks = [];
                    this.issues = [];
                    this.contributors = [];
                    this.modelTask = {
                        issue: [],
                        description: '',
                        cout: '',
                        developer: null
                    };
                    this.modelTaskEdit = {
                        _id: '',
                        issue: [],
                        description: '',
                        cout: '',
                        developer: null
                    };
                }
                /**
                 * Initialize the task component.
                 */
                TaskComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = 'id';
                    this.route.parent.params.subscribe(function (params) {
                        _this.projectId = params[id];
                    });
                    this.getTasks();
                    this.getIssues();
                    this.getContributors();
                };
                /**
                 * Get the current project task list.
                 */
                TaskComponent.prototype.getTasks = function () {
                    var _this = this;
                    var tasks = 'tasks';
                    this.tasksService.getTasks(this.projectId).subscribe(function (data) { return _this.tasks = data[tasks]; });
                };
                /**
                 * Get the current project issue list.
                 */
                TaskComponent.prototype.getIssues = function () {
                    var _this = this;
                    var issues = 'issues';
                    this.issueService.getIssues(this.projectId).subscribe(function (data) { return _this.issues = data[issues]; });
                };
                /**
                 * Get the current project contributors list.
                 */
                TaskComponent.prototype.getContributors = function () {
                    var _this = this;
                    var project = 'project';
                    var contributors = 'contributors';
                    this.projectService.getProject(this.projectId).subscribe(function (data) {
                        _this.contributors = data[project][contributors];
                    });
                };
                /**
                 * Add a task from form info.
                 * @param form form containing the task info.
                 */
                TaskComponent.prototype.onSubmitTask = function (form) {
                    var _this = this;
                    this.tasksService.addTask(this.projectId, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelTask.developer = null;
                        _this.modelTask.issue = null;
                        _this.getTasks();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove a task from project.
                 * @param id id of task to remove.
                 */
                TaskComponent.prototype.removeTask = function (id) {
                    var _this = this;
                    this.tasksService.removeTask(this.projectId, id).subscribe(function (data) { return _this.getTasks(); });
                };
                /**
                 * Update task edit form from task info
                 * @param task task info
                 */
                TaskComponent.prototype.updateModalEditTask = function (task) {
                    var _this = this;
                    this.modelTaskEdit._id = task._id;
                    this.modelTaskEdit.cout = task.cout;
                    this.modelTaskEdit.description = task.description;
                    this.modelTaskEdit.developer = task.developer;
                    this.modelTaskEdit.issue = [];
                    task.idIssues.forEach(function (e) { return _this.modelTaskEdit.issue.push(e); });
                };
                /**
                 * Edit a task from form info
                 * @param form form containing the task info
                 */
                TaskComponent.prototype.onSubmitEditTask = function (form) {
                    var _this = this;
                    this.tasksService.editTask(this.projectId, this.modelTaskEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getTasks();
                    }, function (err) {
                        console.log(err);
                    });
                };
                return TaskComponent;
            }());
            TaskComponent.ctorParameters = function () { return [
                { type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"] },
                { type: src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_4__["IssuesService"] },
                { type: src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_5__["ProjetService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-task',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/task/task.component.html")).default
                })
            ], TaskComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/test/test.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/test/test.component.ts ***!
          \**************************************************************************/
        /*! exports provided: TestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function () { return TestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tests.service */ "./src/app/services/tests.service.ts");
            var TestComponent = /** @class */ (function () {
                function TestComponent(testsService, route, calendar) {
                    this.testsService = testsService;
                    this.route = route;
                    this.calendar = calendar;
                    this.tests = [];
                    this.modelTest = {
                        title: '',
                        description: '',
                        type: '0',
                        date: {},
                        link: '',
                        status: '0'
                    };
                    this.modelTestEdit = {
                        _id: '',
                        title: '',
                        description: '',
                        type: '0',
                        date: {},
                        link: '',
                        status: '0'
                    };
                    this.nbrPass = 0;
                    this.nbrFailed = 0;
                    this.notYet = 0;
                }
                /**
                 * Initialize the test component.
                 */
                TestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = 'id';
                    this.route.parent.params.subscribe(function (params) {
                        _this.projectId = params[id];
                    });
                    this.getTests();
                    this.modelTest.date = this.calendar.getToday();
                };
                /**
                 * Get the current project test list.
                 */
                TestComponent.prototype.getTests = function () {
                    var _this = this;
                    var tests = 'tests';
                    this.testsService.getTests(this.projectId).subscribe(function (data) {
                        _this.tests = data[tests];
                        _this.nbrPass = 0;
                        _this.nbrFailed = 0;
                        _this.notYet = 0;
                        _this.tests.forEach(function (e) {
                            if (e.status === 'Passé') {
                                _this.nbrPass = _this.nbrPass + 1;
                            }
                            else if (e.status === 'En cours') {
                                _this.notYet = _this.notYet + 1;
                            }
                            else if (e.status === 'Echoué') {
                                _this.nbrFailed = _this.nbrFailed + 1;
                            }
                        });
                    });
                };
                /**
                 * Add a test from form info.
                 * @param form form containing the test info.
                 */
                TestComponent.prototype.onSubmitTest = function (form) {
                    var _this = this;
                    var date = form.value.dp;
                    form.value.dp = date.day + '/' + date.month + '/' + date.year;
                    this.testsService.addTest(this.projectId, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelTest.status = '0';
                        _this.modelTest.type = '0';
                        _this.getTests();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Remove a test from project.
                 * @param id id of test to remove.
                 */
                TestComponent.prototype.removeTest = function (id) {
                    var _this = this;
                    this.testsService.removeTest(this.projectId, id).subscribe(function (data) { return _this.getTests(); });
                };
                /**
                 * Update test edit form from test info
                 * @param test test info
                 */
                TestComponent.prototype.updateModalEditTest = function (test) {
                    this.modelTestEdit._id = test._id;
                    this.modelTestEdit.title = test.title;
                    this.modelTestEdit.description = test.description;
                    this.modelTestEdit.type = test.type;
                    var tmpDate = test.date.split('/');
                    this.modelTestEdit.date = { year: parseInt(tmpDate[2], 10), month: parseInt(tmpDate[1], 10), day: parseInt(tmpDate[0], 10) };
                    this.modelTestEdit.link = test.link;
                    this.modelTestEdit.status = test.status;
                };
                /**
                 * Edit a test from form info
                 * @param form form containing the test info
                 */
                TestComponent.prototype.onSubmitEditTest = function (form) {
                    var _this = this;
                    var date = form.value.dp;
                    form.value.dp = date.day + '/' + date.month + '/' + date.year;
                    this.testsService.editTest(this.projectId, this.modelTestEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getTests();
                    }, function (err) {
                        console.log(err);
                    });
                };
                /**
                 * Filter the list of tests by status
                 * @param $event is the selected status
                 */
                TestComponent.prototype.filter = function ($event) {
                    var _this = this;
                    var tests = 'tests';
                    if ($event !== undefined) {
                        var clicked = $event.$ngOptionLabel;
                        switch (clicked) {
                            case 'En cours': {
                                this.testsService.getTests(this.projectId).subscribe(function (data) {
                                    _this.tests = data[tests].filter(function (test) { return test.status === 'En cours'; });
                                });
                                break;
                            }
                            case 'Passé': {
                                this.testsService.getTests(this.projectId).subscribe(function (data) {
                                    _this.tests = data[tests].filter(function (test) { return test.status === 'Passé'; });
                                });
                                break;
                            }
                            case 'Echoué': {
                                this.testsService.getTests(this.projectId).subscribe(function (data) {
                                    _this.tests = data[tests].filter(function (test) { return test.status === 'Echoué'; });
                                });
                                break;
                            }
                        }
                    }
                };
                return TestComponent;
            }());
            TestComponent.ctorParameters = function () { return [
                { type: src_app_services_tests_service__WEBPACK_IMPORTED_MODULE_4__["TestsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"] }
            ]; };
            TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-test',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/test/test.component.html")).default
                })
            ], TestComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/listprojets/listprojets.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/dashboard/listprojets/listprojets.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ListprojetsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListprojetsComponent", function () { return ListprojetsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var src_app_services_contributor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contributor.service */ "./src/app/services/contributor.service.ts");
            var ListprojetsComponent = /** @class */ (function () {
                function ListprojetsComponent(projectsService, contributorService) {
                    this.projectsService = projectsService;
                    this.contributorService = contributorService;
                    this.projects = [];
                    this.model = {
                        title: '',
                        description: ''
                    };
                }
                /**
                 * Initialize the listProjets component.
                 */
                ListprojetsComponent.prototype.ngOnInit = function () {
                    this.getProjects();
                };
                /**
                 * Get the projects list.
                 */
                ListprojetsComponent.prototype.getProjects = function () {
                    var _this = this;
                    this.projectsService.getProjects().subscribe(function (data) { return _this.projects = data; });
                };
                /**
                 * Remove a project.
                 * @param id id of the project to remove.
                 */
                ListprojetsComponent.prototype.removeProject = function (id) {
                    var _this = this;
                    this.projectsService.deleteProject(id).subscribe(function (data) { return _this.getProjects(); });
                };
                /**
                 * Create a new project from form info
                 * @param form form containing the new project info.
                 */
                ListprojetsComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.projectsService.addProject(form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getProjects();
                    }, function (err) {
                        console.log(err);
                    });
                };
                ListprojetsComponent.prototype.removeContributor = function (idproject, idlogged) {
                    var _this = this;
                    this.contributorService.removeContributor(idproject, idlogged).subscribe(function (data) {
                        _this.getProjects();
                    });
                };
                return ListprojetsComponent;
            }());
            ListprojetsComponent.ctorParameters = function () { return [
                { type: src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_2__["ProjetService"] },
                { type: src_app_services_contributor_service__WEBPACK_IMPORTED_MODULE_3__["ContributorService"] }
            ]; };
            ListprojetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-listprojets',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listprojets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/listprojets/listprojets.component.html")).default
                })
            ], ListprojetsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/userdetail/userdetail.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/dashboard/userdetail/userdetail.component.ts ***!
          \*************************************************************************/
        /*! exports provided: UserdetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailComponent", function () { return UserdetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
            var UserdetailComponent = /** @class */ (function () {
                function UserdetailComponent(userService) {
                    this.userService = userService;
                }
                /**
                 * Initialize the UserDetail component.
                 */
                UserdetailComponent.prototype.ngOnInit = function () { };
                /**
                 * Edit the current user from form info.
                 * @param form form containing the user info.
                 */
                UserdetailComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.userService.editUser(form.value).subscribe(function (res) {
                        _this.successmessage = true;
                        setTimeout(function () { return _this.successmessage = false; }, 4000);
                    }, function (err) {
                        if (err.status === 442) {
                            _this.errormessage = err.error.join('<br/>');
                        }
                        else {
                            _this.errormessage = 'Une erreur est survenue dans le serveur';
                        }
                    });
                };
                return UserdetailComponent;
            }());
            UserdetailComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            UserdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-userdetail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/userdetail/userdetail.component.html")).default
                })
            ], UserdetailComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/login/login.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/components/user/login/login.component.ts ***!
          \**********************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    this.model = {
                        email: '',
                        password: ''
                    };
                }
                /**
                 * Initialize the login component.
                 */
                LoginComponent.prototype.ngOnInit = function () { };
                /**
                 * Login the user from form info.
                 * @param form form containing the login credentials.
                 */
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.userService.login(form.value).subscribe(function (res) {
                        _this.router.navigateByUrl('/dashboard/projects');
                    }, function (err) {
                        _this.errormessage = err.error.message;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/login/login.component.html")).default
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/register/register.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/components/user/register/register.component.ts ***!
          \****************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(userService) {
                    this.userService = userService;
                    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                }
                /**
                 * Initialize the register component.
                 */
                RegisterComponent.prototype.ngOnInit = function () { };
                /**
                 * Register a new user from form info.
                 * @param form form containing the new user credentials.
                 */
                RegisterComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.userService.postUser(form.value).subscribe(function (res) {
                        _this.successmessage = true;
                        setTimeout(function () { return _this.successmessage = false; }, 4000);
                        _this.resetForm(form);
                    }, function (err) {
                        if (err.status === 442) {
                            _this.errormessage = err.error.join('<br/>');
                        }
                        else {
                            _this.errormessage = 'Une erreur est survenue dans le serveur';
                        }
                    });
                };
                /**
                 * Reset the register form.
                 * @param form form to reset.
                 */
                RegisterComponent.prototype.resetForm = function (form) {
                    this.userService.user = {
                        name: '',
                        email: '',
                        password: ''
                    };
                    form.resetForm();
                    this.errormessage = '';
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/register/register.component.html")).default
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/user/user.component.ts ***!
          \***************************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserComponent = /** @class */ (function () {
                function UserComponent() {
                }
                /**
                 * Initialize the user component.
                 */
                UserComponent.prototype.ngOnInit = function () { };
                return UserComponent;
            }());
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html")).default
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/services/contributor.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/contributor.service.ts ***!
          \*************************************************/
        /*! exports provided: ContributorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorService", function () { return ContributorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ContributorService = /** @class */ (function () {
                function ContributorService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the invitation list for the project.
                 * @param idProject id of the project.
                 */
                ContributorService.prototype.getInvitations = function (idProject) {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/projects/' + idProject + '/invitations');
                };
                /**
                 * Invite a contributor to the project.
                 * @param idProject id of the project.
                 * @param email email adress of the contributor.
                 */
                ContributorService.prototype.inviteContributor = function (idProject, email) {
                    return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/projects/' + idProject + '/invite', { email: email });
                };
                /**
                 * Add a contributor to the project.
                 * @param idProject id of the project.
                 * @param email email adress of the contributor.
                 */
                ContributorService.prototype.addContributor = function (idProject, email) {
                    return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/projects/' + idProject + '/contributors', { email: email });
                };
                /**
                 * Remove a contributor from the project.
                 * @param idProject id of the project.
                 * @param id_user id of the contributor.
                 */
                ContributorService.prototype.removeContributor = function (idProject, idUser) {
                    return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/projects/' + idProject + '/contributors/' + idUser);
                };
                /**
                  * Remove a contributor from the project.
                  * @param idProject id of the project.
                  * @param idInvitation id of the invitation.
                  */
                ContributorService.prototype.deleteInvitation = function (idProject, idInvitation) {
                    return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/projects/' + idProject + '/invitations/' + idInvitation);
                };
                return ContributorService;
            }());
            ContributorService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ContributorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ContributorService);
            /***/ 
        }),
        /***/ "./src/app/services/documentations.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/services/documentations.service.ts ***!
          \****************************************************/
        /*! exports provided: DocumentationsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationsService", function () { return DocumentationsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var DocumentationsService = /** @class */ (function () {
                function DocumentationsService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the documentation of the project.
                 * @param idProject id of the project.
                 */
                DocumentationsService.prototype.getDocumentations = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/documentations');
                };
                /**
                 * Add a documentation reference to the project.
                 * @param idProject id of the project.
                 * @param documentation documentation to add.
                 */
                DocumentationsService.prototype.addDocumentation = function (idProject, documentation) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/documentations', documentation);
                };
                /**
                 * Edit a documentartion reference of the project.
                 * @param idProject id of the project.
                 * @param documentationId id of the documentation.
                 * @param documentation edited documentation.
                 */
                DocumentationsService.prototype.editDocumentation = function (idProject, documentationId, documentation) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/documentations/' + documentationId, documentation);
                };
                /**
                 * Remove a documentation reference of the project.
                 * @param idProject id of the project.
                 * @param id id of the documentation to remove.
                 */
                DocumentationsService.prototype.removeDocumentation = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/documentations/' + id);
                };
                return DocumentationsService;
            }());
            DocumentationsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DocumentationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DocumentationsService);
            /***/ 
        }),
        /***/ "./src/app/services/issues.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/issues.service.ts ***!
          \********************************************/
        /*! exports provided: IssuesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function () { return IssuesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var IssuesService = /** @class */ (function () {
                function IssuesService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the issues list of the project.
                 * @param idProject id of the project.
                 */
                IssuesService.prototype.getIssues = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues');
                };
                /**
                 * Add an issue to the project.
                 * @param idProject id of the project.
                 * @param issue issue to be added.
                 */
                IssuesService.prototype.addIssue = function (idProject, issue) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues', issue);
                };
                /**
                 * Edit an issue in the project.
                 * @param idProject id of the project.
                 * @param issueId id of the issue.
                 * @param issue edited issue.
                 */
                IssuesService.prototype.editIssue = function (idProject, issueId, issue) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues/' + issueId, issue);
                };
                /**
                 * Remove an issue from the project.
                 * @param idProject id of the project.
                 * @param id id of the issue to be removed.
                 */
                IssuesService.prototype.removeIssue = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues/' + id);
                };
                return IssuesService;
            }());
            IssuesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            IssuesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], IssuesService);
            /***/ 
        }),
        /***/ "./src/app/services/projet.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/projet.service.ts ***!
          \********************************************/
        /*! exports provided: ProjetService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetService", function () { return ProjetService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
            var ProjetService = /** @class */ (function () {
                function ProjetService(httpClient, userervice) {
                    this.httpClient = httpClient;
                    this.userervice = userervice;
                }
                /**
                 * Get the project list.
                 */
                ProjetService.prototype.getProjects = function () {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects');
                };
                /**
                 * Get a project.
                 * @param id id of the project.
                 */
                ProjetService.prototype.getProject = function (id) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + id);
                };
                /**
                 * Delete a project.
                 * @param id id of the project.
                 */
                ProjetService.prototype.deleteProject = function (id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + id);
                };
                /**
                 * Add a new project.
                 * @param project project to be added.
                 */
                ProjetService.prototype.addProject = function (project) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects', project);
                };
                /**
                 * Edit a project.
                 * @param idProject id of the project.
                 * @param project edited project.
                 */
                ProjetService.prototype.editProject = function (idProject, project) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject, project);
                };
                return ProjetService;
            }());
            ProjetService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            ProjetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProjetService);
            /***/ 
        }),
        /***/ "./src/app/services/releases.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/releases.service.ts ***!
          \**********************************************/
        /*! exports provided: ReleasesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesService", function () { return ReleasesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var ReleasesService = /** @class */ (function () {
                function ReleasesService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the release list of the project.
                 * @param idProject id of the project.
                 */
                ReleasesService.prototype.getReleases = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/releases');
                };
                /**
                 * Add a release to the project.
                 * @param idProject id of the project.
                 * @param release release to be added.
                 */
                ReleasesService.prototype.addRelease = function (idProject, release) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/releases', release);
                };
                /**
                 * Edit a release of the project.
                 * @param idProject id of the project.
                 * @param releaseId id of the release.
                 * @param release edited release.
                 */
                ReleasesService.prototype.editRelease = function (idProject, releaseId, release) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/releases/' + releaseId, release);
                };
                /**
                 * Remove a release from the project.
                 * @param idProject id of the project.
                 * @param id id of the release to remove.
                 */
                ReleasesService.prototype.removeRelease = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/releases/' + id);
                };
                return ReleasesService;
            }());
            ReleasesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ReleasesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ReleasesService);
            /***/ 
        }),
        /***/ "./src/app/services/sprint.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/sprint.service.ts ***!
          \********************************************/
        /*! exports provided: SprintService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintService", function () { return SprintService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var SprintService = /** @class */ (function () {
                function SprintService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the sprint list of the project.
                 * @param idProject id of the project.
                 */
                SprintService.prototype.getSprints = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints');
                };
                /**
                 * Get a sprint from the project.
                 * @param idProject id of the project.
                 * @param idSprint id of the sprint.
                 */
                SprintService.prototype.getSprint = function (idProject, idSprint) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints/' + idSprint);
                };
                /**
                 * Add a sprint to the project.
                 * @param idProject id of the project.
                 * @param sprint sprint to be added.
                 */
                SprintService.prototype.addSprint = function (idProject, sprint) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints', sprint);
                };
                /**
                 * Edit a sprint of the project.
                 * @param idProject id of the project.
                 * @param idSprint id of the sprint.
                 * @param sprint edited sprint.
                 */
                SprintService.prototype.editSprint = function (idProject, idSprint, sprint) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints/' + idSprint, sprint);
                };
                /**
                 * Remove a sprint from the project.
                 * @param idProject id of the project.
                 * @param id id of the sprint to remove.
                 */
                SprintService.prototype.removeSprint = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints/' + id);
                };
                /**
                 * Add an issue to the sprint.
                 * @param idProject id of the project.
                 * @param idSprint id of the sprint.
                 * @param idIssue id of the issue.
                 */
                SprintService.prototype.addIssueSprint = function (idProject, idSprint, idIssue) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints/' + idSprint + '/issues', idIssue);
                };
                /**
                 * Remove an issue from the project.
                 * @param idProject id of the project.
                 * @param idSprint id of the sprint.
                 * @param idIssue id of the issue.
                 */
                SprintService.prototype.removeIssue = function (idProject, idSprint, idIssue) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/sprints/' + idSprint + '/issues/' + idIssue);
                };
                return SprintService;
            }());
            SprintService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SprintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SprintService);
            /***/ 
        }),
        /***/ "./src/app/services/tasks.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/tasks.service.ts ***!
          \*******************************************/
        /*! exports provided: TasksService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function () { return TasksService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var TasksService = /** @class */ (function () {
                function TasksService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the task list of the project.
                 * @param idProject id of the project.
                 */
                TasksService.prototype.getTasks = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks');
                };
                /**
                 * Add a task to the project.
                 * @param idProject id of the project.
                 * @param task task to be added.
                 */
                TasksService.prototype.addTask = function (idProject, task) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks', task);
                };
                /**
                 * Edit a task from the project.
                 * @param idProject id of the project.
                 * @param taskId id of the task.
                 * @param task edited task.
                 */
                TasksService.prototype.editTask = function (idProject, taskId, task) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks/' + taskId, task);
                };
                /**
                 * Remove a task from the project.
                 * @param idProject id of the project.
                 * @param id id of the task to remove.
                 */
                TasksService.prototype.removeTask = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks/' + id);
                };
                return TasksService;
            }());
            TasksService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TasksService);
            /***/ 
        }),
        /***/ "./src/app/services/tests.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/tests.service.ts ***!
          \*******************************************/
        /*! exports provided: TestsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsService", function () { return TestsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var TestsService = /** @class */ (function () {
                function TestsService(httpClient) {
                    this.httpClient = httpClient;
                }
                /**
                 * Get the test list of the project.
                 * @param idProject id of the project.
                 */
                TestsService.prototype.getTests = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tests');
                };
                /**
                 * Add a test to the project.
                 * @param idProject id of the project.
                 * @param test test to be added.
                 */
                TestsService.prototype.addTest = function (idProject, test) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tests', test);
                };
                /**
                 * Edit a test from the project.
                 * @param idProject id of the project.
                 * @param testId id of the test.
                 * @param test edited test.
                 */
                TestsService.prototype.editTest = function (idProject, testId, test) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tests/' + testId, test);
                };
                /**
                 * Remove a test from the project.
                 * @param idProject id of the project.
                 * @param id id of the test to remove.
                 */
                TestsService.prototype.removeTest = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tests/' + id);
                };
                return TestsService;
            }());
            TestsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TestsService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(httpClient) {
                    this.httpClient = httpClient;
                    this.user = {
                        name: '',
                        email: '',
                        password: ''
                    };
                }
                /**
                 * Register a new user.
                 * @param user user to be added.
                 */
                UserService.prototype.postUser = function (user) {
                    return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/register', user);
                };
                /**
                 * Login a user.
                 * @param infos login credentials.
                 */
                UserService.prototype.login = function (infos) {
                    return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/login', infos);
                };
                /**
                 * Get the user list.
                 */
                UserService.prototype.getUsers = function () {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/users');
                };
                /**
                 * Logout the current user.
                 */
                UserService.prototype.logout = function () {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/logout');
                };
                /**
                 * Create a token for the current user.
                 * @param infos user parameters.
                 */
                UserService.prototype.setToken = function (infos) {
                    localStorage.setItem('userinfos', JSON.stringify({ infos: infos }));
                };
                /**
                 * Get a user.
                 * @param email email of the user.
                 */
                UserService.prototype.getUser = function (email) {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/users' + email);
                };
                /**
                 * Edit a user.
                 * @param user user to be edited.
                 */
                UserService.prototype.editUser = function (user) {
                    console.log(user);
                    return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/users/' + this.getIDOflogged(), user);
                };
                /**
                 * Get the current user dashboard.
                 */
                UserService.prototype.getDashboard = function () {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/dashboard');
                };
                /**
                 * Get the id of the current user.
                 */
                UserService.prototype.getIDOflogged = function () {
                    var user = localStorage.getItem('userinfos');
                    if (user !== null)
                        return JSON.parse(user).infos._id;
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                API_URL: 'http://localhost:3002/api'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/computeruser/Desktop/myprojectmanager-DEV/frontoffice/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map