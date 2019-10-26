import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

//http://jservice.io/popular/18418
export class DataService {

  private baseURL:string = "http://jservice.io"
  public dataResult: any;
  public currentIndex: string;
  public category:any = [];
  constructor(private http: HttpClient) {
  }

  async getCategories(categoryKeyWord){
    // params = params.append('var2', val2);
      let params = new HttpParams();
      params = params.append('count', '25');
      params = params.append('offset', this.currentIndex);
      let dataGet = await this.http.get<any>(this.baseURL+"/api/categories",{params:params})
      await dataGet.subscribe(
        (data) => {
          for(var i=0;i<data.length;i++){
            if(data[i].title.includes(categoryKeyWord) && this.category.length<26){
              this.category.push(data[i])
            }
          }
          console.log(this.currentIndex);
          let newIndex = parseInt(this.currentIndex)+24;
          this.currentIndex = newIndex.toString();
          if(this.category.length<25){
            this.getCategories(categoryKeyWord)
          }
          // console.log(this.category)
        }  
      );
  }
}
