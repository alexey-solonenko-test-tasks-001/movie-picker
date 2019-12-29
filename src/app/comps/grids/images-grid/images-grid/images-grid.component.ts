import { Component, OnInit, Input, TemplateRef, Type } from '@angular/core';
import { ImagesGridService } from 'src/app/services/images-grid/images-grid.service';
import { ImgThumbModel } from 'src/app/models/app/comps/img.thumb.model';
import { ThumbAnnex } from '../single-thumb/single-thumb/thumb-annex';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.sass']
})
export class ImagesGridComponent implements OnInit {

  constructor(private imgGridService: ImagesGridService) {

  }

  @Input() compId: string;
  thumbs: ImgThumbModel[];
  annexComponentType: Type<ThumbAnnex>;
  loadingThumbs: boolean = false;

  ngOnInit() {
    this.getThumbs();
  }

  getThumbs(): void {
    this.loadingThumbs = true;
    let conf = this.imgGridService.getConfig(this.compId);
    this.imgGridService.getThumbs(conf.thumbsUrl).subscribe(thumbs => {
      this.annexComponentType = conf.annexTemplate;
      this.thumbs = thumbs;
      this.thumbs.forEach((t, idx) => {
        this.thumbs[idx].img = (conf.imgHostUrl ? conf.imgHostUrl : '') + t.img;
        this.thumbs[idx].detailUrl = conf.detailsUrl + '/' + t.id;
      });
      this.loadingThumbs = false;
    });
  }
}
