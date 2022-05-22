import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';


@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetService: WidgetsService){};

  public selectWidget(widget: Widget){
    this.selectedWidget.next(widget);
  }

  public loadWidgets(){
    this.widgetService
    .all()
    .subscribe((widgets: Widget[]) => {
      this.allWidgets.next(widgets);
    })
  }

  public createWidget(widget: Widget){
    this.widgetService.create(widget).subscribe(res => {
      this.loadWidgets();
    });
    
  }

  public updateWidget(widget: Widget){
    this.widgetService.update(widget);
  }

  public deleteWidget(widget: Widget){
    this.widgetService.delete(widget);
  }





}
