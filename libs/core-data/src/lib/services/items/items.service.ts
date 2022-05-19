import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@fem/api-interfaces';

const API_ENDPOINT = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private model = 'items';

  constructor(private http: HttpClient) { }

  public all(){
    return this.http.get<Item[]>(this.getUrl());
  }

  public find(id: string){
    return this.http.get<Item>(this.getUrlWithId(id));
  }

  public create(item: Item){
    return this.http.post(this.getUrl(), item);
  }

  public update(item: Item){
    return this.http.put(this.getUrlWithId(item.id), item);
  }

  public delete(item: Item){
    return this.http.delete(this.getUrlWithId(item.id));
  }


  private getUrl(){
    return `${API_ENDPOINT}${this.model}`;
  }

  private getUrlWithId(id: string){
    return `${this.getUrl()}/${id}`;
  }
}
