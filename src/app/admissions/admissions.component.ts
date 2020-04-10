import { element } from 'protractor';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit,ViewChild } from '@angular/core';
import { AdmissionsModel } from '../Models/AdmissionsModel';
import { AuthorizationServiceService } from '../Services/authorization-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {
admissionsModelObject=new AdmissionsModel();
showAddStudentApplicationForm:boolean;
greVerbalPossibleScore=[];
greTotalPossibleScore=[];
greEssayPossibleScore=[];
  loggedInUserDataFromDB: any;
  applicants: MatTableDataSource<any>;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['Action','studentId','firstName', 'lastName', 'greVerbalScore','greQuantScore','greTotalScore','greEssayScore','intendedProgram','gpa'];
  editClicked: boolean;
  tempStudent: any;
  constructor(private db: AngularFirestore,private authorizationService: AuthorizationServiceService) {
    this.showAddStudentApplicationForm=false;
    for(let i=130; i<171;i++){
      this.greVerbalPossibleScore.push(i);
      this.greTotalPossibleScore.push(i+130);
    }
    for(let j=0;j<6.5;j=j+0.5){
      this.greEssayPossibleScore.push(j);
    }
    this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(data => {
      this.loggedInUserDataFromDB = data;
      //console.log("in nav bar",this.loggedInUserDataFromDB);
      
    });
    this.db.collection("Admissions").valueChanges().subscribe(snap=>{
      this.applicants=new MatTableDataSource(snap);
      this.applicants.sort = this.sort;
    });
    
   }
  addStudentApplication(){
    this.showAddStudentApplicationForm=true;
  }
  uploadFile(event){

  }
  saveAdmissionApplication(){
    //console.log(typeof(this.admissionsModelObject.studentId));
    this.admissionsModelObject.greTotalScore=+(this.admissionsModelObject.greVerbalScore) + +(this.admissionsModelObject.greQuantScore);
    this.db.collection('Admissions').doc(`${this.admissionsModelObject.studentId}`).set({
      firstName:this.admissionsModelObject.firstName,
      lastName:this.admissionsModelObject.lastName,
      studentId:this.admissionsModelObject.studentId,
      greVerbalScore:this.admissionsModelObject.greVerbalScore,
      greQuantScore:this.admissionsModelObject.greQuantScore,
      greTotalScore:`${this.admissionsModelObject.greTotalScore}`,
      greEssayScore:this.admissionsModelObject.greEssayScore,
      intendedProgram:this.admissionsModelObject.intendedProgram,
      gpa:this.admissionsModelObject.gpa,
      intendedValidators:this.admissionsModelObject.intendedValidators,
      uploadedBy:this.loggedInUserDataFromDB.emailId,
      date:Date.now()
    })
    
    this.showAddStudentApplicationForm=false;
    this.admissionsModelObject=new AdmissionsModel();
  }
  cancel(){
    this.showAddStudentApplicationForm=false;
    this.admissionsModelObject=new AdmissionsModel();
  }
  editButtonClicked(element){
    this.editClicked=true;
    this.tempStudent=element;
    this.admissionsModelObject=element;
    //this.admissionsModelObject.intendedValidators.setValue(element.intendedValidators);
    this.showAddStudentApplicationForm=true;

  }
  deleteApplication(element){
    this.db.collection('Admissions').doc(`${element.studentId}`).delete()
    .then(function(){
      console.log("Document Successfull deleted!");
    }).catch(
      function(error){
        console.error("Error removing document:",error);
      }
    );

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.applicants.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    
  }

}
