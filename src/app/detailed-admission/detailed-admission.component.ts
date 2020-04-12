import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AdmissionsService } from '../Services/admissions.service';
import { FileService } from '../Services/file.service';
import { AdmissionsModel } from '../Models/AdmissionsModel';
import { AuthorizationServiceService } from '../Services/authorization-service.service';

@Component({
  selector: 'app-detailed-admission',
  templateUrl: './detailed-admission.component.html',
  styleUrls: ['./detailed-admission.component.css']
})
export class DetailedAdmissionComponent implements OnInit {
  selectedStudent: any;
  showCommentSection:boolean=false;
  commentText:string;
  admissionsModelObject=new AdmissionsModel();
  loggedInUserDataFromDB: any;
  constructor(private admissionsService:AdmissionsService,private fileService:FileService, private db:AngularFirestore,private authorizationService: AuthorizationServiceService) {
    this.authorizationService.getUserFromAuthorizationServiceObj().subscribe(data => {
      this.loggedInUserDataFromDB = data;
      //console.log("in nav bar",this.loggedInUserDataFromDB);
      
    });
   }
   open(url){
    window.open(url,"_blank");
  }
  downloadFile(uniqueNameForReference,linkToView,typeOfFile){
    this.fileService.setHttpRequestToDownloadFile(uniqueNameForReference,linkToView,typeOfFile); 
     }
     acceptAdmission(){
      if (!this.selectedStudent.accepts.includes(this.loggedInUserDataFromDB.emailId)) {
        this.selectedStudent.accepts.push(this.loggedInUserDataFromDB.emailId);
        
      }
      if (this.selectedStudent.rejects.includes(this.loggedInUserDataFromDB.emailId)) {
        this.selectedStudent.rejects.splice(this.selectedStudent.rejects.indexOf(this.loggedInUserDataFromDB.emailId), 1);
      }
      this.showCommentSection=true;
      this.db.collection("Admissions").doc(`${this.selectedStudent.studentId}`).update({ rejects: this.selectedStudent.rejects, accepts: this.selectedStudent.accepts })
      


     }
     saveComment(){
      this.selectedStudent.comments.push({comment:this.commentText, commentedBy:this.loggedInUserDataFromDB.emailId})
      this.showCommentSection=false;

     }
     rejectAdmission(){
      if (!this.selectedStudent.rejects.includes(this.loggedInUserDataFromDB.emailId)) {
        this.selectedStudent.rejects.push(this.loggedInUserDataFromDB.emailId);
        
      }
      if (this.selectedStudent.accepts.includes(this.loggedInUserDataFromDB.emailId)) {
        this.selectedStudent.accepts.splice(this.selectedStudent.accepts.indexOf(this.loggedInUserDataFromDB.emailId), 1);
      }
      //this.selectedStudent.rejects.push(this.loggedInUserDataFromDB.emailId);
      this.db.collection("Admissions").doc(`${this.selectedStudent.studentId}`).update({ rejects: this.selectedStudent.rejects, accepts: this.selectedStudent.accepts })

     }
  ngOnInit() {
    this.admissionsService.getSelectedStudentObj().subscribe(data => {
      this.selectedStudent = data;
    });
    //console.log(this.selectedStudent);
  }

}
