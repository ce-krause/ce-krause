type ExceptionCode = 404 | 500

export default class Exception {
  private code
  private message
  private description
  private fullError

  constructor(
    code: ExceptionCode,
    message: string,
    description: string,
    fullError?: unknown
  ) {
    this.code = code
    this.message = message
    this.description = description
    this.fullError = fullError
  }

  static handleException(ex: unknown) {
    console.log(
      ex instanceof Exception
        ? ex.exception
        : new Exception(
            500,
            'Unknown Exception',
            'An unknown error has ocurred.',
            ex
          ).exception
    )

    return false
  }

  get exception() {
    return this.fullError
      ? {
          code: this.code,
          message: this.message,
          description: this.description,
          fullError: this.fullError,
        }
      : {
          code: this.code,
          message: this.message,
          description: this.description,
        }
  }
}
