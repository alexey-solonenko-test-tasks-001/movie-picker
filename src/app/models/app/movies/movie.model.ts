import { ImgThumbModel } from '../comps/img.thumb.model';

export interface Movie extends ImgThumbModel{
    //id: number, // inherited
    key?: string,
    //name: string, // inherited
    //description?: string, // inherited
    genres?: Array<string>,
    rate?: string,
    length?: string,
    //img: string, // inherited
};