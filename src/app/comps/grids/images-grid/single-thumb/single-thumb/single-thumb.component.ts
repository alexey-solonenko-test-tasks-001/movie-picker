import { Component, OnInit, Input, Type, ViewChild, ComponentFactoryResolver, HostBinding } from '@angular/core';
import { ThumbAnnex } from './thumb-annex';
import { ImgThumbModel } from 'src/app/models/app/comps/img.thumb.model';
import { ImgGridThumbAnnexDirective } from './img-grid-thumb-annex.directive';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { useAnimation, transition, trigger, state, style, animate } from '@angular/animations';
import { zoomInAnimation } from './single-thumb-img-animation';

@Component({
  selector: 'app-single-thumb',
  templateUrl: './single-thumb.component.html',
  styleUrls: ['./single-thumb.component.scss'],
  animations: [
    trigger('showHide', [
      state('hidden', style({
        transform: 'scale(0.1)',
      })),
      state('shown', style({
        transform: 'scale(1)'
      })),
      transition('hidden <=> shown', [
         //useAnimation(zoomInAnimation),
        animate('0.75s'),
      ]),
    ])
  ]
})
export class SingleThumbComponent implements OnInit {

  @Input() annexComponentType: Type<ThumbAnnex>;
  @ViewChild(ImgGridThumbAnnexDirective, { static: true }) annexHost: ImgGridThumbAnnexDirective;
  @Input() compId:string;
  imgSrc;
  loading: boolean = true;
  thumbLoader;
  @Input() thumb: ImgThumbModel;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
    /*  */
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.annexComponentType);
    const annexHostRef = this.annexHost.viewContainerRef;
    annexHostRef.clear();

    const annexHostCompRef = annexHostRef.createComponent(componentFactory);
    (annexHostCompRef.instance).thumb = this.thumb;
    (annexHostCompRef.instance).compId = this.compId;

    (async () => {
      // @ts-ignore: Unreachable code error
      let res = await this.http.get<Blob>(this.thumb.img, { responseType: 'blob' }).toPromise();
      const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
      await wait(Math.random() * 2000 + 350);
      // @ts-ignore: Unreachable code error
      let urlCreator = window.URL || window.webkitURL;
      let objUrl = urlCreator.createObjectURL(res);
      this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objUrl);
      this.loading = false;
    })();


  }

}
