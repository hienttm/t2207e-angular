import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interface";
@Component({
  selector:'app-home',
  templateUrl:'./home.component.html'
})
export class HomeComponent extends Component{
  student: IStudent={id:1,name:'Nam',age:18,address:'8 ton that thuyet'};
//  khai báo biến IStudent có kiểu dữ liệu ở rộng

  arrayNumber: number[]=[1,2,3,4,5];
  stringArray:string[]=["Nguyễn Hoàng Nam","Nguyễn Minh Khánh","Nguyễn Thùy Dương"]
  ls:IStudent[]=[
    {id:1,name:"Nguyễn Hoàng Nam",age:19,address:"8 ton that tung"},
    {id:2,name:"Nguyễn Minh Khánh",age:29,address:"8 ton that tung"},
    {id:3,name:"Nguyễn Hoàng Nam",age:19,address:"8 ton that tung"},

  ]
}
