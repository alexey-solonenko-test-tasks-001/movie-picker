import { SafeUrl } from '@angular/platform-browser';

export interface ImgThumbModel {
    id: number,
    name: string,
    img: SafeUrl | string,
    description?: string,
    detailUrl?: string,
};