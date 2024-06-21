import * as Styles from '@/app/[locale]/terms-of-service/_components/styles'

interface TermsProps {
  lang: string
}

const Terms20220306_en = ({ lang }: TermsProps) => {
  if (lang === 'ko') return null

  return (
    <>
      <Styles.Article>
        <Styles.ArticleHeader>Article 1. Purpose</Styles.ArticleHeader>
        <Styles.Desc>
          This agreement (hereinafter referred to as the "Agreement") is to regulate the terms and
          conditions for the use of the services provided by (주)풀랩 (hereinafter referred to as
          the "Company") through the STEAD website (hereinafter referred to as the "Site") operated
          by the Company, including but not limited to the STEAD and related services (hereinafter
          referred to as the "Service").
        </Styles.Desc>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 2. Definitions</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The definitions of terms used in this Agreement are as follows:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. "Site" refers to a virtual business place set up by the Company using
                    computer or telecommunication equipment to provide services to "Members," and
                    refers to the following sites where services can be provided using one
                    integrated "Member" account (ID and password).
                    <Styles.Indent>
                      <Styles.Terms>
                        <Styles.Term>- Site Name (Korean): 스테드 </Styles.Term>
                        <Styles.Term>- Site Name (English): STEAD</Styles.Term>
                        <Styles.Term>- Internet Address: www.steadhr.com</Styles.Term>
                      </Styles.Terms>
                    </Styles.Indent>
                  </Styles.Term>
                  <Styles.Term>
                    2. "Service" refers to various services provided by the Company through the
                    service pages, including but not limited to recruitment advertisement
                    management, application management, interview schedule management, and
                    collaborative recruitment tools related to recruitment tasks and recruitment
                    collaboration.
                  </Styles.Term>
                  <Styles.Term>
                    3. "Member" refers to a person who accesses the service page, concludes an
                    agreement with the Company pursuant to this Agreement, and uses the services
                    provided by the Company.
                  </Styles.Term>
                  <Styles.Term>
                    4. "Promotion" refers to services provided by the Company free of charge for a
                    certain period to allow Members to experience paid services before using them,
                    without receiving consideration for the service.
                  </Styles.Term>
                  <Styles.Term>
                    5. "Paid Service" refers to the services provided by the Company that Members
                    can use by paying a certain amount to the Company.
                  </Styles.Term>
                  <Styles.Term>
                    6. "Paid Member" refers to a Member who pays for and uses the paid services.
                  </Styles.Term>
                  <Styles.Term>
                    7. "Workspace" refers to a management system provided by the Company to enable
                    Members to use the services through the conclusion of an usage agreement between
                    the Company and the Members.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 3. Specification and Amendment of Terms</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company shall make the contents of this Agreement, including the company name,
            business location, representative's name, business registration number, contact
            information, etc., easily accessible to Members by posting them on the initial screen of
            the service or by other means of notification. However, the contents of the agreement
            may be made available for viewing through a connected screen.
          </Styles.Term>
          <Styles.Term>
            ② The Company may amend this Agreement within the scope not violating related laws and
            regulations such as the Act on Regulation of Terms and Conditions, Telecommunications
            Basic Act, Telecommunications Business Act, Act on Promotion of Information and
            Communications Network Utilization and Information Protection, and Personal Information
            Protection Act.
          </Styles.Term>
          <Styles.Term>
            ③ When the Company amends the Agreement, it shall notify the Members of the application
            date and the reason for the amendment along with the current agreement from 7 days
            before the application date to the day before the application date on the service page.
            However, in the case of changes that significantly affect the rights and obligations of
            Members, notice shall be given 30 days before the effective date.
          </Styles.Term>
          <Styles.Term>
            ④ Members have the right to refuse the amended terms. Members may express their refusal
            within 15 days from the date the amended terms are announced. If a Member refuses, the
            Company, the service provider, may terminate the contract with the Member after
            notifying the Member in advance for a period of 15 days. If a Member does not express
            refusal or uses the service after the effective date according to the preceding clause,
            it shall be deemed as consent.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 4. Interpretation of Terms</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Matters not specified in these terms shall be governed by the laws and regulations
            such as the Act on Regulation of Terms and Conditions, Telecommunications Basic Act,
            Telecommunications Business Act, Act on Promotion of Information and Communications
            Network Utilization and Information Protection, etc.
          </Styles.Term>
          <Styles.Term>
            ② If a Member enters into an individual contract with the Company to use the service,
            the individual contract shall prevail.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 5. Establishment of Service Contract</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The service contract is established when the Company accepts the application for
            membership registration by the person (hereinafter referred to as the "Applicant") who
            wishes to use the corporate member service after agreeing to the contents of this
            Agreement and the Privacy Policy.
          </Styles.Term>
          <Styles.Term>
            ② When an Applicant applies for corporate membership registration, pressing the "Agree"
            button on the corporate membership registration screen on the site or other sites shall
            be deemed as having sufficiently read and agreed to this Agreement and the Privacy
            Policy.
          </Styles.Term>
          <Styles.Term>
            ③ Approval under paragraph 1 shall be made by the Company confirming the Applicant's
            agreement to this Agreement and notifying the Applicant of the approval by email or in
            writing containing the intention to approve. Upon reaching the Applicant, the service
            contract is established.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>
          Article 6. Approval and Restriction of Application
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company approves the use of the service if there are no obstacles in business or
            technical matters for the applicant.
          </Styles.Term>
          <Styles.Term>
            ② The Company shall not approve the application in the following cases.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. In case of using a false name or using and stealing another person's name for
                  the application
                </Styles.Term>
                <Styles.Term>
                  2. If the contents of the service contract application are falsely stated or if
                  facts falsely stated after the service contract are discovered
                </Styles.Term>
                <Styles.Term>
                  3. In case an applicant under 15 years old applies. However, this does not apply
                  to children aged 13 or older and under 15 years old who have an employment permit
                  issued by the Minister of Labor.
                </Styles.Term>
                <Styles.Term>
                  4. In case of applying in violation of other stipulated matters or if approval is
                  impossible due to reasons attributable to the user
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ③ The Company may withhold approval for the following reasons until the reason for the
            restriction on approval is resolved.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  {' '}
                  1. In case there is no spare capacity of equipment of the Company{' '}
                </Styles.Term>
                <Styles.Term>
                  {' '}
                  2. In case there is a technical hindrance for the Company{' '}
                </Styles.Term>
                <Styles.Term>
                  3. In case approval is difficult due to other reasons attributable to the Company
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 7. Protection and Management of Personal Information
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company endeavors to protect the personal information of Members, including
            account information, in accordance with related laws such as the Personal Information
            Protection Act. The use and protection of Members' personal information shall be in
            accordance with the separate privacy policy notified by the Company. However, the
            Company's privacy policy does not apply to linked sites other than the official service
            site provided by the Company.
          </Styles.Term>
          <Styles.Term>
            ② The Company shall not be responsible for any information, including account
            information of "Members," exposed due to the fault of Members.
          </Styles.Term>
          <Styles.Term>
            ③ The Company operates a customer center to respond to requests for viewing, correcting,
            deleting, and suspending the processing of personal information of Members and job
            applicants, including Members.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term> - Customer Center: contact@steadhr.com </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 8. Outsourcing of Personal Information</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company performs personal information processing tasks entrusted by Members, such
            as collecting personal information of job applicants, within the following purposes and
            scope as a delegatee.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>1. Application function for job applicants</Styles.Term>
                <Styles.Term>2. Management function of applicant's application</Styles.Term>
                <Styles.Term>3. Evaluation function for job applicants</Styles.Term>
                <Styles.Term>
                  4. Tracking function for the application route of job applicants
                </Styles.Term>
                <Styles.Term>
                  5. Coordination/setting function of interview schedule for job applicants
                </Styles.Term>
                <Styles.Term>6. Email sending/receiving function for job applicants</Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ② The Company shall perform the personal information processing tasks under paragraph 1
            until the execution of the usage agreement concluded according to this Agreement is
            terminated.
          </Styles.Term>
          <Styles.Term>
            ③ Except when obtaining written approval from Members, the Company shall not transfer or
            re-outsource personal information entrusted by Members to third parties.
          </Styles.Term>
          <Styles.Term>
            ④ The Company takes administrative and technical measures necessary for ensuring the
            security of personal information in accordance with related laws such as the Personal
            Information Protection Act, Standards for the Security Measures for Personal Information
            Protection, and Standards for Technical and Managerial Measures for the Security of
            Personal Information.
          </Styles.Term>
          <Styles.Term>
            ⑤ Members may supervise the following matters regarding the Company, and the Company
            shall respond unless there are special reasons.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>1. Status of personal information processing</Styles.Term>
                <Styles.Term>2. Access or connection status of personal information</Styles.Term>
                <Styles.Term>3. Target of access or connection of personal information</Styles.Term>
                <Styles.Term>
                  4. Compliance with prohibition of use/provision beyond the purpose and
                  re-outsourcing
                </Styles.Term>
                <Styles.Term>5. Compliance with security measures such as encryption</Styles.Term>
                <Styles.Term>
                  6. Other matters necessary for the protection of personal information
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ⑥ Members may check and demand correction of the facts regarding each item of paragraph
            5, and the Company shall perform unless there are special reasons.
          </Styles.Term>
          <Styles.Term>
            ⑦ When the outsourcing period ends, the Company shall destroy personal information
            within 7 days unless there are special reasons and confirm it with the Members.
          </Styles.Term>
          <Styles.Term>
            ⑧ If the Company or its employees, or other contractors of the Company violate the
            obligations under the usage agreement or cause the termination of the usage agreement
            due to reasons attributable to the Company or its employees, the Company shall
            compensate the Members or other data subjects for any damages incurred. If the Member
            has fully or partially compensated for the damages incurred by other data subjects, the
            Member may claim recourse against the Company.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 9. Member Account and Password</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Members use the email address selected by the user as the account ID for smooth use of
            the service, protection of member information, and convenience of service usage
            guidance. However, the Company may refuse or restrict the use of an account if the
            account is deemed antisocial, infringing on public morals, or may be mistaken for an
            operator.
          </Styles.Term>
          <Styles.Term>
            ② Members must diligently manage their account information and shall be responsible for
            any damages caused by their negligent management of their account information or
            granting of usage to third parties.
          </Styles.Term>
          <Styles.Term>
            ③ Members may freely set their passwords within the standards set by the Company, and
            passwords once set can be changed anytime by the Member.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 10. Notice to Members</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① When the Company notifies Members, unless otherwise specified in this Agreement, the
            notification may be sent to the email address used as the account.
          </Styles.Term>
          <Styles.Term>
            ② In the case of notifications to all Members, the Company may post them on the service
            page or other announcement pages (Notion) for 7 days or more to supplement the
            notification under paragraph 1. However, in the case of content that significantly
            affects the rights and obligations of Members, it shall be posted 30 days prior to the
            effective date.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>
          Article 11. Provision and Suspension of Services
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Members may use the services provided by the Company in accordance with the rules
            established by the Company such as this Agreement and operational policies.
          </Styles.Term>
          <Styles.Term>
            ② From the time the Company approves the membership of Members, it shall provide the
            following services, and shall provide the services throughout the year, 24 hours a day
            as a principle.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. Services as a solution supporting recruitment management tasks of Members
                  <Styles.Indent>
                    <Styles.Terms>
                      <Styles.Term>- Workspace creation and management</Styles.Term>
                      <Styles.Term>- Creation and posting of job postings</Styles.Term>
                      <Styles.Term>- Setting recruitment processes</Styles.Term>
                      <Styles.Term>
                        - Applicant management (including application viewing service, interview
                        scheduling function)
                      </Styles.Term>
                      <Styles.Term>- Collaboration evaluation function</Styles.Term>
                      <Styles.Term>
                        - Creation and sending/receiving of dedicated email accounts for the Company
                      </Styles.Term>
                      <Styles.Term>
                        - Other functions included in the Company's solutions
                      </Styles.Term>
                    </Styles.Terms>
                  </Styles.Indent>
                </Styles.Term>
                <Styles.Term>
                  2. Related services such as contents, functions, etc. provided in addition to the
                  Company's services
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ③ The Company may temporarily suspend the provision of services if there are substantial
            reasons such as maintenance, replacement, or failure of information communication
            facilities such as servers. In such cases, the Company shall notify Members through the
            method specified in this Agreement before the suspension of service provision. However,
            if it is inevitable for the Company to notify in advance, it may notify afterwards.
          </Styles.Term>
          <Styles.Term>
            ④ The Company may conduct regular inspections if necessary for the provision of
            services, and the regular inspection time shall be announced on the service page.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 12. Contents of Recruitment Collaboration Tool Service
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company may provide the service described in Article 2, Paragraph 2, and its
            contents are as follows:
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>- Online recruitment collaboration tool service</Styles.Term>
                <Styles.Term>
                  - Opening job postings and issuing applicant reception links
                </Styles.Term>
                <Styles.Term>- Recruiting and managing applicants for job postings</Styles.Term>
                <Styles.Term>- Email-based communication with job applicants</Styles.Term>
                <Styles.Term>
                  - Formation of teams responsible for recruitment (hereinafter referred to as
                  "members") by members
                </Styles.Term>
                <Styles.Term>
                  - Document evaluation of applicants for job postings by members
                </Styles.Term>
                <Styles.Term>- Management of interview schedules</Styles.Term>
                <Styles.Term>- Group chat rooms between members within the service</Styles.Term>
                <Styles.Term>- Job applicant data and dashboard within the service</Styles.Term>
                <Styles.Term>
                  - Other services related to members' recruitment tasks within the service
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ② Depending on which Plan the Member chooses among the paid services, the provision may
            vary. The Company shall post a function manual with detailed explanations on the
            homepage.
          </Styles.Term>
          <Styles.Term>
            ③ Members must accurately describe the recruitment postings they are conducting without
            false information. Any problems that may arise if a member creates recruitment postings
            that are untrue or violate relevant laws shall be borne entirely by the member unless
            the Company has intentional or gross negligence.
          </Styles.Term>
          <Styles.Term>
            ④ Members must utilize the personal information of job applicants stated in applications
            only for recruitment activities. If members misuse personal information for other
            business, advertising, marketing purposes, or disclose it to third parties, they may
            bear legal responsibility under relevant laws such as the Personal Information
            Protection Act. All damages arising from the misuse of personal information by members
            shall be borne by the member unless there is intentional or gross negligence on the part
            of the Company.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 13. Changes in Service Contents</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company has comprehensive authority over production, modification, maintenance,
            and repair of the services provided to members.
          </Styles.Term>
          <Styles.Term>
            ② The Company may continuously modify, add, or terminate all or part of the services
            provided, such as new service contents, various bug fixes, or as necessary for operation
            or technical reasons.
          </Styles.Term>
          <Styles.Term>
            ③ If the content of the service changes, the Company shall announce it on the service
            page and, if necessary, notify individual members of the announcement through separate
            written notification.
          </Styles.Term>
          <Styles.Term>
            ④ The Company may provide the Business Plan among the paid services free of charge
            during the trial period, at its discretion. After the trial period, the Company shall
            provide the service only to workspaces that have paid the service usage fee. Free trials
            are provided only once upon initial account creation.
          </Styles.Term>
          <Styles.Term>
            ⑤ The Company provides free trials or other free services at its sole discretion and
            judgment. The Company has no obligation to provide, maintain, or guarantee such free
            trials or free services. If the Company determines that a member unfairly repeatedly
            uses free trials or free services or abuses them for other intentions, purposes, or
            methods, it may not provide or suspend and discontinue the provision of free trials and
            free services at any time.
          </Styles.Term>
          <Styles.Term>
            ⑥ Seven days before the expiration of the free trial period, the Company shall notify
            the member via email of the expiration of the free trial and the method of transitioning
            to paid services and confirm the member's agreement to transition to paid services.
            Members who do not use paid services after the free trial period expires will not be
            able to access related data.
          </Styles.Term>
          <Styles.Term>
            ⑦ The Company may restrict or suspend all or part of the service if:
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. There are unavoidable reasons such as war, riot, natural disasters, or national
                  emergencies.
                </Styles.Term>
                <Styles.Term>
                  2. There is an interruption in service due to power failure, equipment failure, or
                  excessive use of capacity.
                </Styles.Term>
                <Styles.Term>
                  3. It is unavoidable due to maintenance or construction of service equipment.
                </Styles.Term>
                <Styles.Term>
                  4. There are other circumstances where the Company cannot provide the service due
                  to its overall circumstances.
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ⑧ Except in cases where the cause of the service change or suspension is intentional or
            gross negligence on the part of the Company, the Company shall not be responsible for
            any problems arising from changes or suspensions of the service.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>
          Article 14. Provision of Information and Posting of Advertisements
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The Company may post various information deemed necessary by members during service
            use on the Company's homepage.
          </Styles.Term>
          <Styles.Term>
            ② The Company may post third-party advertisements on the service page to maintain the
            Service, etc.
          </Styles.Term>
          <Styles.Term>
            ③ The Company shall not be liable for any loss or damage incurred by members'
            participation in or communication or transactions with third-party advertisements
            mentioned in Paragraph 2.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 15. Ownership of Posts and Rights</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Copyrights and intellectual property rights to the content provided by the Company
            within the service and created by the Company belong to the Company.
          </Styles.Term>
          <Styles.Term>
            ② The copyright of posts created by members within the service belongs to the members.
          </Styles.Term>
          <Styles.Term>
            ③ Information contained in the resumes of job applicants viewed by members may not be
            used for purposes other than recruitment.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 16. Restriction on Use, etc.</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① If a member violates the obligations of these Terms and Conditions or disrupts the
            normal operation of the service in any other way, the Company may temporarily or
            permanently block or suspend the member's use of the service and terminate the service
            contract.
          </Styles.Term>
          <Styles.Term>
            ② Notwithstanding the provisions of Paragraph 1, if a member engages in actions
            prohibited under Article 24, Paragraph 1 of these Terms and Conditions, or if the member
            grossly or repeatedly violates the obligations of these Terms and Conditions, or if the
            Company reasonably determines based on related circumstances and situations, the Company
            may immediately block or suspend the member's use of the service and terminate the
            service contract without giving the member a period for correction.
          </Styles.Term>
          <Styles.Term>
            ③ When the Company blocks, suspends, or terminates a member's use of the service
            pursuant to this Article, the Company shall provide prior notice to the member as
            stipulated in Article 10. However, if such notice violates laws or has a significantly
            adverse effect on the Company's provision of the service, the Company may omit or delay
            such notice.
          </Styles.Term>
          <Styles.Term>
            ④ If a member's use of the service is blocked, suspended, or the service contract is
            terminated due to the member's fault under this Article, all benefits provided to the
            member related to the service shall be extinguished to the fullest extent permitted by
            law, and the Company shall not compensate separately for this.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>
          Article 17. Termination of Membership Contract, etc.
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Members can apply for withdrawal through the service account settings
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>- Basic settings</Styles.Term>
                <Styles.Term>
                  - Members can apply for withdrawal through the withdrawal function, and the
                  Company must process it immediately in accordance with relevant laws and
                  regulations.
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ② If a member who has applied for paid services requests withdrawal, the withdrawal
            request will be processed after the remaining usage contract period (remaining days of
            the month) for which payment has been completed has elapsed. However, this does not
            apply if the member requests immediate withdrawal.
          </Styles.Term>
          <Styles.Term>
            ③ All member information shall be deleted immediately after withdrawal, except for
            information that needs to be retained under related laws and the Company's privacy
            policy or information necessary to prevent re-registration.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 18. Fees for Paid Services</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Paid services commence from the time the Company approves the member's application for
            paid services (or on a designated date announced in advance for certain services)
            (hereinafter referred to as the "Commencement Date of Paid Services"). If the Company
            cannot commence the paid services due to technical reasons or other circumstances, it
            shall notify the member in advance in accordance with Article 10.
          </Styles.Term>
          <Styles.Term>
            ② When a member applies for paid services, the Company notifies the member of the
            details of the application. If there is any discrepancy in the member's intention, the
            member must request correction or modification from the Company, and the Company must
            process the request according to the member's instructions. However, if the payment has
            already been made, it shall be subject to the provisions of withdrawal as stipulated in
            these Terms and Conditions.
          </Styles.Term>
          <Styles.Term>
            ③ The Company provides the following paid services and may add or modify service
            contents according to its circumstances and other conditions. Members must pay for paid
            services separately for each workspace.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. Basic Plan
                  <Styles.Indent>
                    <Styles.Terms>
                      <Styles.Term>- Recommended for companies without hiring managers</Styles.Term>
                      <Styles.Term>
                        - Functions: basic functions such as job postings, application reception,
                        applicant tracking, and applicant email sending
                      </Styles.Term>
                    </Styles.Terms>
                  </Styles.Indent>
                </Styles.Term>
                <Styles.Term>
                  2. Standard Plan
                  <Styles.Indent>
                    <Styles.Terms>
                      <Styles.Term>- Recommended for companies with hiring managers</Styles.Term>
                      <Styles.Term>
                        - Functions: Basic Plan functions + talent pool archiving, applicant data
                        download, scheduled sending of applicant results
                      </Styles.Term>
                    </Styles.Terms>
                  </Styles.Indent>
                </Styles.Term>
                <Styles.Term>
                  3. Business Plan
                  <Styles.Indent>
                    <Styles.Terms>
                      <Styles.Term>- Recommended for companies with recruiting teams</Styles.Term>
                      <Styles.Term>
                        - Functions: Standard Plan functions + group chat rooms, applicant data
                        upload, building recruitment pages
                      </Styles.Term>
                    </Styles.Terms>
                  </Styles.Indent>
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ④ The Company announces details of paid services, including pricing policies and
            detailed function descriptions, on the service page.
          </Styles.Term>
          <Styles.Term>
            ⑤ The Company may change the pricing policy of the supplied paid services for
            operational or technical reasons, and when changing usage fees, it shall notify
            individual members via email at least 30 days before the effective date of the changes,
            specifying the changed usage fee details and the effective date of the changes.
          </Styles.Term>
          <Styles.Term>
            ⑥ Changes to the announced usage fees as per paragraph 5 shall apply to all members from
            the effective date of the changes. However, changes in usage fees shall not affect the
            amounts agreed upon in advance for paid services or other amounts paid by corporate
            members prior to the effective date of the changes.
          </Styles.Term>
          <Styles.Term>
            ⑦ If there is a separate agreement between the Company and the member regarding the use
            fees of paid services, such agreement shall take precedence over these Terms and
            Conditions.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 19. Credits</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Credits are provided to members for reasons such as purchasing paid services, events,
            promotions, or other customer rewards, and are attributed to the member's account.
          </Styles.Term>
          <Styles.Term>
            ② Credits received by members can be used like cash at a value of 1 credit per 1 won
            when paying for paid services, and the usage scope may be expanded according to the
            Company's policy in the future. However, credits provided by the Company cannot be
            converted into cash or other cash-equivalent payment methods.
          </Styles.Term>
          <Styles.Term>
            ③ If the reasons for the provision as per paragraph 1 are cancelled, terminated, or
            revoked, the Company shall recover all credits provided for such reasons. If there are
            no credits to recover, the Company shall charge the member an amount calculated at 1 won
            per credit.
          </Styles.Term>
          <Styles.Term>
            ④ If a member cancels, terminates, or revokes the use of paid services paid for using
            credits, the member cannot receive a refund of the credits used.
          </Styles.Term>
          <Styles.Term>
            ⑤ If no separate validity period is specified when credits are provided, the credits can
            be used permanently.
          </Styles.Term>
          <Styles.Term>
            ⑥ If any of the following apply, credits provided to members shall be extinguished
            within the maximum extent permitted by law, and shall not be transferred even upon
            re-registration:
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>1. If a member terminates the service usage contract.</Styles.Term>
                <Styles.Term>
                  2. If a member is processed for withdrawal or suspended from service usage by the
                  Company.
                </Styles.Term>
                <Styles.Term>
                  3. If a member deletes the workspace to which the credits are attributed.
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 20. Payment Methods</Styles.ArticleHeader>
        <Styles.Desc>
          The payment methods available to members for payment of paid services are as follows.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>1. Credit card</Styles.Term>
            <Styles.Term>2. Virtual account</Styles.Term>
            <Styles.Term>3. Bank transfer</Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 21. Withdrawal of Subscription, Refund, and Suspension of Paid Services Regular
          Payment
        </Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Paid members may request cancellation (withdrawal of subscription) to the company
            under the following conditions: 1. When the use of the paid service has not commenced
            after the supply date of the paid service. 2. In case of service unavailability due to
            the company's network or system failure. 3. When the use of the paid service is
            difficult due to reasons attributable to the company.
          </Styles.Term>
          <Styles.Term>
            ② If a paid member suspends regular payment of a paid service due to termination or
            withdrawal of the service contract, the company will refund the amount deducted based on
            the period of use from the monthly fee.
          </Styles.Term>
          <Styles.Term>
            ③ Withdrawal of subscription can be done by the paid member through the service page,
            and it takes effect when the intention reaches the company. The company promptly
            notifies the paid member after receiving the member's intention.
          </Styles.Term>
          <Styles.Term>
            ④ Upon confirmation of the withdrawal request by the paid member, if there is a refund
            amount, the company promptly requests suspension or cancellation of payment to the
            relevant payment operator based on the payment method and refunds through the same
            payment method used by the paid member. However, individual refund methods, refund
            periods, etc., may differ depending on the payment method, as announced by the company
            in advance through email or the service homepage.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. In the case of payment methods requiring confirmation of receipt, within 3
                  business days from the date of confirmation of receipt.
                </Styles.Term>
                <Styles.Term>
                  2. In cases where the payment operator for each payment method has pre-determined
                  the deadline for suspending payment or canceling payment through an agreement with
                  the company.
                </Styles.Term>
                <Styles.Term>
                  3. If the paid member does not promptly provide the information or data necessary
                  for the refund process to the company (such as failure to submit the account and
                  identification card copy of the applicant for cash refunds, or providing an
                  account under a different name).
                </Styles.Term>
                <Styles.Term>4. When there is explicit consent from the member.</Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ⑤ In accordance with the "Content Industry Promotion Act" Article 28 and the "Guidelines
            for the Protection of Content Users," the company may deduct additional expenses and
            fees incurred or to be incurred and refund the remaining amount.
          </Styles.Term>
          <Styles.Term>
            ⑥ For paid services received as gifts by members or obtained free of charge through
            promotions, etc., where members do not directly pay the cost, the company is not
            obligated to refund the paid service fees to the members.
          </Styles.Term>
          <Styles.Term>
            ⑦ If a member violates the obligations specified in these terms, the company may
            terminate or cancel the service contract, restrict service use, or claim damages, etc.
            In this case, the member may apply for objections to the company's measures through the
            procedure set by the company. If the objection is confirmed to be valid, the company may
            resume service usage, and if the user proves no intentional or negligent fault, the
            company will extend the usage period for the duration of the service suspension.
          </Styles.Term>
          <Styles.Term>
            ⑧ In the case of monthly regular payments for paid services based on the member's
            application or consent, if the member fails to pay the usage fee, automatic termination
            of the usage right may occur due to overdue payment. Therefore, paid members who wish to
            maintain the paid service must take measures in advance to prevent overdue payment or
            payment method defaults.
          </Styles.Term>
          <Styles.Term>
            ⑨ If a paid member deletes the workspace while using the paid service, the paid service
            will be terminated immediately, and refunds will be made according to the method
            described in paragraph 2. In this case, the paid member's information and service usage
            details are processed according to these terms, except as provided by relevant laws and
            regulations.
          </Styles.Term>
          <Styles.Term>
            ⑩ If a member has been subject to sanctions such as termination of the service contract
            due to violation of the obligations specified in these terms, the company will not
            refund the usage fee to the member unless there is intentional or serious negligence on
            the part of the company.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 22. Adjustment of Overpaid Usage Fees</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① In the event of excessive payment related to paid service payments, the company will
            refund the entire overpayment in the same manner as the payment of the usage fee.
          </Styles.Term>
          <Styles.Term>
            ② In cases where excessive payment occurs due to the company's fault, the entire excess
            amount will be refunded. However, if excessive payment occurs due to the member's fault,
            the member shall bear the reasonable cost incurred by the company in refunding the
            excess payment within a reasonable range, and the company may deduct such costs before
            refunding the excess payment.
          </Styles.Term>
          <Styles.Term>
            ③ If a member claims excessive payment and requests a refund, the company may refuse the
            refund if it can prove that the usage fee for the paid service has been legitimately
            imposed.
          </Styles.Term>
          <Styles.Term>
            ④ The company may take the following measures regarding the detailed refund process of
            overpaid usage fees.
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. When either the company or the member discovers the overpayment, they notify
                  the other party via email or other means. The company requests the necessary
                  information for the refund (member's name, payment proof documents, etc.) from the
                  member in the case of overpayment, and pays the excess amount within 7 days from
                  the date of providing the information.
                </Styles.Term>
                <Styles.Term>
                  2. Excessively paid usage fees are refunded, and if agreed by the member, the
                  corresponding amount is deducted from the next month's usage fee.
                </Styles.Term>
                <Styles.Term>
                  3. If a member who should receive a refund of the usage fee has unpaid usage fees,
                  the unpaid usage fees are deducted first from the refundable usage fee, and the
                  remaining amount is returned.
                </Styles.Term>
                <Styles.Term>
                  4. In the case of undercharging of the usage fee, the company will notify the
                  member of the undercharge and bill the undercharged amount along with the next
                  month's usage fee. If there is no usage fee to be billed in the following month,
                  the undercharge will be notified immediately and billed.
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 23. Company's Obligations</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The company shall not engage in acts prohibited by these terms and related laws or
            acts contrary to public morals, and shall make every effort to provide continuous and
            stable services.
          </Styles.Term>
          <Styles.Term>
            ② The company shall establish a security system, including protection of all personal
            information, including credit information, to ensure that members can use the service
            safely, and shall disclose and comply with the personal information handling policy.
          </Styles.Term>
          <Styles.Term>
            ③ If opinions or complaints raised by members are objectively recognized as legitimate,
            the company shall promptly process them within a reasonable period. However, if
            processing takes a long time, the company shall inform the member of the delay and
            provide notice of the processing process and results via bulletin board or email.
          </Styles.Term>
          <Styles.Term>
            ④ The company shall make efforts to provide convenience to members in procedures and
            contents related to contracts with members, such as the conclusion, modification, and
            termination of the service contract.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 24. Member's Obligations</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Members shall not use the services provided by the company for purposes other than
            their original purpose or engage in the following acts:
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. Providing false information or information of others or false facts when
                  registering information with the company for the purpose of membership application
                  or information modification, which is not the company's information or the
                  personal information of the person in charge
                </Styles.Term>
                <Styles.Term>
                  2. Submitting materials with false contents, forged, or altered materials when
                  requested to submit evidence materials under Article 6 of these Terms
                </Styles.Term>
                <Styles.Term>
                  3. Using the information obtained through the service for purposes other than
                  recruitment
                </Styles.Term>
                <Styles.Term>
                  4. Using the service for purposes other than those explicitly notified and
                  informed by the company, such as members' recruitment activities
                </Styles.Term>
                <Styles.Term>
                  5. Collecting ideas, introducing jobs, introducing side businesses, and raising
                  funds by pretending to recruit or hire
                </Styles.Term>
                <Styles.Term>
                  6. Hindering or causing damage to job seekers' job search activities by presenting
                  job announcements with completely different job types, job contents, work
                  conditions, etc., from the actual ones
                </Styles.Term>
                <Styles.Term>
                  7. Repeatedly paying and canceling paid services more than three times without
                  valid reasons
                </Styles.Term>
                <Styles.Term>
                  8. Impersonating others or falsely stating relationships with others
                </Styles.Term>
                <Styles.Term>
                  9. Using other people's names, information, other members' accounts and passwords,
                  etc., for purposes such as service registration, usage, and payment, or using them
                  improperly
                </Styles.Term>
                <Styles.Term>10. Exploiting known or unknown bugs to use the service</Styles.Term>
                <Styles.Term>
                  11. Infringing or damaging the honor or rights of the company or third parties, or
                  interfering with the company's or third parties' business, or causing damage to
                  the company or third parties by using the service
                </Styles.Term>
                <Styles.Term>
                  12. Infringing on the company's intellectual property rights, third parties'
                  intellectual property rights, portrait rights, etc., or collecting, storing,
                  disseminating, or posting other members' personal information without the
                  company's approval
                </Styles.Term>
                <Styles.Term>
                  13. Deceiving third parties for profit or using the service provided by the
                  company improperly, causing harm to third parties
                </Styles.Term>
                <Styles.Term>
                  14. Modifying the site without special permission from the company, adding or
                  inserting other programs to the site, hacking servers, reverse engineering,
                  leaking and altering source code, building separate servers, arbitrarily changing
                  or impersonating parts of the website to impersonate the company
                </Styles.Term>
                <Styles.Term>
                  15. Impersonating the company's employees or administrators, or registering
                  documents or sending emails by impersonating others or using others' names
                </Styles.Term>
                <Styles.Term>
                  16. Using the service for profit, business, advertising, political activities,
                  illegal election campaigns, etc., without the company's consent
                </Styles.Term>
                <Styles.Term>
                  17. Sending specific information, such as advertising information, against the
                  will of recipients, including job seekers who obtained personal information
                  through the company's service
                </Styles.Term>
                <Styles.Term>
                  18. Creating additional or new workspaces with the same account or the same domain
                  during the free trial period provided by the company without explicit permission
                  from the company to exceed the free trial period notified by the company without
                  additional costs for using the service
                </Styles.Term>
                <Styles.Term>
                  19. Disrupting the operation of the service by illegal and malicious programs,
                  hacking, or similar methods
                </Styles.Term>
                <Styles.Term>
                  20. Accessing and using the service beyond the authority granted by the company
                </Styles.Term>
                <Styles.Term>
                  21. Registering, using, or accessing the service for the purpose of developing or
                  releasing services identical, similar, or related to the service
                </Styles.Term>
                <Styles.Term>
                  22. Acts that are practically the same as or equivalent to each of the above items
                  when considering their specific intentions, purposes, and contents comprehensively
                  and reasonably
                </Styles.Term>
                <Styles.Term>
                  23. Other illegal or unfair acts that violate public order and morals and laws
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
          <Styles.Term>
            ② Members are obliged to check the notices on the company's website and the amendments
            to the terms of use and comply with them, and they shall not engage in acts that disrupt
            the company's business.
          </Styles.Term>
          <Styles.Term>
            ③ Members are responsible for managing their accounts, and they shall not allow third
            parties to use them.
          </Styles.Term>
          <Styles.Term>
            ④ The company may establish specific types of acts corresponding to subparagraphs ① and
            ② and the following subparagraphs in the operation policy, and members are obligated to
            comply with them:
            <Styles.Indent>
              <Styles.Terms>
                <Styles.Term>
                  1. Restrictions on the establishment of account names and passwords for members
                </Styles.Term>
                <Styles.Term>
                  2. Matters recognized by the company as operationally necessary within the scope
                  that does not infringe on the essential rights of members to use the service
                </Styles.Term>
              </Styles.Terms>
            </Styles.Indent>
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 25. Compensation for Damages</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① If a member incurs damages due to defects in the paid services provided by the
            company, for which the company is responsible, the company shall compensate for such
            damages.
          </Styles.Term>
          <Styles.Term>
            ② If a member causes damages to the company by violating the obligations of these Terms,
            or if the member causes damages to the company in relation to the use of the service,
            the member shall compensate the company for the damages.
          </Styles.Term>
          <Styles.Term>
            ③ If the company receives claims for damages or lawsuits from third parties other than
            the member due to illegal acts or violations of these Terms by the member in using the
            service, the member shall indemnify the company at their own responsibility and expense.
            If the company is not exempted from liability, the member shall be liable for all
            damages incurred by the company.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 26. Limitation of Liability</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① The company shall be exempted from liability for providing services due to force
            majeure or circumstances equivalent to force majeure, such as national policies, which
            make it impossible to provide the services.
          </Styles.Term>
          <Styles.Term>
            ② The company shall be exempted from liability for service interruption or failure to
            use due to the member's fault, interruption of telecommunication services by
            telecommunications operators, or failure to provide normal services resulting in damages
            to the member.
          </Styles.Term>
          <Styles.Term>
            ③ The company shall not be liable for the reliability, accuracy, etc., of information,
            data, or facts posted by members related to the service.
          </Styles.Term>
          <Styles.Term>
            ④ The company shall be exempted from liability unless there is intentional or gross
            negligence on the part of the company when mediating transactions, etc., between
            "members" or between members and third parties through the service.
          </Styles.Term>
          <Styles.Term>
            ⑤ The company does not guarantee the accuracy and truthfulness of information about job
            applicants to members, and members must directly verify the accuracy and truthfulness of
            the information received from job applicants. The company shall not be liable for any
            damages related to the accuracy and truthfulness of information about job applicants,
            unless there is intentional or gross negligence on the part of the company.
          </Styles.Term>
          <Styles.Term>
            ⑥ The company shall not be liable for the use of free services unless otherwise provided
            by relevant laws and regulations.
          </Styles.Term>
          <Styles.Term>
            ⑦ The company shall not be liable for blocking, suspending the use, or terminating the
            service according to Article 16 due to reasons attributable to the member, within the
            scope permitted by law.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 27. Governing Law and Jurisdiction</Styles.ArticleHeader>
        <Styles.Terms>
          <Styles.Term>
            ① Laws of the Republic of Korea shall govern any lawsuit between the company and the
            member.
          </Styles.Term>
          <Styles.Term>
            ② Disputes between the company and the member shall be brought to the competent court
            under the Civil Procedure Act.
          </Styles.Term>
        </Styles.Terms>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Supplementary Provisions</Styles.ArticleHeader>
        <Styles.Desc>This agreement shall be effective from March 6, 2022.</Styles.Desc>
      </Styles.Article>
    </>
  )
}

export default Terms20220306_en
