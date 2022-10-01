import {Component} from "@angular/core";
// @ts-ignore
import {List} from "../../interfaces/weather.interface";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'app-weather',
  templateUrl:'./weather.component.html'
})
export class WeatherComponent{
  lists: List[]=[];
  constructor(private http:HttpClient) {
  }
  ngOnInit(){
      const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<{list:List[]}>(url).subscribe(data=>{
      this.lists=data.list;
})
}
}
