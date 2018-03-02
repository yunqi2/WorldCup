import { Component ,ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild("lyScroll") lyScrolldiv: ElementRef;
  @ViewChild("headerColor") headerdiv: ElementRef;
  constructor(public navCtrl: NavController,statusBar: StatusBar) {

  }
  ionViewDidLoad(){
    this.headerColorOpacity();
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
    console.log("hello");
    let a = this.lyScrolldiv.nativeElement;
    console.log(a.scrollTop);
  }
  headerColorOpacity(){
    // 获取下滑
    let lscroll = this.lyScrolldiv.nativeElement;
    //获取导航栏
    let headdiv = this.headerdiv.nativeElement;
    var nowOpacity = 0;
    lscroll.onscroll = function (event){
      console.log(this.scrollTop);
      
      if(this.scrollTop < 170){
        console.log("000");
        nowOpacity = this.scrollTop/100;
      }
      headdiv.style.opacity = nowOpacity;
      if(this.scrollTop == 0){
        headdiv.style.zIndex=0;
      }else{
        headdiv.style.zIndex=100;
      }
    }
  }
items=[];
doRefresh(refresher) {
         console.log('Begin async operation', refresher);
     
         setTimeout(() => {
           this.items = [];
           for (var i = 0; i < 30; i++) {
            this.items.push( this.items.length );
          }
         console.log('Async operation has ended');
          refresher.complete();
        }, 1000);
  }
}
