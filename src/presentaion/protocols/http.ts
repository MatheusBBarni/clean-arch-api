export interface HttpResponse {
  statusCode: number
  body: {
    [key in string]: any
  }
}

export interface HttpRequest {
  body?: {
    [key in string]: any
  }
}
