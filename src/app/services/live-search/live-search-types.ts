import { QueryStringConsumer } from 'src/app/service-interfaces/query-url-consumer';

export interface LiveSearchConfig extends QueryStringConsumer {
    followUpUrl?:string,
    updater?:LiveSearchUpdater,
};

export interface LiveSearchUpdater {
    updateTerm(id:string,term:string):void
}