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
describe('온보딩 시나리오 템플릿 리스트를 확인한다.', () => {
  context('시나리오 중 마지막 항목의 제목을 수정한다.', () => {
    it('마지막 항목의 제목이 변경된다.', () => {
      cy.get('[data-testid=bookcards] > div')
        .last()
        .find('[data-testid="scenario_card_dropdown"]')
        .click()

      cy.get('#dropdown [data-testid="modify_scenario_button"]').click()
      cy.wait(2000)
      
      cy.get('input[data-testid="title"]').type('Cypress Test')
      cy.get('input[data-testid="description"]').as('Cypress Test Description')
      cy.get('[data-testid="modify_scenario_title_save_button"]').click()
      cy.wait(3000)
      cy.contains('Cypress Test')
    })
  })
})
