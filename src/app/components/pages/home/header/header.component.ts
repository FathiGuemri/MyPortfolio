import { Component, OnInit } from '@angular/core';
import { showMore } from "../../../../showmore";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    showMore('.text-resume',250)
  }

}
