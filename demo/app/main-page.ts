import {
  Builder,
  Button,
  EventData,
  knownFolders,
  Label,
  Page,
  path as NSFilePath,
  ScrollView,
  StackLayout
} from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';
let page;
const vm = new HelloWorldModel();

export function pageLoaded(args: EventData) {
  // Get the event sender
  page = <Page>args.object;
  page.bindingContext = vm;
}

export function showPopup() {
  const stack: any = new StackLayout();
  stack.height = '100%';
  const lbl: any = new Label();
  lbl.text = 'Osei';
  lbl.backgroundColor = 'red';
  lbl.marginTop = 5;
  lbl.height = 40;
  stack.addChild(lbl);
  const lblOther: any = new Label();
  lblOther.text = 'Fortune';
  lblOther.backgroundColor = 'blue';
  lblOther.height = 40;
  stack.addChild(lblOther);
  const btn: any = new Button();
  btn.text = 'Push';
  btn.height = 40;
  stack.addChild(btn);
  const dismissBtn = new Button();
  dismissBtn.text = 'Hide';
  dismissBtn.on('tap', (args) => {
    page.bindingContext.hidePopup();
  });

  stack.addChild(dismissBtn);
  const sv = new ScrollView();
  sv.content = stack;
  page.bindingContext.showPopup(page.getViewById('btn'), sv);
}

export function showPopupList() {
  const listPath = NSFilePath.join(
    knownFolders.currentApp().path,
    '/template/list.xml'
  );
  const component = Builder.load(listPath);
  component.bindingContext = vm;
  page.bindingContext.showPopup(page.getViewById('btnList'), component);
}

export function showTemplatePopup(args) {
  page.bindingContext.showPopup(page.getViewById('btn'), '~/template/bomb.xml');
}
