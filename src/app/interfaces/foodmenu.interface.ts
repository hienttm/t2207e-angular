export interface IMenu {
  id: number;
  name: string;
  icon: string;
}

export interface IFoodMenu {
  message: string;
  data: IMenu[];
}
//khai báo dữ liệu. seach json to ts, rồi dán dữ liệu vào rồi cop vào đây
