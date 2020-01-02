import { SafeUrl } from '@angular/platform-browser';

export interface ImgThumbModel {
    id: number,
    name: string,
    img: string | SafeUrl,
    description?: string,
    detailUrl?: string,
};