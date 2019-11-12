import { Component, ViewChild, HostListener } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dataList = []

  item = {
    src: '../../assets/img/in.jpg'
  }

  constructor(private router: Router) {
    for (let i = 0; i < 25; i++) { 
      this.dataList.push("Item number "+i);
    }
  }
  @HostListener('document:ionBackButton', ['$event'])
  overrideHardwareBackAction(event: any) {
    console.log('back button');
    event.detail.register(100, async () => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    });
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 25; i++) { 
        this.dataList.push("Item number "+this.dataList.length);
      }
      event.target.complete();
      
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }


  onClickButton(){
    this.router.navigate(['comment']);
  }
}
