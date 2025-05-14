interface CollapseProps {
  index: number
  title: string
  text: string
}

export default function Collapse(props: CollapseProps) {
  return (
    <div tabIndex={props.index} className="collapse collapse-plus bg-base-100 border-base-300 border">
      <div className="collapse-title font-semibold">{props.title}</div>
      <div className="collapse-content text-sm">{props.text}</div>
    </div>
  )
}