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
  buttonValue: any;
  rejectionReasons:any=[];
  rejectionPossibleReasons=['GRE Total too low', 'Verbal below 140', 'Quant below 150', 'GPA too low', 'Weak academic performance in foundation', 'Inadeqaute preparation for the MS program']
  showRejectOptions:boolean=false;
  rejectClicked: boolean=true;
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
     acceptAdmission(event){
      this.showRejectOptions=false;
       this.buttonValue=event.srcElement.value;
       //console.log("hai")
      if (!this.selectedStudent.accepts.includes(this.loggedInUserDataFromDB.emailId)) {
        this.selectedStudent.accepts.push(this.loggedInUserDataFromDB.emailId);

      }
      if (this.selectedStudent.rejects.includes(this.loggedInUserDataFromDB.emailId)) {
        this.selectedStudent.rejects.splice(this.selectedStudent.rejects.indexOf(this.loggedInUserDataFromDB.emailId), 1);
      }
      if(this.selectedStudent.accepts.length>1){
        this.selectedStudent.status='Accepted';
      }
      else{ 
        if(this.selectedStudent.rejects.length>1){
          this.selectedStudent.status='Rejected';
      }
      else{
        this.selectedStudent.status='Under Review';
      }
      }

      this.showCommentSection=true;
      this.db.collection("Admissions").doc(`${this.selectedStudent.studentId}`).update({ rejects: this.selectedStudent.rejects, accepts: this.selectedStudent.accepts, status:this.selectedStudent.status})
      


     }
     saveComment(){
      //this.selectedStudent.comments.push({comment:this.commentText, decision:this.buttonValue, commentedBy:this.loggedInUserDataFromDB.emailId})
      this.showCommentSection=false;
      if(this.commentText!=null){
      if(this.selectedStudent.comments.length>0){
      for(let i=0;i<this.selectedStudent.comments.length;i++){
        if(this.loggedInUserDataFromDB.emailId==this.selectedStudent.comments[i].commentedBy){
          this.selectedStudent.comments.splice(i,1);
          this.selectedStudent.comments.push({comment:this.commentText, decision:this.buttonValue, commentedBy:this.loggedInUserDataFromDB.emailId})
        }
        else{
          this.selectedStudent.comments.push({comment:this.commentText, decision:this.buttonValue, commentedBy:this.loggedInUserDataFromDB.emailId})
        }
      }
    }
    else{
      this.selectedStudent.comments.push({comment:this.commentText, decision:this.buttonValue, commentedBy:this.loggedInUserDataFromDB.emailId})

    }
    
      this.db.collection("Admissions").doc(`${this.selectedStudent.studentId}`).update({ comments: this.selectedStudent.comments})
    }
     }
     rejectAdmission(event){
       this.showCommentSection=false;
      this.buttonValue=event.srcElement.value;
      this.showRejectOptions=true;
     }
     saveRejectionReasons(){
       if(this.rejectClicked==true){

        if (!this.selectedStudent.rejects.includes(this.loggedInUserDataFromDB.emailId)) {
          this.selectedStudent.rejects.push(this.loggedInUserDataFromDB.emailId);
          
        }
        if (this.selectedStudent.accepts.includes(this.loggedInUserDataFromDB.emailId)) {
          this.selectedStudent.accepts.splice(this.selectedStudent.accepts.indexOf(this.loggedInUserDataFromDB.emailId), 1);
        }
        //this.selectedStudent.rejects.push(this.loggedInUserDataFromDB.emailId);
       this.selectedStudent.rejectionReasonsFromModel[this.loggedInUserDataFromDB.emailId]=this.rejectionReasons;
       if(this.selectedStudent.rejects.length>1){
         this.selectedStudent.status='Rejected';
       }
       else{
        if(this.selectedStudent.accepts.length>1){
          this.selectedStudent.status='Accepted';
        }
        else{
        this.selectedStudent.status='Under Review';
        }
      }
       this.db.collection("Admissions").doc(`${this.selectedStudent.studentId}`).update({ rejectionReasonsFromModel: this.selectedStudent.rejectionReasonsFromModel,rejects: this.selectedStudent.rejects, accepts: this.selectedStudent.accepts, status:this.selectedStudent.status})
       }
     }
  ngOnInit() {
    this.admissionsService.getSelectedStudentObj().subscribe(data => {
      this.selectedStudent = data;
    });
    //console.log(this.selectedStudent);
  }

}
