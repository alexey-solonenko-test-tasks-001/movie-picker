import { Type } from '@angular/core';
import { ThumbAnnex } from 'src/app/comps/grids/images-grid/single-thumb/single-thumb/thumb-annex';
import { QueryUrlBuilder } from 'src/app/service-interfaces/query-url-builder';
import { QueryStringConsumer } from 'src/app/service-interfaces/query-url-consumer';

export interface ImagesGridConfig extends QueryStringConsumer{
    annexType?: Type<ThumbAnnex>,
    detailsUrl?: string,
    imgHostUrl?: string,
    thumbsUrl: string,
    queryBuilder?: QueryUrlBuilder,
}

