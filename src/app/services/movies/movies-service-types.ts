import { Subject } from 'rxjs';

export interface MoviesServiceComponentData {
    genres?: string[],
    term?: string,
    genresDispatcher?:Subject<string[]>,
    listReloader?:Subject<boolean>,
}