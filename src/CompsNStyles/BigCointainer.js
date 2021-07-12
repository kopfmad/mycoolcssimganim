import '../styles.css'
import UpperContainer from './UpperContainer'
import BottomContainer from './BottomContainer'

export default function BigContainer() {
  return (
    <div className="BigContainer">
      <UpperContainer></UpperContainer>
      <BottomContainer></BottomContainer>
    </div>
  )
}
