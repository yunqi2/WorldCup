import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { BuytogetherPage } from '../buytogether/buytogether';
import { LotteryPage } from '../lottery/lottery';
import { MinePage } from '../mine/mine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BuytogetherPage;
  tab3Root = LotteryPage;
  tab4Root = MinePage;

  constructor() {

  }
}
