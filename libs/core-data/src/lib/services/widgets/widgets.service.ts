import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Widget } from '@fem/api-interfaces';


const API_ENDPOINT = 'http://localhost:3333/api/'

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  private model = 'widgets';

  constructor(private http: HttpClient) { }

  public all(){
    return this.http.get<Widget[]>(this.getUrl());
  }

  public find(id: string){
    return this.http.get<Widget>(this.getUrlWithId(id));
  }

  public create(widget: Widget){
    return this.http.post(this.getUrl(), widget);
  }

  public update(widget: Widget){
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  public delete(widget: Widget){
    return this.http.delete(this.getUrlWithId(widget.id));
  }


  private getUrl(){
    return `${API_ENDPOINT}${this.model}`;
  }

  private getUrlWithId(id: string){
    return `${this.getUrl()}/${id}`;
  }

}
