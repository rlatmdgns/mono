import { PAGE } from '@/shared/constants'

Cypress.on('uncaught:exception', (err, runnable) => {
  return !err.message.includes('getTranslateData')
})

beforeEach(() => {
  cy.setCookie('NEXT_LOCALE', 'ko')
  cy.visit(PAGE.SIGN_IN)
  cy.url().should('include', PAGE.SIGN_IN)

  cy.get('input[name="user_email"]').as('emailField')
  cy.get('input[name="user_password"]').as('passwordField')

  cy.get('@emailField').type('bom.shin@poollab.kr')
  cy.get('@passwordField').type('Poollab123!!')

  cy.get('button[type="submit"]').click()

  cy.wait(3000)

  cy.visit(PAGE.SCENARIOS)
})
describe('온보딩 시나리오 생성', () => {
  context('온보딩 시나리오를 시나리오 만들기 버튼을 누릅니다.', () => {
    cy.get('[data-="create-scenario-button"]').click()

    it('신규 시나리오 생성 페이지 접속', () => {
      cy.url().should('include', PAGE.CREATE_SCENARIO)
    })
  })

  context('온보딩 시나리오 생성 페이지에서 시나리오 제목을 입력합니다.', () => {})
})
