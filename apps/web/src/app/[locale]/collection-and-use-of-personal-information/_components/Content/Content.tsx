import * as Styles from './styles'
import { COLLECTION_AND_USE_OF_PERSONAL_INFORMATION } from '@/app/[locale]/collection-and-use-of-personal-information/_components/Content/Content.constants'
import { useLocale } from 'next-intl'

interface ContentProps {
  enterpriseName: string
}

const Content = ({ enterpriseName }: ContentProps) => {
  const currentLocale = useLocale()

  return (
    <Styles.Wrapper>
      <Styles.Title>
        {decodeURI(enterpriseName)}
        <br />
        {COLLECTION_AND_USE_OF_PERSONAL_INFORMATION['title'][currentLocale]}
      </Styles.Title>
      <Styles.Content>
        {COLLECTION_AND_USE_OF_PERSONAL_INFORMATION['contents'][currentLocale]?.map(
          (content: any, index: number) => (
            <Styles.Item key={index}>
              <Styles.ItemTitle>
                {index + 1}. {content.title}
              </Styles.ItemTitle>
              <Styles.ItemDescription>- {content.description}</Styles.ItemDescription>
            </Styles.Item>
          ),
        )}
        {COLLECTION_AND_USE_OF_PERSONAL_INFORMATION['notices'][currentLocale]?.map(
          (notice: any, index: number) => <Styles.Notice key={index}>※ {notice}</Styles.Notice>,
        )}
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default Content
