import {Component} from "@angular/core";
import {IPerson} from "../../interfaces/demo-exam.interface";

@Component({
  selector:'app-demo-exam',
  templateUrl:'./demo-exam.component.html'
})
export class DemoExamComponent {
  lp: IPerson[]=[
    {name: "Tran Thi Mai Hien", title:"sale", date:"20/11/1998",city:"HaNoi", address:"8 Ton That Tung", phone:'0392259898',img:"anh_cv"},
    {name: "Nguyen Thuy Duong", title:"sale", date:"20/11/1998",city:"HaNoi", address:"8 Ton That Tung", phone:'0392259898',img:"anh_cv2"},
    {name: "Nguyen Thi Thuy", title:"sale", date:"20/11/1998",city:"HaNoi", address:"8 Ton That Tung", phone:'0392259898',img:"anh_cv3"},
    {name: "Nguyen Thi Hue", title:"sale", date:"20/11/1998",city:"HaNoi", address:"8 Ton That Tung", phone:'0392259898',img:"anh_cv4"},
  ]

}
