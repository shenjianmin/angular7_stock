import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class StockService {

  constructor(public http:HttpClient) {
  }

  getStocks(): Observable<any> {
    return this.http.get('/api/stock');
  }

  getStock(id:number): Observable<any>{
    return this.http.get('/api/stock/'+id)
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
