export class FetchError extends Error {
  constructor(
    message = 'We could not get the data you requested. Please try again later.'
  ) {
    super(message);
    this.name = 'FetchError';
  }
}
