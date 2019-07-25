export class Errors {
  constructor () {
    this.errors = {}
  }

  /**
	 *	get the error associated witht a given field
	 *
	 * @param field (string)
	 * @return string
	 */
  get (field) {
	 	if (this.errors[field]) { return this.errors[field][0] }
	 }

  /**
	 * save the errors to the this.errors property
	 *
	 * @param errors object
	 * @return null
	 */
  record (errors) {
    this.errors = errors
  }

  /**
	 * Clear the error (usually when user starts typing)
	 *
	 * @param field string
	 * @return null
	 */
  clear (field) {
    delete this.errors[field]
  }

  /**
	 * If there are any errors at all (can be used to disable btns)
	 *
	 * @return bool
	 */
  any () {
    return Object.keys(this.errors).length > 0
  }
}
