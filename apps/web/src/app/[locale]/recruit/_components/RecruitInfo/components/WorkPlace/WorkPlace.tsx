import * as Styles from '@/app/[locale]/recruit/_components/RecruitInfo/styles'
import { Map } from 'shared/ui'
import { useTranslations } from 'next-intl'

interface WorkPlaceProps {
  posting_work_place: string
  posting_work_place_detail: string
  enterprise_name: string
}

const WorkPlace = ({
  posting_work_place,
  posting_work_place_detail,
  enterprise_name,
}: WorkPlaceProps) => {
  const $t = useTranslations('common')
  const isNotWorkPlace = posting_work_place === null || posting_work_place === undefined
  const isNotWorkPlaceDetail =
    posting_work_place_detail === null || posting_work_place_detail === undefined

  const work_place = `${posting_work_place} ${isNotWorkPlaceDetail ? '' : posting_work_place_detail}`

  if (isNotWorkPlace) return

  return (
    <>
      <Styles.Field>
        <Styles.FieldTitle>{$t('workspace')}</Styles.FieldTitle>
        <Styles.FieldInfo>{work_place}</Styles.FieldInfo>
      </Styles.Field>
      <Styles.MapBox>
        <Map
          address={posting_work_place}
          markerText={enterprise_name}
          draggable={true}
          isAnchorBlank={true}
        />
      </Styles.MapBox>
    </>
  )
}

export default WorkPlace
