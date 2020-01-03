import { Component, OnInit } from '@angular/core';
import { paths } from '../../mocks/paths/paths';
import { Paths } from 'src/app/mocks/paths/path-type';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  paths: Paths = paths;
  showMenu:boolean = false;

  constructor(
    public location: Location
  ) { }

  ngOnInit() {
  }

  toggleMenu():void{
      this.showMenu = !this.showMenu;
  }

}
