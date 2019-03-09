const { Signale } = require('signale')
import * as Ora from 'ora'

// Signale options
const options = {
  disabled: false,
  interactive: false,
  stream: process.stdout,
  scope: 'craftbase',
  types: {
    craftbase: {
      badge: '🔩',
      color: 'cyanBright',
      label: 'craftbase'
    }
  }
}

/**
 * Logger class
 * Used for custom console logging.
 */
export default class Logger {
  protected console: any
  protected spinner: any

  /**
   * Logger constructor
   */
  constructor() {
    // @ts-ignore
    this.console = new Signale(options)
    // @ts-ignore
    this.spinner = new Ora({ spinner: 'circleHalves' })
  }

  /**
   * Log a console message using the craftbase style defined above.
   * @param {string} message
   */
  log(message: string) {
    // @ts-ignore
    this.console.craftbase(message)
  }

  /**
   * Start spinning the spinner instance.
   * @param {string} message
   */
  spin(message: string) {
    this.spinner.text = message
    if (this.spinner.isSpinning === false) {
      this.spinner.start()
    }
  }

  /**
   * Stop the spinner, set it to green, and persist it.
   * @param {string} message
   */
  succeed(message: string) {
    if (this.spinner.isSpinning === true) {
      this.spinner.succeed(message)
    }
  }

  /**
   * Stop the spinner, set it to red, and persist it.
   * @param {string} message
   */
  fail(message: string) {
    if (this.spinner.isSpinning === true) {
      this.spinner.fail(message)
    }
  }

  /**
   * Print a warning message to console.
   * @param message
   */
  warn(message: string) {
    this.console.warn(message)
  }

  /**
   * Stop and remove the spinner.
   */
  stop() {
    this.spinner.stop()
  }
}
