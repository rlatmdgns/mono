import Link from 'next/link'
import * as Styles from '@/app/[locale]/terms-of-service/_components/styles'

interface TermsProps {
  lang: string
}

const Terms20230714_en = ({ lang }: TermsProps) => {
  if (lang === 'ko') return null

  return (
    <>
      <Styles.Article>
        <Styles.ArticleHeader>Article 1. Purpose</Styles.ArticleHeader>
        <Styles.Desc>
          This agreement aims to regulate the conditions of use, procedures, and other necessary
          matters of the services provided by (주)풀랩 (hereinafter referred to as the "Company")
          through the STEAD website (hereinafter referred to as the "Site") and related services
          (hereinafter referred to as the "Service") provided by the Company in connection with the
          services provided by the Company through the Site and used by subscribers (hereinafter
          referred to as "Members").
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 2. Definition of Terms</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The definitions of terms used in this agreement are as follows:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. "Site" refers to a virtual place of business set up by the Company using
                    computer or other information and communication facilities to provide services
                    to "Members" through integrated accounts (IDs and passwords) where services can
                    be accessed, including the following sites:
                    <Styles.Indent>
                      <Styles.Terms>
                        <Styles.Term>- Site Name (Korean): 스테드</Styles.Term>
                        <Styles.Term>- Site Name (English): STEAD</Styles.Term>
                        <Styles.Term>- Internet address: www.steadhr.com</Styles.Term>
                      </Styles.Terms>
                    </Styles.Indent>
                  </Styles.Term>
                  <Styles.Term>
                    2. "Service" refers to the "STEAD" recruitment collaboration tool provided by
                    the Company through the "Site," which includes functions and scope of services
                    related to recruitment tasks, such as recruitment notice management, application
                    management, and interview schedule management. "Service Plan" means a service
                    proposal adjusting the functions and scope of the service according to the
                    member's demand to enable the use of the service.
                  </Styles.Term>
                  <Styles.Term>
                    3. "Member" refers to an individual who accesses the Site, enters into an
                    agreement with the Company according to this agreement, and uses the services
                    provided by the Company. "Applicant" refers to an individual who submits an
                    application form to a member's recruitment notice through the Site.
                  </Styles.Term>
                  <Styles.Term>
                    4. "Free Trial" or "Free Service" refers to services provided by the Company for
                    a certain period without receiving usage fees from members to allow them to
                    experience the paid services before using them.
                  </Styles.Term>
                  <Styles.Term>
                    5. "Paid Service" refers to services provided by the Company that members can
                    use by paying a certain usage fee to the Company.
                  </Styles.Term>
                  <Styles.Term>
                    6. "Paid Member" refers to a member who pays for and uses the services provided
                    by the Company.
                  </Styles.Term>
                  <Styles.Term>
                    7. "Workspace" refers to the STEAD management system provided by the Company to
                    members through the conclusion of a service agreement between the Company and
                    the member for the member to use the service.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 3. Specification and Amendment of Terms</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The Company shall post the contents of this Agreement, its name, business location,
              name of the representative, business registration number, contact information, etc.,
              on the initial screen of the service or notify the members through other means so that
              members can easily know. However, the contents of the agreement may be made available
              for members to view through a connected screen.
            </Styles.Term>
            <Styles.Term>
              ② The Company may amend this agreement within the scope not violating the Act on
              Regulation of Terms and Conditions, the Basic Telecommunications Act, the
              Telecommunications Business Act, the Act on Promotion of Information and
              Communications Network Utilization and Information Protection, and the Personal
              Information Protection Act.
            </Styles.Term>
            <Styles.Term>
              ③ In the event of amending the agreement, the Company shall notify the members of the
              effective date and the reason for the amendment together with the current agreement
              from 7 days before the effective date to the day before the effective date on the
              service page. However, in the case of changes that significantly affect the rights and
              obligations of members, the notice shall be given at least 30 days before the
              effective date.
            </Styles.Term>
            <Styles.Term>
              ④ Members have the right to refuse the amended terms. Members may express their
              refusal within 15 days from the date the amended terms are announced. If a member
              refuses, the Company, as the service provider, may terminate the contract with the
              member after notifying the member in advance within a period of 15 days. If a member
              does not express refusal or uses the service after the effective date in accordance
              with the preceding clause, it is deemed that the member has agreed.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 4. Interpretation of Terms</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Matters not specified in this agreement shall be governed by relevant laws and
              regulations such as the Act on Regulation of Terms and Conditions, the Basic
              Telecommunications Act, the Telecommunications Business Act, the Act on Promotion of
              Information and Communications Network Utilization and Information Protection, etc.
            </Styles.Term>
            <Styles.Term>
              ② In the case of members entering into individual agreements with the Company to use
              the service, the individual agreement shall take precedence.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 5. Establishment of Service Agreement</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The service agreement is established by the Company's acceptance of the agreement
              and membership application of the person (hereinafter referred to as the "applicant")
              who wishes to use the service according to this agreement.
            </Styles.Term>
            <Styles.Term>
              ② When an applicant presses the "Agree" button on the membership registration screen,
              such as the Site, during the membership registration process, it is deemed that the
              applicant has read and agreed to this agreement and the privacy policy.
            </Styles.Term>
            <Styles.Term>
              ③ The acceptance of paragraph 1 shall be made by the Company confirming the
              applicant's agreement to this agreement and notifying the acceptance through an email
              or in writing containing the intention of acceptance, and the service agreement shall
              be established when such acceptance notification reaches the applicant.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 6. Approval and Restriction of Service Application
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The Company approves the service application of customers unless there is any
              hindrance in business or technical aspects.
            </Styles.Term>
            <Styles.Term>
              ② The Company does not approve the following cases:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. When the application is made under a false name or using someone else's name
                    or identity.
                  </Styles.Term>
                  <Styles.Term>
                    2. When false information is provided on the application form or if it is
                    discovered that false information was provided after the service contract has
                    been made.
                  </Styles.Term>
                  <Styles.Term>
                    3. When an individual under the age of 15 applies. However, this does not apply
                    if the individual is aged 13 or older but under 15 and possesses an employment
                    permit issued by the Minister of Labor.
                  </Styles.Term>
                  <Styles.Term>
                    4. When the application violates any provisions or is impossible to approve due
                    to the user's fault.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ③ The Company may withhold approval of the application in the following cases until
              the reasons for restriction are resolved:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. When there is no spare capacity in the Company's facilities.
                  </Styles.Term>
                  <Styles.Term>2. When there is a technical hindrance for the Company.</Styles.Term>
                  <Styles.Term>
                    3. When it is difficult for the Company to approve the application due to other
                    reasons attributable to the Company.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 7. Protection and Management of Personal Information
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The Company makes efforts to protect the personal information of members, including
              account information, in accordance with relevant laws such as the Personal Information
              Protection Act. The handling of member's personal information shall be governed by the
              separate privacy policy notified by the Company. However, the Company's privacy policy
              does not apply to linked sites other than the sites provided by the Company.
            </Styles.Term>
            <Styles.Term>
              ② The Company shall not be responsible for any information, including account
              information, exposed due to the member's fault.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 8. Entrustment of Personal Information Processing
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① During the service agreement period, members collect the personal information of
              applicants through the site, making efforts to collect only the minimum necessary
              personal information and obtaining consent from the applicants when necessary to
              protect their personal information. Members entrust the processing of applicant's
              personal information to the Company, and the Company performs the following personal
              information processing tasks as a consignee within the following purposes and scope:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. Applicant support function for job postings</Styles.Term>
                  <Styles.Term>
                    2. Management function of applicant's resumes by members
                  </Styles.Term>
                  <Styles.Term>3. Evaluation function for job applicants</Styles.Term>
                  <Styles.Term>
                    4. Tracking function of applicant's application route for job postings
                  </Styles.Term>
                  <Styles.Term>
                    5. Coordination/setting function of interview schedules for job applicants
                  </Styles.Term>
                  <Styles.Term>6. Email sending/receiving function for job applicants</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② The Company shall perform the personal information processing tasks under Paragraph
              1 until the service agreement concluded according to this Agreement is terminated.
            </Styles.Term>
            <Styles.Term>
              ③ Except with the written consent of the member, the Company cannot transfer or
              re-entrust personal information entrusted by the member to a third party for any
              purpose other than the performance of the entrusted tasks.
            </Styles.Term>
            <Styles.Term>
              ④ The Company takes necessary administrative and technical measures to ensure the
              security of personal information in accordance with relevant laws such as the Personal
              Information Protection Act, the Guidelines for the Security of Personal Information,
              and the Guidelines for Technical and Management Measures for Personal Information
              Protection.
            </Styles.Term>
            <Styles.Term>
              ⑤ Members can supervise the following matters regarding personal information, and the
              Company must respond unless there are special reasons:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. Status of personal information processing</Styles.Term>
                  <Styles.Term>2. Access or connection status of personal information</Styles.Term>
                  <Styles.Term>
                    3. Subjects accessing or connecting to personal information
                  </Styles.Term>
                  <Styles.Term>
                    4. Compliance with prohibition of use/provision and re-entrustment beyond the
                    intended purpose
                  </Styles.Term>
                  <Styles.Term>5. Compliance with security measures such as encryption</Styles.Term>
                  <Styles.Term>
                    6. Other necessary matters for the protection of personal information
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ⑥ Members may inspect and request corrections for the facts regarding each item listed
              in Paragraph 5, and the Company must comply unless there are special reasons.
            </Styles.Term>
            <Styles.Term>
              ⑦ If the entrustment period ends, the Company must destroy the personal information
              within 7 days unless there are special reasons and obtain confirmation from the
              member.
            </Styles.Term>
            <Styles.Term>
              ⑧ If the Company, its employees, or other subcontractors of the Company violate the
              obligations under the service agreement or cause termination of the service agreement
              due to the fault of the Company or its employees, the Company must compensate for any
              damages incurred by the member or a third party. If the member has compensated all or
              part of the damages to the third party, the member may claim recourse from the
              Company.
            </Styles.Term>
            <Styles.Term>
              ⑨ The Company operates a customer center to respond to requests such as viewing,
              correcting/deleting, or suspending the processing of personal information by
              applicants.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>- Customer Center: contact@steadhr.com</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 9. Member's Account and Password</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Members use the email address selected by the user as the account ID for smooth use
              of the service, protection of member information, and convenience of service usage
              guidance. However, if the Company deems that the member's account is antisocial,
              violates public morals, or may be mistaken for an operator, the Company may refuse or
              restrict the use of such account.
            </Styles.Term>
            <Styles.Term>
              ② Members must manage their account information with care, and members are responsible
              for any damages incurred due to their negligence in managing their account information
              or allowing third parties to use it.
            </Styles.Term>
            <Styles.Term>
              ③ Members are free to set their password within the standards set by the Company, and
              the set password can be changed at any time at the member's discretion.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 10. Notification to Members</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① When the Company notifies a member, unless otherwise specified in this Agreement,
              the notification may be sent to the email address used for the account.
            </Styles.Term>
            <Styles.Term>
              ② In the case of notification to all members, the Company may post it on the site or
              other notice (Notion) page for more than 7 days, which substitutes for the
              notification under Paragraph 1. However, in the case of notifying matters that
              significantly affect the rights and obligations of members, it will be posted 30 days
              before the effective date.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 11. Provision and Suspension of Service</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Members may use the services provided by the Company in accordance with the rules
              set by the Company, such as this Agreement and operational policies.
            </Styles.Term>
            <Styles.Term>
              ② The Company provides services from the time of approval of the member's
              registration, and endeavors to provide the service 24 hours a day, 7 days a week,
              throughout the year.
            </Styles.Term>
            <Styles.Term>
              ③ In the event of significant reasons such as maintenance checks, replacement, or
              malfunction of servers or other information and communication facilities, the Company
              may temporarily suspend the provision of services. In this case, the Company notifies
              the members in accordance with the method prescribed in this Agreement before the
              suspension of service. However, if there are unavoidable reasons for the Company to
              notify in advance, it may notify afterwards.
            </Styles.Term>
            <Styles.Term>
              ④ The Company may conduct regular inspections if necessary for providing the service,
              and the regular inspection time is announced on the service page.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 12. Contents of the Service</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The contents of the services provided by the Company are as follows:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    - Providing the online recruitment collaboration tool "Stead" service (providing
                    1 account per member and WorkSpace)
                  </Styles.Term>
                  <Styles.Term>- Opening job postings and issuing application links</Styles.Term>
                  <Styles.Term>
                    - Recruiting applicants and managing documents for job postings
                  </Styles.Term>
                  <Styles.Term>
                    - Email-based communication with job applicants for job postings
                  </Styles.Term>
                  <Styles.Term>
                    - Formation of teams responsible for members and recruitment (hereinafter
                    referred to as "Members")
                  </Styles.Term>
                  <Styles.Term>- Evaluation of documents for job applicants by members</Styles.Term>
                  <Styles.Term>- Management of interview schedules</Styles.Term>
                  <Styles.Term>- Group chat rooms between members within the service</Styles.Term>
                  <Styles.Term>- Job applicant data and dashboard for job postings</Styles.Term>
                  <Styles.Term>
                    - Other general services related to members' recruitment work within the service
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② The functions and scope of paid services provided to paid members by the Company may
              vary depending on the service plan selected by the member. The Company posts the types
              of service plans and service plan descriptions for each service plan on the website,
              and the service plans may be changed at any time according to the Company's policy.
            </Styles.Term>
            <Styles.Term>
              ③ Free trials or free services provided by the Company are provided under the
              following conditions. The Company provides free trials or other free services at its
              sole discretion and judgment, and the Company has no obligation to provide, maintain,
              or guarantee such free trials or free services. If the Company determines that a
              member is unfairly and repeatedly using or intending to abuse the free trials or free
              services, the Company may not provide or discontinue and suspend the provision of free
              trials and free services at any time.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    - Free trials are provided once for 30 days upon the member's initial account
                    creation.
                  </Styles.Term>
                  <Styles.Term>
                    - Free services are provided once for 30 days with a service plan higher than
                    the service plan requested by the paid member if requested by the paid member.
                  </Styles.Term>
                  <Styles.Term>
                    - The Company notifies the member by email 7 days before the expiration of the
                    free trial or free service period, and confirms the member's consent to
                    transition or change to a paid service or service plan.
                  </Styles.Term>
                  <Styles.Term>
                    - Members who do not transition or change the service after the expiration of
                    the free trial or free service period cannot access related data.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ④ Members must accurately state in the job postings that they conduct that there are
              no false facts, and if a member creates a job posting that is different from the truth
              or violates related laws and regulations, all problems that may arise are borne by the
              member unless there is intentional or gross negligence on the part of the Company.
            </Styles.Term>
            <Styles.Term>
              ⑤ Members must use the personal information of job applicants stated in the
              application form only for recruitment activities. If a member uses it for other
              business, advertising, marketing, or discloses it to a third party, the member may
              bear legal responsibility under related laws such as the Personal Information
              Protection Act. All damages arising from the misuse of personal information by the
              member shall be borne by the member unless there is intentional or gross negligence on
              the part of the Company.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 13. Change in the Contents of the Service
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The Company has comprehensive authority over the production, modification,
              maintenance, and support of the services provided to members.
            </Styles.Term>
            <Styles.Term>
              ② The Company may continuously modify, add, or abolish all or part of the services
              provided if necessary for the operation or technical aspects of the service, such as
              new service content, various bug patches, etc.
            </Styles.Term>
            <Styles.Term>
              ③ In the event of a change in the contents of the service, the Company will notify the
              members by posting the notice on the service page and, if necessary, by providing
              individual written notice to the members.
            </Styles.Term>
            <Styles.Term>
              ④ The Company may restrict or suspend all or part of the services under the following
              circumstances:
              <Styles.Terms>
                <Styles.Term>
                  1. In cases of force majeure such as war, civil unrest, natural disasters, or
                  national emergencies.
                </Styles.Term>
                <Styles.Term>
                  2. In cases where there are power outages, failures in general facilities, or
                  overwhelming usage that disrupts normal service usage.
                </Styles.Term>
                <Styles.Term>
                  3. In cases where unavoidable circumstances occur due to maintenance or
                  construction work on service facilities.
                </Styles.Term>
                <Styles.Term>
                  4. In cases where the Company cannot provide services due to various company
                  circumstances.
                </Styles.Term>
              </Styles.Terms>
            </Styles.Term>
            <Styles.Term>
              ⑤ Except in cases where the cause of service changes or suspension is intentional or
              gross negligence on the part of the Company, the Company shall not be liable for any
              problems arising from changes or suspension of the service.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>
          Article 14. Provision of Information and Advertisement Posting
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The Company may post various information deemed necessary by members during service
              use on the service page.
            </Styles.Term>
            <Styles.Term>
              ② The Company may post third-party advertisements on the service page to maintain the
              service, etc.
            </Styles.Term>
            <Styles.Term>
              ③ The Company shall not be liable for any loss or damage incurred by members'
              participation, communication, or transactions with third-party advertisements
              mentioned in Clause 2.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 15. Ownership of Posts and Rights</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The copyright and intellectual property rights to the services and content created
              by the company within the service belong to the company.
            </Styles.Term>
            <Styles.Term>
              ② The copyright of the posts created by members within the service belongs to the
              members.
            </Styles.Term>
            <Styles.Term>
              ③ Information included in the applicant's application viewed by the member may not be
              used for purposes other than recruitment purposes.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 16. Restriction on Use</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① If a member violates the obligations of these terms or disrupts the normal operation
              of the service in any other way, the company may temporarily or permanently block or
              suspend the member's use of the service and terminate the service contract.
            </Styles.Term>
            <Styles.Term>
              ② Notwithstanding the provisions of Clause 1, if a member engages in acts prohibited
              under Article 24, Paragraph 1 of these terms, or if the member significantly or
              repeatedly violates the obligations of these terms, or if the company reasonably
              determines based on relevant circumstances and situations, the company may immediately
              block or suspend the member's use of the service and terminate the service contract
              without granting a period for correction.
            </Styles.Term>
            <Styles.Term>
              ③ When the company blocks, suspends, or terminates a member's use of the service
              pursuant to this article, the company shall notify the member in advance in accordance
              with the method prescribed in Article 10. However, if such notification violates the
              law or has a significantly negative impact on the company's provision of the service,
              the company may omit or delay such notification.
            </Styles.Term>
            <Styles.Term>
              ④ If the use of the service is blocked, suspended, or the service contract is
              terminated due to the member's fault under this article, all benefits provided to the
              member in connection with the service shall be extinguished to the maximum extent
              permitted by law, and the company shall not provide separate compensation for this.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 17. Termination of Membership Agreement</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Members may request termination of the membership agreement through the service
              account settings - basic settings - membership withdrawal function, and the company
              must process it immediately in accordance with relevant laws and regulations.
            </Styles.Term>
            <Styles.Term>
              ② If a member who has applied for a paid service requests termination of the
              membership agreement, the withdrawal request is processed after the remaining period
              of the service contract (the remaining days of the month) for which payment has
              already been completed has elapsed. However, this does not apply if the member demands
              immediate withdrawal.
            </Styles.Term>
            <Styles.Term>
              ③ All member information is deleted immediately after withdrawal, except for
              information necessary to be retained under relevant laws and the company's privacy
              policy, or information necessary to prevent re-registration.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 18. Fees for Paid Services</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Indent>
              ① Paid services commence from the time the company accepts the member's application
              for paid service use (or, for certain services, from the designated date specified in
              advance after receiving the application), and if the paid services cannot be commenced
              due to technical reasons or other circumstances of the company, the company shall
              notify the member in advance in accordance with Article 10.
            </Styles.Indent>
            <Styles.Indent>
              ② When a member applies for paid services, the company notifies the member of the
              details of the application. Upon receiving the company's notification, if there is any
              discrepancy in the member's intention, the member must request correction or
              modification from the company, and the company must process it according to the
              member's request. However, if the usage fee has already been paid, the provisions of
              this agreement regarding withdrawal of subscription apply.
            </Styles.Indent>
            <Styles.Indent>
              ③ Members must pay the usage fees for paid services according to the selected service
              plan.
            </Styles.Indent>
            <Styles.Indent>
              ④ The company announces the pricing policy and detailed feature descriptions for paid
              services by service plan on the service page.
            </Styles.Indent>
            <Styles.Indent>
              ⑤ The company may change the pricing policy for supplied paid services as necessary
              for operation or technical reasons and notifies individual members of the changed
              usage fee details and the effective date of the changes by email at least 30 days
              before the application date of the changes.
            </Styles.Indent>
            <Styles.Indent>
              ⑥ The changes in usage fees announced in accordance with paragraph 5 apply to all
              members from the application date of the changes. However, the changes in usage fees
              do not affect the amounts previously agreed upon, such as the fees for paid services
              agreed upon prior to the application date of the changes.
            </Styles.Indent>
            <Styles.Indent>
              ⑦ If there is a separate agreement between the company and the member regarding the
              usage fees for paid services, the agreement takes precedence over this agreement.
            </Styles.Indent>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>

      <Styles.Article>
        <Styles.ArticleHeader>Article 20. Payment Methods</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              The payment methods available for members to use for paying the usage fees for paid
              services are as follows:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. Credit card</Styles.Term>
                  <Styles.Term>2. Bank transfer</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 21. Withdrawal of Subscription, Refund, and Suspension of Regular Payment for Paid
          Services
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Paid members may request cancellation (withdrawal of subscription) from the company
              under the following circumstances:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. If the use of the paid services has not commenced after the commencement date
                    of the paid services
                  </Styles.Term>
                  <Styles.Term>
                    2. If service usage is impossible due to a network or system failure of the
                    company
                  </Styles.Term>
                  <Styles.Term>
                    3. If the use of the paid services is difficult due to reasons attributable to
                    the company
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② If a paid member suspends regular payment for paid services due to termination or
              withdrawal of the service agreement, the company will take refund measures according
              to the refund policy posted on the site.
            </Styles.Term>
            <Styles.Term>
              ③ Withdrawal of subscription can be done by paid members through the site, and the
              withdrawal takes effect when the member's intention reaches the company, and the
              company promptly notifies the paid member of this fact after receiving the paid
              member's intention.
            </Styles.Term>
            <Styles.Term>
              ④ After confirming the request for withdrawal of subscription by a paid member, if
              there is a refund amount, the company promptly requests the suspension or cancellation
              of the payment to the relevant payment provider and refunds the amount through the
              same payment method used by the paid member. However, in cases where the company has
              announced in advance to the paid member through email or the service page, and in
              cases where there are differences in refund methods, refundable periods, etc., for
              each individual payment method, such as in the following subparagraphs:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. For payment methods requiring confirmation of receipt, such as credit cards,
                    refunds are made within 3 business days from the date of confirmation of
                    receipt.
                  </Styles.Term>
                  <Styles.Term>
                    2. If the payment provider has predetermined the period for suspension of
                    payment or cancellation of payment through an agreement with the company,
                    refunds after the expiration of such period.
                  </Styles.Term>
                  <Styles.Term>
                    3. If the paid member does not promptly provide the information or data
                    necessary for the refund process to the company (such as not submitting the
                    account and ID copy of the applicant for cash refunds, providing an account
                    under another person's name, etc.).
                  </Styles.Term>
                  <Styles.Term>4. If there is explicit consent from the member.</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ⑤ The company may deduct additional costs and fees borne or to be borne by the company
              when refunding.
            </Styles.Term>
            <Styles.Term>
              ⑥ For paid services received by members as gifts or obtained free of charge through
              promotions, etc., and for which members do not directly pay, the company is not
              obligated to refund the payment for paid services to the members.
            </Styles.Term>
            <Styles.Term>
              ⑦ If a member violates the obligations stipulated in this agreement, the company may
              terminate the service contract, restrict service usage, claim damages, etc., and in
              this case, the member may apply for objection to the company's measures according to
              the procedures set by the company. If the company confirms that the objection is
              valid, the company may resume service usage, and if the member proves that there was
              no intention or negligence on their part, the company extends the usage period for the
              duration of the service suspension.
            </Styles.Term>
            <Styles.Term>
              ⑧ In the case of monthly regular payment for paid services according to the
              application or consent of a paid member, if the member defaults on the usage fee, the
              service contract may be automatically terminated from the date of default, so paid
              members who wish to maintain the paid services must take measures in advance to
              prevent default on the usage fee or default on the payment method.
            </Styles.Term>
            <Styles.Term>
              ⑨ If a paid member deletes a workspace while using paid services, the paid services
              are immediately terminated, and refunds are made according to the method in paragraph
              2. In this case, the paid member's information and service usage details are handled
              according to this agreement, except as provided by related laws.
            </Styles.Term>
            <Styles.Term>
              ⑩ If a member's service contract is terminated due to violation of the obligations
              stipulated in this agreement, the company does not refund the usage fee to the member
              unless there is intentional or gross negligence on the part of the company.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 22. Adjustment of Overpayment of Usage Fees
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① If excessive payment occurs regarding payment for paid services, the company will
              refund the entire overpayment in the same manner as the payment of the service fee.
            </Styles.Term>
            <Styles.Term>
              ② If excessive payment occurs due to the company's fault, the entire excessive amount
              will be refunded. However, if excessive payment occurs due to the member's fault, the
              member must bear the reasonable cost incurred by the company in refunding the
              excessive payment, and the company may deduct this cost before refunding the excessive
              payment.
            </Styles.Term>
            <Styles.Term>
              ③ If a member claims overpayment and requests a refund, the company may refuse the
              refund if it proves that the paid service fee was properly charged.
            </Styles.Term>
            <Styles.Term>
              ④ The company may take the following measures regarding the detailed refund process
              for overpayment:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. If either the company or the member discovers the overpayment, the other
                    party shall be notified by email or other means, and the company, in the case of
                    excessive payment, requests the necessary information for the refund (member's
                    name, payment evidence, etc.) from the member and makes the overpayment within 7
                    days from the date of providing the information.
                  </Styles.Term>
                  <Styles.Term>
                    2. For excessive usage fees, the excessive amount is refunded, and if agreed by
                    the member, the corresponding amount is deducted from the next month's usage
                    fee.
                  </Styles.Term>
                  <Styles.Term>
                    3. If the member who should receive a refund has unpaid usage fees, the unpaid
                    usage fees are deducted first from the refundable usage fees, and the remaining
                    amount is refunded.
                  </Styles.Term>
                  <Styles.Term>
                    4. If the usage fee is undercharged, the company aggregates the undercharged
                    amount and bills it together with the next month's usage fee. If there is no
                    usage fee to be billed for the next month, the undercharged usage fee is
                    notified immediately, and billing is made promptly.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 23. Obligations of the Company</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① The company shall not engage in acts prohibited by this agreement and related laws
              or acts contrary to public morals, and shall make continuous efforts to provide stable
              and reliable services.
            </Styles.Term>
            <Styles.Term>
              ② The company shall establish and maintain a security system, including the protection
              of all personal information, including credit information, to ensure that members can
              use the service safely, and shall disclose and comply with the privacy policy.
            </Styles.Term>
            <Styles.Term>
              ③ If opinions or complaints raised by members are objectively acknowledged as
              legitimate, the company shall promptly process them within a reasonable period.
              However, if processing takes a long time, the company shall inform the member of the
              reasons for the delay and provide information on the processing process and results
              through bulletin boards or email.
            </Styles.Term>
            <Styles.Term>
              ④ The company shall make efforts to provide convenience to members regarding the
              procedures and contents of contracts with members, such as the conclusion,
              modification, and termination of usage agreements.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 24. Member's Obligations</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Members shall not engage in the following acts or purposes other than the original
              purpose of using the services provided by the company:
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. Providing false information or the personal information of others or false
                    facts when registering information with the company for membership application
                    or information modification purposes.
                  </Styles.Term>
                  <Styles.Term>
                    2. Submitting false, forged, or altered documents when requested to submit
                    supporting documents under Article 6 of this Agreement.
                  </Styles.Term>
                  <Styles.Term>
                    3. Utilizing information obtained through this service for purposes other than
                    recruitment.
                  </Styles.Term>
                  <Styles.Term>
                    4. Using this service for purposes other than the explicit purposes notified and
                    instructed by the company for the member's recruitment activities or other
                    purposes.
                  </Styles.Term>
                  <Styles.Term>
                    5. Engaging in activities such as collecting ideas, job introductions, side job
                    referrals, and fundraising by posing as a recruiter or employer.
                  </Styles.Term>
                  <Styles.Term>
                    6. Providing false job information different from the job type, job description,
                    work conditions, etc., specified in the job posting, thereby hindering or
                    causing damage to job seekers' job search activities.
                  </Styles.Term>
                  <Styles.Term>
                    7. Repeatedly purchasing and canceling paid services more than three times
                    without justifiable reasons.
                  </Styles.Term>
                  <Styles.Term>
                    8. Impersonating others or falsely specifying relationships with others.
                  </Styles.Term>
                  <Styles.Term>
                    9. Fraudulently using another person's name, information, another member's
                    account, and password for the purpose of service registration, usage, payment,
                    etc., or using them improperly.
                  </Styles.Term>
                  <Styles.Term>
                    10. Exploiting known or unknown bugs to use the service.
                  </Styles.Term>
                  <Styles.Term>
                    11. Infringing or damaging the honor or rights of the company or third parties,
                    disrupting the business of the company or third parties including this service,
                    or causing damage to the company or third parties.
                  </Styles.Term>
                  <Styles.Term>
                    12. Infringing on the company's intellectual property rights, third-party
                    intellectual property rights, portrait rights, etc., collecting, storing,
                    disseminating, or posting another member's personal information without the
                    company's approval.
                  </Styles.Term>
                  <Styles.Term>
                    13. Deceiving third parties for profit, using the service provided by the
                    company unfairly, or causing harm to third parties.
                  </Styles.Term>
                  <Styles.Term>
                    14. Modifying the site, adding or inserting other programs into the site,
                    hacking servers, reverse engineering, leaking or altering source code,
                    establishing separate servers, or arbitrarily changing or usurping parts of the
                    site without the company's permission.
                  </Styles.Term>
                  <Styles.Term>
                    15. Posing as the company's employee or administrator, or registering documents
                    or sending emails using another person's name.
                  </Styles.Term>
                  <Styles.Term>
                    16. Using the service for profit, business, advertising, political activities,
                    illegal election campaigns, etc., without the company's consent.
                  </Styles.Term>
                  <Styles.Term>
                    17. Sending certain contents, such as advertising information, to job seekers
                    who have obtained personal information through the company's service, contrary
                    to their intentions.
                  </Styles.Term>
                  <Styles.Term>
                    18. Exceeding the free trial period provided by the company during which the
                    same account or domain is used to create additional or new workspaces or
                    equivalent methods without the company's explicit permission, without incurring
                    separate costs to the company for using the service.
                  </Styles.Term>
                  <Styles.Term>
                    19. Obstructing the operation of this service by illegal and malicious programs,
                    hacking, or similar methods.
                  </Styles.Term>
                  <Styles.Term>
                    20. Accessing and using the service beyond the authority granted by the company
                    to the member.
                  </Styles.Term>
                  <Styles.Term>
                    21. Joining, using, or accessing this service for the purpose of developing or
                    releasing services similar to or related to this service.
                  </Styles.Term>
                  <Styles.Term>
                    22. Acts that are essentially the same as or equivalent to those listed above,
                    considering their specific intentions, purposes, and contents in a comprehensive
                    and reasonable manner.
                  </Styles.Term>
                  <Styles.Term>
                    23. Any other acts that violate public order and morals or illegal and unfair
                    acts in violation of laws and regulations.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② Members have an obligation to check and comply with notices on the site and
              modifications to the terms and conditions and must not engage in any acts that
              interfere with the company's business.
            </Styles.Term>
            <Styles.Term>
              ③ Members are responsible for managing their accounts, and they must not allow third
              parties to use them.
            </Styles.Term>
            <Styles.Term>
              ④ The company may establish specific types of acts of the provisions under paragraphs
              1 and 2 and the following items in the operating policy, and members must comply with
              them.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. Restrictions on setting account names and passwords.</Styles.Term>
                  <Styles.Term>
                    2. Other matters deemed necessary by the company for operational purposes within
                    the scope that does not infringe on members' fundamental rights to use the
                    service.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 25. Compensation for Damages</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① If a member incurs damages due to defects in the paid services provided by the
              company attributable to the company's fault, the company shall compensate for such
              damages.
            </Styles.Term>
            <Styles.Term>
              ② If a member causes damages to the company by violating the obligations of this
              Agreement or by causing damages to the company in relation to the use of the service,
              the member shall compensate the company for such damages.
            </Styles.Term>
            <Styles.Term>
              ③ If the company receives various objections, including claims for damages, or
              lawsuits from third parties due to illegal acts committed by a member or violations of
              this Agreement in using the service, the member shall indemnify and hold the company
              harmless at the member's own responsibility and expense. If the company is not
              exempted from liability, the member shall be liable for all damages incurred by the
              company.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 26. Limitation of Liability</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① In the event that the company is unable to provide the service due to force majeure
              or circumstances equivalent to force majeure such as national policies, the company
              shall be exempted from liability for providing the service.
            </Styles.Term>
            <Styles.Term>
              ② The company shall be exempted from liability in the event of service interruption or
              failure to use the service due to the member's fault, or if the telecommunications
              service provider suspends or fails to provide the telecommunications service.
            </Styles.Term>
            <Styles.Term>
              ③ The company shall not be liable for the reliability, accuracy, etc., of the
              information, data, or facts posted by the member regarding the service.
            </Styles.Term>
            <Styles.Term>
              ④ The company shall be exempted from liability unless there is willful misconduct or
              gross negligence on the part of the company when transactions are made between members
              or between members and third parties through the service.
            </Styles.Term>
            <Styles.Term>
              ⑤ The company does not guarantee the accuracy and truthfulness of candidate
              information to members, and members must directly verify the accuracy and truthfulness
              of information received from candidates. The company shall not be liable for any
              responsibility regarding the accuracy and truthfulness of candidate information unless
              there is willful misconduct or gross negligence on the part of the company.
            </Styles.Term>
            <Styles.Term>
              ⑥ The company shall not be liable for the use of free services unless otherwise
              provided by relevant laws and regulations.
            </Styles.Term>
            <Styles.Term>
              ⑦ The company shall not be liable for blocking, suspending, or terminating the use of
              this service in accordance with Article 16 due to reasons attributable to the member,
              within the scope permitted by law.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 27. Governing Law and Jurisdiction</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① Laws of the Republic of Korea shall govern any lawsuits filed between the company
              and members.
            </Styles.Term>
            <Styles.Term>
              ② Lawsuits regarding disputes between the company and members shall be brought to the
              competent court under the Civil Procedure Act.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Supplementary Provisions</Styles.ArticleHeader>
        <Styles.Desc>This agreement shall be effective from July 14, 2023.</Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.Desc>You can find the previous terms of service below:</Styles.Desc>
        <Styles.List>
          <Styles.Item>
            <Link href={`/terms-of-service/20220306`}>- March 6, 2022</Link>
          </Styles.Item>
        </Styles.List>
      </Styles.Article>
    </>
  )
}

export default Terms20230714_en
