import { Widget } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WidgetsService {

  public mockedWidgets: Widget[] = [
    {"id" : "1", "title": "Nest Widget FTW 01", "description": "Pending....."},
    {"id" : "2", "title": "Nest Widget FTW 02", "description": "Pending....."},
    {"id" : "3", "title": "Nest Widget FTW 03", "description": "Pending....."}
  ];

  create(widget: Widget) {
    this.mockedWidgets = [
      ...this.mockedWidgets, Object.assign({}, widget, {id: uuidv4() })
    ];
  }

  findAll() {
    return this.mockedWidgets;
  }

  findOne(id: string) {
    const widget = this.mockedWidgets.find(w => w.id === id);
    return widget;
  }

  update(id: string, widget: Widget) {
    this.mockedWidgets.map((w) => (w.id === id ? widget : w));
    return this.mockedWidgets;
  }

  remove(id: string) {
    this.mockedWidgets.filter((w) => w.id !== id);
    return this.mockedWidgets;
  }
}
