import {Component, Input} from "@angular/core";
@Component({
  selector:'app-student',
  templateUrl:'./student.component.html'
//  thẻ tên là: app-student còn giao diên lấy từ student.component.html sang
})
export class StudentComponent extends Component{
  //Xây dựng nội dung trong Typescript
@Input()
  stName?: string; //khai báo biến stName từ classroom.component gửi xuống
}
