export default function Button (props) {
  return (
    <div>
      <button onClick={props.action}>{props.text}</button>
    </div>
  )
}
