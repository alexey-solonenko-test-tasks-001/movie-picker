import { Component, OnInit } from '@angular/core';
import { Paths } from 'src/app/mocks/paths/path-type';
import { paths } from '../../mocks/paths/paths';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  paths: Paths = paths;

  constructor() { }

  ngOnInit() {
  }

}
