import { QueryUrlBuilder } from './query-url-builder';

export interface QueryStringConsumer {
    queryBuilder?: QueryUrlBuilder
    queryBuilderClientId?: string
}