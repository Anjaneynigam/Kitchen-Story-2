import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseURL = "http://localhost:8080/api/v1/menu";

  constructor(private httpClient: HttpClient) { }

  getMenuList(): Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(`${this.baseURL}`);
  }
  createmenu(menu: Menu): Observable<object>{
    console.log(menu)
    return this.httpClient.post(`${this.baseURL}`,menu)

  }
  getMenuById(id: number):Observable<Menu> {
    return this.httpClient.get<Menu>(`${this.baseURL}/${id}`);
  }
  updateMenu(id: number, menu: Menu): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,menu);
  }
  deleteMenu(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`,);
  }
}
