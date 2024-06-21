import Link from 'next/link'
import * as Styles from '@/app/[locale]/privacy-policy/_components/styles'

interface PolicyProps {
  lang: string
}

const Policy20230714_en = ({ lang }: PolicyProps) => {
  if (lang === 'ko') return null

  return (
    <>
      <Styles.Article>
        <Styles.Desc>
          Applying for membership or using services provided by STEAD through the STEAD website
          operated by Fullab (hereinafter referred to as the "Company") indicates agreement to the
          STEAD Terms of Service and this Privacy Policy. This Privacy Policy is always posted in a
          designated space within the site, and if revised, the changed content and reasons will be
          announced on the site for users to be informed. The terms used in this Privacy Policy are
          consistent with those used in the STEAD Terms of Service.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          1. Purposes of Collection and Use of Personal Information
        </Styles.ArticleHeader>
        <Styles.Desc>
          The Company collects personal information for the following purposes to confirm the
          identity of users and their intention to use the services in order to provide optimized
          and personalized services:
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              <Styles.PolicyHeader>1.1. Handling of Complaints</Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purpose of confirming the identity of the
                complainant, verifying the content of the complaint, contacting and notifying for
                fact-finding, and informing of processing results.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>1.2. Provision of Goods or Services</Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purposes of developing new services,
                providing customized services, providing services and advertising based on
                demographic characteristics, confirming the effectiveness of services, statistical
                analysis of service usage, authentication, age verification, fee payment/settlement,
                debt collection, etc., for providing services of the Company.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>
                1.3. Utilization for Marketing and Advertising
              </Styles.PolicyHeader>
              <Styles.Desc>
                Personal information is processed for the purposes of providing event and
                advertising information, providing opportunities to participate, and obtaining
                statistics on user service usage.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>1.4. Member Management</Styles.PolicyHeader>
              <Styles.Desc>
                Personal identification for providing member services, confirmation of intention to
                join services, provision of content, measures to restrict usage for members
                violating terms of service, limitation on registration and number of registrations,
                sanctions for misuse of services, prevention of unauthorized use, record retention
                for complaints handling and dispute resolution, notification of notices,
                confirmation of intention to withdraw from membership, etc.
              </Styles.Desc>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          2. Personal Information Collection and Use Policy
        </Styles.ArticleHeader>
        <Styles.Desc>
          The Company collects and uses the personal information of users for the purpose of
          providing services as follows:
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              <Styles.PolicyHeader>
                2.1. Methods of Personal Information Collection
              </Styles.PolicyHeader>
              <Styles.Desc>
                The Company collects personal information through the following methods:
              </Styles.Desc>
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    2.1.1. Website, written forms, fax, phone, counseling bulletin board, email,
                    event participation
                  </Styles.Policy>
                  <Styles.Policy>
                    2.1.2. Collection through generated information collection tools
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>
                2.2. Items of Personal Information Collected
              </Styles.PolicyHeader>
              <Styles.Desc>
                The Company collects the following information from job seekers to provide services:
              </Styles.Desc>
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    - Mandatory Collection Information: Job seeker's email, responsible person's
                    name, responsible person's contact information, company name, password, mobile
                    phone number, email address, company name
                  </Styles.Policy>
                  <Styles.Policy>- Optional Collection Information: None</Styles.Policy>
                  <Styles.Policy>
                    - Method of Personal Information Collection: Membership registration page within
                    the "Site" (<Link href="www.steadhr.com/sign-up">www.steadhr.com/sign-up</Link>)
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>
                2.3. Policy on Personal Information Processing and Use
              </Styles.PolicyHeader>
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    2.3.1. Items collected: Personal information specified in paragraph 2 above
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.2. Other items: Information such as cookie information, IP information,
                    service usage records, visit records, device information (hardware model,
                    operating system version, unique device identification information, etc.) may be
                    automatically generated and collected during service usage.
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.3. Change of Ownership: In the event the Company is involved in asset
                    bankruptcy, merger, acquisition, restructuring, or sale, user personal
                    information may be sold or transferred as part of the transaction. This Privacy
                    Policy applies to the transferred personal information to a new corporation.
                    <br />
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.4. Access to or Modification of User Information on the "Site"
                    <Styles.Desc>
                      If users have created accounts for using the STEAD "Site," the Company
                      provides access and modification functions to the personal information they
                      provided when creating accounts to all users. Users can request account
                      deletion following the instructions after logging in to the "Site." Unless
                      there is a legal basis for storing personal information, such as tax or
                      accounting compliance, the Company will delete or de-identify personal
                      information in accordance with the procedures when users request account
                      deletion on the "Site."
                    </Styles.Desc>
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.5. Sharing and Disclosure of User Information on the "Site"
                    <Styles.Desc>
                      If necessary for providing STEAD services such as account inquiries or
                      confirmations, the Company may disclose user personal information.
                      Additionally, the Company may utilize the information internally to provide or
                      improve services.
                    </Styles.Desc>
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>
          3. Provision of Personal Information to Third Parties
        </Styles.PolicyHeader>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              3.1. The company utilizes users' personal information within the scope notified in the
              "2. Collection and Use of Personal Information Policy" and does not disclose users'
              personal information to external parties without the users' prior consent. However, in
              the following cases, exceptions may apply, and even in these cases, the company
              provides the minimum amount of personal information required by relevant laws and
              regulations:
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>- When users have given prior consent</Styles.Policy>
                  <Styles.Policy>
                    - When there are requests from investigative agencies in accordance with the
                    procedures and methods prescribed by law for investigative purposes or based on
                    legal provisions
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              3.2. The company provides personal information to third parties as follows:
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
                </tbody>
              </Styles.Table>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>4. Personal Information Processing Outsourcing</Styles.PolicyHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              4.1. The company entrusts the processing of personal information as follows to ensure
              smooth processing of personal information tasks:
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>Contractor</th>
                    <th>Outsourced Task</th>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>Internal scheduling function within the service</td>
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
                    <td>Megazone</td>
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
              4.2. When entering into outsourcing contracts, the company specifies matters such as
              prohibiting the processing of personal information for purposes other than the
              performance of the outsourced task, technical and managerial protective measures,
              restrictions on re-outsourcing, management and supervision of the entrusted party, and
              liability for damages according to Article 26 of the Personal Information Protection
              Act in the contract documents. The company also supervises whether the entrusted party
              handles personal information safely.
            </Styles.Policy>
            <Styles.Policy>
              4.3. If the content of the outsourced task or the entrusted party changes, the company
              will promptly disclose it through this privacy policy.
            </Styles.Policy>
            <Styles.Policy>
              4.4. The company transfers personal information overseas as follows:
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>Company Name</th>
                    <th>Country of Transfer</th>
                    <th>Date and Method of Transfer</th>
                    <th>Contact Information of Information Manager</th>
                    <th>Personal Information Items Transferred</th>
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
        <Styles.PolicyHeader>
          5. Retention and Use Period of Personal Information
        </Styles.PolicyHeader>
        <Styles.Desc>
          Users' personal information is generally disposed of without delay once the purpose of
          collecting and using the personal information is achieved. However, for the following
          information, the company retains it for the specified period for the reasons listed below,
          and it will never be used for any other purpose. <br />
          If there is a need to retain member information under the provisions of related laws and
          regulations such as the Commercial Act and the Act on Consumer Protection in Electronic
          Commerce, the company retains member information for a certain period specified by the
          relevant laws and regulations. In this case, the company only uses the information for the
          purpose of retention.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              5.1. Website visit records
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.1.1. Reason for retention: Telecommunications Privacy Act
                  </Styles.Policy>
                  <Styles.Policy>5.1.2. Retention period: 3 months</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.2. Records related to consumer complaints or dispute resolution
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.2.1. Reason for retention: Act on Consumer Protection in Electronic Commerce,
                    etc.
                  </Styles.Policy>
                  <Styles.Policy>5.2.2. Retention period: 3 years</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.3. Records related to payment of fees and supply of goods, etc.
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.3.1. Reason for retention: Act on Consumer Protection in Electronic Commerce,
                    etc.
                  </Styles.Policy>
                  <Styles.Policy>5.3.2. Retention period: 5 years</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.4. Records related to contracts or withdrawal of offers
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.4.1. Reason for retention: Act on Consumer Protection in Electronic Commerce,
                    Etc.
                  </Styles.Policy>
                  <Styles.Policy>5.4.2. Retention period: 5 years</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.5. Records related to collection/processing and utilization of credit information
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.5.1. Reason for retention: Act on the Use and Protection of Credit Information
                  </Styles.Policy>
                  <Styles.Policy>5.5.2. Retention period: 3 years</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.6. Records related to display/advertisement
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.6.1. Reason for retention: Act on Consumer Protection in Electronic Commerce,
                    Etc.
                  </Styles.Policy>
                  <Styles.Policy>5.6.2. Retention period: 6 months</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>
          6. Procedure and Method of Personal Information Destruction
        </Styles.PolicyHeader>
        <Styles.Desc>
          The company will promptly destroy personal information when the purpose of processing is
          achieved. The procedure and method of destruction are as follows:
        </Styles.Desc>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              6.1. Destruction Procedure
              <Styles.Desc>
                Information entered by individuals for using the company's services is transferred
                to a separate database (or separate documents for paper) after the collection
                purpose is achieved. It is stored for a certain period according to internal
                policies and other relevant laws and regulations, and then destroyed immediately or
                after the designated period. Personal information transferred to a separate database
                is not used for any purpose other than as required by law.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              6.2. Destruction Method
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    (1) Electronic files are deleted using technical methods that cannot reproduce
                    the record.
                  </Styles.Policy>
                  <Styles.Policy>
                    (2) Personal information printed on paper is destroyed by shredding or
                    incineration.
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>7. Rights of Users and Legal Representatives</Styles.PolicyHeader>
        <Styles.Desc>
          Users may at any time request to view or modify their registered personal information and
          may refuse consent or request withdrawal (membership withdrawal) if they do not agree to
          the processing of their personal information by the company. However, in such cases, it
          may be difficult to use part or all of the service. To view and modify personal
          information, users can go through the process of 'changing personal information' (or
          'modifying membership information'). For withdrawal (consent withdrawal), users can go
          through the "membership withdrawal" process after confirming their identity verification.
          You can directly view, correct, or withdraw. If you request correction of personal
          information errors, we will not use or provide the personal information until the
          correction is completed. Also, if incorrect personal information has already been provided
          to a third party, we will promptly notify the third party of the correction results to
          ensure that the correction is made. Personal information that has been terminated or
          deleted at the request of the user is processed in accordance with the provisions of "4.
          Retention and Use Period of Personal Information" and is handled in such a way that it
          cannot be accessed or used for other purposes.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>
          8. Technical and Administrative Measures for Personal Information Protection
        </Styles.PolicyHeader>
        <Styles.Desc>
          The company is making the following technical and administrative efforts to protect the
          personal information of users:
        </Styles.Desc>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              8.1. Personal Information Encryption
              <Styles.Desc>
                Important information such as user passwords is encrypted and stored, and the
                confirmation and modification of personal information can only be done by the
                individual.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              8.2. Measures against Hacking, etc.
              <Styles.Desc>
                The company is doing its best to prevent the leakage or damage of members' personal
                information due to hacking or computer viruses. To prevent damage to personal
                information, data is regularly backed up, the latest antivirus programs are used to
                prevent leakage or damage of users' personal information or data, and personal
                information is securely transmitted over the network through encrypted
                communication. The company also controls unauthorized access from outside through
                intrusion detection systems and strives to have all possible technical measures to
                ensure security systemically.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              8.3. Minimization and Education of Personnel Handling Personal Information
              <Styles.Desc>
                The company limits personnel handling personal information to designated
                individuals, assigns separate passwords for this purpose, and regularly updates
                them. It also emphasizes compliance with the company's personal information
                processing policy through regular education for responsible personnel.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              8.4. Operation of a Dedicated Organization for Personal Information Protection
              <Styles.Desc>
                To protect personal information, the company operates a dedicated department for
                personal information protection and makes efforts to immediately correct and rectify
                any issues found by confirming compliance with the personal information handling
                policy and the compliance of personnel handling personal information.
              </Styles.Desc>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>
          9. Personal Information Management Officer and Department in Charge
        </Styles.PolicyHeader>
        <Styles.Desc>
          The company has appointed a personal information protection officer responsible for
          collecting opinions and handling complaints regarding personal information. The contact
          information is as follows. Users can report any complaints related to personal information
          protection to the personal information protection officer or the department in charge
          while using the company's services. The company will provide prompt and sufficient answers
          to users' complaints.
        </Styles.Desc>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              9.1. Personal Information Protection Officer
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>Name: Kim Beom-soo</Styles.Policy>
                  <Styles.Policy>Position: CEO</Styles.Policy>
                  <Styles.Policy>Title: Representative Director</Styles.Policy>
                  <Styles.Policy>Contact: contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              9.2. Department in Charge of Personal Information Protection
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    Department: Personal Information Protection Department
                  </Styles.Policy>
                  <Styles.Policy>Contact: contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              9.3. Relevant Organizations
              <Styles.Desc>
                If you need to report or consult on other personal information breaches, please
                contact the following agencies:
              </Styles.Desc>
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    - Personal Information Breach Report Center (http://www.118.or.kr, dial 118
                    without area code)
                  </Styles.Policy>
                  <Styles.Policy>
                    - Cyber Crime Investigation Department, Supreme Prosecutors' Office
                    (http://www.spo.go.kr, dial 1301 without area code)
                  </Styles.Policy>
                  <Styles.Policy>
                    - Personal Information Dispute Resolution Committee (www.kopico.go.kr, dial
                    1833-6972 without area code)
                  </Styles.Policy>
                  <Styles.Policy>
                    - Cyber Safety Bureau, National Police Agency (http://www.ctrc.go.kr, dial 182
                    without area code)
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>10. Others</Styles.PolicyHeader>
        <Styles.Desc>
          Please note that this privacy policy does not apply to external websites linked to the
          services provided by the company that collect personal information.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>
          11. Obligation to Notify of Personal Information Handling Policy
        </Styles.PolicyHeader>
        <Styles.Desc>
          If there are any changes to the privacy policy, the revised policy will be notified
          through the website's announcements or by email at least 7 days before the effective date
          of the revised personal information handling policy, and the policy will be effective from
          the date of notification. However, if important matters such as the purpose of collecting
          and using personal information, the provision of information to third parties, etc., are
          added, deleted, or modified, they will be notified in advance 30 days before the revision,
          and the revision will take effect after 30 days. Furthermore, if any matters related to
          the necessity of separate consent of customers according to related laws such as the Act
          on Promotion of Information and Communications Network Utilization and Information
          Protection, etc., are added or changed, separate consent of customers will be obtained
          according to the relevant laws.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>Supplementary Provisions</Styles.ArticleHeader>
        <Styles.Policies>
          <Styles.Policy>
            <Styles.PolicyHeader>Article 1</Styles.PolicyHeader>This policy shall be effective from
            July 14, 2023.
          </Styles.Policy>
        </Styles.Policies>
      </Styles.Article>
      <Styles.Article>
        <Styles.Desc>You can review the previous privacy policy below:</Styles.Desc>
        <Styles.List>
          <Styles.Item>
            <Link href={`/privacy-policy/20220302`}>- March 2, 2022</Link>
          </Styles.Item>
        </Styles.List>
      </Styles.Article>
    </>
  )
}

export default Policy20230714_en
