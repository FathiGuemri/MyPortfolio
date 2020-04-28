import { Component, OnInit } from '@angular/core';
import { showMore } from "../../../../showmore";
@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss']
})
export class WhatIDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
showMore('.text-more',70)
  }
}

