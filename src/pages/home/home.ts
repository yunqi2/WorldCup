import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  /**
   * 用户滑动后 继续自动滑动
   */
  continueToSlide(){
   this.slides.startAutoplay();
  }
  goto(){
    var i=this.slides.getActiveIndex();
    console.log(i);
  }
  log(){
    console.log("hello k");
    
  }
}
