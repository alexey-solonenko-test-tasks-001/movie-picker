import { Component, OnInit, ContentChildren, Input, TemplateRef, Type, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ThumbAnnex } from './thumb-annex';
import { ImgThumbModel } from 'src/app/models/app/comps/img.thumb.model';
import { ImgGridThumbAnnexDirective } from './img-grid-thumb-annex.directive';

@Component({
  selector: 'app-single-thumb',
  templateUrl: './single-thumb.component.html',
  styleUrls: ['./single-thumb.component.sass']
})
export class SingleThumbComponent implements OnInit {

  @Input() thumb: ImgThumbModel;
  @Input() annexComponentType: Type<ThumbAnnex>;
  @ViewChild(ImgGridThumbAnnexDirective, { static: true }) annexHost: ImgGridThumbAnnexDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.annexComponentType);
    const viewContainerRef = this.annexHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).thumb = this.thumb;
    this.thumb.img = this.thumb.img;
  }

}
