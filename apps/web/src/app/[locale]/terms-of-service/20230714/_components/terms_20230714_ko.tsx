import Link from 'next/link'
import * as Styles from '@/app/[locale]/terms-of-service/_components/styles'

interface TermsProps {
  lang: string
}

const Terms20230714_ko = ({ lang }: TermsProps) => {
  if (lang !== 'ko') return null

  return (
    <>
      <Styles.Article>
        <Styles.ArticleHeader>제 1조. 목적</Styles.ArticleHeader>
        <Styles.Desc>
          본 약관은 (주)풀랩 (이하 "회사")가 운영하는 STEAD 웹사이트(이하 “사이트”)를 통해 제공하는
          STEAD 및 STEAD 관련 제반 서비스(이하 “서비스”)를 제공함에 있어, 회사가 제공하는 서비스와
          관련하여, 이를 이용하는 가입자(이하 “회원”)의 이용조건 및 제반 절차, 기타 필요한 사항을
          규정함을 목적으로 한다.
        </Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 2조. 용어의 정의</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 본 약관에서 사용하는 용어의 정의는 다음과 같다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. “사이트”라 함은 회사가 서비스를 "회원"에게 제공하기 위하여 컴퓨터 등
                    정보통신설비를 이용하여 설정한 가상의 영업장 또는 회사가 운영하는 웹사이트,
                    모바일웹, 앱 등을 통합된 하나의 "회원" 계정(아이디 및 비밀번호)을 이용하여
                    서비스를 제공받을 수 있는 아래의 사이트를 말한다.
                    <Styles.Indent>
                      <Styles.Terms>
                        <Styles.Term>- 사이트명(국문) : 스테드 </Styles.Term>
                        <Styles.Term>- 사이트명(영문) : STEAD </Styles.Term>
                        <Styles.Term>- 인터넷 접속 주소 : www.steadhr.com</Styles.Term>
                      </Styles.Terms>
                    </Styles.Indent>
                  </Styles.Term>
                  <Styles.Term>
                    2. “서비스”라 함은 회사가 ”사이트”를 통해 회원에게 제공하는 채용공고 관리,
                    지원서 관리, 면접일정 관리 등 채용업무 및 채용업무 협업 기능을 포함한 채용협업툴
                    '스테드’ 및 이와 관련한 제반 서비스를 의미한다. “서비스 플랜”이란 회원의 수요에
                    따라 서비스를 이용할 수 있도록 서비스의 기능과 범위를 조정한 서비스 제안을
                    의미한다.
                  </Styles.Term>
                  <Styles.Term>
                    3. “회원”이라 함은 사이트에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고
                    회사가 제공하는 서비스를 이용하는 자를 의미한다. “지원자”라 함은 회원의
                    채용공고에 대해 사이트를 통해 회원에게 지원서를 제출한 자를 의미한다.
                  </Styles.Term>
                  <Styles.Term>
                    4. “무료체험” 또는 “무료서비스”라 함은 회원이 유료서비스를 이용하기에 앞서
                    일정한 기간동안 유료서비스를 체험할 수 있도록 회사가 이용요금을 지급받지
                    아니하고 제공하는 서비스를 의미한다.
                  </Styles.Term>
                  <Styles.Term>
                    5. “유료서비스”라 함은 회사가 제공하는 서비스 중 회원이 회사에 일정 이용요금을
                    결제하는 경우에 이용할 수 있는 회사의 서비스를 의미한다.
                  </Styles.Term>
                  <Styles.Term>
                    6. “유료회원”이라 함은 유료서비스를 결제하여 서비스를 이용하는 회원을 의미한다.
                  </Styles.Term>
                  <Styles.Term>
                    7. “워크스페이스”라 함은 회사와 회원 간 이용계약 체결을 통하여 회사가 회원이
                    서비스를 이용할 수 있도록 제공하는 스테드 관리 시스템을 의미한다.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 3조. 약관의 명시와 개정</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 본 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처
              등을 회원이 쉽게 알 수 있도록 서비스 초기화면에 게시하거나 기타의 방법으로 회원에게
              공지한다. 다만, 약관의 내용은 회원이 연결화면을 통하여 볼 수 있도록 할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 약관의 규제에 관한 법률, 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진
              및 정보보호 등에 관한 법률, 개인정보 보호법 등 관련 법령을 위배하지 않는 범위에서 이
              약관을 개정할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
              개정약관의 적용일자 7일 전부터 적용일자 전일까지 서비스 페이지에 공지한다. 다만,
              회원의 권리, 의무에 중대한 영향을 주는 변경의 경우에는 적용일자 30일 전까지 공지한다.
            </Styles.Term>
            <Styles.Term>
              ④ 회원은 변경된 약관에 대해 거부할 권리가 있다. 회원은 변경된 약관이 공지된 지 15일
              이내에 거부의사를 표명할 수 있다. 회원이 거부하는 경우 본 서비스 제공자인 회사는
              15일의 기간을 정하여 회원에게 사전 통지 후 당해 회원과의 계약을 해지할 수 있다. 만약,
              회원이 거부의사를 표시하지 않거나, 전항에 따라 시행일 이후에 서비스를 이용하는
              경우에는 동의한 것으로 간주한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 4조. 약관의 해석</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 이 약관에서 규정하지 않은 사항에 관해서는 약관의 규제에 관한 법률, 전기통신기본법,
              전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등의 관계법령에 따른다.
            </Styles.Term>
            <Styles.Term>
              ② 회원이 회사와 개별 계약을 체결하여 서비스를 이용하는 경우에는 개별 계약이 우선한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 5조. 이용계약의 성립</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 서비스 이용계약은 서비스를 이용하고자 하는 자(이하 “이용희망자”라 한다)의 본 약관에
              대한 동의 및 회원 가입 신청에 대하여 회사가 승낙함으로써 성립된다.
            </Styles.Term>
            <Styles.Term>
              ② 이용희망자가 회원 가입 신청시 사이트 등의 회원 가입 화면 중 "동의함" 버튼을 누르면
              본 약관 및 개인정보 처리방침을 충분히 읽고 동의한 것으로 본다.
            </Styles.Term>
            <Styles.Term>
              ③ 제1항의 승낙은 회사가 이용희망자의 본 약관에 대한 동의를 확인하고 승낙의 의사가 담긴
              이메일 또는 서면으로 통지함으로써 이루어지고, 이러한 승낙의 통지가 이용희망자에게
              도달하면 서비스 이용계약이 성립된다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 6조. 이용신청의 승낙과 제한</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 이용신청 고객에 대하여 업무수행상 또는 기술상 지장이 없는 경우에 서비스
              이용신청을 승낙한다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 아래사항에 해당하는 경우에 대해서는 이용신청을 승낙하지 아니한다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. 실명이 아니거나 타인의 명의를 이용 및 도용하여 신청한 경우
                  </Styles.Term>
                  <Styles.Term>
                    2. 이용계약 신청서의 내용을 허위로 기재한 경우 혹은 이용계약 이후의 허위 기재한
                    사실이 발각된 경우
                  </Styles.Term>
                  <Styles.Term>
                    3. 만 15세 미만의 아동이 신청한 경우. 다만, 만 13세 이상 만 15세 미만의
                    아동으로서 노동부장관 발행의 취업인허증이 있는 경우에는 그러하지 아니한다.
                  </Styles.Term>
                  <Styles.Term>
                    4. 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을
                    위반하며 신청하는 경우
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 아래사항에 해당하는 경우에는 그 신청에 대하여 승낙제한 사유가 해소될 때까지
              승낙을 유보할 수 있다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. 회사가 설비의 여유가 없는 경우</Styles.Term>
                  <Styles.Term>2. 회사의 기술상 지장이 있는 경우</Styles.Term>
                  <Styles.Term>3. 기타 회사의 귀책사유로 이용승낙이 곤란한 경우</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 7조. 개인정보의 보호 및 관리</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 「개인정보 보호법」 등 관계 법령이 정하는 바에 따라 계정정보를 포함한 회원의
              개인정보를 보호하기 위하여 노력한다. 회원의 개인정보 보호 및 사용에 대해서는 회사가
              별도로 고지하는 개인정보처리방침에 따른다. 다만, 회사가 제공하는 사이트 이외의 링크된
              사이트에서는 회사의 개인정보처리방침이 적용되지 않는다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 회원의 귀책사유로 인하여 노출된 회원의 계정정보를 포함한 모든 정보에 대해서는
              일체의 책임을 지지 않는다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 8조. 개인정보의 처리 위탁</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회원은 서비스 이용계약 기간동안 사이트를 통해 지원자의 개인정보를 수집하며, 이때
              필요한 최소한의 개인정보를 수집하며, 필요한 경우에는 지원자의 동의를 받는 등 지원자의
              개인정보를 보호하기 위하여 노력한다. 회원은 지원자의 개인정보 처리를 회사에 위탁하며,
              회사는 지원자의 개인정보 처리 업무를 위탁 받은 수탁자로서 다음과 같은 목적과 범위
              내에서만 개인정보 처리 업무를 수행한다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. 채용공고 지원자의 지원 기능</Styles.Term>
                  <Styles.Term>2. 회원의 지원자의 지원서 관리 기능</Styles.Term>
                  <Styles.Term>3. 채용공고 지원자에 대한 평가 기능</Styles.Term>
                  <Styles.Term>4. 채용공고 지원자의 지원 경로 추적 기능</Styles.Term>
                  <Styles.Term>5. 채용공고 지원자의 면접일정 조율/설정 기능</Styles.Term>
                  <Styles.Term>6. 채용공고 지원자에 대한 이메일 수·발신 기능</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② 회사는 제1항의 개인정보 처리 업무를 본 약관에 따라 체결된 이용계약이 종료될 때까지
              이행한다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 회원의 서면에 의한 사전 승인을 얻은 경우를 외에 회원으로부터 위탁 받은
              개인정보를 제3자에게 양도하거나 재위탁할 수 없으며, 위탁업무 수행 목적 외로 개인정보를
              처리할 수 없다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 「개인정보 보호법」 및 「개인정보의 안전성 확보 조치 기준」, 「개인정보의
              기술적·관리적 보호조치 기준」 등 관련 법령에 따라 개인정보의 안전성 확보에 필요한
              관리적·기술적 조치를 취한다.
            </Styles.Term>
            <Styles.Term>
              ⑤ 회원은 회사에 대하여 다음 각 호의 사항을 감독할 수 있으며 회사는 특별한 사유가 없는
              한 이에 응해야 한다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. 개인정보의 처리 현황</Styles.Term>
                  <Styles.Term>2. 개인정보의 접근 또는 접속 현황</Styles.Term>
                  <Styles.Term>3. 개인정보의 접근 또는 접속 대상자</Styles.Term>
                  <Styles.Term>4. 목적 외 이용·제공 및 재위탁 금지 준수여부</Styles.Term>
                  <Styles.Term>5. 암호화 등 안전성 확보조치 이행여부</Styles.Term>
                  <Styles.Term>6. 그 밖에 개인정보의 보호를 위하여 필요한 사항</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ⑥ 회원은 회사에 대하여 제5항 각 호의 사항에 대한 실태를 점검하여 시정을 요구할 수
              있으며, 회사는 특별한 사유가 없는 한 이행하여야 한다.
            </Styles.Term>
            <Styles.Term>
              ⑦ 회사는 위탁업무기간이 종료되면 특별한 사유가 없는 한 7일 이내 개인정보를 파기하고
              이를 회원에게 확인받아야 한다.
            </Styles.Term>
            <Styles.Term>
              ⑨ 회사 또는 회사의 임직원, 기타 회사의 수탁자가 계약에 의하여 위탁 또는 재위탁 받은
              업무를 수행함에 있어 이용계약에 따른 의무를 위반하거나 회사 또는 회사의 임직원의
              귀책사유로 인하여 이용계약이 해지되어 회원 또는 제3자에게 손해가 발생한 경우 회사는
              이를 배상해야 한다. 이와 관련하여 제3자에게 발생한 손해에 대하여 회원이 전부 또는
              일부를 배상한 때에는 회원은 회사에게 구상할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ⑩ 회사는 지원자의 개인정보 열람, 정정·삭제, 처리 정지 요청 등에 대응하기 위한
              고객센터를 운영한다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>- 고객센터: contact@steadhr.com</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 9조. 회원의 계정 및 비밀번호</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회원은 서비스의 원활한 이용 및 회원의 정보보호, 서비스 이용안내 등의 편의를 위하여
              이용자가 선정한 이메일 주소를 계정 아이디로 사용한다. 다만, 회사는 회원의 계정이
              반사회적이거나 미풍양속을 해치거나 또는 운영자로 오인할 우려가 있는 경우 등에는 해당
              계정의 사용을 거부하거나 제한할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ② 회원은 자신의 계정정보에 대하여 주의의무를 다하여 관리하여야 하고, 회원이 본인의
              계정정보를 소홀히 관리하거나 제3자에게 이용을 승낙함으로써 발생하는 손해에 대하여는
              회원에게 책임이 발생한다.
            </Styles.Term>
            <Styles.Term>
              ③ 회원은 회사가 정한 기준을 충족하는 범위 내에서 자유롭게 비밀번호를 정할 수 있으며,
              정해진 비밀번호는 회원이 원하는 경우 언제든지 변경이 가능하다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 10조. 회원에 대한 통지</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사가 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 회원이 계정으로
              사용하는 이메일 주소로 할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 회원 전체에 대한 통지의 경우 7일 이상 사이트 또는 기타 공지사항(Notion)
              페이지에 게시함으로써 제1항의 통지에 갈음할 수 있다. 단, 회원의 권리, 의무에 중대한
              영향을 주는 내용을 통지하는 경우에는 적용일자 30일 전부터 게시한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 11조. 서비스의 제공 및 중지</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회원은 회사가 제공하는 서비스를 본 약관, 운영정책 등 회사가 정한 규칙에 따라 이용할
              수 있다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 회원의 회원가입을 승낙한 때부터 서비스를 제공하며, 연중 무휴, 1일 24시간
              제공함을 원칙으로 한다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 서버 등 정보통신설비의 보수 점검, 교체 및 고장 등 운영상 상당한 이유가 있는
              경우 서비스의 제공을 일시적으로 중단할 수 있다. 이 경우 회사는 서비스의 제공이
              중단되기 전에 본 약관에서 정한 방법으로 “회원“에게 통지한다. 다만, 회사가 사전에
              통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은
              서비스 페이지에 공지한 바에 따른다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 12조. 서비스의 내용</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사가 제공하는 서비스의 내용은 다음과 같다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    - 온라인 채용협업툴 스테드 사용제공 서비스 (회원 당 1개의 계정과 위크스페이스
                    제공)
                  </Styles.Term>
                  <Styles.Term>- 채용공고 개설 및 지원자 접수 링크 발급</Styles.Term>
                  <Styles.Term>- 채용공고 지원자 모집 및 서류 관리</Styles.Term>
                  <Styles.Term>- 채용공고 지원자와 이메일 기반 커뮤니케이션</Styles.Term>
                  <Styles.Term>- 회원과 채용을 담당할 팀원 구성(이하 “멤버”)</Styles.Term>
                  <Styles.Term>- 멤버와 채용공고 지원자 서류평가</Styles.Term>
                  <Styles.Term>- 면접일정 관리</Styles.Term>
                  <Styles.Term>- 서비스 내 멤버간 그룹 채팅방</Styles.Term>
                  <Styles.Term>- 채용공고 지원자 데이터 및 대쉬보드</Styles.Term>
                  <Styles.Term>- 그 외 서비스 내 회원의 채용업무와 관련한 제반 서비스</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② 회사가 유료회원에게 제공하는 유료서비스의 기능 및 범위는 회원이 선택하는 서비스
              플랜에 따라 달라질 수 있다. 회사는 서비스 플랜의 종류와 서비스 플랜 별 기능 설명서를
              사이트에 게시하며, 서비스 플랜은 회사의 정책에 따라 수시로 변경될 수 있다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사가 회원에게 제공하는 무료체험 또는 무료서비스는 다음과 같은 조건으로 제공된다.
              회사가 제공하는 무료체험 또는 기타 무료서비스는 회사의 독자적인 재량 및 판단에 따라
              제공되는 것으로 회사는 이러한 무료체험 또는 무료서비스를 제공하거나 이를 유지하거나
              보장할 어떠한 의무도 없다. 회사는 회원이 회사의 무료체험 또는 무료서비스를 부당하게
              반복적으로 이용하거나 기타의 의도, 목적 및 방식으로 남용한다고 판단하거나 그러할
              의도가 있다고 합리적으로 판단하는 경우에는 무료체험 및 무료서비스를 제공하지 않거나 그
              제공을 언제든지 중단 및 정지할 수 있다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    - 무료체험은 회원이 계정 최초 생성시에 한하여 30일 동안 1회 제공한다.
                  </Styles.Term>
                  <Styles.Term>
                    - 무료서비스는 유료회원이 요청하는 경우 해당 유료회원의 서비스 플랜보다 상위의
                    서비스 플랜으로 30일 동안 1회 제공한다.
                  </Styles.Term>
                  <Styles.Term>
                    - 회사는 무료체험 또는 무료서비스 기간이 만료되기 7일 전 회원의 이메일로
                    무료체험 및 무료서비스 만료 및 유료서비스 전환 또는 서비스 플랜 변경 방법을
                    통지하고, 회원에게 전환 또는 변경 동의 여부를 확인한다.
                  </Styles.Term>
                  <Styles.Term>
                    - 무료체험 또는 무료서비스 기간 만료 후 서비스의 전환 또는 변경을 하지 않는
                    회원은 관련 데이터에 접근할 수 없다
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ④ 회원은 구인을 진행하는 채용공고에 허위 사실이 없도록 정확하게 기재하여야 하며,
              회원이 사실과 다르거나 관련 법령에 위반되는 채용공고를 작성하였을 경우 발생할 수 있는
              모든 문제는 회사의 고의 또는 중대한 과실이 없는 한 회원이 모두 부담한다.
            </Styles.Term>
            <Styles.Term>
              ⑤ 회원은 지원서에 기재된 지원자의 개인정보를 채용활동에 한하여 활용하여야 하며, 회원의
              여타 영업 또는 광고, 마케팅을 위하여 활용하거나 제3자에게 제공 등으로 유출하는 경우
              「개인정보 보호법」 등 관련 법령에 따른 법적 책임을 부담할 수 있다. 회원의 개인정보
              오남용으로 인하여 발생하는 모든 손해는 회사의 고의 또는 중대한 과실이 없는 한 회원이
              부담한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 13조. 서비스의 내용 변경</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사가 회원에게 제공하는 서비스에 대하여 회사는 제작, 변경, 유지, 보수에 관한
              포괄적인 권한을 가진다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 새로운 서비스 내용, 각종 버그 패치 등 서비스의 운영상 또는 기술상의 필요한
              경우, 제공하고 있는 서비스의 전부 또는 일부를 상시적으로 수정, 추가, 폐지 등 변경할 수
              있다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 서비스의 내용이 변경되는 경우 서비스 페이지에 공지하고 필요시 회원에게 개별
              서면 통지로 공지사항을 전달한다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 다음 각호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수
              있다.
              <Styles.Terms>
                <Styles.Term>
                  1. 전시, 사변, 천재지변 또는 국가비상사태 등 불가항력적인 사유가 있는 경우
                </Styles.Term>
                <Styles.Term>
                  2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이
                  있는 경우
                </Styles.Term>
                <Styles.Term>
                  3. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우 4. 기타 회사의 제반 사정으로
                  서비스를 할 수 없는 경우
                </Styles.Term>
              </Styles.Terms>
            </Styles.Term>
            <Styles.Term>
              ⑤ 회사는 서비스가 변경되거나 중지된 원인이 회사의 고의 또는 중대한 과실로 인한 경우를
              제외하고는 서비스의 변경 및 중지로 발생하는 문제에 대해서 책임을 부담하지 않는다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 14조. 정보의 제공 및 광고의 게재</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 서비스 페이지에
              게시할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 본 서비스 등을 유지하기 위하여 제3자의 광고를 서비스 페이지에 게재할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ③ 회원이 제3자가 주체인 제2항의 광고에 참여하거나 교신 또는 거래를 함으로써 발생하는
              손실과 손해에 대해서 회사는 어떠한 책임도 부담하지 아니한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 15조. 게시물과 권리의 귀속 등</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 서비스 및 서비스 내 회사가 제작한 콘텐츠 등에 대한 저작권 및 지식재산권은 회사에
              귀속된다.
            </Styles.Term>
            <Styles.Term>
              ② 서비스 내 회원이 작성한 게시물의 저작권은 회원에게 귀속된다.
            </Styles.Term>
            <Styles.Term>
              ③ 회원이 열람한 지원자의 지원서에 포함된 정보는 채용 목적 이외의 목적으로 사용할 수
              없다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 16조. 이용제한 등</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 회원이 본 약관의 의무를 위반하거나 기타 서비스의 정상적인 운영을 방해한 경우
              해당 회원의 본 서비스 이용을 일시 또는 영구적으로 차단 및 중지하고 이용계약을 해지할
              수 있다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 제1항의 규정에도 불구하고, 회원이 본 약관 제24조 제1항에 따라 금지되는 행위를
              한 경우, 또는 회원이 본 약관의 의무를 중대하게 또는 반복적으로 위반하였거나, 회사가
              관련된 사정 및 상황을 기초로 그러한 것으로 합리적으로 판단하는 경우, 해당 회원에 대한
              시정기간의 부여 없이 즉시 해당 회원의 서비스 이용을 차단 및 중지하고 이용계약을 해지할
              수 있다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사가 본 조에 따라 회원의 서비스 이용을 차단, 중지하거나 이용계약을 해지하는 경우,
              회사는 제10조에서 정한 방법으로 사전에 통지한다. 단, 이러한 통지가 법령에 위반되거나
              기타 회사의 본 서비스 제공에 중대하게 부정적인 영향을 미칠 경우 이러한 통지를
              생략하거나 사후에 통지할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ④ 본 조에 따라 회원의 귀책으로 서비스 이용의 차단, 중지 및 이용계약 해지가 이루어진
              경우, 법령상 허용되는 최대한의 범위에서 본 서비스와 관련하여 회원에게 제공한 혜택은
              모두 소멸되며, 회사는 이에 대해 별도로 보상하지 아니한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 17조. 회원의 이용계약 해제·해지 등</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회원은 서비스 계정설정 – 기본설정 – 회원탈퇴 기능을 통해 이용계약 신청을 할 수
              있으며, 회사는 관련법령 등에서 정하는 바에 따라 이를 즉시 처리하여야 한다.
            </Styles.Term>
            <Styles.Term>
              ② 유료서비스를 신청한 회원이 이용계약 해지 신청을 한 경우 이미 결제가 완료된 잔여
              이용계약 기간(해당 월의 남은 일수)가 도과된 후 탈퇴 신청이 처리된다. 단, 회원이 즉시
              탈퇴를 요구하는 경우 그러하지 아니하다.
            </Styles.Term>
            <Styles.Term>
              ③ 회원의 모든 정보는 관련 법령 및 회사의 개인정보 처리방침에서 정한 바에 따라 회원
              정보를 보유할 필요가 있는 경우 또는 재가입을 방지하기 위하여 필요한 정보를 제외하고는
              탈퇴 시점 이후 바로 삭제되며 복구할 수 없다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 18조. 유료서비스 이용요금</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Indent>
              ① 회사가 회원 유료서비스 이용신청을 승낙한 때(일부 서비스의 경우, 이용 신청 접수 후
              사전 공지한 지정된 일자)로부터 유료서비스는 개시되며(이하 “유료서비스 공급일”), 회사의
              기술적 사유 등 기타 사정에 의하여 유료서비스를 개시할 수 없는 경우에는 제10조의 방법에
              따라 회원에게 사전 공지한다.
            </Styles.Indent>
            <Styles.Indent>
              ② 회사는 회원의 유료서비스 이용신청이 있게 되는 경우, 해당 회원에게 이용신청의 내용을
              통지한다. 회사의 통지를 받은 회원은 의사표시의 불일치 등이 있는 경우 회사에 정정 또는
              수정을 요청하여야 하며, 회사는 회원의 요청에 따라 처리하여야 한다. 다만, 이미
              이용요금을 지불한 경우에는 본 약관의 청약 철회 등에 관한 규정에 따른다.
            </Styles.Indent>
            <Styles.Indent>
              ③ 회원은 선택한 서비스 플랜 별로 유료서비스 이용요금을 결제하여야 한다.
            </Styles.Indent>
            <Styles.Indent>
              ④ 회사는 서비스 플랜 별 가격 정책, 상세 기능 설명 등 유료서비스에 관한 내용을 서비스
              페이지에 게시하여 공지한다.
            </Styles.Indent>
            <Styles.Indent>
              ⑤ 회사는 운영상, 기술상의 필요에 따라 공급하는 유료서비스의 가격 정책을 변경할 수
              있으며, 이용 요금 변경 시 변경된 이용 요금 내용 및 변경 내용 적용일을 명시하여 변경
              내용 적용일 30일 이전에 회원의 이메일로 개별 통지한다.
            </Styles.Indent>
            <Styles.Indent>
              ⑥ 제5항에 따라 공지된 이용요금의 변경 내용은 변경 내용 적용일부터 모든 회원에게
              적용된다. 다만, 이용요금 변경 내용 적용일 이전에 회원이 가입한 유료서비스 등 사전에
              체결한 금액에는 영향을 미치지 아니한다.
            </Styles.Indent>
            <Styles.Indent>
              ⑦ 유료서비스의 이용 요금에 관하여 회사와 회원간 별도 약정이 있을 경우, 해당 약정이 본
              약관에 우선하여 적용된다.
            </Styles.Indent>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 20조. 결제수단</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              회원이 유료서비스의 이용요금 결제를 위하여 이용할 수 있는 수단은 다음 각 호와 같다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>1. 신용카드</Styles.Term>
                  <Styles.Term> 2. 계좌이체</Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>
          제 21조. 청약 철회 및 환불 및 유료서비스 정기결제 중단
        </Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 유료회원은 다음 각 호의 경우 회사에 결제 취소(청약 철회)를 요청할 수 있다.
              <Styles.Indent>
                <Styles.Terms>
                  1. 유료서비스 공급일 이후 유료서비스의 이용이 개시되지 않은 경우 2. 회사의
                  네트워크 또는 시스템 장애로 서비스 이용이 불가능한 경우 3. 회사의 귀책사유로
                  인하여 유료서비스의 이용이 어려운 경우
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② 유료회원이 이용계약 해지 또는 탈퇴 등으로 유료서비스 정기결제를 중단하는 경우,
              회사가 사이트에 게시한 환불정책에 따라 환불조치한다.
            </Styles.Term>
            <Styles.Term>
              ③ 청약의 철회는 유료회원이 사이트를 통해 할 수 있으며, 회사에 의사를 표시하여 회사에
              도달될 때 그 효력이 발생하고, 회사는 유료회원의 의사표시를 수령한 후 지체 없이 이러한
              사실을 유료회원에게 회신한다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 유료회원이 청약 철회 신청을 확인 후 환불 금액이 있을 경우, 지체없이 결제수단
              별 사업자에게 대금의 청구 정지 내지 취소를 요청하고, 유료회원이 결제한 동일
              결제수단으로 환불함을 원칙으로 한다. 단, 회사가 사전에 유료회원에게 전자메일, 서비스
              페이지로 공지한 경우 및 아래의 각 호의 경우와 같이 개별 결제 수단별 환불 방법, 환불
              가능 기간 등이 차이가 있을 수 있다.
              <Styles.Indent>
                <Styles.Terms>
                  1. 신용카드 등 수납 확인이 필요한 결제수단의 경우에는 수납 확인일로부터 3영업일
                  이내 2. 결제수단 별 사업자가 회사와의 약정을 통하여 사전에 대금 청구 정지 내지
                  결제 취소 가능 기한 등을 미리 정하여 둔 경우로 해당 기한을 지난 환불의 경우 3.
                  유료회원이 환불 처리에 필요한 정보 내지 자료를 회사에 즉시 제공하지 않는 경우(현금
                  환불 시 신청인의 계좌 및 신분증 사본을 제출하지 아니하거나, 타인 명의의 계좌를
                  제공하는 경우 등) 4. 해당 회원의 명시적 의사표시가 있는 경우
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ⑤ 회사는 회사가 부담하였거나 부담할 부대비용, 수수료를 차감하여 환불할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ⑥ 회원이 유료서비스를 선물 받거나, 프로모션 등을 통해 무상으로 취득하는 등 회원이 직접
              비용을 지불하지 아니하고 이용하는 유료서비스에 대하여 회사는 회원에게 유료서비스 결제
              대금을 환불할 의무를 부담하지 않는다.
            </Styles.Term>
            <Styles.Term>
              ⑦ 회원이 본 약관에서 정하는 회원의 의무를 위반하였을 경우, 이용계약을 해제, 해지하거나
              서비스 이용 제한, 손해배상 청구 등의 조치를 취할 수 있으며, 이 경우 회원은 해당 회사의
              조치에 대하여 회사가 정한 절차에 따라 이의 신청을 할 수 있다. 회사는 이의신청이
              정당하다고 확인하는 경우 서비스 이용 재개 등을 할 수 있으며, 회원이 자신의 고의,
              과실이 없었음을 입증한 경우 회사는 서비스를 정지한 기간만큼 이용 기간을 연장한다.
            </Styles.Term>
            <Styles.Term>
              ⑧ 유료회원의 신청 또는 동의에 따라 월 정기결제 중인 유료서비스의 경우, 해당 회원이
              유료서비스의 이용요금을 체납하는 경우 연체가 발생한 날 자동으로 이용계약이 해지가 될
              수 있으므로, 유료서비스를 유지하고자 하는 유료회원은 이용요금의 체납 또는 결제수단의
              연체가 발생하지 않도록 사전에 조치하여야 한다.
            </Styles.Term>
            <Styles.Term>
              ⑨ 유료서비스를 이용 중인 유료회원이 워크스페이스를 삭제하는 경우 유료서비스는 즉시
              해지되며 환불은 제2항의 방법에 따라 이루어진다. 이 경우 유료회원의 정보와
              서비스이용내용은 관련 법령이 정하는 경우를 제외하고는 본 약관에 따라 처리된다.
            </Styles.Term>
            <Styles.Term>
              ⑩ 회원이 본 약관에서 정하는 회원의 의무를 위반하여 이용계약 해지 등 제재조치가 있었던
              경우 회사는 회사의 고의 또는 중대한 과실이 없는 한 회원에 대하여 이용요금을 환불하지
              않는다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 22조. 이용요금 과오납의 조정</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 유료서비스 결제와 관련하여 과다 납입이 발생한 경우 이용대금의 결제와 동일한
              방법으로 과오납 전액을 환불한다.
            </Styles.Term>
            <Styles.Term>
              ② 회사의 귀책사유로 과다 납입이 발생한 경우 과다 납입된 전액을 환불한다. 단, 회원의
              귀책사유로 과다 납입이 발생한 경우, 회사가 과다 납입금을 환불하는데 소요되는 비용은
              합리적인 범위 내에서 이용자가 부담하여야 하며, 회사는 해당 비용을 차감 후 과다
              납입금을 환불할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 회원이 과다 납입을 주장하며 환불을 요구하는 경우, 정당하게 유료서비스 요금이
              부과되었음을 입증하면 환불을 거부할 수 있다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 과오납의 세부 환불절차에 대하여 다음과 같이 조치를 취할 수 있다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. 회사나 회원이 과오납 사실을 안 경우 이메일 등의 방법으로 상대방에게 통보하고,
                    회사는 과다납입의 경우 회원에게 환불에 필요한 정보(회원 성명, 결제증빙서류 등)를
                    요청하며, 정보 제공일로부터 7일 이내에 과다납입금을 지급한다.
                  </Styles.Term>
                  <Styles.Term>
                    2. 과다 납입한 이용요금에 대해서는 과다 납입된 금액을 환급하며, 회원이 동의할
                    경우 다음달에 청구될 이용요금에서 해당 금액만큼을 차감하여 청구한다.
                  </Styles.Term>
                  <Styles.Term>
                    3. 이용요금을 환급 받아야 할 회원이 체납한 이용요금이 있을 경우 환급해야 할
                    이용요금에서 체납된 이용요금을 우선 공제하고 남은 금액을 반환한다.
                  </Styles.Term>
                  <Styles.Term>
                    4. 이용요금을 과소 청구한 경우, 회사는 회원에게 과소 청구된 금액을 합산하여
                    다음달 이용요금과 함께 청구하며, 다음달 청구할 이용요금이 없을 경우 즉시
                    이용요금이 과소 청구되었음을 통지하고 청구한다.
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 23조. 회사의 의무</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 본 약관 및 관련법령에서 금지하는 행위 및 미풍양속에 반하는 행위를 하지
              않으며, 계속적이고 안정적인 서비스의 제공을 위하여 최선을 다하여 노력한다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 회원이 안전하게 서비스를 이용할 수 있도록 신용정보를 포함한 일체의 개인정보
              보호를 위한 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수한다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는
              합리적인 기간 내에 신속하게 처리하여야 한다. 다만, 처리에 장기간이 소요되는 경우
              회원에게 게시판 또는 이메일 등을 통하여 지체 사유를 안내하고 처리과정 및 처리결과를
              전달한다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 회원과의 계약관련 절차 및 내용
              등에 있어 회원에게 편의를 제공하도록 노력한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 24조. 회원의 의무</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회원은 회사에서 제공하는 서비스를 본래의 이용 목적 이외의 용도로 사용하거나 다음 각
              호에 해당하는 행위를 해서는 아니된다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. 가입신청 또는 정보 변경을 목적으로 회사에 정보 등록시 회사의 정보 및 담당자
                    본인의 개인정보가 아닌 타인의 정보 또는 허위 사실을 기재하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    2. 본 약관 제6조의 증빙자료 제출을 요청받은 경우 허위의 내용이 기재된 자료, 위조
                    또는 변조된 자료를 제출하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    3. 본 서비스 이용을 통하여 취득한 정보를 채용 목적 외 다른 목적으로 활용하는
                    행위
                  </Styles.Term>
                  <Styles.Term>
                    4. 본 서비스를 회원의 채용활동 목적 또는 기타 회사가 명시적으로 고지 및 안내하는
                    이용목적 이외의 다른 목적으로 이용하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    5. 구인 또는 채용을 가장하여 아이디어 수집, 직업 소개, 부업 알선, 자금 모집 등을
                    하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    6. 회원이 채용공고와 전혀 다른 직종, 업무내용, 근로조건 등을 제시하여 지원자의
                    구직활동을 방해하거나 손해를 입히는 행위
                  </Styles.Term>
                  <Styles.Term>
                    7. 정당한 사유 없이 유료서비스를 3회 이상 반복적으로 결제, 취소하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    8. 타인으로 가장하거나 타인과의 관계를 허위로 명시하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    9. 타인의 명의 또는 정보, 다른 회원의 계정 및 비밀번호 등을 서비스 가입, 이용 및
                    결제 등의 목적으로 도용하거나 기타 부정하게 사용하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    10. 알려지거나 알려지지 않은 버그를 악용하여 서비스를 이용하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    11. 회사 및 제3자의 명예 또는 권리를 침해 또는 훼손하거나 본 서비스를 포함한
                    회사 또는 제3자의 업무를 방해하거나 회사 및 제3자에게 손해를 가하려는 행위
                  </Styles.Term>
                  <Styles.Term>
                    12. 회사의 지식재산권, 제3자의 지식재산권, 초상권 등 기타 권리를 침해하거나
                    회사의 승인을 받지 않고 다른 회원의 개인정보를 수집, 저장, 유포, 게시하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    13. 제3자를 기망하여 이득을 취하거나 회사가 제공하는 서비스를 불건전하게
                    이용하거나 하여 제3자에게 피해를 주는 행위
                  </Styles.Term>
                  <Styles.Term>
                    14. 회사로부터 특별한 권리를 부여받지 않고 사이트를 변경하거나 사이트에 다른
                    프로그램을 추가 또는 삽입하거나 서버를 해킹, 역설계, 소스코드의 유출 및 변경,
                    별도의 서버를 구축하거나 사이트의 일부분을 임의로 변경 또는 도용하여 회사를
                    사칭하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    15. 회사의 직원이나 운영자를 가장, 사칭하거나 또는 타인의 명의를 도용하여 문서를
                    등록하거나 메일을 발송하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    16. 회사의 동의 없이 영리, 영업, 광고, 정치활동, 불법선거운동 등을 목적으로
                    서비스를 이용하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    17. 회사의 서비스를 통하여 개인정보를 지득한 지원자 등에게 그 의사에 반하여
                    광고성 정보 등 일정한 내용을 전송하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    18. 회사가 본 약관 제13조 제4항 등에 따라 제공하는 무료체험 기간 중 동일한 계정
                    또는 동일한 도메인으로 추가적인 또는 새로운 워크스페이스를 생성하거나 그에
                    준하는 방법을 통하여, 회사의 명시적인 허락 없이 회사가 고지한 무료체험 기간을
                    초과하여 회사에 대한 별도의 비용 없이 본 서비스를 이용하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    19. 불법 및 악성프로그램, 해킹 또는 이와 유사한 방법으로 본 서비스의 운영을
                    방해하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    20. 회사가 회원에게 부여한 권한을 초과하여 본 서비스를 접근 및 이용하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    21. 본 서비스와 동일, 유사 또는 관련된 서비스를 개발하거나 출시하기 위한
                    목적으로 본 서비스를 가입, 이용 또는 접근하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    22. 그 구체적인 의도, 목적 및 내용을 종합적이고 합리적으로 고려할 때 실질적으로
                    위 각 호와 동일하거나 그에 준하는 행위
                  </Styles.Term>
                  <Styles.Term>
                    23. 기타 공공질서 및 미풍양속을 위반하거나 불법적, 부당한 행위 및 법령에
                    위배되는 행위
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
            <Styles.Term>
              ② 회원은 사이트 상의 공지사항 및 이용약관의 수정사항 등을 확인하고 이를 준수할 의무가
              있으며 기타 회사의 업무에 방해되는 행위를 하여서는 아니된다.
            </Styles.Term>
            <Styles.Term>
              ③ 회원의 계정에 관한 관리 책임은 회원에게 있으며, 이를 제3자가 이용하도록 하여서는
              아니된다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 제1항, 제2항 및 다음 각 호의 어느 하나에 해당하는 행위의 구체적인 유형을 운영
              정책에서 정할 수 있으며, 회원은 이를 준수할 의무가 있다.
              <Styles.Indent>
                <Styles.Terms>
                  <Styles.Term>
                    1. 회원의 계정명, 비밀번호의 정함에 대한 제한 2. 기타 회원의 서비스 이용에 대한
                    본질적인 권리를 침해하지 않는 범위 내에서 회사가 운영상 필요하다고 인정되는 사항
                  </Styles.Term>
                </Styles.Terms>
              </Styles.Indent>
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 25조. 손해배상</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사가 제공하는 유료서비스의 하자 등에 의하여 회사의 귀책사유로 회원에게 피해가
              발생한 경우, 회사는 그 손해를 배상한다.
            </Styles.Term>
            <Styles.Term>
              ② 회원이 본 약관의 의무를 위반함으로 인하여 회사에 손해를 입힌 경우 또는 회원이
              서비스의 이용과 관련하여 회사에 손해를 입힌 경우 회원은 회사에 대하여 손해를
              배상하여야 한다.
            </Styles.Term>
            <Styles.Term>
              ③ 회원이 서비스를 이용함에 있어 행한 불법행위 또는 본 약관을 위반한 행위로 회사가
              제3자로부터 손해배상청구 또는 소송 등 각종 이의제기를 받는 경우 당해 회원은 자신의
              책임과 비용으로 회사를 면책시켜야 하며, 회사가 면책되지 못한 경우 당해 회원은 그로
              인하여 회사에 발생한 모든 손해를 배상할 책임이 있다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 26조. 책임 제한</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>
              ① 회사는 천재지변 또는 국가 정책 등 이에 준하는 불가항력으로 인하여 서비스를 제공할 수
              없는 경우에는 서비스 제공에 관한 책임이 면제된다.
            </Styles.Term>
            <Styles.Term>
              ② 회사는 회원의 귀책사유로 인한 서비스 중지 또는 이용의 장애, 기간통신사업자가
              전기통신서비스를 중지하거나 정상적으로 제공하지 아니하여 회원에게 손해가 발생한
              경우에는 책임이 면제된다.
            </Styles.Term>
            <Styles.Term>
              ③ 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에
              관하여는 책임을 지지 않는다.
            </Styles.Term>
            <Styles.Term>
              ④ 회사는 회원 간 또는 회원과 지원자 등 제3자 간에 서비스를 매개로 하여 거래 등을 한
              경우에는 회사의 고의 또는 중대한 과실이 없는 한 책임이 면제된다.
            </Styles.Term>
            <Styles.Term>
              ⑤ 회사는 회원에게 지원자 정보의 정확성 및 진실성을 보증하지 않으며, 회원은
              지원자로부터 수령한 정보의 정확성 및 진실성을 직접 확인하여야 한다. 회사는 회원에게
              지원자의 정보의 정확성 및 진실성과 관련하여 회사의 고의 또는 중대한 과실이 없는 한
              일체의 책임을 부담하지 않는다.
            </Styles.Term>
            <Styles.Term>
              ⑥ 회사는 무료로 제공되는 서비스 이용과 관련하여 관련법령에 특별한 규정이 없는 한
              책임을 지지 않는다.
            </Styles.Term>
            <Styles.Term>
              ⑦ 회사는 회원의 귀책이 있는 사유를 이유로 제16조에 따라 이루어진 본 서비스 이용의 차단
              및 중지 및 이용계약 해지에 대하여 법령상 허용하는 범위 내에서 어떠한 책임도 부담하지
              않는다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>제 27조. 준거법 및 재판관할</Styles.ArticleHeader>
        <Styles.Indent>
          <Styles.Terms>
            <Styles.Term>① 회사와 회원 간 제기된 소송은 대한민국법을 준거법으로 한다.</Styles.Term>
            <Styles.Term>
              ② 회사와 회원간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제소한다.
            </Styles.Term>
          </Styles.Terms>
        </Styles.Indent>
      </Styles.Article>
      <Styles.Article>
        <Styles.ArticleHeader>부칙</Styles.ArticleHeader>
        <Styles.Desc>이 약관은 2023. 07. 14부터 시행합니다.</Styles.Desc>
      </Styles.Article>
      <Styles.Article>
        <Styles.Desc>이전의 이용약관은 아래에서 확인하실 수 있습니다.</Styles.Desc>
        <Styles.List>
          <Styles.Item>
            <Link href={`/terms-of-service/20220306`}>- 2022.03.06</Link>
          </Styles.Item>
        </Styles.List>
      </Styles.Article>
    </>
  )
}

export default Terms20230714_ko
