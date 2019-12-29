import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appImgGridThumbAnnex]'
})
export class ImgGridThumbAnnexDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
