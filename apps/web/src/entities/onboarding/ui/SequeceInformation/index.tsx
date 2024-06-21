'use client'

import { descriptionStyle, titleLine, titleStyle, wrapper } from './styles.css'

interface SequenceInformationProps {
  scenarioId?: string
  name?: string
  title?: string
}

export const SequenceInformation = ({ scenarioId, name, title }: SequenceInformationProps) => {
  const getTitles = (title?: string, name?: string) => {
    const titles: { name: string[]; description: string[] } = {
      name: [],
      description: [],
    }
    if (name) {
      titles.name = ['🖋️️', `${name}님의`, `${title}을 수정합니다.`]
      titles.description = ['수정사항은 저장한 시점부터 반영됩니다.']
      return titles
    }

    if (scenarioId) {
      titles.name = ['🖋️️', `${title}`, '템플릿을 수정합니다.']
      titles.description = ['수정사항은 저장한 시점부터 반영됩니다.']
      return titles
    }

    titles.name = ['👋', '신규 입사자들의 공통', '온보딩 시나리오를 작성해보세요.']
    titles.description = ['시퀀스를 생성해 각 날짜별 일정을 설계하세요!']
    return titles
  }

  return (
    <section className={wrapper}>
      <h3 className={titleStyle}>
        {getTitles(title).name.map((title, titleIndex) => {
          return (
            <span key={`title_${titleIndex}`} className={titleLine}>
              {title}
            </span>
          )
        })}
      </h3>
      <p className={descriptionStyle}>{getTitles().description}</p>
    </section>
  )
}
