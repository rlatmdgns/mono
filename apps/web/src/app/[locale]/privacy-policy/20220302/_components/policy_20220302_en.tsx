import * as Styles from '@/app/[locale]/privacy-policy/_components/styles'

interface PolicyProps {
  lang: string
}

const Policy20220302_en = ({ lang }: PolicyProps) => {
  if (lang === 'ko') return null

  return (
    <>
      <Styles.Article>
        <Styles.Desc>
          Pursuant to Article 30 of the Personal Information Protection Act, Fullab Co., Ltd.
          (hereinafter referred to as "Stead") establishes and discloses the following privacy
          policy to protect and respect the personal information and rights of information subjects
          and to smoothly handle complaints related to personal information.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 1. Purpose of Processing Personal Information
        </Styles.ArticleHeader>
        <Styles.Desc>
          The company processes personal information for the following purposes. Processed personal
          information will not be used for purposes other than the following, and in case of changes
          in the purpose of use, separate consent will be obtained in accordance with the Personal
          Information Protection Act.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              <Styles.PolicyHeader>
                A. Website Membership Registration and Management
              </Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purpose of confirming membership
                registration, providing recruitment-related guidance, delivering announcements, and
                contacting members regarding recruitment and website usage.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>B. Provision of Goods or Services</Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purpose of providing services, issuing
                invoices, providing content, providing customized services, identity verification,
                age verification, fee payment/settlement, debt collection, etc.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>C. Utilization in Marketing and Advertising</Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purpose of developing new services
                (products), providing customized services, providing event and advertising
                information and participation opportunities, providing services and advertising
                based on demographic characteristics, understanding access frequency, or providing
                statistics on member service usage. In this case, the company complies with relevant
                laws, including obtaining necessary separate consent.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>D. Complaint Handling</Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purpose of confirming the identity of the
                complainant, confirming the details of the complaint, contacting and notifying for
                fact-finding, and notifying the results of processing, etc.
              </Styles.Desc>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 2. Processing and Retention Period of Personal Information
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① The company processes and retains personal information within the period of personal
              information retention and use agreed upon by the information subject or as required by
              law upon collection of personal information.
            </Styles.Policy>
            <Styles.Policy>
              ② The processing and retention periods for each category of personal information are
              as follows.
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    1. Website Membership Registration and Management: Until withdrawal from the
                    business/organization website
                    <Styles.Indent $step={2}>
                      However, in the following cases, until the end of the relevant period:
                      <Styles.Policies>
                        <Styles.Policy>
                          1. In case of ongoing investigation or investigation due to violation of
                          related laws: Until the end of the investigation
                        </Styles.Policy>
                        <Styles.Policy>
                          2. In case of remaining rights and obligations related to service usage:
                          Until settlement of the relevant rights and obligations
                        </Styles.Policy>
                      </Styles.Policies>
                    </Styles.Indent>
                  </Styles.Policy>
                  <Styles.Policy>
                    2. Provision of Goods or Services: Until completion of supply of goods/services
                    and completion of fee payment/settlement
                    <Styles.Indent>
                      However, in the following cases, until the end of the relevant period:
                      <Styles.Policies>
                        <Styles.Policy>
                          1. Records related to transactions pursuant to the "Act on Consumer
                          Protection in Electronic Commerce, etc."
                          <Styles.Indent>
                            <Styles.Policies>
                              <Styles.Policy>
                                - Records related to advertisements: 6 months
                              </Styles.Policy>
                              <Styles.Policy>
                                - Records of contracts or subscriptions, payment of fees, supply of
                                goods, etc.: 5 years
                              </Styles.Policy>
                              <Styles.Policy>
                                - Records of consumer complaints or dispute resolution: 3 years
                              </Styles.Policy>
                            </Styles.Policies>
                          </Styles.Indent>
                        </Styles.Policy>
                        <Styles.Policy>
                          2. Preservation of communication facts pursuant to Article 41 of the "Act
                          on Protection of Communications Secrets"
                          <Styles.Indent>
                            <Styles.Policies>
                              <Styles.Policy>
                                - Computer communication, internet log records, access destination
                                tracking records: 3 months
                              </Styles.Policy>
                            </Styles.Policies>
                          </Styles.Indent>
                        </Styles.Policy>
                        <Styles.Policy>
                          3. Value-Added Tax Act
                          <Styles.Indent>
                            <Styles.Policies>
                              <Styles.Policy>
                                - Information related to transaction details such as tax invoices,
                                receipts, etc.: 5 years
                              </Styles.Policy>
                            </Styles.Policies>
                          </Styles.Indent>
                        </Styles.Policy>
                      </Styles.Policies>
                    </Styles.Indent>
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 3. Provision of Personal Information to Third Parties
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① The company shall process personal information within the scope specified in Article
              1 (Purpose of Processing Personal Information) and shall provide personal information
              to third parties only in cases falling under Article 17 of the Personal Information
              Protection Act, such as consent of the data subject or special provisions of the law.
            </Styles.Policy>
            <Styles.Policy>
              ② The company provides personal information to third parties as follows:
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>Recipient</th>
                    <th>Purpose of Provision</th>
                    <th>Information Provided</th>
                  </tr>
                  <tr>
                    <td>AWS (Amazon Web Service)</td>
                    <td>Email delivery service</td>
                    <td>User's email</td>
                  </tr>
                  <tr>
                    <td>Purplebook</td>
                    <td>KakaoTalk delivery service</td>
                    <td>Applicant's phone number</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 4. Outsourcing of Personal Information Processing
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① The company outsources personal information processing tasks for smooth business
              operations as follows:
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>Outsourced Company</th>
                    <th>Details of Outsourced Task</th>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>Scheduling function within the service</td>
                  </tr>
                  <tr>
                    <td>AWS (Amazon Web Service)</td>
                    <td>Server operation and management</td>
                  </tr>
                  <tr>
                    <td>Channel Corporation</td>
                    <td>Customer inquiry handling</td>
                  </tr>
                  <tr>
                    <td>Megazone Cloud</td>
                    <td>AWS integrated billing service</td>
                  </tr>
                  <tr>
                    <td>Bootpay</td>
                    <td>Payment service</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
            <Styles.Policy>
              ② When entering into outsourcing contracts, the company specifies matters such as
              prohibition of personal information processing beyond the purpose of outsourcing,
              technical and managerial protective measures, restrictions on re-outsourcing,
              management and supervision of the contractor, and liability for damages pursuant to
              Article 26 of the Personal Information Protection Act in documents such as contracts,
              and monitors whether the contractor safely processes personal information.
            </Styles.Policy>
            <Styles.Policy>
              ③ In case of changes in the content of the outsourced task or the outsourced company,
              we will promptly disclose it through this privacy policy.
            </Styles.Policy>
            <Styles.Policy>
              ④ The company transfers personal information abroad as follows:
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>Company Name</th>
                    <th>Country of Transfer</th>
                    <th>Date and Method of Transfer</th>
                    <th>Contact Information of Information Management Officer</th>
                    <th>Personal Information Items to be Transferred</th>
                    <th>Purpose of Transfer</th>
                    <th>Period of Personal Information Use</th>
                  </tr>
                  <tr>
                    <td>Asana, Inc.</td>
                    <td>United States</td>
                    <td>Transmitted via network during business management</td>
                    <td>privacy@asana.com</td>
                    <td>(Required items) Name, email address, phone number, company name</td>
                    <td>Business management</td>
                    <td>Upon termination of service or withdrawal</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 5. Rights and Obligations of Data Subjects and Legal Representatives and Methods
          of Exercising Them
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① Data subjects may exercise their rights such as access, correction, deletion, and
              suspension of processing of personal information from the company at any time.
            </Styles.Policy>
            <Styles.Policy>
              ② The exercise of rights under paragraph 1 may be made to the company in writing, by
              electronic mail, facsimile transmission (FAX), etc., pursuant to Article 41(1) of the
              Enforcement Decree of the Personal Information Protection Act, and the company will
              promptly take measures in response to it.
            </Styles.Policy>
            <Styles.Policy>
              ③ If a data subject requests correction or deletion of personal information due to
              errors, etc., the company will not use or provide such personal information until the
              correction or deletion is completed.
            </Styles.Policy>
            <Styles.Policy>
              ④ The exercise of rights under paragraph 1 may be made through a legal representative
              or a delegate authorized by the data subject. In this case, you must submit a power of
              attorney in accordance with Attachment 11 of the Enforcement Rules of the Personal
              Information Protection Act.
            </Styles.Policy>
            <Styles.Policy>
              ⑤ The right of data subjects to access and request suspension of processing may be
              restricted under Article 35(4) and Article 37(2) of the Personal Information
              Protection Act.
            </Styles.Policy>
            <Styles.Policy>
              ⑥ Requests for correction and deletion of personal information may not be made if the
              personal information is specified as a collection target by other laws.
            </Styles.Policy>
            <Styles.Policy>
              ⑦ The company verifies whether the requester of requests such as access, correction,
              and deletion according to the rights of data subjects is the individual
              himself/herself or a lawful representative.
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 6. Items of Processed Personal Information
        </Styles.ArticleHeader>
        <Styles.Indent>
          The company processes the following personal information items:
          <Styles.Indent>
            <Styles.Policies>
              1. Registration of job seekers
              <Styles.Indent>
                - Required items: Name, ID, password, phone number, email address, company name
                (position) - Optional items: None
              </Styles.Indent>
              2. Utilization for marketing and advertising
              <Styles.Indent>
                - Required items: Name, ID, phone number, email address - Optional items: None
              </Styles.Indent>
              3. Application information of job seekers
              <Styles.Indent>
                - Required items: Name, phone number, email address - Optional items:
                Self-introduction, resume, educational background, photo, video, qualifications,
                career history, foreign language skills, attachments, other information provided and
                stated by the individual
              </Styles.Indent>
              4. The following personal information items may be automatically generated and
              collected during the process of using internet services:
              <Styles.Indent>
                - IP address, cookies, MAC address, service usage records, visit records, records of
                improper use, etc.
              </Styles.Indent>
            </Styles.Policies>
          </Styles.Indent>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 7. Destruction of Personal Information</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① When personal information becomes unnecessary due to the expiration of the retention
              period or the achievement of the processing purpose, the company shall promptly
              destroy the relevant personal information.
            </Styles.Policy>
            <Styles.Policy>
              ② If, despite the expiration of the agreed-upon retention period for personal
              information or the achievement of the processing purpose, it is necessary to continue
              to retain the personal information in accordance with other laws, the company shall
              transfer such personal information to a separate database (DB) or store it in a
              different location for retention.
            </Styles.Policy>
            <Styles.Policy>
              ③ The procedure and method of personal information destruction are as follows:
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    1. Destruction Procedure
                    <Styles.Desc>
                      The company selects personal information for destruction when the reasons for
                      destruction arise and obtains approval from the company's personal information
                      protection manager before destroying the personal information.
                    </Styles.Desc>
                  </Styles.Policy>
                  <Styles.Policy>
                    2. Destruction Method
                    <Styles.Desc>
                      The company destroys electronically recorded and stored personal information
                      using methods such as low-level formatting to ensure that the records cannot
                      be regenerated. Personal information recorded and stored on paper documents is
                      shredded or incinerated for destruction.
                    </Styles.Desc>
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 8. Measures to Ensure the Security of Personal Information
        </Styles.ArticleHeader>
        <Styles.Desc>
          The company takes the following measures to ensure the security of personal information.
        </Styles.Desc>
        <Styles.Policies>
          <Styles.Policy>
            ① The company establishes an internal management plan for personal information,
            including the appointment of a personal information protection manager and the
            organization and operation of the personal information protection organization, and
            annually checks whether the internal management plan is implemented effectively.
          </Styles.Policy>
          <Styles.Policy>
            ② The company controls access to databases handling personal information to control
            access to personal information and prevent unauthorized access from both internal and
            external sources.
          </Styles.Policy>
          <Styles.Policy>
            ③ The company retains and manages records of personal information handlers accessing the
            personal information processing system, regularly checks access records, and securely
            stores the access records to prevent tampering, alteration, theft, or loss.
          </Styles.Policy>
          <Styles.Policy>
            ④ The company establishes and operates access control procedures for physical storage
            locations where personal information is stored separately, ensuring that only authorized
            personnel have access.
          </Styles.Policy>
        </Styles.Policies>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 9. Installation, Operation, and Rejection of Personal Information Automatic
          Collection Devices
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① The company uses 'cookies' to store and periodically retrieve usage information to
              provide individualized customized services.
            </Styles.Policy>
            <Styles.Policy>
              ② Cookies are small pieces of information sent by the server (http) operating the
              website to users' computer browsers, and they may also be stored on users' PC computer
              hard drives.
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    a. Purpose of using cookies: Cookies are used to optimize information provision
                    to users by tracking and understanding user visits and usage patterns on each
                    service and website visited, popular search terms, and whether secure
                    connections are established.
                  </Styles.Policy>
                  <Styles.Policy>
                    b. Installation, operation, and rejection of cookies: You can refuse to save
                    cookies by adjusting the option settings in the [Tools {'>'} Internet Options{' '}
                    {'>'} Privacy] menu of the web browser. If you reject cookie storage, you may
                    experience difficulties in using customized services.
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          Article 10. Personal Information Protection Manager
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① The company is responsible for overseeing the handling of personal information, and
              to handle complaints and remedies related to the processing of personal information,
              the company has designated a personal information protection manager as follows:
              <Styles.Indent>
                <Styles.PolicyHeader>
                  ▶ Personal Information Protection Manager
                </Styles.PolicyHeader>
                <Styles.Policies>
                  <Styles.Policy>Name: Kim Bumsoo</Styles.Policy>
                  <Styles.Policy>Position: CEO</Styles.Policy>
                  <Styles.Policy>Rank: Representative Director</Styles.Policy>
                  <Styles.Policy>Contact: contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
                <Styles.Desc>
                  ※ Connects to the personal information protection department.
                </Styles.Desc>
              </Styles.Indent>
              <Styles.Indent>
                <Styles.PolicyHeader>
                  ▶ Personal Information Protection Department
                </Styles.PolicyHeader>
                <Styles.Policies>
                  <Styles.Policy>
                    Department Name: Personal Information Protection Department
                  </Styles.Policy>
                  <Styles.Policy>Contact: contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              ② Data subjects may inquire about any matters related to personal information
              protection, complaints, remedies, etc., arising from the use of the company's services
              (or business) to the personal information protection manager and the relevant
              department. The company will promptly respond to and handle inquiries from data
              subjects.
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 11. Remedies for Violation of Rights</Styles.ArticleHeader>
        <Styles.Desc>
          Data subjects may contact the following organizations for remedies, consultations, etc.,
          regarding personal information infringements:
        </Styles.Desc>
        <Styles.Desc>
          [The following organizations are separate from the company. If you are not satisfied with
          the company's internal personal information complaint handling or remedies, or if you need
          more detailed assistance, please contact these organizations.]
        </Styles.Desc>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ Personal Information Infringement Reporting Center (Operated by Korea Internet &
            Security Agency)
          </Styles.PolicyHeader>
          <Styles.Policies>
            <Styles.Policy>
              Related Tasks: Report personal information infringements, request consultations
            </Styles.Policy>
            <Styles.Policy>Website: privacy.kisa.or.kr</Styles.Policy>
            <Styles.Policy>Telephone: 118 (without area code)</Styles.Policy>
            <Styles.Policy>
              Address: (58324) 3rd Floor, 9 Jinheung-gil, Naju-si, Jeollanam-do, Korea (301-2
              Bitgaram-dong) Personal Information Infringement Reporting Center
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ Personal Information Dispute Mediation Committee
          </Styles.PolicyHeader>
          <Styles.Policies>
            <Styles.Policy>
              Related Tasks: Apply for personal information dispute mediation, group dispute
              mediation (civil resolution)
            </Styles.Policy>
            <Styles.Policy>Website: www.kopico.go.kr</Styles.Policy>
            <Styles.Policy>Telephone: 1833-6972 (without area code)</Styles.Policy>
            <Styles.Policy>
              Address: (03171) 4th Floor, Government Seoul Complex, 209 Sejong-daero, Jongno-gu,
              Seoul, Korea
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ Cyber Crime Investigation Division, Supreme Prosecutors' Office: 02-3480-3573
            (www.spo.go.kr)
          </Styles.PolicyHeader>
        </Styles.Indent>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ Cyber Crime Reporting System, Korean National Police Agency: 182 (without area code)
            (ecrm.cyber.go.kr)
          </Styles.PolicyHeader>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Article 12. Changes to Privacy Policy</Styles.ArticleHeader>
        <Styles.Policies>
          <Styles.Policy>
            ① This privacy policy applies from the date of enforcement, and any additions,
            deletions, or amendments to the contents due to laws and policies will be notified
            through announcements.
          </Styles.Policy>
        </Styles.Policies>
        <Styles.Desc>Effective Date: March 2, 2022</Styles.Desc>
      </Styles.Article>
    </>
  )
}

export default Policy20220302_en
