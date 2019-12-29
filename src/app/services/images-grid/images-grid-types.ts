import { Type } from '@angular/core';
import { ThumbAnnex } from 'src/app/comps/grids/images-grid/single-thumb/single-thumb/thumb-annex';

export interface ImagesGridConfig {
    annexTemplate?: Type<ThumbAnnex>,
    detailsUrl?: string,
    imgHostUrl?: string,
    thumbsUrl: string,
}

