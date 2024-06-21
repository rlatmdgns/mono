import * as Styles from '@/app/[locale]/privacy-policy/_components/styles'

interface PolicyProps {
  lang: string
}

const Policy20220302_ko = ({ lang }: PolicyProps) => {
  if (lang !== 'ko') return null

  return (
    <>
      <Styles.Article>
        <Styles.Desc>
          주식회사 풀랩('steadhr.com'이하 '스테드')은 개인정보보호법 제30조에 따라 정보주체의
          개인정보 보호 및 권익을 보호하고 개인 정보와 관련한 정보주체의 고충을 원활하게 처리할 수
          있도록 다음과 같이 개인정보 처리방침을 수립 공개합니다.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 1조. 개인정보의 처리 목적</Styles.ArticleHeader>
        <Styles.Desc>
          회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의
          용도로는 사용되지 않으며 이용 목적이 변경될 시에는 개인정보보호법에 따라 별도의 동의를
          받는 등 필요한 조치를 이행할 예정입니다.
        </Styles.Desc>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              <Styles.PolicyHeader>가. 홈페이지 회원가입 및 관리</Styles.PolicyHeader>
              <Styles.Desc>
                회원의 가입의사 확인, 채용 관련 안내, 공지사항 전달, 채용 및 웹사이트 이용 관련
                연락을 목적으로 개인정보를 처리합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>나. 재화 또는 서비스 제공</Styles.PolicyHeader>
              <Styles.Desc>
                서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증,
                요금결제·정산, 채권추심 등을 목적으로 개인정보를 처리합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>다. 마케팅 및 광고에의 활용</Styles.PolicyHeader>
              <Styles.Desc>
                신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회
                제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속빈도 파악 또는 회원의
                서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다. 이 경우 회사는 필요한
                별도 동의를 받는 등 관련 법을 준수합니다.
              </Styles.Desc>
            </Styles.Policy>
            <Styles.Policy>
              <Styles.PolicyHeader>라. 고충처리</Styles.PolicyHeader>
              <Styles.Desc>
                민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등의
                목적으로 개인정보를 처리합니다.
              </Styles.Desc>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 2조. 개인정보의 처리 및 보유 기간</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에
              동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
            </Styles.Policy>
            <Styles.Policy>
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <Styles.Indent $step={2}>
                <Styles.Policies>
                  <Styles.Policy>
                    1. 홈페이지 회원 가입 및 관리: 사업자/단체 홈페이지 탈퇴시까지
                    <Styles.Indent $step={2}>
                      다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료시까지
                      <Styles.Policies>
                        <Styles.Policy>
                          1. 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사
                          종료시까지
                        </Styles.Policy>
                        <Styles.Policy>
                          2. 서비스 이용에 따른 채권·채무관계 잔존시에는 해당 채권·채무관계
                          정산시까지
                        </Styles.Policy>
                      </Styles.Policies>
                    </Styles.Indent>
                  </Styles.Policy>
                  <Styles.Policy>
                    2. 재화 또는 서비스 제공: 재화·서비스 공급 완료 및 요금 결제·정산 완료시까지
                    <Styles.Indent>
                      다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지
                      <Styles.Policies>
                        <Styles.Policy>
                          1. 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고,
                          계약내용 및 이행 등 거래에 관한 기록
                          <Styles.Indent>
                            <Styles.Policies>
                              <Styles.Policy>- 표시·광고에 관한 기록 : 6개월</Styles.Policy>
                              <Styles.Policy>
                                - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년
                              </Styles.Policy>
                              <Styles.Policy>
                                - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년
                              </Styles.Policy>
                            </Styles.Policies>
                          </Styles.Indent>
                        </Styles.Policy>
                        <Styles.Policy>
                          2. 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관
                          <Styles.Indent>
                            <Styles.Policies>
                              <Styles.Policy>
                                - 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월
                              </Styles.Policy>
                            </Styles.Policies>
                          </Styles.Indent>
                        </Styles.Policy>
                        <Styles.Policy>
                          3. 부가가치세법
                          <Styles.Indent>
                            <Styles.Policies>
                              <Styles.Policy>
                                - 세금계산서, 영수증 등 거래내역 관련 정보 : 5년
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
        <Styles.ArticleHeader>제 3조. 개인정보의 제 3자 제공</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만
              처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는
              경우에만 개인정보를 제3자에게 제공합니다.
            </Styles.Policy>
            <Styles.Policy>
              ② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다
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
                  <tr>
                    <td>퍼플북(Purplebook)</td>
                    <td>카카오톡 발송 서비스</td>
                    <td>지원자의 전화번호</td>
                  </tr>
                </tbody>
              </Styles.Table>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 4조. 개인정보처리 위탁</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고
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
              ② 회사는 위탁계약 체결시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보
              처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등
              책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게
              처리하는지를 감독하고 있습니다.
            </Styles.Policy>
            <Styles.Policy>
              ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여
              공개하도록 하겠습니다.
            </Styles.Policy>
            <Styles.Policy>
              ④ 회사는 다음과 같이 개인정보 국외이전을 하고 있습니다.
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
        <Styles.ArticleHeader>
          제 5조. 정보주체와 법정대리인의 권리·의무 및 그 행사 방법
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를
              행사할 수 있습니다.
            </Styles.Policy>
            <Styles.Policy>
              ② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행령 제41조 제1항에 따라
              서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이
              조치하겠습니다.
            </Styles.Policy>
            <Styles.Policy>
              ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정
              또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
            </Styles.Policy>
            <Styles.Policy>
              ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여
              하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을
              제출하셔야 합니다.
            </Styles.Policy>
            <Styles.Policy>
              ⑤ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여
              정보주체의 권리가 제한될 수 있습니다.
            </Styles.Policy>
            <Styles.Policy>
              ⑥ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어
              있는 경우에는 그 삭제를 요구할 수 없습니다.
            </Styles.Policy>
            <Styles.Policy>
              ⑦ 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람
              등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 6조. 처리하는 개인정보의 항목</Styles.ArticleHeader>
        <Styles.Indent>
          회사는 다음의 개인정보 항목을 처리하고 있습니다.
          <Styles.Indent>
            <Styles.Policies>
              1. 구인회원의 회원가입
              <Styles.Indent>
                - 필수 항목 : 성명, 아이디, 비밀번호, 휴대전화번호, 이메일 주소, 회사명(직책) - 선택
                항목 : 없음
              </Styles.Indent>
              2. 마케팅 및 광고에의 활용
              <Styles.Indent>
                - 필수 항목 : 성명, 아이디, 휴대전화번호, 이메일 주소 - 선택 항목 : 없음
              </Styles.Indent>
              3. 구직회원의 지원 정보
              <Styles.Indent>
                - 필수 항목 : 성명, 휴대전화번호, 이메일 주소 - 선택 항목 : 자기소개서, 이력서,
                학력사항, 사진, 동영상, 자격사항, 경력사항, 외국어 사항, 첨부파일, 기타 본인이 작성
                및 기재한 사항
              </Styles.Indent>
              4. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수
              있습니다.
              <Styles.Indent>
                - IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 방문 기록, 불량 이용기록 등
              </Styles.Indent>
            </Styles.Policies>
          </Styles.Indent>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 7조. 개인정보의 파기</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을
              때에는 지체없이 해당 개인정보를 파기합니다.
            </Styles.Policy>
            <Styles.Policy>
              ② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도
              불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를
              별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
            </Styles.Policy>
            <Styles.Policy>
              ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    1. 파기절차
                    <Styles.Desc>
                      회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의
                      승인을 받아 개인정보를 파기합니다.
                    </Styles.Desc>
                  </Styles.Policy>
                  <Styles.Policy>
                    2. 파기방법
                    <Styles.Desc>
                      회사는 전자적 파일 형태로 기록, 저장된 개인정보는 기록을 재생할 수 없도록
                      로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에
                      기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                    </Styles.Desc>
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 8조. 개인정보의 안전성 확보조치</Styles.ArticleHeader>
        <Styles.Desc>
          회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
        </Styles.Desc>
        <Styles.Policies>
          <Styles.Policy>
            ① 개인정보 보호책임자의 지정 등 개인정보 보호 조직의 구성 및 운영에 관한 사항 등을
            포함하여 개인정보 내부관리계획을 수립하고, 매년 내부관리계획을 잘 시행하고 있는지를
            점검하고 있습니다.
          </Styles.Policy>
          <Styles.Policy>
            ② 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한 관리를 통해 개인정보에 대한
            접근을 통제하고 내∙외부로부터의 무단 접근을 통제하고 있습니다.
          </Styles.Policy>
          <Styles.Policy>
            ③ 개인정보취급자가 개인정보처리시스템에 접속한 기록을 보관 및 관리하며, 개인정보의
            오남용, 분실, 위조 및 변조 등을 방지하기 위하여 접속기록 등을 정기적으로 점검하며,
            개인정보취급자의 접속기록이 위, 변조 및 도난, 분실되지 않도록 해당 접속기록을 안전하게
            보관하고 있습니다.
          </Styles.Policy>
          <Styles.Policy>
            ④ 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를
            수립, 운영하고 있습니다.
          </Styles.Policy>
        </Styles.Policies>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          제 9조. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 회사는 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는
              ‘쿠키(cookie)’를 사용합니다.
            </Styles.Policy>
            <Styles.Policy>
              ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자들의 컴퓨터 브라우저에게
              보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
              <Styles.Indent>
                <Styles.Policies>
                  <Styles.Policy>
                    가. 쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및
                    이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보
                    제공을 위해 사용됩니다.
                  </Styles.Policy>
                  <Styles.Policy>
                    나. 쿠키의 설치•운영 및 거부: 웹브라우저 상단의 [도구&#62;인터넷
                    옵션&#62;개인정보] 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다.
                    쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
                  </Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 10조. 개인정보 보호책임자</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Policies>
            <Styles.Policy>
              ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
              정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
              있습니다.
              <Styles.Indent>
                <Styles.PolicyHeader>▶ 개인정보 보호책임자</Styles.PolicyHeader>
                <Styles.Policies>
                  <Styles.Policy>성명 : 김범수</Styles.Policy>
                  <Styles.Policy>직책 : CEO</Styles.Policy>
                  <Styles.Policy>직급 : 대표이사</Styles.Policy>
                  <Styles.Policy>연락처 : contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
                <Styles.Desc>※ 개인정보 보호 담당부서로 연결됩니다.</Styles.Desc>
              </Styles.Indent>
              <Styles.Indent>
                <Styles.PolicyHeader>▶ 개인정보 보호 담당부서</Styles.PolicyHeader>
                <Styles.Policies>
                  <Styles.Policy>부서명 : 개인정보 보호 담당부서</Styles.Policy>
                  <Styles.Policy>연락처 : contact@poollab.kr</Styles.Policy>
                </Styles.Policies>
              </Styles.Indent>
            </Styles.Policy>
            <Styles.Policy>
              ② 정보주체는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
              문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실
              수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제11조 권익침해 구제방법</Styles.ArticleHeader>
        <Styles.Desc>
          정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수
          있습니다.
        </Styles.Desc>
        <Styles.Desc>
          [아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제
          결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.]
        </Styles.Desc>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
          </Styles.PolicyHeader>
          <Styles.Policies>
            <Styles.Policy>소관업무 : 개인정보 침해사실 신고, 상담 신청</Styles.Policy>
            <Styles.Policy>홈페이지 : privacy.kisa.or.kr</Styles.Policy>
            <Styles.Policy> 전화 : (국번없이) 118</Styles.Policy>
            <Styles.Policy>
              주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
        <Styles.Indent>
          <Styles.PolicyHeader>▶ 개인정보 분쟁조정위원회</Styles.PolicyHeader>
          <Styles.Policies>
            <Styles.Policy>
              소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
            </Styles.Policy>
            <Styles.Policy>홈페이지 : www.kopico.go.kr</Styles.Policy>
            <Styles.Policy> 전화 : (국번없이) 1833-6972</Styles.Policy>
            <Styles.Policy>
              주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층
            </Styles.Policy>
          </Styles.Policies>
        </Styles.Indent>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)
          </Styles.PolicyHeader>
        </Styles.Indent>
        <Styles.Indent>
          <Styles.PolicyHeader>
            ▶ 경찰청 사이버 범죄 신고시스템 : (국번없이) 182 (ecrm.cyber.go.kr)
          </Styles.PolicyHeader>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 12조 개인정보 처리방침 변경</Styles.ArticleHeader>
        <Styles.Policies>
          <Styles.Policy>
            ① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제
            및 정정이 있는 경우에는 공지사항을 통하여 고지할 것입니다.
          </Styles.Policy>
        </Styles.Policies>
        <Styles.Desc>시행일자: 2022년 3월 2일</Styles.Desc>
      </Styles.Article>
    </>
  )
}

export default Policy20220302_ko
