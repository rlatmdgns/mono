'use client'

import { Contents } from '@/entities/onboarding/ui/OnboardingDetail/Contents'
import { DetailHeader } from '@/entities/onboarding/ui/OnboardingDetail/DetailHeader'
import { body, navWrapper } from '@/entities/onboarding/ui/OnboardingDetail/styles.css'
import { OnboardingReadButton } from '@/features/onboarding/ui'
import { FreshmanSurveyBody } from '@/features/onboarding/ui/FreshmanSurveyBody'
import { DEFAULT_SURVEY } from '@/widgets/onboarding/entities'
import { Button } from '@repo/ui'

const contents =
  ' <h1>ABC HR 회사</h1>\n' +
  '    \n' +
  '    <h2>비전</h2>\n' +
  '    <p>"사람 중심의 혁신으로 글로벌 HR 리더가 되다"</p>\n' +
  '    <p>ABC HR 회사는 사람을 중심으로 혁신적인 인적 자원 솔루션을 제공하여, 글로벌 시장에서 선도적인 HR 파트너로 성장하는 것을 목표로 합니다.</p>\n' +
  '    \n' +
  '    <h2>미션</h2>\n' +
  '    <ul>\n' +
  '        <li>최고의 인재 제공: 고객의 요구에 맞는 최고의 인재를 발굴하고 제공하여, 고객의 성공을 지원합니다.</li>\n' +
  '        <li>혁신적인 HR 솔루션: 최신 기술과 데이터를 활용한 혁신적인 HR 솔루션을 개발하여, 고객의 HR 전략을 최적화합니다.</li>\n' +
  '        <li>글로벌 네트워크: 글로벌 네트워크를 강화하여, 전 세계 다양한 시장에서 경쟁력을 확보합니다.</li>\n' +
  '        <li>사회적 책임: 공정하고 윤리적인 HR 서비스를 제공하여, 사회적 책임을 다합니다.</li>\n' +
  '        <li>직원 가치 증진: 직원들의 역량 개발을 지원하고, 일과 삶의 균형을 추구하는 근무 환경을 조성합니다.</li>\n' +
  '    </ul>\n' +
  '    \n' +
  '    <h2>핵심 가치</h2>\n' +
  '    <ul>\n' +
  '        <li><strong>사람 중심(People-Centric):</strong> 모든 활동의 중심에 사람을 두고, 고객과 직원의 가치를 최우선으로 합니다.</li>\n' +
  '        <li><strong>혁신(Innovation):</strong> 지속적인 혁신을 통해 최신 HR 트렌드와 기술을 선도합니다.</li>\n' +
  '        <li><strong>신뢰(Trust):</strong> 투명하고 신뢰할 수 있는 서비스를 제공하여, 고객과의 장기적인 파트너십을 구축합니다.</li>\n' +
  '        <li><strong>품질(Quality):</strong> 최고 품질의 HR 솔루션과 서비스를 제공하여, 고객의 만족을 보장합니다.</li>\n' +
  '        <li><strong>책임(Responsibility):</strong> 윤리적이고 책임감 있는 경영을 통해, 사회와 환경에 긍정적인 영향을 미칩니다.</li>\n' +
  '    </ul>\n' +
  '    \n' +
  '    <h2>전략 목표</h2>\n' +
  '    <ul>\n' +
  '        <li>고객 만족 극대화: 맞춤형 HR 솔루션을 제공하여, 고객의 만족도를 극대화하고, 장기적인 파트너십을 유지합니다.</li>\n' +
  '        <li>기술 혁신: 최신 HR 기술과 데이터 분석을 통해, 혁신적인 HR 서비스를 개발하고 제공합니다.</li>\n' +
  '        <li>글로벌 확장: 글로벌 시장에서의 입지를 강화하고, 다양한 문화와 지역에 맞춘 HR 솔루션을 제공합니다.</li>\n' +
  '        <li>인재 개발: 직원들의 역량 강화를 위한 교육 프로그램을 운영하고, 지속적인 자기 개발을 지원합니다.</li>\n' +
  '        <li>지속 가능성: 지속 가능한 경영 방식을 도입하여, 환경 보호와 사회적 책임을 다합니다.</li>\n' +
  '    </ul>\n' +
  '    \n' +
  '    <h2>미래 지향</h2>\n' +
  '    <p>ABC HR 회사는 이러한 비전과 목표를 통해, 전 세계에서 인정받는 HR 리더로 자리매김하고, 고객과 직원 모두에게 최상의 가치를 제공할 것입니다. 우리는 사람 중심의 혁신을 통해 HR 산업을 선도하며, 지속 가능한 성장을 이루어 나갈 것입니다.</p>'

interface OnboardingDetailProps {
  isFreshman: boolean
  type: string
}

export const OnboardingDetail = ({ type, isFreshman }: OnboardingDetailProps) => {
  const title = '디자인 온보딩 만족도 설문'
  const description = '본 설문은 온보딩 프로세스 발전을 위해 사용됩니다.'

  const survives = DEFAULT_SURVEY.questions
  return (
    <div>
      <nav className={navWrapper}>
        <Button text={title} leadingIcon="icon/left-line" state="secondary" style="mono" />
      </nav>
      <article className={body}>
        <DetailHeader title={title} description={description} />
        <Contents type={type} contents={contents} />
        <FreshmanSurveyBody type={type} survives={survives} />
        <OnboardingReadButton isFreshman={isFreshman} />
      </article>
    </div>
  )
}
