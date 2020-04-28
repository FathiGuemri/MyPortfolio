import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
case = 'all'
web = "web"
desktop = 'desktop'
PWA = 'pwa'
code = 'code'
URL = 'URL'

  constructor() { 

    this.web = this.desktop = this.PWA = this.code = 'all'
  }
  
  ngOnInit(): void {
   
  }
  showImg(ele: any) {
    ele.style.display = 'block'
    // document.getElementById('box').style.display = 'block'
  }
  hideImg(ele: any) {
    ele.style.display = 'none'

  }
}
