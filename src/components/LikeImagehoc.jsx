import WrapperHoc from "./wraphoc.jsx"

function LikeImageHoc(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}

export default WrapperHoc(LikeImageHoc);