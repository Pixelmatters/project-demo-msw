import { rest } from 'msw'

import './commands'

import 'cypress-msw-interceptor'

declare global {
  namespace Cypress {
    interface Chainable {
      interceptRequest(
        method: string,
        url: string,
        responseResolver: Parameters<typeof rest.get>[1],
        alias?: string,
      ): Chainable<any>
    }
  }
}
