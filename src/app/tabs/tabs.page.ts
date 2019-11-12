import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}


  @HostListener('document:ionBackButton', ['$event'])
  overrideHardwareBackAction(event: any) {
    console.log('back button');
    event.detail.register(100, async () => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    });
  }
}
