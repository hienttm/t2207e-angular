import {Component} from "@angular/core";
import {IFoodMenu, IMenu} from "../../interfaces/foodmenu.interface";
import {IFood} from "../../interfaces/food.interface";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'app-food',
  templateUrl:'./food.component.html'
})
export class FoodComponent {
  data: IMenu[]=[];
  foods: IFood[]=[];

//  khai bao bien data co kieu du lieu IMenu

//  tìm cách lấy dữ liệu từ api rồi cho vào biến data: viết hàm phía dưới và bỏ extends Component
  constructor(private http:HttpClient) {
  }
  ngOnInit(){ //hàm này tự động chạy lhi print giao diện ra
    const url='https://foodgroup.herokuapp.com/api/menu'
    this.http.get<IFoodMenu>(url).subscribe(data=>{ // ép kiểu dữ liệu trả về kiểu IFoodMenu
      this.data=data.data;
    })
  //  trong app.module.ts --> NgModule --> imports--> imports thêm: HttpClientModule
    const url2="https://foodgroup.herokuapp.com/api/today-special"
    this.http.get<{data:IFood[]}>(url2).subscribe(data=>{
      this.foods=data.data;
    })
  }
}


