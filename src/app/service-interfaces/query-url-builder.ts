export interface QueryUrlBuilder {
    getQueryURL(callee?: string, clientId?: string, callType?:string) : URL
}