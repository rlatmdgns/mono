import Link from 'next/link'
import * as Styles from '@/app/[locale]/privacy-policy/_components/styles'

interface PolicyProps {
  lang: string
}

const Policy20230714_ko = ({ lang }: PolicyProps) => {
  if (lang !== 'ko') return null
  return (
    <>
      <Styles.Article>
        <Styles.Desc>
          (주)풀랩 (이하 "회사")가 운영하는 STEAD 웹사이트(이하 “사이트”)를 통해 제공하는 STEAD 및
          STEAD 관련 제반 서비스(이하 “서비스”)에 가입 신청을 하거나 회사에서 서비스 이용 등을 하는
          것은 STEAD 이용약관 및 본 개인정보 처리방침에 동의함을 뜻합니다. 본 개인정보 처리방침은
          사이트 내의 지정된 공간에 항상 게시되며, 개정될 경우 바뀐 내용과 이유를 사용자들이 알 수
          있도록 사이트 상에 공지합니다. 본 개인정보 처리방침에서 사용되는 용어는 STEAD
          이용약관에서의 용어와 동일합니다.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>1. 개인 정보의 수집∙이용 목적</Styles.ArticleHeader>
        <Styles.Desc>
          회사는 이용자의 신분과 서비스 이용 의사를 확인하여 최적화되고 맞춤화 된 서비스를 제공하기
          위해 아래와 같은 목적으로 개인 정보를 수집합니다. 수집한 개인 정보를 아래의 목적 외로
          사용하거나, 이용자의 동의 없이 제3자에게 이를 공개하지 않습니다.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              <Styles.PolicyHeader>1.1. 민원사무 처리</Styles.PolicyHeader>
              <Styles.Desc>
                민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등을
                목적으로 개인정보를 처리합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>1.2. 재화 또는 서비스 제공</Styles.PolicyHeader>
              <Styles.Desc>
                신규 서비스 개발 및 맞춤 서비스 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고
                게재, 서비스의 유효성 확인, 서비스 이용에 대한 통계, 본인인증, 연령인증,
                요금결제·정산, 채권추심 등 회사의 서비스를 제공하기 위한 목적으로 개인정보를
                처리합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>1.3. 마케팅 및 광고에의 활용</Styles.PolicyHeader>
              <Styles.Desc>
                이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악 또는 회원의 서비스 이용에
                대한 통계 등을 목적으로 개인정보를 처리합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>1.4. 회원관리</Styles.PolicyHeader>
              <Styles.Desc>
                회원제 서비스 제공에 따른 개인식별, 서비스 가입 의사 확인, 콘텐츠 제공, 이용약관
                위반 회원에 대한 이용 제한 조치, 가입 및 가입 횟수 제한, 서비스 부정 이용 제재,
                비인가 사용 방지, 고충 처리 및 분쟁 조정을 위한 기록 보존, 고지사항 전달, 회원 탈퇴
                의사 등의 확인
              </Styles.Desc>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>2. 개인 정보 수집 및 이용 정책</Styles.ArticleHeader>
        <Styles.Desc>
          회사는 서비스 제공을 위해 하기와 같이 이용자의 개인정보를 수집이용 합니다.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              <Styles.PolicyHeader>2.1. 개인정보 수집방법</Styles.PolicyHeader>
              <Styles.Desc>회사는 다음과 같은 방법으로 개인정보를 수집합니다.</Styles.Desc>
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    2.1.1. 사이트, 서면양식, 팩스, 전화, 상담 게시판, 이메일, 이벤트 응모
                  </Styles.Policy>
                  <Styles.Policy>2.1.2. 생성정보 수집 툴을 통한 수집</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>2.2. 개인정보 수집항목</Styles.PolicyHeader>
              <Styles.Desc>
                회사는 구인회원에게 서비스를 제공하기 위하여 다음과 같은 정보를 수집합니다.
              </Styles.Desc>
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    ο 필수 수집 정보 : 구인회원의 이메일, 담당자 성명, 담당자 연락처, 회사명,
                    비밀번호, 휴대전화번호, 이메일주소, 회사명
                  </Styles.Policy>
                  <Styles.Policy>ο 선택 수집 정보 : 없음 </Styles.Policy>
                  <Styles.Policy>
                    ο 개인정보 수집방법 : ”사이트” 내 회원가입 페이지 ({' '}
                    <Link href="www.steadhr.com/sign-up">www.steadhr.com/sign-up</Link> )
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>2.3. 개인 정보 처리 및 이용 정책</Styles.PolicyHeader>
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>2.3.1. 수집 항목: 본 조 2항에 명시된 개인정보</Styles.Policy>
                  <Styles.Policy>
                    2.3.2. 기타 항목: 서비스 이용과정에서 쿠키정보, IP정보, 서비스 이용기록,
                    방문기록, 기기정보(하드웨어 모델, 운영체제 버전, 고유기기 식별정보 등) 등이
                    자동으로 생성되어 수집될 수 있습니다.
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.3. 소유권 변경: 회사가 자산 파산, 합병, 인수, 개편 또는 판매에 관여하는 경우
                    이용자의 개인 정보는 해당 거래의 일부로 판매 또는 양도될 수 있습니다.
                    <br />이 개인 정보 보호 정책은 새로운 법인에게 양도된 개인 정보에 적용됩니다.
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.4. "사이트" 이용자의 정보 접근 또는 수정
                    <Styles.Desc>
                      STEAD "사이트" 이용을 위해 계정 생성했을 경우 회사는 모든 이용자에게 그들이
                      계정 생성 시 제공한 개인 정보에 접근 및 수정 기능을 제공합니다. 계정 삭제를
                      원하는 경우 "사이트"에 로그인 후 지침에 따라 계정 삭제를 요청할 수 있습니다.
                      세금 또는 회계법 준수와 같은 개인 정보를 저장할 법적 근거가 없는 한, 회사는
                      "사이트" 이용자가 계정 삭제를 요청할 경우 절차에 따라 개인 정보를 삭제하거나
                      식별 해제합니다.
                    </Styles.Desc>
                  </Styles.Policy>
                  <Styles.Policy>
                    2.3.5. "사이트" 이용자의 정보 공유 및 공개
                    <Styles.Desc>
                      계정 문의 또는 확인 등 STEAD 서비스를 제공을 위해 필요한 경우 이용자의 개인
                      정보를 공개할 수 있습니다. 또한 회사 내에서 해당 정보를 활용하여 서비스를 제공
                      또는 개선할 수 있습니다.
                    </Styles.Desc>
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>3. 개인 정보의 제3자 제공</Styles.PolicyHeader>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              3.1. 회사는 이용자들의 개인정보를 "2. 개인 정보 수집 및 이용 정책"에서 고지한 범위
              내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로
              이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 하며, 이
              경우에도 회사는 관련 법령 내에서 최소한으로 개인정보를 제공합니다.
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>- 이용자들이 사전에 동의한 경우</Styles.Policy>
                  <Styles.Policy>
                    - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
                    수사기관의 요구가 있는 경우
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              3.2. 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>제공 받는 자</th>
                    <th>제공 목적</th>
                    <th>제공 정보</th>
                  </tr>
                  <tr>
                    <td>AWS(Amazon Web Service)</td>
                    <td>이메일 발송 서비스</td>
                    <td>사용자의 이메일</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>4. 개인정보처리 위탁</Styles.PolicyHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              4.1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고
              있습니다.
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>수탁업체</th>
                    <th>위탁업무 내용</th>
                  </tr>
                  <tr>
                    <td>Google</td>
                    <td>서비스 내 일정 관리 기능</td>
                  </tr>
                  <tr>
                    <td>AWS(Amazon Web Service)</td>
                    <td>서버 운영 및 관리</td>
                  </tr>
                  <tr>
                    <td>채널코퍼레이션(Channel Corp.)</td>
                    <td>고객 상당 문의</td>
                  </tr>
                  <tr>
                    <td>메가존클라우드(Megazone)</td>
                    <td>AWS 통합 빌링 서비스</td>
                  </tr>
                  <tr>
                    <td>부트페이(Bootpay)</td>
                    <td>결제 서비스</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
            <Styles.Policy>
              4.2. 회사는 위탁계약 체결시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외
              개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독,
              손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게
              처리하는지를 감독하고 있습니다.
            </Styles.Policy>
            <Styles.Policy>
              4.3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을
              통하여 공개하도록 하겠습니다.
            </Styles.Policy>
            <Styles.Policy>
              4.4. 회사는 다음과 같이 개인정보 국외이전을 하고 있습니다.
              <Styles.Table>
                <tbody>
                  <tr>
                    <th>업체명</th>
                    <th>이전되는 국가</th>
                    <th>이전일시 및 방법</th>
                    <th>정보관리 책임자 연락처</th>
                    <th>이전하는 개인정보 항목</th>
                    <th>이전 목적</th>
                    <th>개인정보 이용기간</th>
                  </tr>
                  <tr>
                    <td>Asana, Inc.</td>
                    <td>미국</td>
                    <td>영업관리 시 네트워크를 통해 전송</td>
                    <td>privacy@asana.com</td>
                    <td>(필수항목)성명, 이메일주소, 휴대전화번호, 회사명</td>
                    <td>영업관리</td>
                    <td>서비스 종료 또는 탈퇴시</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>5. 개인 정보 보유 및 이용기간</Styles.PolicyHeader>
        <Styles.Desc>
          이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이
          파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존하며, 그 외 다른
          목적으로는 절대 사용하지 않습니다. <br />
          상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가
          있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는
          보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              5.1. 웹사이트 방문기록
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>5.1.1. 보존이유: 통신비밀보호법</Styles.Policy>
                  <Styles.Policy>5.1.2. 보존기간: 3개월</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.2. 소비자의 불만 또는 분쟁처리에 관한 기록
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.2.1. 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                  </Styles.Policy>
                  <Styles.Policy>5.2.2. 보존기간: 3년</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.3. 대금결제 및 재화 등의 공급에 관한 기록
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.3.1. 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                  </Styles.Policy>
                  <Styles.Policy>5.3.2. 보존기간: 5년</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.4. 계약 또는 청약철회 등에 관한 기록
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.4.1. 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                  </Styles.Policy>
                  <Styles.Policy>5.4.2. 보존기간: 5년</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.5. 신용정보의 수집/처리 및 이용 등에 관한 기록
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.5.1. 보존이유: 신용정보의 이용 및 보호에 관한 법률
                  </Styles.Policy>
                  <Styles.Policy>5.5.2. 보존기간: 3년</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              5.6. 표시/광고에 관한 기록
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    5.6.1. 보존이유: 전자상거래 등에서의 소비자보호에 관한 법률
                  </Styles.Policy>
                  <Styles.Policy>5.6.2. 보존기간: 6개월</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>6. 개인 정보 파기절차 및 방법</Styles.PolicyHeader>
        <Styles.Desc>
          회사는 원칙적으로 개인 정보 처리 목적이 달성된 경우 지체 없이 해당 개인 정보를 파기하며,
          파기절차 및 파기방법은 다음과 같습니다.
        </Styles.Desc>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              6.1. 파기절차
              <Styles.Desc>
                개인이 회사의 서비스 이용을 위해 입력한 정보는 수집 목적이 달성된 후 별도의 DB에
                옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된
                후 혹은 즉시 파기됩니다. 이때, 별도의 DB로 옮겨진 개인 정보는 법률에 의한 경우
                외에는 다른 목적으로 이용되지 않습니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              6.2. 파기방법
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    (1) 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
                    삭제합니다.
                  </Styles.Policy>
                  <Styles.Policy>
                    (2) 종이에 출력된 개인 정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>7. 이용자 및 법정대리인의 권리</Styles.PolicyHeader>
        <Styles.Desc>
          이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 회사의
          개인정보의 처리에 동의하지 않는 경우 동의를 거부하거나 가입해지(회원탈퇴)를 요청하실 수
          있습니다. 다만, 그러한 경우 서비스의 일부 또는 전부 이용이 어려울 수 있습니다. 이용자의
          개인정보 조회 및 수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을,
          가입해지(동의철회)를 위해서는 “회원탈퇴” 절차를 통해 본인 확인 절차를 거치신 후 직접 열람,
          정정 또는 탈퇴가 가능합니다. 혹은 보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체
          없이 조치하겠습니다. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
          완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를
          제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이
          이루어지도록 하겠습니다. 회사는 이용자 요청에 의해 해지 또는 삭제된 개인정보는 “4.
          개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할
          수 없도록 처리하고 있습니다
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>8. 개인 정보 보호를 위한 기술적∙관리적 보호 대책</Styles.PolicyHeader>
        <Styles.Desc>
          회사는 이용자들의 개인 정보 보호를 위해 다음과 같은 기술적∙관리적 노력을 하고 있습니다.
        </Styles.Desc>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              8.1. 개인 정보 암호화
              <Styles.Desc>
                이용자의 비밀번호 등 중요 정보는 암호화되어 저장, 관리되고 있으며, 개인 정보의 확인
                및 변경은 본인에 의해서만 가능합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              8.2. 해킹 등에 대비한 대책
              <Styles.Desc>
                회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을
                막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고
                있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지
                않도록 방지하고 있으며, 암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게
                전송할 수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여 외부로부터의 무단
                접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적
                장치를 갖추려 노력하고 있습니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              8.3. 개인 정보 취급 직원의 최소화 및 교육
              <Styles.Desc>
                회사의 개인정보관련 처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를
                부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 회사
                개인정보처리방침의 준수를 항상 강조하고 있습니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              8.4. 개인 정보 보호 전담조직의 운영
              <Styles.Desc>
                개인 정보 보호를 위해 개인 정보 보호전담부서를 운영하고 있으며, 개인 정보 취급방침의
                이행사항 및 개인 정보 취급자의 준수 여부를 확인하여 문제가 발견될 경우 즉시 수정하고
                바로잡을 수 있도록 노력하고 있습니다.
              </Styles.Desc>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>9. 개인 정보 관리 책임자 및 담당 부서</Styles.PolicyHeader>
        <Styles.Desc>
          회사는 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 보호책임자를 지정하고
          있고, 연락처는 아래와 같습니다. 이용자는 회사의 서비스를 이용하시며 발생하는 모든
          개인정보보호 관련 민원을 보호책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는
          이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
        </Styles.Desc>
        <Styles.Indent $step={2}>
          <Styles.Policies>
            <Styles.Policy>
              9.1. 개인정보 보호책임자
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>성명 : 김범수</Styles.Policy>
                  <Styles.Policy>직책 : CEO </Styles.Policy>
                  <Styles.Policy>직급 : 대표이사 </Styles.Policy>
                  <Styles.Policy>연락처 : contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              9.2. 개인정보 보호 담당부서
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>부서명 : 개인정보 보호 담당부서</Styles.Policy>
                  <Styles.Policy>연락처 : contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              9.3. 유관기관
              <Styles.Desc>
                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기
                바랍니다.
              </Styles.Desc>
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    - 개인정보침해신고센터 (http://www.118.or.kr, 국번없이 118)
                  </Styles.Policy>
                  <Styles.Policy>
                    - 대검찰청 사이버범죄수사과 (http://www.spo.go.kr, 국번없이 1301)
                  </Styles.Policy>
                  <Styles.Policy>
                    - 개인정보 분쟁조정위원회 (www.kopico.go.kr, 국번없이 1833-6972)
                  </Styles.Policy>
                  <Styles.Policy>
                    - 경찰청 사이버안전국(http://www.ctrc.go.kr, 국번없이 182)
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>10. 기타</Styles.PolicyHeader>
        <Styles.Desc>
          회사가 제공하는 서비스에 링크되어 있는 외부 웹사이트들이 개인정보를 수집하는 행위에
          대해서는 본 개인정보취급방침이 적용되지 않음을 알려드립니다.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.PolicyHeader>11. 개인 정보취급방침의 고지 의무</Styles.PolicyHeader>
        <Styles.Desc>
          회사는 개인 정보 취급방침에 대한 변경이 있을 경우에는 개정 개인 정보 취급방침의
          시행일로부터 최소 7일 전에 사이트의 공지사항 또는 이메일을 통해 고지하며, 이 정책은 고지한
          날로부터 시행됩니다. 다만, 개인 정보의 수집·이용 목적, 제3자 제공 대상 등 중요한 사항이
          추가 및 삭제, 수정되는 경우에는 30일 전에 사전 공지하고, 30일이 경과된 후에 시행됩니다.
          또한 당사는 개인 정보의 수집 및 활용, 제3자 제공 등 정보통신망 이용 촉진 및 정보 보호 등에
          관한 법률 등 관련 법령에 따라 고객의 별도 동의가 필요한 사항과 관련된 내용이 추가,
          변경되는 경우에는 관련 법령에 따른 고객의 별도 동의를 받습니다.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>부칙</Styles.ArticleHeader>
        <Styles.Policies>
          <Styles.Policy>
            <Styles.PolicyHeader>제 1조</Styles.PolicyHeader>본 방침은 2023. 07. 14. 부터
            시행됩니다.
          </Styles.Policy>
        </Styles.Policies>
      </Styles.Article>
      <Styles.Article>
        <Styles.Desc>이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</Styles.Desc>
        <Styles.List>
          <Styles.Item>
            <Link href={`/privacy-policy/20220302`}>- 2022.03.02</Link>
          </Styles.Item>
        </Styles.List>
      </Styles.Article>
    </>
  )
}

export default Policy20230714_ko
