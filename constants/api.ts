import { Serializable } from 'child_process';

export interface ResponseFormatted {
  url: string;
  status: number;
  headers: Record<string, string>;
  response: ResponseParsed;
  responseFormatted: boolean;
}

export enum ResponseFormat {
  BODY = 'body',
  JSON = 'json',
  TEXT = 'text',
}

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete',
}

export interface RequestData {
  resource?: string;
  headers?: Record<string, string>;
  params?: TApiParams;
  data?: string | Buffer | Serializable;
  failOnStatusCode?: boolean;
  is4xxRetryable?: boolean;
  apiEndpoint?: string;
  name?: string;
}

export type TApiParams = Record<string, string | number | boolean>;

export type ResponseParsed = Serializable | string | Buffer;
