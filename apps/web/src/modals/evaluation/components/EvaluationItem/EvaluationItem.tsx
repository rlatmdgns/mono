import EvaluationSection from '@/modals/evaluation/components/EvaluationSection'
import EvaluationArticle from '@/modals/evaluation/components/EvaluationArticle'

interface EvaluationItemProps {
  id: string
  index: number
  evaluation_items?: object[]
  append: (item: object) => void
  update: (index: number, item: object) => void
  remove: (index: number) => void
}

const EvaluationItem = ({
  id,
  index,
  evaluation_items,
  append,
  update,
  remove,
}: EvaluationItemProps) => {
  return (
    <>
      <EvaluationSection index={index} id={id} append={append} update={update} remove={remove} />
      {evaluation_items?.map((item, item_index) => (
        <EvaluationArticle
          key={item_index}
          sectionIndex={index}
          itemIndex={item_index}
          id={id}
          append={append}
          update={update}
          remove={remove}
        />
      ))}
    </>
  )
}

export default EvaluationItem
