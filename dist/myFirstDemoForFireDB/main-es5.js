function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-meeting-minutes/add-meeting-minutes.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-meeting-minutes/add-meeting-minutes.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddMeetingMinutesAddMeetingMinutesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"m-5\">\n    <div class=\"form-group\">\n        <label for=\"exampleFormControlInput1\">Meeting Minutes</label>\n        <textarea [(ngModel)]=\"createMeetingModelObject.meetingMinutes\" name=\"meetingMinutes\"\n            type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Input Meeting Minutes\" rows=\"10\">\n            </textarea>\n    </div>\n    <button (click)=\"saveMeetingMinutes()\">Save</button>\n    <button (click)=\"cancelInputingMeetingMinutes()\">Cancel</button>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdmissionsAdmissionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [hidden]=\"loggedInUserDataFromDB==null\">\n    <div [hidden]=\"loggedInUserDataFromDB.admissionApplicationReviewer!=true && loggedInUserDataFromDB.Role!='Admission'\">\n<button *ngIf=\"loggedInUserDataFromDB.Role=='Admission'\" type=\"button\" class=\"btn btn-primary float-right\" (click)=\"addStudentApplication()\">Add Application</button>\n<!--Add student admission application form-->\n<div class=\"m-5 card\">\n    <form class=\"m-5\" *ngIf=\"showAddStudentApplicationForm\">\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"\">First and last name</span>\n            </div>\n            <input required #firstName=\"ngModel\" [(ngModel)]=\"admissionsModelObject.firstName\" name=\"firstName\"\n                type=\"text\" class=\"form-control\">\n            <input required #lastName=\"ngModel\" [(ngModel)]=\"admissionsModelObject.lastName\" name=\"lastName\" type=\"text\"\n                class=\"form-control\">\n        </div>\n        <div class=\"alert alert-danger\"\n            *ngIf=\"(firstName.touched && !firstName.valid)||(lastName.touched && !lastName.valid)\">*First and last names\n            are\n            required</div>\n        <div class=\"form-group\">\n            <label for=\"exampleFormControlInput1\">Student Id</label>\n            <input required #studentId=\"ngModel\" [(ngModel)]=\"admissionsModelObject.studentId\" name=\"studentId\"\n                type=\"number\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"7 digit student Id\">\n            <div class=\"alert alert-danger\" *ngIf=\"(studentId.touched && !studentId.valid)\">*Student Id is required\n            </div>\n            <!--Use this for validating already taken student ID-->\n            <div class=\"alert alert-danger\" *ngIf=\"studentId.touched && studentIdsForValidation.includes(admissionsModelObject.studentId)\">*Student id is already taken</div>\n        </div>\n        <div class=\"form-group\">\n            <div class='row'>\n                <div class='col-md-3'>\n                    <label for=\"exampleFormControlSelect1\">GRE Verbal:</label>\n                    <select required #greVerbalScore=\"ngModel\" [(ngModel)]=\"admissionsModelObject.greVerbalScore\"\n                        name=\"greVerbalScore\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                        <option *ngFor=\"let greVerbalScore of greVerbalPossibleScore\">{{greVerbalScore}}</option>\n                    </select>\n                    <div class=\"alert alert-danger\" *ngIf=\"(greVerbalScore.touched && !greVerbalScore.valid)\">\n                        *GRE Verbal score is required\n                    </div>\n                </div>\n                <div class='col-md-3'>\n                    <label for=\"exampleFormControlSelect1\">GRE Quant:</label>\n                    <select required #greQuantScore=\"ngModel\" [(ngModel)]=\"admissionsModelObject.greQuantScore\"\n                        name=\"greQuantScore\" class=\"form-control\" id=\"exampleFormControlSelect2\">\n                        <option *ngFor=\"let greQuantScore of greVerbalPossibleScore\">{{greQuantScore}}</option>\n                    </select>\n                    <div class=\"alert alert-danger\" *ngIf=\"(greQuantScore.touched && !greQuantScore.valid)\">\n                        *GRE Quant score is required\n                    </div>\n                </div>\n                <div class='col-md-3'>\n                    <label for=\"exampleFormControlSelect1\">GRE Total:</label>\n                    <input required #greTotalScore=\"ngModel\" [(ngModel)]=\"admissionsModelObject.greTotalScore\"\n                        name=\"greTotalScore\" type=\"number\" class=\"form-control\" id=\"exampleFormControlInput2\"\n                        placeholder=\"total GRE\"\n                        [value]=\"+(admissionsModelObject.greQuantScore)++(admissionsModelObject.greVerbalScore)\">\n                    <!-- <select required #greTotalScore=\"ngModel\" [(ngModel)]=\"admissionsModelObject.greTotalScore\"\n                        name=\"greTotalScore\" class=\"form-control\" id=\"exampleFormControlSelect1\"\n                        [value]=\"+(admissionsModelObject.greQuantScore)++(admissionsModelObject.greVerbalScore)\"\n                        >\n                        <option *ngFor=\"let greTotalScore of greTotalPossibleScore\" [selected]=\"295\">{{greTotalScore}}</option>\n                    </select> -->\n                    <div class=\"alert alert-danger\"\n                        *ngIf=\"greTotalScore.valid && +(admissionsModelObject.greTotalScore)!=+(admissionsModelObject.greQuantScore)++(admissionsModelObject.greVerbalScore)\">\n                        *Invalid GRE Total. Total must be Verbal+Quant\n                    </div>\n                </div>\n                <div class='col-md-3'>\n                    <label for=\"exampleFormControlSelect1\">GRE Essay:</label>\n                    <select required #greEssayScore=\"ngModel\" [(ngModel)]=\"admissionsModelObject.greEssayScore\"\n                        name=\"greEssayScore\" class=\"form-control\" id=\"exampleFormControlSelect3\">\n                        <option *ngFor=\"let greEssayScore of greEssayPossibleScore\">{{greEssayScore}}</option>\n                    </select>\n                    <div class=\"alert alert-danger\" *ngIf=\"(greEssayScore.touched && !greEssayScore.valid)\">\n                        *GRE Essay score is required\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class='form-group'>\n            <div class='row'>\n                <div class='col-md-8'>\n                    <label>Intended Program</label>\n                    <select required #intendedProgram='ngModel' [(ngModel)]='admissionsModelObject.intendedProgram'\n                        name='intendedProgram' class=\"form-control\" id=\"exampleFormControlSelect4\">\n                        <option *ngFor=\"let intendedProgram of ['CS','CIS','IT','DS']\">{{intendedProgram}}</option>\n                    </select>\n                    <div class=\"alert alert-danger\" *ngIf=\"intendedProgram.touched && !intendedProgram.valid\">\n                        *Program is mandatory\n                    </div>\n                </div>\n                <div class='col-md-4'>\n                    <label>GPA</label>\n                    <input required #gpa=\"ngModel\" [(ngModel)]=\"admissionsModelObject.gpa\" name=\"gpa\" type=\"number\"\n                        class=\"form-control\" id=\"exampleFormControlInput3\" placeholder=\"0.00\">\n                    <div class=\"alert alert-danger\" *ngIf=\"(gpa.touched && !gpa.valid)\">*GPA is required\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class='form-group'>\n            <label>Intended Validators</label>\n            <select multiple required #intendedValidators='ngModel'\n                [(ngModel)]='admissionsModelObject.intendedValidators' name='intendedValidators' class='form-control'\n                id=\"exampleFormControlSelect5\">\n                <option *ngFor=\"let greTotalScore of greTotalPossibleScore\" [value]='greTotalScore'>{{greTotalScore}}</option>\n            </select>\n        </div> -->\n        <div>\n            <div *ngFor=\"let file of admissionsModelObject.downloadApplications ;index as i\">\n                {{i+1}}.{{file.nameOfFileAsUploaded}}: Click<a style=\"color:#0000FF;\" (click)=open(file.linkToView)>here</a> to view\n                <i (click)=deleteFile(file.uniqueNameForReference,i) class=\"far fa-times-circle\"></i>\n                <i class=\"fas fa-file-download ml-3\" (click)=downloadFile(file.uniqueNameForReference,file.linkToView,file.typeOfFile)></i>\n            </div>\n            <input type=\"file\" (change)=\"uploadFile($event)\" accept=\".pdf\">\n        </div>\n        <button\n            [disabled]=\"!firstName.valid || !lastName.valid || !studentId.valid || !greVerbalScore.valid || !greQuantScore.valid || !intendedProgram.valid || !gpa.valid || studentIdsForValidation.includes(admissionsModelObject.studentId)\"\n            class=\"btn btn-primary\" (click)=\"saveAdmissionApplication()\">Save</button>\n        <button class=\"btn\" (click)=\"cancel()\">cancel</button>\n    </form>\n</div>\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n<!--Listing Data of students-->\n<div [hidden]=\"showAddStudentApplicationForm\" class=\"container-fluid\">\n    <div class=\"container\">\n        <mat-form-field class=\"StyleForSearch\">\n          <mat-label>Search</mat-label>\n          <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. First name\">\n        </mat-form-field>\n      </div>\n    <table mat-table [dataSource]=\"applicants\" matSort class=\"datatable mat-elevation-z8 pointer\">\n\n        <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- Position Column -->\n        <ng-container hidden=\"loggedInUserDataFromDB.Role!='Admission'\" matColumnDef=\"Action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\"><button [disabled]=\"loggedInUserDataFromDB.Role!='Admission'\"><i class=\" m-2 fas fa-user-edit\"\n                    (click)=\"$event.preventDefault(); $event.stopPropagation(); editButtonClicked(element)\"></i></button>\n               <button [disabled]=\"loggedInUserDataFromDB.Role!='Admission'\"><i class=\"m-2 far fa-trash-alt\" (click)=\" $event.preventDefault(); $event.stopPropagation(); deleteApplication(element)\"></i></button> </td>\n        </ng-container>\n        <!--Date column-->\n        <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n        </ng-container>\n        <!-- studentId Column -->\n        <ng-container matColumnDef=\"studentId\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Student Id </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.studentId}} </td>\n        </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"firstName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"lastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"greVerbalScore\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Verbal </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.greVerbalScore}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"greQuantScore\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Quant </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.greQuantScore}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"greTotalScore\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Total </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.greTotalScore}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"greEssayScore\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Essay </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.greEssayScore}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"intendedProgram\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Program </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.intendedProgram}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"gpa\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> GPA </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.gpa}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr [ngClass]='row.status==\"Rejected\" ? \"styleRedBackGround\" : row.status==\"Accepted\" ? \"styleGreenBackGround\" : row.status==\"Under Review\" ? \"styleBrownBackGround\" : \"styleWhiteBackGround\"' mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getPresentStudentDetails(row)\"></tr>\n    </table>\n</div>\n</div >\n<div *ngIf=\"loggedInUserDataFromDB.Role!='Admission' && loggedInUserDataFromDB.admissionApplicationReviewer==false\">\n    <h4 style=\"color: red;\" class=\"px-4\">*You do not have access</h4>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ul>\n  <li *ngFor=\"let user of users\">\n{{user.Id}}\n  </li>\n</ul>-->\n\n<app-navigation-bar></app-navigation-bar>\n<router-outlet></router-outlet>\n<!--<app-add-meeting-minutes></app-add-meeting-minutes>-->\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-meeting/create-meeting.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-meeting/create-meeting.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateMeetingCreateMeetingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"m-5 card\">\n  <form class=\"m-5\">\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">Subject</label>\n      <input required #subject=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.subject\" name=\"subject\" type=\"text\" class=\"form-control\"\n        id=\"exampleFormControlInput1\" placeholder=\"Input subject\">\n    </div>\n    <div class=\"alert alert-danger\"\n    *ngIf=\"(subject.touched && !subject.valid)\">*Subject is required\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">Date: </label>\n      <mat-form-field>\n        <mat-label>Choose a date</mat-label>\n        <input required #date=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.date\" format=\"YYYY/MM/DD\"\n         name=\"date\" matInput [matDatepicker]=\"picker\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"alert alert-danger\"\n    *ngIf=\"(date.touched && !date.valid)\">*Date is required\n    </div>\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <label for=\"exampleFormControlSelect1\">HH:</label>\n          <select required #HH=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.HH\" name=\"HH\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n            <option *ngFor=\"let time of ['01','02','03','04','05','06','07','08','09','10','11','12']\">{{time}}</option>\n          </select>\n          <div class=\"alert alert-danger\"\n    *ngIf=\"(HH.touched && !HH.valid)\">*HH is required\n    </div>\n        </div>\n        <div class=\"col-md-3\">\n          <label for=\"exampleFormControlSelect1\">MM:</label>\n          <select required #MM=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.MM\" name=\"MM\" class=\"form-control\" id=\"exampleFormControlSelect2\">\n            <option *ngFor=\"let time of ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16\n            ','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','\n            36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54\n            ','55','56','57','58','59']\">{{time}}</option>\n          </select>\n          <div class=\"alert alert-danger\"\n    *ngIf=\"(MM.touched && !MM.valid)\">*MM is required\n    </div>\n        </div>\n        <div class=\"col-md-3\">\n          <label for=\"exampleFormControlSelect1\">AM/PM:</label>\n        <select required #noon=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.noon\" name=\"noon\" class=\"form-control\" id=\"exampleFormControlSelect3\">\n          <option *ngFor=\"let time of ['AM','PM']\">{{time}}</option>\n        </select>\n        <div class=\"alert alert-danger\"\n    *ngIf=\"(noon.touched && !noon.valid)\">*Noon is required\n    </div>\n        </div>\n        <div class=\"col-md-3\">\n          <label for=\"exampleFormControlSelect1\">Duration(in minutes):</label>\n        <select required #duration=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.duration\" name=\"duration\" class=\"form-control\" id=\"exampleFormControlSelect4\">\n          <option *ngFor=\"let time of ['30','45','60','90','120','180']\">{{time}}</option>\n        </select>\n        <div class=\"alert alert-danger\"\n    *ngIf=\"(duration.touched && !duration.valid)\">*duration is required\n    </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">Facilitated By</label>\n      <select required #facilitatedBy=\"ngModel\" [(ngModel)]=\"createMeetingModelObject.facilitatedBy\" name=\"facilitatedBy\" type=\"text\" class=\"form-control\"\n        id=\"exampleFormControlInput1\" placeholder=\"Input Facilitator\">\n        <option *ngFor=\"let chair of chairs\" [value]=\"chair\">{{chair}}</option>\n      </select>\n    </div>\n    <div class=\"alert alert-danger\"\n    *ngIf=\"(facilitatedBy.touched && !facilitatedBy.valid)\">*Facilitated by is required\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">programs: </label>\n      <div class=\"form-check form-check-inline\">\n        <input  class=\"form-check-input\" (change)=\"onCheck($event)\"\n          [(ngModel)]=\"createMeetingModelObject.inlineCheckbox1\" name=\"inlineCheckbox1\" type=\"checkbox\"\n          id=\"inlineCheckbox1\" value=\"option1\">\n        <label class=\"form-check-label\" for=\"inlineCheckbox1\">All</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\"\n          [(ngModel)]=\"createMeetingModelObject.inlineCheckbox2\" name=\"inlineCheckbox2\" type=\"checkbox\"\n          id=\"inlineCheckbox2\" value=\"option2\" [disabled]=\"disableCheckBox\">\n        <label class=\"form-check-label\" for=\"inlineCheckbox2\">CS</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\"\n          [(ngModel)]=\"createMeetingModelObject.inlineCheckbox3\" name=\"inlineCheckbox3\" type=\"checkbox\"\n          id=\"inlineCheckbox3\" value=\"option3\" [disabled]=\"disableCheckBox\">\n        <label class=\"form-check-label\" for=\"inlineCheckbox3\">CIS</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\"\n          [(ngModel)]=\"createMeetingModelObject.inlineCheckbox4\" name=\"inlineCheckbox4\" type=\"checkbox\"\n          id=\"inlineCheckbox4\" value=\"option4\" [disabled]=\"disableCheckBox\">\n        <label class=\"form-check-label\" for=\"inlineCheckbox4\">IT</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\"\n          [(ngModel)]=\"createMeetingModelObject.inlineCheckbox5\" name=\"inlineCheckbox5\" type=\"checkbox\"\n          id=\"inlineCheckbox5\" value=\"option5\" [disabled]=\"disableCheckBox\">\n        <label class=\"form-check-label\" for=\"inlineCheckbox5\">DS</label>\n      </div>\n    </div>\n    <div class=\"alert alert-danger\"\n    *ngIf=\"(!createMeetingModelObject.inlineCheckbox1 && !createMeetingModelObject.inlineCheckbox2\n    &&!createMeetingModelObject.inlineCheckbox3 && !createMeetingModelObject.inlineCheckbox4\n    && !createMeetingModelObject.inlineCheckbox5)\">*Program is required\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\"> Agenda</label>\n      <!--Looping into Agenda Main Array-->\n      <div class =\"row\" *ngFor=\"let item of items; index as j\">\n        <div class=\"col-md-9\">\n          <label for=\"exampleFormControlInput1\"> Agenda item</label>\n        <textarea required #itemId=\"ngModel\" [(ngModel)]=\"item.agenda\" name=\"{{item.id}}agenda\" type=\"text\" class=\"form-control\"\n         placeholder=\"Input Agenda\" rows=1></textarea>\n\n         <div class=\"alert alert-danger\"\n          *ngIf=\"(itemId.touched && item.agenda=='')\">*Agenda Item is required\n          </div>\n\n           <!--Looping into subAgenda Array-->\n          <div class=\"row\" *ngFor=\"let subItem of subagendaItemsarray[j];index as i\">     \n           <div class=\"container\">\n            <label class='px-3'>Sub Agenda Item</label>\n             <div class=\"d-flex px-3\">\n              <textarea [(ngModel)]=\"subItem.subAgenda\" name=\"{{j}}{{i}}subAgendaItem\" type= \"text\" class=\"form-control\" \n              placeholder=\"Input Agenda Subitem\" rows=\"1\"></textarea>\n            <div class=\"d-flex align-items-center ml-2\"> \n              <i class=\"m-2 far fa-trash-alt\" (click)=deleteSubAgendaItem(item,subItem)></i>\n              <i class=\"fas fa-plus\" (click)=addSubSubAgendaItem(item,subItem)></i>\n            </div>  \n          </div>    \n          </div>\n        \n         <!--Looping into subOfSubAgenda Array-->\n            <div  class='ml-4' *ngFor=\"let subOfSubItem of subItem.subOfSubAgendaItems;index as k\">  \n              <div class=\"container\">\n              <label class='styleForTextArea'>Sub of Sub Agenda Item</label>\n              <div class=\"d-flex\">\n              <textarea [(ngModel)]=\"subOfSubItem.subofSubAgenda\" name=\"{{j}}{{i}}{{k}}subOfSubAgendaItem\" type= \"text\" class=\"form-control \" \n              placeholder=\"Input Agenda SubofSubitem\" rows=\"1\"></textarea>\n              <div class=\"d-flex ml-2\">\n              <i class=\"m-2 far fa-trash-alt\" (click)=deleteSubOfSubAgendaItem(j,i,subOfSubItem)></i>\n              </div>\n            </div>\n            </div>\n          </div> \n          </div>\n        </div>\n         <div class=\"col-md-2\">\n         <label for=\"exampleFormControlSelect1\">Duration(in minutes):</label>\n        <select required #durationForAgendaItem=\"ngModel\" [(ngModel)]=\"item.duration\" name=\"{{item.id}}duration\" class=\"form-control\">\n          <option *ngFor=\"let time of ['05','10','15','20','25','30']\">{{time}}</option>\n        </select>\n        <!--<div class=\"alert alert-danger\"\n          *ngIf=\"(durationForAgendaItem.touched && !(durationForAgendaItem=='O5'))\">*Duration is required\n          </div>-->\n        </div>\n        <div class=\"col-md-1\">\n          <label>Action:</label>\n        <i class=\"m-2 far fa-trash-alt\" (click)=deleteAgendaItem(item)></i>\n        <i class=\"fas fa-plus\" (click)=addNewSubAgendaItem(item)></i>\n        </div>\n        </div>\n        <button (click)=newAgendaItem()>Add</button>\n        <button (click)=cancelAgendaItemInput()>Cancel</button>\n        \n    </div>\n    <button [disabled]=\"!subject.valid || !date.valid || !HH.valid || !MM.valid || !noon.valid || !facilitatedBy.valid || (!createMeetingModelObject.inlineCheckbox1 && !createMeetingModelObject.inlineCheckbox2\n    &&!createMeetingModelObject.inlineCheckbox3 && !createMeetingModelObject.inlineCheckbox4\n    && !createMeetingModelObject.inlineCheckbox5)\" class=\"btn btn-primary\" (click)=\"submitToSaveMeeting()\">Save</button>\n    <button  class=\"btn\" (click)=\"cancel()\">cancel</button>\n  </form>\n  \n</div>\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailed-admission/detailed-admission.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailed-admission/detailed-admission.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailedAdmissionDetailedAdmissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loggedInUserDataFromDB!=null\">\n<div *ngIf=\"loggedInUserDataFromDB.Role=='Admission' || loggedInUserDataFromDB.admissionApplicationReviewer==true\">\n<div  class='container-fluid' *ngIf=\"selectedStudent!=null\">\n<p><b>Student name:</b> {{selectedStudent.firstName}} {{selectedStudent.lastName}}</p>\n<p><b>Student Id:</b> {{selectedStudent.studentId}}</p>\n<p><b>GRE-verbal Score:</b> {{selectedStudent.greVerbalScore}}</p>\n<p><b>GRE-Quant Score:</b> {{selectedStudent.greQuantScore}}</p>\n<p><b>GRE-Total Score:</b> {{selectedStudent.greTotalScore}}</p>\n<p><b>GRE-Essay Score:</b> {{selectedStudent.greEssayScore}}</p>\n<p><b>Intended Program:</b> {{selectedStudent.intendedProgram}}</p>\n<p><b>GPA:</b>{{selectedStudent.gpa}}</p>\n<p><b>Status:</b> {{selectedStudent.status}}</p>\n<p><b>Files Available:</b></p>\n<p *ngFor=\"let file of selectedStudent.downloadApplications; index as i\">\n    {{i+1}}.{{file.nameOfFileAsUploaded}}: Click <a style=\"color:#0000FF;\" (click)=open(file.linkToView)>here</a> to view\n                <i class=\"fas fa-file-download ml-3\" (click)=downloadFile(file.uniqueNameForReference,file.linkToView,file.typeOfFile)></i>\n</p>\n<p>Accepts:{{selectedStudent.accepts.length}} Rejects:{{selectedStudent.rejects.length}}</p>\n\n<button *ngIf=\"loggedInUserDataFromDB.admissionApplicationReviewer==true\" (click)=\"acceptAdmission($event)\" value=\"Accept\">Accept</button><button *ngIf=\"loggedInUserDataFromDB.admissionApplicationReviewer==true\" (click)=\"rejectAdmission()\">Reject</button>\n<textarea class='row container-fluid' *ngIf=\"showCommentSection\" rows=\"4\" [(ngModel)]=\"commentText\"></textarea>\n<button *ngIf=\"showCommentSection\" class='row' (click)=\"saveComment()\">Save Comment</button>\n<div *ngIf=\"showRejectOptions\" class='form-group'>\n    <label>Rejection Reasons</label>\n    <select multiple required\n        [(ngModel)]=\"rejectionReasons\" name='rejectionReasons' class='form-control'\n        id=\"exampleFormControlSelect10\">\n        <option *ngFor=\"let reason of rejectionPossibleReasons\" [value]='reason'>{{reason}}</option>\n    </select>\n    <button (click)=\"saveRejectionReasons($event)\" value=\"Reject\">Save Reasons</button>\n</div>\n<p><b>Comments/Reasons</b></p>\n<p *ngFor=\"let comment of selectedStudent.comments\"><b>{{comment.commentedBy}}: {{comment.decision}}--> </b>{{comment.comment}}</p>\n<p *ngFor=\"let reason of selectedStudent.rejectionReasonsFromModel | keyvalue\"><b>{{reason.key}}: </b>{{reason.value}}</p>\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n<div *ngIf=\"selectedStudent==null\">\n    <h4 style=\"color: red;\" class=\"px-4\">*No Application is Selected</h4>\n</div>\n</div>\n<div *ngIf=\"loggedInUserDataFromDB.Role!='Admission' && loggedInUserDataFromDB.admissionApplicationReviewer!=true\">\n    <h4 style=\"color: red;\" class=\"px-4\">*You do not have access</h4>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailed-meeting/detailed-meeting.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailed-meeting/detailed-meeting.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailedMeetingDetailedMeetingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container-fluid' *ngIf=\"loggedInUserDataFromDB!=null && selectedMeeting!=null\">\n    <div *ngIf=\"loggedInUserDataFromDB.Role=='Chair' || loggedInUserDataFromDB.Role=='Faculty'\">\n    \n    <!--<div class=\"container\" *ngIf=\"downloadURL | async; let url\">\n        <img [src]=\"url\" alt=\"Image from AngularFireStorage\">\n      </div>-->\n      <div *ngIf=\"loggedInUserDataFromDB.Role=='Chair'\" class=\"float-right\">\n          <button [disabled]=\"selectedMeeting.finalised\" (click)=\"deleteMeeting()\">Delete Meeting</button>\n          <button [disabled]=\"selectedMeeting.finalised || editingVariable\" (click)=\"editMeeting()\">Edit Meeting</button>\n          <button [disabled]=\"selectedMeeting.finalised || !editingVariable\" (click)=\"saveChanges()\">Save Changes</button>\n      </div>\n\n    <h3>Subject:<input [(ngModel)]=\"selectedMeeting.subject\" [ngClass]=\"{styleForInput:!editingVariable || selectedMeeting.finalised}\" [readonly]=\"!editingVariable || selectedMeeting.finalised\" type=\"text\"></h3>\n    <h6>Date:<input [(ngModel)]=\"selectedMeeting.date\" [ngClass]=\"{styleForInput:!editingVariable || selectedMeeting.finalised}\" [readonly]=\"!editingVariable || selectedMeeting.finalised\" type=\"text\"></h6>\n    <h6>Time:<input [(ngModel)]=\"selectedMeeting.time\" [ngClass]=\"{styleForInput:!editingVariable || selectedMeeting.finalised}\" [readonly]=\"!editingVariable || selectedMeeting.finalised\" type=\"text\"></h6>\n    <h6>Duration:<input [(ngModel)]=\"selectedMeeting.duration\" [ngClass]=\"{styleForInput:!editingVariable || selectedMeeting.finalised}\" [readonly]=\"!editingVariable || selectedMeeting.finalised\" type=\"text\"></h6>\n    <h6>Department:{{selectedMeeting.department}}</h6>\n    <h6>Facilitated by:<input [(ngModel)]=\"selectedMeeting.facilitatedBy\" [ngClass]=\"{styleForInput:!editingVariable || selectedMeeting.finalised}\" [readonly]=\"!editingVariable || selectedMeeting.finalised\" type=\"text\"></h6>\n    <h6>Agenda List: </h6>\n    <!--Looping into AgendaList-->\n    <div *ngFor=\"let item of agendaList;index as i\">\n        <h6>{{i+1}}.{{item.agenda}}</h6>\n        <textarea *ngIf=\"item.subAgendaItems.length ==0 \"class=\"col-md-11\" width='100%' rows=\"5\"\n               [readonly]=\"loggedInUserDataFromDB.Role=='Faculty' || selectedMeeting.finalised\" name=\"{{i}}meetingMinutes\"\n               [(ngModel)]=\"item.meetingMinutes\"></textarea>\n        <!--Looping into subAgenda List-->\n        <div *ngFor=\"let subAgendaItem of item.subAgendaItems;index as j\">\n            <h6>{{i+1}}.{{j+1}}.{{subAgendaItem.subAgenda}}</h6>\n           <textarea *ngIf=\"subAgendaItem.subOfSubAgendaItems.length ==0 \"class=\"col-md-11\" width='100%' rows=\"5\"\n               [readonly]=\"loggedInUserDataFromDB.Role=='Faculty' || selectedMeeting.finalised\" name=\"{{i}}{{j}}meetingMinutes\"\n               [(ngModel)]=\"subAgendaItem.meetingMinutes\"></textarea>\n           <!-- Looping into sub of sub agendaItems-->\n           <div *ngFor=\"let subOfSubAgendaItem of subAgendaItem.subOfSubAgendaItems;index as k\">\n               <h6>{{i+1}}.{{j+1}}.{{k+1}}.{{subOfSubAgendaItem.subofSubAgenda}}</h6>\n               <textarea class=\"col-md-11\" width='100%' rows=\"5\"\n               [readonly]=\"loggedInUserDataFromDB.Role=='Faculty' || selectedMeeting.finalised\" name=\"{{i}}{{j}}{{k}}meetingMinutes\"\n               [(ngModel)]=\"subOfSubAgendaItem.meetingMinutes\"></textarea>\n           </div>\n        </div>\n       <!-- <textarea class=\"col-md-11\" width='100%' rows=\"5\"\n            [readonly]=\"loggedInUserDataFromDB.Role=='Faculty' || selectedMeeting.finalised\" name=\"{{item.id}}meetingMinutes\"\n            [(ngModel)]=\"item.meetingMinutes\"></textarea>-->\n    </div>\n    <div *ngIf=\"loggedInUserDataFromDB.Role=='Chair'\">\n        <button [disabled]=\"selectedMeeting.finalised\" (click)=showAddMeetingMinutesForm()>Save meeting minutes</button>\n        <button [disabled]=\"selectedMeeting.finalised\" (click)=saveMeetingMinutesAndSendEmail()>Save and Send Email</button>\n        <button [disabled]=\"selectedMeeting.finalised\" (click)=finaliseMeetingMinutes() class=\"btn btn-primary\">Finalise</button>\n    </div>\n        <h6>Approvals:{{selectedMeeting.approvals.length}} Rejects:{{selectedMeeting.rejects.length}}</h6>\n        <h5>Comment section:</h5>\n        <div *ngFor=\"let item of selectedMeeting.comments; index as i \">\n            <p>{{i+1}}. {{item}} </p>\n\n        </div>\n    \n    <div *ngIf=\"loggedInUserDataFromDB.Role=='Faculty'\">\n        <div>\n        <button (click)=approveButtonClicked()>Approve</button>\n        <button (click)=rejectButtonClicked()>Reject</button>\n    </div>\n        <textarea [(ngModel)]=\"comment\" *ngIf=\"rejectClicked\" class=\"col-md-10\" rows=\"2\" placeholder=\"Input Comment\"></textarea>\n    </div>\n    <div *ngIf=\"rejectClicked\">\n        <button (click)=cancelCommentSection()>Cancel</button>\n        <button (click)=saveComment()>Done</button>\n    </div>\n    <div *ngIf=\"loggedInUserDataFromDB.Role=='Chair'\">\n        <h6>Attendance:</h6>\n         <!-- <p-multiSelect [options]=\"usersForAttendance\" [(ngModel)]=\"selectedMeeting.attendees\" [filter]=\"true\" [panelStyle]=\"{minWidth:'12em'}\">\n            <ng-template let-attendees pTemplate=\"selectedItems\"> -->\n                <!--<span *ngFor=\"let selectedUser of attendees\">{{userForAttendance.firstName}}</span>-->\n            <!-- </ng-template>\n            <ng-template let-userForAttendance let-i=\"index\" pTemplate=\"item\">\n                {{i}}\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{userForAttendance.lastName}}</div>\n            </ng-template>\n        </p-multiSelect>\n        <p>Attendees: {{selectedMeeting.attendees}}</p>-->\n        <mat-form-field>\n            <mat-label>Attendance</mat-label>\n            <mat-select [formControl]=\"attendance\" multiple [(ngModel)]=\"selectedMeeting.attendees\">\n                <mat-option  (click)=selectingAllForAttendance() [value]='isempty'>SelectAll</mat-option>\n              <mat-option  *ngFor=\"let selectedUser of dataForAttendance;index as i\" [value]='selectedUser.emailId'>{{selectedUser.firstName}} {{selectedUser.lastName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <button [disabled]=\"selectedMeeting.finalised\" (click)=updatingAttendanceToDataBase()>Save Attendance</button>\n          <h6>Attendees:</h6>\n          <p *ngFor=\"let attendee of selectedMeeting.attendees ; index as i\">{{i+1}}. {{attendee}}</p>\n          <!-----------------------------------------------\n          <ng-multiselect-dropdown-angular7 \n          [data]=\"dataForAttendance\" \n          [(ngModel)]=\"selectedMeeting.attendees\" \n          [settings]=\"dropDownSettings\"\n          (onSelect)=\"onItemSelect($event)\"\n          (onSelectAll)=\"onSelectAll($event)\">\n\n            </ng-multiselect-dropdown-angular7>-->\n              \n          \n          <!--<p-multiSelect [options]=\"dataForAttendance\" [(ngModel)]=\"selectedMeeting.attendees\" [panelStyle]=\"{minWidth:'12em'}\">\n            <ng-template let-value pTemplate=\"selectedItems\">\n                <div *ngFor=\"let val of value\" class=\"ui-multiselected-item-token ui-corner-all\">\n                    <span>{{val}}</span>\n                </div>\n                <span *ngIf=\"!value || value.length === 0\" class=\"ui-multiselected-empty-token ui-corner-all\">Choose</span>\n            </ng-template>\n            <ng-template let-car pTemplate=\"item\">\n                <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"width:24px;vertical-align:middle\" />\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{car.label}}</div>\n            </ng-template>\n        </p-multiSelect>\n        <p>Selected Cars: {{selectedMeeting.attendees}}</p>-->\n    </div>\n    <h5>Files available:</h5>\n    <!-- <div *ngFor=\"let file of selectedMeeting.downloadFiles | keyvalue ;index as i\">\n    {{i+1}}.{{file.key}}: Click <a href=\"#\" (click)=open(file.value)>here</a> to view\n    <i (click)=deleteFile(file.key,i) class=\"far fa-times-circle\"></i>\n    </div> -->\n    <div *ngFor=\"let file of selectedMeeting.downloadFiles ;index as i\">\n        {{i+1}}.{{file.uniqueNameForReference}}: Click <a style=\"color:#0000FF;\" (click)=open(file.linkToView)>here</a> to view\n        <i *ngIf=\"loggedInUserDataFromDB.Role=='Chair'\" (click)=deleteFile(file.uniqueNameForReference,i) class=\"far fa-times-circle\"></i>\n        <i class=\"fas fa-file-download ml-3\" (click)=downloadFile(file.uniqueNameForReference,file.linkToView,file.typeOfFile)></i>\n        </div>\n    <input *ngIf=\"loggedInUserDataFromDB.Role=='Chair'\" type=\"file\" (change)=\"uploadFile($event)\" accept=\".txt,.pdf,.doc,.docx\">\n</div>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n\n</div>\n<div *ngIf=\"loggedInUserDataFromDB!=null && loggedInUserDataFromDB.Role=='Admin'\">\n    <h4 style=\"color: red;\" class=\"px-4\">*You do not have access</h4>\n  </div>\n<div *ngIf=\"loggedInUserDataFromDB!=null && (loggedInUserDataFromDB.Role=='Chair' || loggedInUserDataFromDB.Role=='Faculty') && selectedMeeting==null\">\n    <h4 style=\"color: red;\" class=\"px-4\">*No meeting is selected</h4>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-component/home-component.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-component/home-component.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentHomeComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='ml-4' *ngIf=\"loggedInUserDataFromDB!=null\">\n<h1 style=\"text-align: center; font-family: cursive;\" *ngIf=\"loggedInUserDataFromDB.Role=='Admin' || loggedInUserDataFromDB.Role=='Faculty' || loggedInUserDataFromDB.Role=='Chair' || loggedInUserDataFromDB.Role=='Admission'\">Welcome to UHCL-CSE Portal</h1>\n<h6 style=\"color: red; text-align: center; font-style: italic;\" *ngIf=\"loggedInUserDataFromDB.Role!='Admin' && loggedInUserDataFromDB.Role!='Faculty' && loggedInUserDataFromDB.Role!='Chair' && loggedInUserDataFromDB.Role!='Admission'\"> *You are an Unauthorized user please logout of the application</h6>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/meetings-list/meetings-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meetings-list/meetings-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMeetingsListMeetingsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [hidden]=\"loggedInUserDataFromDB==null\">\n  <div [hidden]=\"loggedInUserDataFromDB.Role!='Chair' && loggedInUserDataFromDB.Role!='Faculty'\">\n<button *ngIf=\"loggedInUserDataFromDB.Role=='Chair'\"type=\"button\" class=\"btn btn-primary float-right\" (click)=\"createMeeting()\">Create Meeting</button>\n\n<div class=\"container-fluid\">\n  <div class=\"container\">\n  <mat-form-field class=\"StyleForSearch\">\n    <mat-label >Search</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Subject\">\n  </mat-form-field>\n</div>\n    <table mat-table [dataSource]=\"meetings\" matSort class=\"datatable mat-elevation-z8 pointer\">\n  \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n    \n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"Subject\">\n        <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> Subject </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.subject}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"Date\">\n        <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Time\">\n        <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> Time </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.time}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Duration\">\n        <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> Duration(in minutes) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.duration}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"Department\">\n        <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> programs </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"facilitatedBy\">\n          <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> Facilitated by </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.facilitatedBy}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"AgendaList\">\n          <th class=\"text-center\" mat-header-cell *matHeaderCellDef mat-sort-header> Agenda List </th>\n          <td mat-cell *matCellDef=\"let element\"> <a class=\"badge badge-primary\" type=\"text\" label=\"Basic\" (mouseover)=\"agendaList = element.agendaList;op.toggle($event)\" (mouseout)=\"op.toggle($event)\">Hover Here</a>\n           <!--<h6 *ngFor=\"let item of element.agendaList;index as i\">{{i+1}}.{{item}}</h6></td>-->\n        </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getMeeting(row)\"></tr>\n    </table> \n  </div>\n  <!--<h6 *ngFor=\"let item of element.agendaList\">{{item.id}}.{{item.agenda}} </h6>-->\n  <p-overlayPanel #op>\n    <h6 *ngFor=\"let item of agendaList;index as i\">{{i+1}}.{{item}}</h6>\n</p-overlayPanel>\n</div>\n\n<div *ngIf=\"loggedInUserDataFromDB.Role=='Admin' || loggedInUserDataFromDB.Role=='Admission'\">\n  <h4 style=\"color: red;\" class=\"px-4\">*You do not have access</h4>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationBarNavigationBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> \n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li style=\"font-family: cursive;\" class=\"nav-item \" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <div  *ngIf=\"loggedInUserDataFromDB!=null\">\n        <li style=\"font-family: cursive;\" *ngIf=\"loggedInUserDataFromDB.Role=='Admin' \" class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"/Users\">Users</a>\n        </li>\n      </div>\n      <div  *ngIf=\"loggedInUserDataFromDB!=null\">\n        <li style=\"font-family: cursive;\" *ngIf=\"loggedInUserDataFromDB.Role=='Faculty' || loggedInUserDataFromDB.Role=='Chair'\" class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"/MeetingsList\">Meetings</a>\n        </li>\n      </div>\n      <div  *ngIf=\"loggedInUserDataFromDB!=null\">\n        <li style=\"font-family: cursive;\" *ngIf=\"loggedInUserDataFromDB.Role=='Admission' || loggedInUserDataFromDB.admissionApplicationReviewer==true\" class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" routerLink=\"/Admissions\">Admissions</a>\n        </li>\n      </div>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <div  *ngIf=\"loggedInUserDataFromDB!=null\">\n        <h6 style=\"font-family: cursive; font-weight: bold;\">{{loggedInUserDataFromDB.firstName}} {{loggedInUserDataFromDB.lastName}}: {{loggedInUserDataFromDB.Role}} </h6>\n      </div>\n        <button (click)=logout() class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">logout</button>\n      </form>\n    </div>\n  </nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/noaccess/noaccess.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noaccess/noaccess.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNoaccessNoaccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h5>*Unauthorized to view this page</h5>\n<h5>*Unauthorized to view this page</h5>\n<h5>*Unauthorized to view this page</h5>\n<h5>*Unauthorized to view this page</h5>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]='loggedInUserDataFromDB!=null ? \"visible\": \"hidden\" '>\n<div [hidden]=\"loggedInUserDataFromDB.Role!='Admin'\">\n<button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"addUser()\">Add user</button>\n\n<!--<div class=\"card\" style=\"width: 38rem;\" *ngFor=\"let user of users\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">{{user.firstName}} {{user.lastName}} {{user.department}} {{user.Role}}\n       <! <popup>\"Are you sure?</popup>->\n        <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"deleteUser(user)\">Delete user</button>\n        <button class=\"btn float-right\" (click)=\"editButtonClicked(user)\">Edit</button>\n      </li> \n    </ul>\n  </div>-->\n<div [hidden]=\"showAddUserForm\" class=\"container-fluid\">\n  <div class=\"container\">\n    <mat-form-field class=\"StyleForSearch\">\n      <mat-label>Search</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. First name\">\n    </mat-form-field>\n  </div>\n\n  <table mat-table [dataSource]=\"users\" matSort class=\"datatable mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"Action\">\n      <th mat-header-cell *matHeaderCellDef > Action </th>\n      <td mat-cell *matCellDef=\"let element\"> <i class=\" m-2 fas fa-user-edit\" (click)=\"editButtonClicked(element)\"></i>\n        <i class=\"m-2 far fa-trash-alt\" (click)=\"deleteUser(element)\"></i></td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"firstName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"lastName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"Role\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Role </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Role}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"emailId\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email Id </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.emailId}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"department\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Program </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n\n\n<!--Create User Form-->\n<div class=\"m-5 card\">\n  <form class=\"m-5\" *ngIf=\"showAddUserForm\" #userForm=\"ngForm\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"\">First and last name</span>\n      </div>\n      <input required #firstName=\"ngModel\" [(ngModel)]=\"addUserObject.firstName\" name=\"firstName\" type=\"text\"\n        class=\"form-control\">\n      <input required #lastName=\"ngModel\" [(ngModel)]=\"addUserObject.lastName\" name=\"lastName\" type=\"text\"\n        class=\"form-control\">\n    </div>\n    <div class=\"alert alert-danger\"\n      *ngIf=\"(firstName.touched && !firstName.valid)||(lastName.touched && !lastName.valid)\">*First and last names are\n      required</div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">Email address</label>\n      <input required #email=\"ngModel\" [(ngModel)]=\"addUserObject.email\" name=\"email\" type=\"email\" class=\"form-control\"\n        id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n      <div class=\"alert alert-danger\" *ngIf=\"(email.touched && !email.valid)\">*Email Id is required</div>\n     <!-- <div *ngFor=\"let emailIterator of usersEmailIdsForValidation\">\n      <div class=\"alert alert-danger\" *ngIf=\"emailIterator==addUserObject.email\">*Email id is already taken</div>\n    </div>-->\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && usersEmailIdsForValidation.includes(addUserObject.email)\">*Email id is already taken</div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect1\">Role</label>\n      <select required #role=\"ngModel\" [(ngModel)]=\"addUserObject.role\" name=\"role\" class=\"form-control\"\n        id=\"exampleFormControlSelect1\">\n        <option *ngFor=\"let role of roles\">{{role}}</option>\n      </select>\n      <div class=\"alert alert-danger\" *ngIf=\"(role.touched && !role.valid)\">*Role is required</div>\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [(ngModel)]=\"addUserObject.admissionApplicationReviewer\" name=\"admissionApplicationReviewer\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check if User is a Admission Application Reviewer</label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect1\">Department</label>\n      <select required #department=\"ngModel\" [(ngModel)]=\"addUserObject.department\" name=\"department\"\n        class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option *ngFor=\"let department of departments\">{{department}}</option>\n      </select>\n      <div class=\"alert alert-danger\" *ngIf=\"(department.touched && !department.valid)\">*Department is required</div>\n    </div>\n    <button [disabled]=\"!firstName.valid || !lastName.valid || !email.valid || !role.valid || !department.valid || (email.touched && usersEmailIdsForValidation.includes(addUserObject.email))\" *ngIf=\"showAddUserForm\" class=\"btn btn-primary\" (click)=\"submitToSaveUser()\">Save</button>\n    <button *ngIf=\"showAddUserForm\" class=\"btn\" (click)=\"cancel()\">cancel</button>\n  </form>\n  <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n</div>\n\n<!--Throwing Error Message if user hardcode's link in the google url tab-->\n<div *ngIf=\"loggedInUserDataFromDB.Role=='Faculty' || loggedInUserDataFromDB.Role=='Chair'\">\n  <h4 style=\"color: red;\" class=\"px-4\">*You do not have access</h4>\n</div>\n</div>\n<!--\n      [disabled]=\"firstName.valid||lastName.valid||email.valid||role.valid||department.valid\"\n    Update user form\n  <form *ngIf=\"showUpdateUserForm\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"\">First and last name</span>\n        </div>\n        <input [(ngModel)]=\"updateUserObject.firstName\" name= \"firstName\"type=\"text\" class=\"form-control\">\n        <input [(ngModel)]=\"updateUserObject.lastName\" name= \"lastName\" type=\"text\" class=\"form-control\">\n      </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">Email address</label>\n      <input [(ngModel)] =\"updateUserObject.email\" name= \"email\" type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlSelect1\">Role</label>\n      <select [(ngModel)]=\"updateUserObject.role\" name= \"role\"class=\"form-control\" id=\"exampleFormControlSelect1\">\n        <option>Chair</option>\n        <option>Faculty</option>\n        <option>Admin</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Department</label>\n        <select [(ngModel)]=\"updateUserObject.department\" name= \"department\"class=\"form-control\" id=\"exampleFormControlSelect1\">\n          <option>CS</option>\n          <option>CIS</option>\n          <option>IT</option>\n          <option>DS</option>\n        </select>\n      </div>\n  </form>\n  <button *ngIf=\"showUpdateUserForm\" class=\"btn btn-primary\"(click)=\"updateButtonClicked()\">Update</button>\n-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Models/AdmissionsModel.ts":
  /*!*******************************************!*\
    !*** ./src/app/Models/AdmissionsModel.ts ***!
    \*******************************************/

  /*! exports provided: AdmissionsModel */

  /***/
  function srcAppModelsAdmissionsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionsModel", function () {
      return AdmissionsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AdmissionsModel = function AdmissionsModel() {
      _classCallCheck(this, AdmissionsModel);

      this.intendedValidators = [];
      this.downloadApplications = [];
      this.accepts = [];
      this.rejects = [];
      this.comments = [];
      this.rejectionReasonsFromModel = {};
    };
    /***/

  },

  /***/
  "./src/app/Models/CreateMeetingModel.ts":
  /*!**********************************************!*\
    !*** ./src/app/Models/CreateMeetingModel.ts ***!
    \**********************************************/

  /*! exports provided: CreateMeetingModel */

  /***/
  function srcAppModelsCreateMeetingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateMeetingModel", function () {
      return CreateMeetingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CreateMeetingModel = function CreateMeetingModel() {
      _classCallCheck(this, CreateMeetingModel);

      this.departmentList = [];
      this.comments = [];
      this.attendees = []; //downloadFiles:any;

      this.downloadFiles = [{
        uniqueNameForReference: "",
        linkToView: "",
        typeOfFile: ""
      }];
    };
    /***/

  },

  /***/
  "./src/app/Models/User.ts":
  /*!********************************!*\
    !*** ./src/app/Models/User.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);

      this.admissionApplicationReviewer = false;
    };
    /***/

  },

  /***/
  "./src/app/Services/admissions.service.ts":
  /*!************************************************!*\
    !*** ./src/app/Services/admissions.service.ts ***!
    \************************************************/

  /*! exports provided: AdmissionsService */

  /***/
  function srcAppServicesAdmissionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionsService", function () {
      return AdmissionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AdmissionsService =
    /*#__PURE__*/
    function () {
      function AdmissionsService() {
        _classCallCheck(this, AdmissionsService);

        this.selectedStudentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(AdmissionsService, [{
        key: "setDataFromAdmissionsList",
        value: function setDataFromAdmissionsList(selectedStudent) {
          this.selectedStudent = selectedStudent; //opening and putting data
          //console.log(this.selectedMeeting);

          this.selectedStudentSubject.next(this.selectedStudent);
        }
      }, {
        key: "getSelectedStudentObj",
        value: function getSelectedStudentObj() {
          //broadcasting where ever opening is find.
          return this.selectedStudentSubject.asObservable();
        }
      }]);

      return AdmissionsService;
    }();

    AdmissionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdmissionsService);
    /***/
  },

  /***/
  "./src/app/Services/authorization-service.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Services/authorization-service.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthorizationServiceService */

  /***/
  function srcAppServicesAuthorizationServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationServiceService", function () {
      return AuthorizationServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthorizationServiceService =
    /*#__PURE__*/
    function () {
      function AuthorizationServiceService() {
        _classCallCheck(this, AuthorizationServiceService);

        this.loggedInUser = null;
        this.loggedInUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(AuthorizationServiceService, [{
        key: "setUserFromAppComponent",
        value: function setUserFromAppComponent(loggedInUser) {
          this.loggedInUser = loggedInUser; //console.log("from Auth service",this.loggedInUser);

          this.loggedInUserSubject.next(this.loggedInUser);
        }
      }, {
        key: "getUserFromAuthorizationServiceObj",
        value: function getUserFromAuthorizationServiceObj() {
          return this.loggedInUserSubject.asObservable();
        }
      }]);

      return AuthorizationServiceService;
    }();

    AuthorizationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthorizationServiceService);
    /***/
  },

  /***/
  "./src/app/Services/file.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Services/file.service.ts ***!
    \******************************************/

  /*! exports provided: FileService */

  /***/
  function srcAppServicesFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileService", function () {
      return FileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var FileService =
    /*#__PURE__*/
    function () {
      function FileService(http) {
        _classCallCheck(this, FileService);

        this.http = http;
      }

      _createClass(FileService, [{
        key: "setHttpRequestToDownloadFile",
        value: function setHttpRequestToDownloadFile(uniqueNameForReference, linkToView, typeOfFile) {
          console.log(typeOfFile);
          this.http.get(linkToView, {
            responseType: 'blob'
          }).subscribe(function (data) {
            var blob = new Blob([data], {
              type: typeOfFile
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, uniqueNameForReference);
          });
        }
      }]);

      return FileService;
    }();

    FileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], FileService);
    /***/
  },

  /***/
  "./src/app/Services/meeting.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Services/meeting.service.ts ***!
    \*********************************************/

  /*! exports provided: MeetingService */

  /***/
  function srcAppServicesMeetingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingService", function () {
      return MeetingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MeetingService =
    /*#__PURE__*/
    function () {
      //this is something like a pipe.
      function MeetingService() {
        _classCallCheck(this, MeetingService);

        this.selectedMeetingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.selectedMeetingSubjectForEditingMeeting = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(MeetingService, [{
        key: "setDataFromMeetingList",
        value: function setDataFromMeetingList(selectedMeeting) {
          this.selectedMeeting = selectedMeeting; //opening and putting data
          //console.log(this.selectedMeeting);

          this.selectedMeetingSubject.next(this.selectedMeeting);
          this.selectedMeetingSubjectForEditingMeeting.next(this.selectedMeeting);
        }
      }, {
        key: "getSelectedMeetingObj",
        value: function getSelectedMeetingObj() {
          //broadcasting where ever opening is find.
          return this.selectedMeetingSubject.asObservable();
        }
      }, {
        key: "getSelectedMeetingObjForEditingMeeting",
        value: function getSelectedMeetingObjForEditingMeeting() {
          return this.selectedMeetingSubjectForEditingMeeting.asObservable();
        }
      }]);

      return MeetingService;
    }();

    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MeetingService);
    /***/
  },

  /***/
  "./src/app/add-meeting-minutes/add-meeting-minutes.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/add-meeting-minutes/add-meeting-minutes.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddMeetingMinutesAddMeetingMinutesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tZWV0aW5nLW1pbnV0ZXMvYWRkLW1lZXRpbmctbWludXRlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/add-meeting-minutes/add-meeting-minutes.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/add-meeting-minutes/add-meeting-minutes.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddMeetingMinutesComponent */

  /***/
  function srcAppAddMeetingMinutesAddMeetingMinutesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMeetingMinutesComponent", function () {
      return AddMeetingMinutesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Models/CreateMeetingModel */
    "./src/app/Models/CreateMeetingModel.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_meeting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/meeting.service */
    "./src/app/Services/meeting.service.ts");

    var AddMeetingMinutesComponent =
    /*#__PURE__*/
    function () {
      function AddMeetingMinutesComponent(db, route, meetingService) {
        _classCallCheck(this, AddMeetingMinutesComponent);

        this.db = db;
        this.route = route;
        this.meetingService = meetingService;
        this.createMeetingModelObject = new _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_2__["CreateMeetingModel"]();
      }

      _createClass(AddMeetingMinutesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.meetingService.getSelectedMeetingObj().subscribe(function (data) {
            _this.selectedMeeting = data;
            console.log(_this.selectedMeeting);
          });
        }
      }, {
        key: "saveMeetingMinutes",
        value: function saveMeetingMinutes() {
          //this.db.collection("AgendaList").doc(this.selectedMeeting.documentIdOfAgendaListCollection).update({whmeetingMinutes:this.createMeetingModelObject.meetingMinutes}).then(error => console.log(error));
          this.route.navigate(['DetailedMeeting']);
        }
      }, {
        key: "cancelInputingMeetingMinutes",
        value: function cancelInputingMeetingMinutes() {
          this.route.navigate(['DetailedMeeting']);
        }
      }]);

      return AddMeetingMinutesComponent;
    }();

    AddMeetingMinutesComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _Services_meeting_service__WEBPACK_IMPORTED_MODULE_5__["MeetingService"]
      }];
    };

    AddMeetingMinutesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-meeting-minutes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-meeting-minutes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-meeting-minutes/add-meeting-minutes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-meeting-minutes.component.css */
      "./src/app/add-meeting-minutes/add-meeting-minutes.component.css")).default]
    })], AddMeetingMinutesComponent);
    /***/
  },

  /***/
  "./src/app/admissions/admissions.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/admissions/admissions.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdmissionsAdmissionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".datatable{\n    width:100%;\n}\n.StyleForSearch{\n    width:100%;\n}\nth.mat-sort-header-sorted {\n    color: black;\n  }\n.styleRedBackGround{\n      background-color: #ffcccb;\n      \n  }\n.styleGreenBackGround{\n      background-color: lightgreen;\n  }\n.styleBrownBackGround{\n      background-color: #fed8b1;\n  }\n.styleWhiteBackGround{\n      background-color: white;\n  }\n.pointer {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNzaW9ucy9hZG1pc3Npb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtFQUNkO0FBQ0E7TUFDSSx5QkFBeUI7O0VBRTdCO0FBQ0E7TUFDSSw0QkFBNEI7RUFDaEM7QUFDQTtNQUNJLHlCQUF5QjtFQUM3QjtBQUNBO01BQ0ksdUJBQXVCO0VBQzNCO0FBQ0E7SUFDRSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaXNzaW9ucy9hZG1pc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG59XG4uU3R5bGVGb3JTZWFyY2h7XG4gICAgd2lkdGg6MTAwJTtcbn1cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuc3R5bGVSZWRCYWNrR3JvdW5ke1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NjYjtcbiAgICAgIFxuICB9XG4gIC5zdHlsZUdyZWVuQmFja0dyb3VuZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gIH1cbiAgLnN0eWxlQnJvd25CYWNrR3JvdW5ke1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDhiMTtcbiAgfVxuICAuc3R5bGVXaGl0ZUJhY2tHcm91bmR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAucG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admissions/admissions.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/admissions/admissions.component.ts ***!
    \****************************************************/

  /*! exports provided: AdmissionsComponent */

  /***/
  function srcAppAdmissionsAdmissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionsComponent", function () {
      return AdmissionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Models_AdmissionsModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/AdmissionsModel */
    "./src/app/Models/AdmissionsModel.ts");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _Services_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Services/file.service */
    "./src/app/Services/file.service.ts");
    /* harmony import */


    var _Services_admissions_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../Services/admissions.service */
    "./src/app/Services/admissions.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AdmissionsComponent =
    /*#__PURE__*/
    function () {
      function AdmissionsComponent(db, authorizationService, storage, confirmationService, fileService, admissionsService, route, datePipe) {
        var _this2 = this;

        _classCallCheck(this, AdmissionsComponent);

        this.db = db;
        this.authorizationService = authorizationService;
        this.storage = storage;
        this.confirmationService = confirmationService;
        this.fileService = fileService;
        this.admissionsService = admissionsService;
        this.route = route;
        this.datePipe = datePipe;
        this.admissionsModelObject = new _Models_AdmissionsModel__WEBPACK_IMPORTED_MODULE_4__["AdmissionsModel"]();
        this.greVerbalPossibleScore = [];
        this.greTotalPossibleScore = [];
        this.greEssayPossibleScore = [];
        this.loggedInUserDataFromDB = {};
        this.studentIdsForValidation = [];
        this.displayedColumns = ['Action', 'studentId', 'firstName', 'lastName', 'greVerbalScore', 'greQuantScore', 'greTotalScore', 'greEssayScore', 'intendedProgram', 'gpa', 'status', 'date'];
        this.showAddStudentApplicationForm = false;

        for (var i = 130; i < 171; i++) {
          this.greVerbalPossibleScore.push(i);
          this.greTotalPossibleScore.push(i + 130);
        }

        for (var j = 0; j < 6.5; j = j + 0.5) {
          this.greEssayPossibleScore.push(j);
        }

        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          if (data != null) {
            _this2.loggedInUserDataFromDB = data;
          } //console.log("in nav bar",this.loggedInUserDataFromDB);

        });
        this.db.collection("Admissions").valueChanges().subscribe(function (snap) {
          //snap=snap.orderBy("date");
          _this2.applicants = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](snap);
          _this2.applicants.sort = _this2.sort;

          for (var _i = 0; _i < snap.length; _i++) {
            _this2.studentIdsForValidation.push(snap[_i]['studentId']);
          }
        });
      }

      _createClass(AdmissionsComponent, [{
        key: "addStudentApplication",
        value: function addStudentApplication() {
          this.showAddStudentApplicationForm = true;
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this3 = this;

          console.log(event.target.files[0]);
          var timeStamp = Math.floor(Date.now() / 1000).toString(20);
          var randomId = Math.random().toString(36).substring(2);
          randomId = randomId + timeStamp; // randomId=randomId+

          this.storage.upload(randomId, event.target.files[0]).snapshotChanges().subscribe(function (data) {
            //console.log("console.log",data);
            _this3.storage.ref(randomId).getDownloadURL().subscribe(function (data) {
              if (data != null) {
                var downloadUrl = data; //this.selectedMeeting.downloadFiles[randomId]=downloadUrl;
                //console.log(this.selectedMeeting.downloadFiles);

                _this3.admissionsModelObject.downloadApplications.push({
                  uniqueNameForReference: randomId,
                  linkToView: downloadUrl,
                  nameOfFileAsUploaded: event.target.files[0].name,
                  typeOfFile: event.target.files[0].type
                });
              }
            });
          });
        }
      }, {
        key: "open",
        value: function open(url) {
          window.open(url, "_blank");
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(ref1, i) {
          var _this4 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this File?',
            header: ref1,
            accept: function accept() {
              //console.log(ref1,i);
              var deleteRef = _this4.storage.ref(ref1); // Delete the file


              deleteRef.delete(); //this.selectedMeeting.downloadFiles.
              //const index: number = this.selectedMeeting.downloadFiles.indexOf(ref1);

              if (i !== -1) {
                _this4.admissionsModelObject.downloadApplications.splice(i, 1);
              } //this.db.collection("Meetings").doc(this.selectedMeeting.documentIdOfCurrentMeeting).update({ downloadFiles: this.selectedMeeting.downloadFiles });

            }
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(uniqueNameForReference, linkToView, typeOfFile) {
          this.fileService.setHttpRequestToDownloadFile(uniqueNameForReference, linkToView, typeOfFile);
        }
      }, {
        key: "saveAdmissionApplication",
        value: function saveAdmissionApplication() {
          //console.log(typeof(this.admissionsModelObject.studentId));
          this.admissionsModelObject.greTotalScore = +this.admissionsModelObject.greVerbalScore + +this.admissionsModelObject.greQuantScore;
          var MMddyyyy = this.datePipe.transform(new Date(), "MM-dd-yyyy");
          console.log(MMddyyyy);
          this.db.collection('Admissions').doc("".concat(this.admissionsModelObject.studentId)).set({
            date: MMddyyyy,
            firstName: this.admissionsModelObject.firstName,
            lastName: this.admissionsModelObject.lastName,
            studentId: this.admissionsModelObject.studentId,
            greVerbalScore: this.admissionsModelObject.greVerbalScore,
            greQuantScore: this.admissionsModelObject.greQuantScore,
            greTotalScore: "".concat(this.admissionsModelObject.greTotalScore),
            greEssayScore: this.admissionsModelObject.greEssayScore,
            intendedProgram: this.admissionsModelObject.intendedProgram,
            gpa: this.admissionsModelObject.gpa,
            //intendedValidators:this.admissionsModelObject.intendedValidators,
            uploadedBy: this.loggedInUserDataFromDB.emailId,
            accepts: this.admissionsModelObject.accepts,
            rejects: this.admissionsModelObject.rejects,
            comments: [],
            status: "Sent for Review",
            rejectionReasonsFromModel: {},
            downloadApplications: this.admissionsModelObject.downloadApplications
          });
          this.showAddStudentApplicationForm = false;
          this.admissionsModelObject = new _Models_AdmissionsModel__WEBPACK_IMPORTED_MODULE_4__["AdmissionsModel"]();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.showAddStudentApplicationForm = false;
          this.admissionsModelObject = new _Models_AdmissionsModel__WEBPACK_IMPORTED_MODULE_4__["AdmissionsModel"]();
        }
      }, {
        key: "editButtonClicked",
        value: function editButtonClicked(element) {
          this.editClicked = true;
          this.tempStudent = element;
          this.admissionsModelObject = element; //this.admissionsModelObject.intendedValidators.setValue(element.intendedValidators);

          this.showAddStudentApplicationForm = true;
        }
      }, {
        key: "deleteApplication",
        value: function deleteApplication(element) {
          var _this5 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this Student Application?',
            header: "".concat(element.studentId),
            accept: function accept() {
              _this5.db.collection('Admissions').doc("".concat(element.studentId)).delete().then(function () {
                console.log("Document Successfull deleted!");
              }).catch(function (error) {
                console.error("Error removing document:", error);
              });
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.applicants.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getPresentStudentDetails",
        value: function getPresentStudentDetails(presentStudent) {
          this.admissionsService.setDataFromAdmissionsList(presentStudent);
          this.route.navigate(['DetailedAdmission']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//this.applicants.sort = this.sort;
        }
      }]);

      return AdmissionsComponent;
    }();

    AdmissionsComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationServiceService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]
      }, {
        type: _Services_file_service__WEBPACK_IMPORTED_MODULE_9__["FileService"]
      }, {
        type: _Services_admissions_service__WEBPACK_IMPORTED_MODULE_10__["AdmissionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      static: true
    })], AdmissionsComponent.prototype, "sort", void 0);
    AdmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-admissions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admissions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admissions.component.css */
      "./src/app/admissions/admissions.component.css")).default]
    })], AdmissionsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/dist/index.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      // firebase.auth().getRedirectResult()
      // .then(function(result) {
      //   // User is signed in.
      //   console.log(result.additionalUserInfo.profile)
      //   // OAuth access token can also be retrieved:
      //   // result.credential.accessToken
      //   // OAuth ID token can also be retrieved:
      //   // result.credential.idToken
      // })
      // .catch(function(error) {
      //   // Handle error.
      // });
      function AppComponent(auth, msService, authservice, db, authorizationService) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.msService = msService;
        this.authservice = authservice;
        this.db = db;
        this.authorizationService = authorizationService;
        this.user = null;
        this.userEmailThroughWhichHeIsLoggedIn = null;
        this.title = 'UHCL_CSE_PORTAL';
        this.userDetailsFromDb = null; //console.log(this.authservice.getUser());
        //console.log(this.authservice.getAllUsers());

        this.msService.subscribe("msal:loginSuccess", function (payload) {//console.log(payload);
          // do something here
        });
        this.msService.subscribe("msal:loginFailure", function (payload) {//console.log(payload);
          // do something here
        });
        this.msService.getMSALSubject().subscribe(function (data) {
          return console.log(data);
        }); //     this.provider = new firebase.auth.OAuthProvider('microsoft.com')
        //     this.provider.addScope('profile');
        // this.provider.addScope('email');
        //this.auth.auth.signInWithRedirect(this.provider).then(val => console.log("redrirect val",val));
        //firebase.auth.OAuthCredential.
        //console.log(this.provider.accessToken);
        //this.auth.idTokenResult.subscribe(data => console.log(data));
        //console.log(this.auth.idTokenResult)
        //this.auth.authState.subscribe(data =>console.log("auth state",data));
        // if(this.provider.isAuthProvider==false){
        //this.auth.user.subscribe(data =>console.log(data));
        // this.auth1.auth.signInWithPopup(this.provider).then(val => console.log(val));
        //this.auth.auth.signInWithRedirect(this.provider).then(val => console.log("redrirect val",val));
        // }
        // firebase.auth().getRedirectResult().then(function(result) {
        //   if (result.credential) {
        //     // This gives you the OAuth Access Token for that provider.
        //     var token = result.credential['accessToken'];
        //     console.log(token);
        //   }
        //   var user = result.user;
        //   console.log(result);
        // });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this6 = this;

          this.user = this.authservice.getUser();
          this.userEmailThroughWhichHeIsLoggedIn = this.user.idToken.preferred_username; //console.log("app module",this.userEmailThroughWhichHeIsLoggedIn);

          this.db.collection("Users").doc(this.userEmailThroughWhichHeIsLoggedIn).get().subscribe(function (doc) {
            _this6.authorizationService.setUserFromAppComponent(doc.data());
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]
      }, {
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationServiceService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-component/home-component.component */
    "./src/app/home-component/home-component.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./navigation-bar/navigation-bar.component */
    "./src/app/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/overlaypanel */
    "./node_modules/primeng/fesm2015/primeng-overlaypanel.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/fesm2015/primeng-multiselect.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./create-meeting/create-meeting.component */
    "./src/app/create-meeting/create-meeting.component.ts");
    /* harmony import */


    var _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./meetings-list/meetings-list.component */
    "./src/app/meetings-list/meetings-list.component.ts");
    /* harmony import */


    var _detailed_meeting_detailed_meeting_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./detailed-meeting/detailed-meeting.component */
    "./src/app/detailed-meeting/detailed-meeting.component.ts");
    /* harmony import */


    var _Services_meeting_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./Services/meeting.service */
    "./src/app/Services/meeting.service.ts");
    /* harmony import */


    var _add_meeting_minutes_add_meeting_minutes_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./add-meeting-minutes/add-meeting-minutes.component */
    "./src/app/add-meeting-minutes/add-meeting-minutes.component.ts");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/dist/index.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_34___default =
    /*#__PURE__*/
    __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__);
    /* harmony import */


    var _Services_file_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./Services/file.service */
    "./src/app/Services/file.service.ts");
    /* harmony import */


    var _noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./noaccess/noaccess.component */
    "./src/app/noaccess/noaccess.component.ts");
    /* harmony import */


    var _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./admissions/admissions.component */
    "./src/app/admissions/admissions.component.ts");
    /* harmony import */


    var _detailed_admission_detailed_admission_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./detailed-admission/detailed-admission.component */
    "./src/app/detailed-admission/detailed-admission.component.ts"); //import below for login using microsoft
    //import below for routing
    //Import below for forms working
    //Import this below lines to use fireDb related things
    //Imported for components
    //import this for getting popup modules
    //import {PopupModule} from 'ng2-opd-popup';
    //import below for Table Api
    //import for sorting
    //Import for angular material datepicker API
    //import for multiselect
    //import {MatMomentDateModule} from '@angular/material-moment-adapter';
    //import for mat-label API
    //importing prime ng
    //import for browswe animations module
    //omporting http module


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_17__["NavigationBarComponent"], _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponentComponent"], _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_29__["CreateMeetingComponent"], _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_30__["MeetingsListComponent"], _detailed_meeting_detailed_meeting_component__WEBPACK_IMPORTED_MODULE_31__["DetailedMeetingComponent"], _add_meeting_minutes_add_meeting_minutes_component__WEBPACK_IMPORTED_MODULE_33__["AddMeetingMinutesComponent"], _noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_36__["NoaccessComponent"], _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_37__["AdmissionsComponent"], _detailed_admission_detailed_admission_component__WEBPACK_IMPORTED_MODULE_38__["DetailedAdmissionComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], //import below for popup window
      //PopupModule.forRoot(),
      //import below for working with forms
      _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], //Use the below lines for using firedb
      angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fireBase),
      /*If we want Angular fire authentication, angualr fire database
       and all we need some other modules*/
      angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"], //import for angular tables
      _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], //import for sorting
      _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], //Import for angular material datepicker
      _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"], //Import below for working with routing
      //import for mat-label API
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], //import for multiselect
      _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], //import for browser animations
      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], //importing prime ng model
      primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_24__["OverlayPanelModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_25__["ConfirmDialogModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_27__["MultiSelectModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], //importing http module
      _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], //import for microsoft auth
      _azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalModule"].forRoot({
        clientID: "f1ac7d06-f07e-4a1a-96f7-428bc851cf15",
        consentScopes: ["https://graph.microsoft.com/User.ReadWrite", "user.read"],
        postLogoutRedirectUri: "http://localhost:4200/"
      }), _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([{
        path: '',
        component: _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponentComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'Users',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'DetailedMeeting',
        component: _detailed_meeting_detailed_meeting_component__WEBPACK_IMPORTED_MODULE_31__["DetailedMeetingComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'MeetingsList',
        component: _meetings_list_meetings_list_component__WEBPACK_IMPORTED_MODULE_30__["MeetingsListComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'CreateMeeting',
        component: _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_29__["CreateMeetingComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'Admissions',
        component: _admissions_admissions_component__WEBPACK_IMPORTED_MODULE_37__["AdmissionsComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'DetailedAdmission',
        component: _detailed_admission_detailed_admission_component__WEBPACK_IMPORTED_MODULE_38__["DetailedAdmissionComponent"],
        canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_34__["MsalGuard"]]
      }, {
        path: 'NoAccess',
        component: _noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_36__["NoaccessComponent"]
      }])],
      providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _Services_meeting_service__WEBPACK_IMPORTED_MODULE_32__["MeetingService"], primeng_api__WEBPACK_IMPORTED_MODULE_26__["ConfirmationService"], _Services_file_service__WEBPACK_IMPORTED_MODULE_35__["FileService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/create-meeting/create-meeting.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/create-meeting/create-meeting.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateMeetingCreateMeetingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".styleForTextArea{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW1lZXRpbmcvY3JlYXRlLW1lZXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1tZWV0aW5nL2NyZWF0ZS1tZWV0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVGb3JUZXh0QXJlYXtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/create-meeting/create-meeting.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/create-meeting/create-meeting.component.ts ***!
    \************************************************************/

  /*! exports provided: CreateMeetingComponent */

  /***/
  function srcAppCreateMeetingCreateMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateMeetingComponent", function () {
      return CreateMeetingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Models/CreateMeetingModel */
    "./src/app/Models/CreateMeetingModel.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _Services_meeting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/meeting.service */
    "./src/app/Services/meeting.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");

    var CreateMeetingComponent =
    /*#__PURE__*/
    function () {
      //subAgendaItems: any[];
      //subOfSubAgendaItems: any[][];
      //selectedDepratmentsList:string[] = [];
      function CreateMeetingComponent(db, route, meetingService, confirmationService, authorizationService) {
        var _this7 = this;

        _classCallCheck(this, CreateMeetingComponent);

        this.db = db;
        this.route = route;
        this.meetingService = meetingService;
        this.confirmationService = confirmationService;
        this.authorizationService = authorizationService;
        this.chairs = [];
        this.disableCheckBox = false;
        this.createMeetingModelObject = new _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_3__["CreateMeetingModel"]();
        this.subagendaItemsarray = [[]];
        this.subOfSubAgendaItemsArray = [];
        this.items = [{
          agenda: "",
          id: 1,
          subAgendaItems: [],
          duration: 0
        }];
        this.mainAgendaItem = {
          agenda: "",
          id: 1,
          duration: 0,
          subAgendaItems: []
        };
        this.subAgendaItem = {
          subAgenda: "",
          subId: 1,
          subOfSubAgendaItems: []
        };
        this.subofSubAgendaItem = {
          subofSubAgenda: "",
          subOfSubId: 1
        };
        this.itemsArray = [];
        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          _this7.loggedInUserDataFromDB = data; //console.log("in nav bar",this.loggedInUserDataFromDB);
        });

        if (this.loggedInUserDataFromDB != null) {
          this.createMeetingModelObject.facilitatedBy = this.loggedInUserDataFromDB.emailId; //console.log(this.createMeetingModelObject.facilitatedBy);
        }

        db.collection("Users").valueChanges().subscribe(function (data) {
          //console.log(data);
          for (var i = 0; i < data.length; i++) {
            if (data[i]['Role'] == 'Chair') {
              _this7.chairs.push(data[i]['emailId']);
            }
          }
        });
        this.createMeetingModelObject.inlineCheckbox1 = true;
        this.onCheck(null);
      }

      _createClass(CreateMeetingComponent, [{
        key: "submitToSaveMeeting",
        value: function submitToSaveMeeting() {
          var _this8 = this;

          //date formatting
          var date = new Date(this.createMeetingModelObject.date);
          this.createMeetingModelObject.formateddate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
          this.createMeetingModelObject.time = this.createMeetingModelObject.HH + ":" + this.createMeetingModelObject.MM + " " + this.createMeetingModelObject.noon; //duration formatting

          this.createMeetingModelObject.duration = this.createMeetingModelObject.duration + " Minutes"; //department list formatting

          this.createMeetingModelObject.departmentList = this.populateSelectedDepartmentList();
          this.showCreateMeetingForm = !this.showCreateMeetingForm; //agenda list formatting

          for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].agenda != "") {
              this.itemsArray.push(this.items[i].agenda);
            }

            this.items[i].subAgendaItems = this.subagendaItemsarray[i];
          }

          console.log(this.items); //saving to databases
          //saving to AgendaList collection

          this.db.collection("AgendaList").add({
            wholeAgendaList: this.items,
            saveMeetingMinutesAndSendEmail: false
          }).then(function (docref) {
            //storing document id of AgendaList in a variable.
            _this8.createMeetingModelObject.documentIdOfAgendaListCollection = docref.id; //this.db.collection("AgendaList").doc(docref.id).update({documentIdOfAgendaListCollection:docref.id});
          }); //saving to Meetings collection

          this.db.collection("Meetings").add({
            finalised: false,
            subject: this.createMeetingModelObject.subject,
            date: this.createMeetingModelObject.formateddate,
            time: this.createMeetingModelObject.time,
            duration: this.createMeetingModelObject.duration,
            facilitatedBy: this.createMeetingModelObject.facilitatedBy,
            department: this.createMeetingModelObject.departmentList,
            agendaList: this.itemsArray,
            approvals: [],
            rejects: [],
            files: [],
            attendees: [],
            downloadFiles: [],
            comments: []
          }).then(function (ref) {
            _this8.db.collection("AgendaList").doc(_this8.createMeetingModelObject.documentIdOfAgendaListCollection).update({
              documentIdOfCurrentMeeting: ref.id,
              documentIdOfAgendaListCollection: _this8.createMeetingModelObject.documentIdOfAgendaListCollection
            });

            _this8.db.collection("Meetings").doc(ref.id).update({
              documentIdOfAgendaListCollection: _this8.createMeetingModelObject.documentIdOfAgendaListCollection,
              documentIdOfCurrentMeeting: ref.id
            });
          }); //formatting whole form to empty

          this.createMeetingModelObject = new _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_3__["CreateMeetingModel"](); //routing to MeetingListComponent

          this.route.navigate(["MeetingsList"]);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.createMeetingModelObject = new _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_3__["CreateMeetingModel"]();
          this.route.navigate(["MeetingsList"]);
        }
      }, {
        key: "onCheck",
        value: function onCheck(event) {
          if (this.createMeetingModelObject.inlineCheckbox1) {
            this.createMeetingModelObject.inlineCheckbox2 = true;
            this.createMeetingModelObject.inlineCheckbox3 = true;
            this.createMeetingModelObject.inlineCheckbox4 = true;
            this.createMeetingModelObject.inlineCheckbox5 = true;
            this.disableCheckBox = true;
          } else {
            this.disableCheckBox = false;
            this.createMeetingModelObject.inlineCheckbox2 = false;
            this.createMeetingModelObject.inlineCheckbox3 = false;
            this.createMeetingModelObject.inlineCheckbox4 = false;
            this.createMeetingModelObject.inlineCheckbox5 = false;
          }
        }
      }, {
        key: "populateSelectedDepartmentList",
        value: function populateSelectedDepartmentList() {
          if (!this.createMeetingModelObject.inlineCheckbox1 && !this.createMeetingModelObject.inlineCheckbox2 && !this.createMeetingModelObject.inlineCheckbox3 && !this.createMeetingModelObject.inlineCheckbox4 && !this.createMeetingModelObject.inlineCheckbox5) {
            this.lblToThrowDepartmentNotSelectedError = true;
          }

          var array = [];

          if (this.createMeetingModelObject.inlineCheckbox2) {
            array.push("CS");
          }

          if (this.createMeetingModelObject.inlineCheckbox3) {
            array.push("CIS");
          }

          if (this.createMeetingModelObject.inlineCheckbox4) {
            array.push("IT");
          }

          if (this.createMeetingModelObject.inlineCheckbox5) {
            array.push("DS");
          }

          return array;
        }
      }, {
        key: "newAgendaItem",
        value: function newAgendaItem() {
          console.log(this.items);
          var id = this.items.length + 1;
          this.items.push({
            agenda: "",
            id: id,
            duration: null,
            meetingMinutes: "",
            subAgendaItems: ['']
          });
          this.subagendaItemsarray.push([]);
          this.subOfSubAgendaItemsArray.push([]);
        }
      }, {
        key: "cancelAgendaItemInput",
        value: function cancelAgendaItemInput() {
          this.items.pop();
        }
      }, {
        key: "deleteAgendaItem",
        value: function deleteAgendaItem(item) {
          var _this9 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this record?',
            accept: function accept() {
              //console.log(item);
              var index = _this9.items.indexOf(item);

              if (index !== -1) {
                _this9.items.splice(index, 1);
              }
            }
          });
        }
      }, {
        key: "addNewSubAgendaItem",
        value: function addNewSubAgendaItem(item) {
          console.log(item.id);

          if (this.subagendaItemsarray[item.id - 1] != null) {
            console.log("empty array", item.id - 1, this.subagendaItemsarray);
            var subItem = {
              subAgenda: "",
              subId: this.subagendaItemsarray[item.id - 1].length + 1,
              meetingMinutes: "",
              subOfSubAgendaItems: []
            };
            this.subagendaItemsarray[item.id - 1].push(subItem);
          } // this.items.forEach(value => {
          //   if (value.id == item.id) {
          //     var subItem = {
          //       subAgenda: "",
          //       subId: item.subAgendaItems.length + 1,
          //       subOfSubAgendaItems: []
          //     };
          //     value.subAgendaItems.push(subItem);
          //   }
          // });

        }
      }, {
        key: "deleteSubAgendaItem",
        value: function deleteSubAgendaItem(item, subItem) {
          var _this10 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this record?',
            accept: function accept() {
              console.log(subItem);
              console.log(_this10.subagendaItemsarray);

              var indexOfMainAgendaItem = _this10.items.indexOf(item);

              var index = subItem.subId - 1;
              console.log(index); //const index: number = this.subagendaItemsarray[indexOfMainAgendaItem].indexOf(subItem);

              console.log(index);

              if (index !== -1) {
                console.log("In if of delete sub");

                _this10.subagendaItemsarray[item.id - 1].splice(index, 1);

                console.log("length:", _this10.subagendaItemsarray[item.id - 1]);

                for (var i = 0; i < _this10.subagendaItemsarray[item.id - 1].length; i++) {
                  _this10.subagendaItemsarray[item.id - 1][i]['subId'] = i + 1;
                }
              }
            }
          });
        }
      }, {
        key: "addSubSubAgendaItem",
        value: function addSubSubAgendaItem(item, subitem) {
          //   this.items.forEach(value => {
          //     if (value.id == item.id) {
          //       console.log("empty", value);
          //       value.subAgendaItems.forEach(subValue => {
          //         if (subValue.id == subitem.id) {
          //           var subofSubItem = {
          //             subofSubAgenda: "",
          //             subOfSubId: subValue.subOfSubAgendaItems.length+1
          //           };
          //           subValue.subOfSubAgendaItems.push(subofSubItem);
          //         }
          //       });
          //     }
          //   });
          console.log(subitem);
          var subofSubItem = {
            subofSubAgenda: "",
            subOfSubId: subitem.subOfSubAgendaItems.length + 1,
            meetingMinutes: ""
          };
          subitem.subOfSubAgendaItems.push(subofSubItem);
          console.log(this.subagendaItemsarray);
        }
      }, {
        key: "deleteSubOfSubAgendaItem",
        value: function deleteSubOfSubAgendaItem(j, i, subOfSubItem) {
          var _this11 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this record?',
            accept: function accept() {
              console.log(subOfSubItem);
              var tempArray = _this11.subagendaItemsarray[j][i]['subOfSubAgendaItems'];
              var index = tempArray.indexOf(subOfSubItem);
              console.log(index);

              if (index !== -1) {
                console.log("In if of delete sub");
                tempArray.splice(index, 1);
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//   this.meetingService.getSelectedMeetingObj().subscribe(data => {
          //     this.selectedMeeting = data;});
          //     if (this.selectedMeeting.operation=='Edit'){
          //       this.createMeetingModelObject=this.selectedMeeting;
          //       this.selectedMeeting.operation='';
          //     }
        }
      }]);

      return CreateMeetingComponent;
    }();

    CreateMeetingComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _Services_meeting_service__WEBPACK_IMPORTED_MODULE_5__["MeetingService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationServiceService"]
      }];
    };

    CreateMeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-create-meeting",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-meeting/create-meeting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-meeting.component.css */
      "./src/app/create-meeting/create-meeting.component.css")).default]
    })], CreateMeetingComponent);
    /***/
  },

  /***/
  "./src/app/detailed-admission/detailed-admission.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/detailed-admission/detailed-admission.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailedAdmissionDetailedAdmissionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbGVkLWFkbWlzc2lvbi9kZXRhaWxlZC1hZG1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/detailed-admission/detailed-admission.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/detailed-admission/detailed-admission.component.ts ***!
    \********************************************************************/

  /*! exports provided: DetailedAdmissionComponent */

  /***/
  function srcAppDetailedAdmissionDetailedAdmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailedAdmissionComponent", function () {
      return DetailedAdmissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_admissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/admissions.service */
    "./src/app/Services/admissions.service.ts");
    /* harmony import */


    var _Services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/file.service */
    "./src/app/Services/file.service.ts");
    /* harmony import */


    var _Models_AdmissionsModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Models/AdmissionsModel */
    "./src/app/Models/AdmissionsModel.ts");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var DetailedAdmissionComponent =
    /*#__PURE__*/
    function () {
      function DetailedAdmissionComponent(admissionsService, fileService, db, authorizationService, confirmationService) {
        var _this12 = this;

        _classCallCheck(this, DetailedAdmissionComponent);

        this.admissionsService = admissionsService;
        this.fileService = fileService;
        this.db = db;
        this.authorizationService = authorizationService;
        this.confirmationService = confirmationService;
        this.showCommentSection = false;
        this.admissionsModelObject = new _Models_AdmissionsModel__WEBPACK_IMPORTED_MODULE_5__["AdmissionsModel"]();
        this.rejectionReasons = [];
        this.rejectionPossibleReasons = ['GRE Total too low', 'Verbal below 140', 'Quant below 150', 'GPA too low', 'Weak academic performance in foundation', 'Inadeqaute preparation for the MS program'];
        this.showRejectOptions = false;
        this.rejectClicked = true;
        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          _this12.loggedInUserDataFromDB = data; //console.log("in nav bar",this.loggedInUserDataFromDB);
        });
      }

      _createClass(DetailedAdmissionComponent, [{
        key: "open",
        value: function open(url) {
          window.open(url, "_blank");
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(uniqueNameForReference, linkToView, typeOfFile) {
          this.fileService.setHttpRequestToDownloadFile(uniqueNameForReference, linkToView, typeOfFile);
        }
      }, {
        key: "acceptAdmission",
        value: function acceptAdmission(event) {
          var _this13 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to Accept Admission? You can provide some optional Prerequisities below',
            header: this.selectedStudent.studentId,
            accept: function accept() {
              _this13.showRejectOptions = false;
              _this13.buttonValue = event.srcElement.value; //console.log("hai")

              if (!_this13.selectedStudent.accepts.includes(_this13.loggedInUserDataFromDB.emailId)) {
                _this13.selectedStudent.accepts.push(_this13.loggedInUserDataFromDB.emailId);
              }

              if (_this13.selectedStudent.rejects.includes(_this13.loggedInUserDataFromDB.emailId)) {
                _this13.selectedStudent.rejects.splice(_this13.selectedStudent.rejects.indexOf(_this13.loggedInUserDataFromDB.emailId), 1);
              }

              if (_this13.selectedStudent.accepts.length > 1) {
                _this13.selectedStudent.status = 'Accepted';
              } else {
                if (_this13.selectedStudent.rejects.length > 1) {
                  _this13.selectedStudent.status = 'Rejected';
                } else {
                  _this13.selectedStudent.status = 'Under Review';
                }
              }

              if (_this13.loggedInUserDataFromDB.emailId in _this13.selectedStudent.rejectionReasonsFromModel) {
                //console.log("Hi")
                delete _this13.selectedStudent.rejectionReasonsFromModel[_this13.loggedInUserDataFromDB.emailId];
              }

              _this13.showCommentSection = true;

              _this13.db.collection("Admissions").doc("".concat(_this13.selectedStudent.studentId)).update({
                rejects: _this13.selectedStudent.rejects,
                accepts: _this13.selectedStudent.accepts,
                status: _this13.selectedStudent.status,
                rejectionReasonsFromModel: _this13.selectedStudent.rejectionReasonsFromModel
              });
            }
          });
        }
      }, {
        key: "saveComment",
        value: function saveComment() {
          //this.selectedStudent.comments.push({comment:this.commentText, decision:this.buttonValue, commentedBy:this.loggedInUserDataFromDB.emailId})
          this.showCommentSection = false;

          if (this.commentText != null) {
            if (this.selectedStudent.comments.length > 0) {
              for (var i = 0; i < this.selectedStudent.comments.length; i++) {
                if (this.loggedInUserDataFromDB.emailId == this.selectedStudent.comments[i].commentedBy) {
                  this.selectedStudent.comments.splice(i, 1);
                  this.selectedStudent.comments.push({
                    comment: this.commentText,
                    decision: this.buttonValue,
                    commentedBy: this.loggedInUserDataFromDB.emailId
                  });
                } else {
                  this.selectedStudent.comments.push({
                    comment: this.commentText,
                    decision: this.buttonValue,
                    commentedBy: this.loggedInUserDataFromDB.emailId
                  });
                }
              }
            } else {
              this.selectedStudent.comments.push({
                comment: this.commentText,
                decision: this.buttonValue,
                commentedBy: this.loggedInUserDataFromDB.emailId
              });
            }

            this.db.collection("Admissions").doc("".concat(this.selectedStudent.studentId)).update({
              comments: this.selectedStudent.comments
            });
          }
        }
      }, {
        key: "rejectAdmission",
        value: function rejectAdmission() {
          var _this14 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to Reject Admission for this student? You need to select reasons below',
            header: this.selectedStudent.studentId,
            accept: function accept() {
              _this14.showCommentSection = false;
              _this14.showRejectOptions = true;
            }
          });
        }
      }, {
        key: "saveRejectionReasons",
        value: function saveRejectionReasons(event) {
          var _this15 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to Reject Admission for this student?',
            header: this.selectedStudent.studentId,
            accept: function accept() {
              if (_this15.rejectClicked == true) {
                _this15.buttonValue = event.srcElement.value;

                if (!_this15.selectedStudent.rejects.includes(_this15.loggedInUserDataFromDB.emailId)) {
                  _this15.selectedStudent.rejects.push(_this15.loggedInUserDataFromDB.emailId);
                }

                if (_this15.selectedStudent.accepts.includes(_this15.loggedInUserDataFromDB.emailId)) {
                  _this15.selectedStudent.accepts.splice(_this15.selectedStudent.accepts.indexOf(_this15.loggedInUserDataFromDB.emailId), 1);
                } //this.selectedStudent.rejects.push(this.loggedInUserDataFromDB.emailId);


                _this15.selectedStudent.rejectionReasonsFromModel[_this15.loggedInUserDataFromDB.emailId] = _this15.buttonValue + '-->' + _this15.rejectionReasons;

                if (_this15.selectedStudent.rejects.length > 1) {
                  _this15.selectedStudent.status = 'Rejected';
                } else {
                  if (_this15.selectedStudent.accepts.length > 1) {
                    _this15.selectedStudent.status = 'Accepted';
                  } else {
                    _this15.selectedStudent.status = 'Under Review';
                  }
                }

                for (var i = 0; i < _this15.selectedStudent.comments.length; i++) {
                  if (_this15.loggedInUserDataFromDB.emailId == _this15.selectedStudent.comments[i].commentedBy) {
                    _this15.selectedStudent.comments.splice(i, 1);
                  }
                }

                _this15.db.collection("Admissions").doc("".concat(_this15.selectedStudent.studentId)).update({
                  rejectionReasonsFromModel: _this15.selectedStudent.rejectionReasonsFromModel,
                  rejects: _this15.selectedStudent.rejects,
                  accepts: _this15.selectedStudent.accepts,
                  status: _this15.selectedStudent.status,
                  comments: _this15.selectedStudent.comments
                });
              }
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.admissionsService.getSelectedStudentObj().subscribe(function (data) {
            _this16.selectedStudent = data;
          }); //console.log(this.selectedStudent);
        }
      }]);

      return DetailedAdmissionComponent;
    }();

    DetailedAdmissionComponent.ctorParameters = function () {
      return [{
        type: _Services_admissions_service__WEBPACK_IMPORTED_MODULE_3__["AdmissionsService"]
      }, {
        type: _Services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationServiceService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]
      }];
    };

    DetailedAdmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-detailed-admission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detailed-admission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailed-admission/detailed-admission.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detailed-admission.component.css */
      "./src/app/detailed-admission/detailed-admission.component.css")).default]
    })], DetailedAdmissionComponent);
    /***/
  },

  /***/
  "./src/app/detailed-meeting/detailed-meeting.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/detailed-meeting/detailed-meeting.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailedMeetingDetailedMeetingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".styleForInput{\n    border:none; \n    outline:none;\n    background-color:lightblue;\n}\n.styleForATag{\n    -webkit-text-decoration:blue;\n            text-decoration:blue;\n    text-decoration: underline;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsZWQtbWVldGluZy9kZXRhaWxlZC1tZWV0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiwwQkFBMEI7O0FBRTlCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsZWQtbWVldGluZy9kZXRhaWxlZC1tZWV0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVGb3JJbnB1dHtcbiAgICBib3JkZXI6bm9uZTsgXG4gICAgb3V0bGluZTpub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xufVxuLnN0eWxlRm9yQVRhZ3tcbiAgICB0ZXh0LWRlY29yYXRpb246Ymx1ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/detailed-meeting/detailed-meeting.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/detailed-meeting/detailed-meeting.component.ts ***!
    \****************************************************************/

  /*! exports provided: DetailedMeetingComponent */

  /***/
  function srcAppDetailedMeetingDetailedMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailedMeetingComponent", function () {
      return DetailedMeetingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Models/CreateMeetingModel */
    "./src/app/Models/CreateMeetingModel.ts");
    /* harmony import */


    var _Services_meeting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/meeting.service */
    "./src/app/Services/meeting.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _Services_file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../Services/file.service */
    "./src/app/Services/file.service.ts");

    var DetailedMeetingComponent =
    /*#__PURE__*/
    function () {
      //attendees:string[]=[];
      //allSelected: any;
      function DetailedMeetingComponent(meetingService, storage, route, db, authorizationService, confirmationService, http, sanitizer, fileService) {
        var _this17 = this;

        _classCallCheck(this, DetailedMeetingComponent);

        this.meetingService = meetingService;
        this.storage = storage;
        this.route = route;
        this.db = db;
        this.authorizationService = authorizationService;
        this.confirmationService = confirmationService;
        this.http = http;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this.attendance = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.showDetailedMeeting = false;
        this.finalised = true;
        this.rejectClicked = false;
        this.loggedInUserDataFromDB = null;
        this.createMeetingModelObject2 = new _Models_CreateMeetingModel__WEBPACK_IMPORTED_MODULE_4__["CreateMeetingModel"]();
        this.editingVariable = false;
        this.isempty = true;
        this.dataForAttendance = [];
        this.comments = [];
        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          _this17.loggedInUserDataFromDB = data; //console.log("in nav bar",this.loggedInUserDataFromDB);
        });
        db.collection("Users").valueChanges().subscribe(function (data) {
          //console.log(data);
          _this17.dataForAttendance = data;
        });
      }

      _createClass(DetailedMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.meetingService.getSelectedMeetingObj().subscribe(function (data) {
            _this18.selectedMeeting = data;

            if (_this18.selectedMeeting != null) {
              _this18.comment = _this18.selectedMeeting['comments'][_this18.loggedInUserDataFromDB.emailId];

              _this18.db.collection("AgendaList").doc(_this18.selectedMeeting.documentIdOfAgendaListCollection).valueChanges().subscribe(function (data) {
                return _this18.agendaList = data['wholeAgendaList'];
              }); //console.log(this.selectedMeeting);

            }
          }); //this.selectedMeeting.attendees=[];
          //this.downloadURL = this.storage.ref('gs://myfirstdemoforfiredb.appspot.com/bv3556dcnpe14ej6fa1').getDownloadURL();
        }
      }, {
        key: "showAddMeetingMinutesForm",
        value: function showAddMeetingMinutesForm() {
          //console.log(this.agendaList);
          this.db.collection("AgendaList").doc(this.selectedMeeting.documentIdOfAgendaListCollection).update({
            wholeAgendaList: this.agendaList
          }); //this.route.navigate(['AddMeetingMinutes']);
        }
      }, {
        key: "saveMeetingMinutesAndSendEmail",
        value: function saveMeetingMinutesAndSendEmail() {
          this.db.collection("AgendaList").doc(this.selectedMeeting.documentIdOfAgendaListCollection).update({
            wholeAgendaList: this.agendaList,
            saveMeetingMinutesAndSendEmail: true
          });
          this.db.collection("AgendaList").doc(this.selectedMeeting.documentIdOfAgendaListCollection).update({
            saveMeetingMinutesAndSendEmail: false
          });
        }
      }, {
        key: "finaliseMeetingMinutes",
        value: function finaliseMeetingMinutes() {
          var _this19 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to Finalise this Meeting?(You cannot perform any action like edit and delete anymore)',
            header: "Finalise?",
            accept: function accept() {
              //this.finalised=true;
              _this19.selectedMeeting.finalised = true;

              _this19.db.collection("Meetings").doc(_this19.selectedMeeting.documentIdOfCurrentMeeting).update({
                finalised: true
              });
            }
          });
        }
      }, {
        key: "rejectButtonClicked",
        value: function rejectButtonClicked() {
          var _this20 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to Reject this Meeting? Makesure you need to provide a mandatory reason for your Rejection',
            header: this.selectedMeeting.subject,
            accept: function accept() {
              _this20.rejectClicked = true;
            }
          });
        }
      }, {
        key: "approveButtonClicked",
        value: function approveButtonClicked() {
          var _this21 = this;

          if (!this.selectedMeeting.approvals.some(function (item) {
            return item == _this21.loggedInUserDataFromDB.emailId;
          })) {
            this.selectedMeeting.approvals.push(this.loggedInUserDataFromDB.emailId);
          }

          if (this.selectedMeeting.rejects.some(function (item) {
            return item == _this21.loggedInUserDataFromDB.emailId;
          })) {
            this.selectedMeeting.rejects.splice(this.selectedMeeting.rejects.indexOf(this.loggedInUserDataFromDB.emailId), 1);
          }

          this.db.collection("Meetings").doc(this.selectedMeeting.documentIdOfCurrentMeeting).update({
            rejects: this.selectedMeeting.rejects,
            approvals: this.selectedMeeting.approvals
          });
        }
      }, {
        key: "saveComment",
        value: function saveComment() {
          var _this22 = this;

          //this.commentByUser.append()
          //this
          this.confirmationService.confirm({
            message: 'Are you sure, do you want to Post this Comment?',
            header: this.comment,
            accept: function accept() {
              _this22.rejectClicked = false;

              if (!_this22.selectedMeeting.rejects.some(function (item) {
                return item == _this22.loggedInUserDataFromDB.emailId;
              })) {
                _this22.selectedMeeting.rejects.push(_this22.loggedInUserDataFromDB.emailId);
              }

              if (_this22.selectedMeeting.approvals.some(function (item) {
                return item == _this22.loggedInUserDataFromDB.emailId;
              })) {
                _this22.selectedMeeting.approvals.splice(_this22.selectedMeeting.approvals.indexOf(_this22.loggedInUserDataFromDB.emailId), 1);
              }

              _this22.selectedMeeting.comments.push([_this22.loggedInUserDataFromDB.emailId] + '-->' + _this22.comment);

              _this22.db.collection("Meetings").doc(_this22.selectedMeeting.documentIdOfCurrentMeeting).update({
                comments: _this22.selectedMeeting.comments,
                rejects: _this22.selectedMeeting.rejects,
                approvals: _this22.selectedMeeting.approvals
              });
            }
          });
        }
      }, {
        key: "cancelCommentSection",
        value: function cancelCommentSection() {
          this.rejectClicked = false;
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          var _this23 = this;

          //   const file = event.target.files[0];
          // const filePath = 'name-your-file-path-here';
          // const task = this.storage.upload(filePath, file);
          var timeStamp = Math.floor(Date.now() / 1000).toString(20);
          var randomId = Math.random().toString(36).substring(2);
          randomId = randomId + timeStamp; // randomId=randomId+

          this.storage.upload(randomId, event.target.files[0]).snapshotChanges().subscribe(function (data) {
            //console.log("console.log",data);
            _this23.storage.ref(randomId).getDownloadURL().subscribe(function (data) {
              if (data != null) {
                var downloadUrl = data; //this.selectedMeeting.downloadFiles[randomId]=downloadUrl;
                //console.log(this.selectedMeeting.downloadFiles);

                _this23.selectedMeeting.downloadFiles.push({
                  uniqueNameForReference: randomId,
                  linkToView: downloadUrl,
                  typeOfFile: event.target.files[0].type
                });

                _this23.db.collection("Meetings").doc(_this23.selectedMeeting.documentIdOfCurrentMeeting).update({
                  downloadFiles: _this23.selectedMeeting.downloadFiles
                });
              }
            });
          }); //const downloadUrl = this.storage.ref(randomId).getDownloadURL().subscribe(data => console.log(data,"shourya"));
          //console.log(downloadUrl,this.selectedMeeting);
          //console.log(event.target.files[0].type);
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(ref1, i) {
          var _this24 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this File?',
            header: ref1,
            accept: function accept() {
              //console.log(ref1,i);
              var deleteRef = _this24.storage.ref(ref1); // Delete the file


              deleteRef.delete(); //this.selectedMeeting.downloadFiles.
              //const index: number = this.selectedMeeting.downloadFiles.indexOf(ref1);

              if (i !== -1) {
                _this24.selectedMeeting.downloadFiles.splice(i, 1);
              }

              _this24.db.collection("Meetings").doc(_this24.selectedMeeting.documentIdOfCurrentMeeting).update({
                downloadFiles: _this24.selectedMeeting.downloadFiles
              });
            }
          });
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(uniqueNameForReference, linkToView, typeOfFile) {
          this.fileService.setHttpRequestToDownloadFile(uniqueNameForReference, linkToView, typeOfFile); //   console.log(linkToView);
          // this.http.get(linkToView,{responseType: 'blob' })
          //  .subscribe(data => {
          //   const blob = new Blob([data], { type: 'text' })
          //   saveAs(blob,"filename");
          //});
        } // downLoadFile(data: any, type: string) {
        //   console.log('in download',data,type);
        //   let blob = new Blob([data], { type: type});
        //   let url = window.URL.createObjectURL(blob);
        //   let pwa = window.open(url);
        //   if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        //       alert( 'Please disable your Pop-up blocker and try again.');
        //   }
        // }

      }, {
        key: "deleteMeeting",
        value: function deleteMeeting() {
          var _this25 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this record?',
            accept: function accept() {
              _this25.db.collection("AgendaList").doc(_this25.selectedMeeting.documentIdOfAgendaListCollection).delete().then(function () {
                console.log("Document Successfull deleted!");
              }).catch(function (error) {
                console.error("Error removing document:", error);
              });

              _this25.db.collection("Meetings").doc(_this25.selectedMeeting.documentIdOfCurrentMeeting).delete().then(function () {
                console.log("Document Successfull deleted!");
              }).catch(function (error) {
                console.error("Error removing document:", error);
              });

              _this25.route.navigate(["MeetingsList"]);
            }
          });
        }
      }, {
        key: "editMeeting",
        value: function editMeeting() {
          // this.selectedMeeting.operation='Edit';
          // this.route.navigate(['CreateMeeting']);
          this.editingVariable = true;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this.editingVariable = false;
          this.db.collection("Meetings").doc(this.selectedMeeting.documentIdOfCurrentMeeting).update({
            subject: this.selectedMeeting.subject,
            date: this.selectedMeeting.date,
            time: this.selectedMeeting.time,
            duration: this.selectedMeeting.duration,
            facilitatedBy: this.selectedMeeting.facilitatedBy
          });
        }
      }, {
        key: "open",
        value: function open(url) {
          window.open(url, "_blank");
        }
      }, {
        key: "selectingAllForAttendance",
        value: function selectingAllForAttendance() {
          var arr = [];
          arr.push(true);
          this.dataForAttendance.forEach(function (element) {
            //console.log(element.emailId);
            arr.push(element.emailId);
          });
          this.isempty ? this.attendance.setValue(arr) : this.attendance.setValue([]);
          this.isempty = false;
          var indext = this.attendance.value.indexOf(true);

          if (indext !== -1) {
            this.attendance.value.splice(indext, 1);
          }

          var indexf = this.attendance.value.indexOf(false);

          if (indexf !== -1) {
            this.attendance.value.splice(indexf, 1);
          } //console.log("array",this.attendance.value); 

        }
      }, {
        key: "updatingAttendanceToDataBase",
        value: function updatingAttendanceToDataBase() {
          //console.log("MouseOUT");
          for (var i = 0; i < this.attendance.value.length; i++) {
            if (!this.selectedMeeting.attendees.includes(this.attendance.value[i])) {
              this.selectedMeeting.attendees.push(this.attendance.value[i]);
            }
          }

          this.db.collection("Meetings").doc(this.selectedMeeting.documentIdOfCurrentMeeting).update({
            attendees: this.selectedMeeting.attendees
          });
        }
      }]);

      return DetailedMeetingComponent;
    }();

    DetailedMeetingComponent.ctorParameters = function () {
      return [{
        type: _Services_meeting_service__WEBPACK_IMPORTED_MODULE_5__["MeetingService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationServiceService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
      }, {
        type: _Services_file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"]
      }];
    };

    DetailedMeetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-detailed-meeting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detailed-meeting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailed-meeting/detailed-meeting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detailed-meeting.component.css */
      "./src/app/detailed-meeting/detailed-meeting.component.css")).default]
    })], DetailedMeetingComponent);
    /***/
  },

  /***/
  "./src/app/home-component/home-component.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/home-component/home-component.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeComponentHomeComponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcG9uZW50L2hvbWUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home-component/home-component.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/home-component/home-component.component.ts ***!
    \************************************************************/

  /*! exports provided: HomeComponentComponent */

  /***/
  function srcAppHomeComponentHomeComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponentComponent", function () {
      return HomeComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");

    var HomeComponentComponent =
    /*#__PURE__*/
    function () {
      function HomeComponentComponent(authorizationService) {
        var _this26 = this;

        _classCallCheck(this, HomeComponentComponent);

        this.authorizationService = authorizationService;
        this.loggedInUserDataFromDB = null;
        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          _this26.loggedInUserDataFromDB = data;
        });
      }

      _createClass(HomeComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponentComponent;
    }();

    HomeComponentComponent.ctorParameters = function () {
      return [{
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationServiceService"]
      }];
    };

    HomeComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-component/home-component.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-component.component.css */
      "./src/app/home-component/home-component.component.css")).default]
    })], HomeComponentComponent);
    /***/
  },

  /***/
  "./src/app/meetings-list/meetings-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/meetings-list/meetings-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMeetingsListMeetingsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".datatable{\n    width:100%;\n}\n.descriptionStyle{\n    word-wrap: break-word\u2029;\n}\n.StyleForSearch{\n    width:100%;\n}\n.pointer {\n    cursor: pointer;\n}\nth.mat-sort-header-sorted {\n    color: black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZ3MtbGlzdC9tZWV0aW5ncy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZWV0aW5ncy1saXN0L21lZXRpbmdzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGV7XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5kZXNjcmlwdGlvblN0eWxle1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZOKAqTtcbn1cbi5TdHlsZUZvclNlYXJjaHtcbiAgICB3aWR0aDoxMDAlO1xufVxuLnBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/meetings-list/meetings-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/meetings-list/meetings-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: MeetingsListComponent */

  /***/
  function srcAppMeetingsListMeetingsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsListComponent", function () {
      return MeetingsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _Services_meeting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/meeting.service */
    "./src/app/Services/meeting.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js"); //Router is for navigation between components/pages


    var MeetingsListComponent =
    /*#__PURE__*/
    function () {
      function MeetingsListComponent(db1, meetingService, route, authorizationService) {
        var _this27 = this;

        _classCallCheck(this, MeetingsListComponent);

        this.db1 = db1;
        this.meetingService = meetingService;
        this.route = route;
        this.authorizationService = authorizationService;
        this.loggedInUserDataFromDB = {};
        this.displayedColumns = ['Subject', 'Date', 'Time', 'Duration', 'Department', 'facilitatedBy', 'AgendaList'];
        db1.collection("Meetings").valueChanges().subscribe(function (data) {
          _this27.meetings = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
          _this27.meetings.sort = _this27.sort;
        });
        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          if (data != null) {
            _this27.loggedInUserDataFromDB = data;
          }
        });
      }

      _createClass(MeetingsListComponent, [{
        key: "getMeeting",
        value: function getMeeting(meet) {
          this.meetingService.setDataFromMeetingList(meet);
          this.route.navigate(['DetailedMeeting']);
        }
      }, {
        key: "createMeeting",
        value: function createMeeting() {
          this.route.navigate(['CreateMeeting']);
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.meetings.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeetingsListComponent;
    }();

    MeetingsListComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _Services_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MeetingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      static: true
    })], MeetingsListComponent.prototype, "sort", void 0);
    MeetingsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meetings-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meetings-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/meetings-list/meetings-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meetings-list.component.css */
      "./src/app/meetings-list/meetings-list.component.css")).default]
    })], MeetingsListComponent);
    /***/
  },

  /***/
  "./src/app/navigation-bar/navigation-bar.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationBarNavigationBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/navigation-bar/navigation-bar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationBarComponent */

  /***/
  function srcAppNavigationBarNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
      return NavigationBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/dist/index.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts");

    var NavigationBarComponent =
    /*#__PURE__*/
    function () {
      function NavigationBarComponent(auth, authservice, db, authorizationService) {
        var _this28 = this;

        _classCallCheck(this, NavigationBarComponent);

        this.auth = auth;
        this.authservice = authservice;
        this.db = db;
        this.authorizationService = authorizationService;
        this.user = null;
        this.userEmail = null;
        this.loggedInUserDataFromDB = null;
        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          _this28.loggedInUserDataFromDB = data;
        });
      }

      _createClass(NavigationBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.user = this.authservice.getUser();
          // this.userEmail=this.user.idToken.preferred_username;
          // console.log("nav bar",this.userEmail);
          // this.db.collection("Users").doc(this.userEmail).get().subscribe(doc=>{console.log("from DB",doc.data())})
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authservice.logout();
        }
      }]);

      return NavigationBarComponent;
    }();

    NavigationBarComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationServiceService"]
      }];
    };

    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-navigation-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation-bar.component.css */
      "./src/app/navigation-bar/navigation-bar.component.css")).default]
    })], NavigationBarComponent);
    /***/
  },

  /***/
  "./src/app/noaccess/noaccess.component.css":
  /*!*************************************************!*\
    !*** ./src/app/noaccess/noaccess.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNoaccessNoaccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vYWNjZXNzL25vYWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/noaccess/noaccess.component.ts":
  /*!************************************************!*\
    !*** ./src/app/noaccess/noaccess.component.ts ***!
    \************************************************/

  /*! exports provided: NoaccessComponent */

  /***/
  function srcAppNoaccessNoaccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoaccessComponent", function () {
      return NoaccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NoaccessComponent =
    /*#__PURE__*/
    function () {
      function NoaccessComponent() {
        _classCallCheck(this, NoaccessComponent);
      }

      _createClass(NoaccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoaccessComponent;
    }();

    NoaccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-noaccess',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./noaccess.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/noaccess/noaccess.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./noaccess.component.css */
      "./src/app/noaccess/noaccess.component.css")).default]
    })], NoaccessComponent);
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-list/user-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserListUserListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".datatable{\n    width:100%;\n}\n.StyleForSearch{\n    width:100%;\n}\nth.mat-sort-header-sorted {\n    color: black;\n  }\n.hidden{ visibility: hidden; }\n.visible{ visibility: visible; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7RUFDZDtBQUNBLFNBQVMsa0JBQWtCLEVBQUU7QUFBRSxVQUFVLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF0YWJsZXtcbiAgICB3aWR0aDoxMDAlO1xufVxuLlN0eWxlRm9yU2VhcmNoe1xuICAgIHdpZHRoOjEwMCU7XG59XG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLmhpZGRlbnsgdmlzaWJpbGl0eTogaGlkZGVuOyB9IC52aXNpYmxleyB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9Il19 */";
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-list/user-list.component.ts ***!
    \**************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _Models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../Models/User */
    "./src/app/Models/User.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Services/authorization-service.service */
    "./src/app/Services/authorization-service.service.ts"); //import { PopupModule } from 'ng2-opd-popup';


    var UserListComponent =
    /*#__PURE__*/
    function () {
      function UserListComponent(db, confirmationService, authorizationService) {
        var _this29 = this;

        _classCallCheck(this, UserListComponent);

        this.db = db;
        this.confirmationService = confirmationService;
        this.authorizationService = authorizationService;
        this.roles = ['Admin', 'Faculty', 'Chair', 'Admission', 'Waiver'];
        this.departments = ['CS', 'CIS', 'IT', 'DS'];
        this.editClicked = false;
        this.title = 'myFirstDemoForFireDB';
        this.usersEmailIdsForValidation = [];
        this.tempUser = {}; // dataq:any[] = [
        //   {firstName:'hi',lastName:'ji',Role:'tt',emailId:'re',department:'ee'}
        //   ,{firstName:'ri',lastName:'wi',Role:'qt',emailId:'ae',department:'ae'}
        // ]
        //Below is for database coulmn names

        this.displayedColumns = ['Action', 'firstName', 'lastName', 'Role', 'emailId', 'department'];
        this.addUserObject = new _Models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.loggedInUserDataFromDB = {}; //this.users = new MatTableDataSource(this.dataq);
        //this.users.sort = this.sort;

        this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(function (data) {
          if (data != null) {
            _this29.loggedInUserDataFromDB = data;
          } //console.log("in nav bar",this.loggedInUserDataFromDB);

        });
        db.collection("Users").valueChanges().subscribe(function (data) {
          console.log(data);
          _this29.users = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
          _this29.users.sort = _this29.sort;

          for (var i = 0; i < data.length; i++) {
            _this29.usersEmailIdsForValidation.push(data[i]['emailId']);
          }
        });
      }

      _createClass(UserListComponent, [{
        key: "addUser",
        value: function addUser() {
          this.showAddUserForm = true;
        }
      }, {
        key: "submitToSaveUser",
        value: function submitToSaveUser() {
          this.showAddUserForm = !this.showAddUserForm;
          console.log("hc", this.addUserObject.admissionApplicationReviewer);
          this.db.collection("Users").doc(this.addUserObject.email).set({
            firstName: this.addUserObject.firstName,
            lastName: this.addUserObject.lastName,
            emailId: this.addUserObject.email,
            department: this.addUserObject.department,
            Role: this.addUserObject.role,
            admissionApplicationReviewer: this.addUserObject.admissionApplicationReviewer
          }).then(function (error) {
            return console.log(error);
          });

          if (this.editClicked == true) {
            if (this.tempUser.emailId != this.addUserObject.email) {
              this.deleteUser(this.tempUser);
              this.tempUser = {};
            }

            this.editClicked = false;
          }

          this.addUserObject = new _Models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        }
      }, {
        key: "editButtonClicked",
        value: function editButtonClicked(presentUser) {
          this.editClicked = true;
          this.tempUser = presentUser;
          this.addUserObject.department = presentUser.department;
          this.addUserObject.role = presentUser.Role;
          this.addUserObject.email = presentUser.emailId;
          this.addUserObject.firstName = presentUser.firstName;
          this.addUserObject.lastName = presentUser.lastName;
          this.addUserObject.admissionApplicationReviewer = presentUser.admissionApplicationReviewer;
          this.showAddUserForm = true;
        }
        /*updateButtonClicked(){
          this.showAddUserForm=!this.showAddUserForm;
          this.db.collection("Users").doc(this.addUserObject.email).set({firstName:this.addUserObject.firstName,lastName:this.addUserObject.lastName,emailId:this.addUserObject.email,department:this.addUserObject.department,Role:this.addUserObject.role}).then(error => console.log(error));
        
        }*/

      }, {
        key: "deleteUser",
        value: function deleteUser(presentUser) {
          var _this30 = this;

          this.confirmationService.confirm({
            message: 'Are you sure, do you want to delete this record?',
            header: presentUser.firstName + " " + presentUser.lastName,
            accept: function accept() {
              _this30.db.collection("Users").doc(presentUser.emailId).delete().then(function () {
                console.log("Document Successfull deleted!");
              }).catch(function (error) {
                console.error("Error removing document:", error);
              });
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.showAddUserForm = !this.showAddUserForm;
          this.editClicked = false;
          this.addUserObject = new _Models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.users.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]
      }, {
        type: _Services_authorization_service_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      static: true
    })], UserListComponent.prototype, "sort", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-list.component.css */
      "./src/app/user-list/user-list.component.css")).default]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      fireBase: {
        apiKey: "AIzaSyDOc78vAcDRjec43Dy4pH4ds0aWvqcOs8g",
        authDomain: "myfirstdemoforfiredb.firebaseapp.com",
        databaseURL: "https://myfirstdemoforfiredb.firebaseio.com",
        projectId: "myfirstdemoforfiredb",
        storageBucket: "myfirstdemoforfiredb.appspot.com",
        messagingSenderId: "659839345722",
        appId: "1:659839345722:web:378c0073684ed98816c103",
        measurementId: "G-WDJCG6W9TY"
      }
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/bharathgandham/Documents/GitHub/UHCL_CSE_PORTAL/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map