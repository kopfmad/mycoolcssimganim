import '../styles.css'
import EfeitoUm from './EfeitoUm'
import EfeitoDois from './EfeitoDois'
import EfeitoTres from './EfeitoTres'
import EfeitoQuatro from './EfeitoQuatro'
import EfeitoCinco from './EfeitoCinco'
import EfeitoSeis from './EfeitoSeis'
import EfeitoSete from './EfeitoSete'
import EfeitoOito from './EfeitoOito'

////////////////////////////////////

export default function BottomContainer() {
  return (
    <div className="BottomContainer">
      <EfeitoUm></EfeitoUm>
      <EfeitoDois></EfeitoDois>
      <EfeitoTres></EfeitoTres>
      <EfeitoQuatro></EfeitoQuatro>
      <EfeitoCinco></EfeitoCinco>
      <EfeitoSeis></EfeitoSeis>
      <EfeitoSete></EfeitoSete>
      <EfeitoOito></EfeitoOito>
      <EfeitoUm></EfeitoUm>
    </div>
  )
}
