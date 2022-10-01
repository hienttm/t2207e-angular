
import {Component, Input} from "@angular/core";
@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
//  thẻ tên là: app-student còn giao diên lấy từ student.component.html sang
})
export class ClassroomComponent extends Component{
 classroomName='T2207E';
 numberStudent=12;

 @Input()
 clName?:string;

 upNumber(){
   this.numberStudent++;
 }
studentName='Nguyễn Văn An';
studentName1='Nguyễn Văn Binh';
studentName2='Nguyễn Văn linh';
studentName3='Nguyễn Văn Minh';
}
