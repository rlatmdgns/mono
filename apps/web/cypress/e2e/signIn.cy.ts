import { PAGE } from '../../src/shared/constants'

Cypress.on('uncaught:exception', (err, runnable) => {
  return !err.message.includes('getTranslateData')
})
describe('로그인 테스트', () => {
  beforeEach(() => {
    cy.setCookie('NEXT_LOCALE', 'ko')
    cy.visit(PAGE.SIGN_IN)
    cy.url().should('include', PAGE.SIGN_IN)

    cy.get('input[name="user_email"]').as('emailField')
    cy.get('input[name="user_password"]').as('passwordField')
  })

  describe('이메일 유효성 체크', () => {
    it('이메일을 입력하지 않은 경우', () => {
      cy.get('@emailField').clear().blur()
      cy.contains('이메일을 입력해주세요.').should('be.visible')
    })

    it('올바르지 않은 형식의 이메일을 입력한 경우', () => {
      cy.get('@emailField').type('testnaver.com').blur()
      cy.contains('이메일 형식이 맞지 않습니다.').should('be.visible')
      cy.get('@emailField').clear()
    })
  })

  describe('비밀번호 유효성 체크', () => {
    it('비밀번호를 입력하지 않은 경우', () => {
      cy.get('@passwordField').clear().blur()
      cy.contains('비밀번호를 입력해주세요.').should('be.visible')
    })

    it('올바르지 않은 형식의 비밀번호를 입력한 경우', () => {
      cy.get('@passwordField').type('1234!').blur()
      cy.get('@passwordField').clear()
    })
  })

  describe('로그인 시나리오', () => {
    it('유효한 이메일과 비밀번호로 로그인', () => {
      cy.get('@emailField').type('test@poollab.kr')
      cy.get('@passwordField').type('Poollab123!')

      cy.get('button[type="submit"]').click()

      cy.url().should('include', PAGE.HOME)
    })
  })
})
