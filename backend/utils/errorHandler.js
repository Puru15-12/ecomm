export default class ErrorHandler extends Error { // Update export
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // Create stack property
    Error.captureStackTrace(this, this.constructor);
  }
}

