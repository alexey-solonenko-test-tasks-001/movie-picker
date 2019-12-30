import { QueryStringConsumer } from 'src/app/service-interfaces/query-url-consumer';

export interface LiveSearchConfig extends QueryStringConsumer {
    followUpUrl?:string,
};