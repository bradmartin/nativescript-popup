import { Observable } from '@nativescript/core/data/observable';
import { ItemEventData } from '@nativescript/core/ui/list-view';
import { Popup } from 'nativescript-popup';

export class HelloWorldModel extends Observable {
  private popup: Popup;
  items = [
    { name: 'Osei' },
    { name: 'Sean' },
    { name: 'Brad' },
    { name: 'Some' },
    { name: 'More' },
    { name: 'Names' },
    { name: 'To' },
    { name: 'Make' },
    { name: 'This' },
    { name: 'List' },
    { name: 'Scroll' },
  ];

  constructor() {
    super();
  }

  itemTap(args: ItemEventData) {
    this.hidePopup(`${this.items[args.index]['name']} : ${args.index}`);
  }

  showPopup(source, view, options = {}) {
    this.popup = new Popup({
      height: 30,
      width: 80,
      unit: '%',
      elevation: 10,
      borderRadius: 25,
      ...options
    });

    this.popup.showPopup(source, view).then((data) => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  hidePopup(index) {
    this.popup.hidePopup(index);
  }
}
