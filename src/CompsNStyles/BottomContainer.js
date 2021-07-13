import '../styles.css'
import EfeitoUm from './EfeitoUm'
import EfeitoDois from './EfeitoDois'
import EfeitoTres from './EfeitoTres'
import EfeitoQuatro from './EfeitoQuatro'
import EfeitoSeis from './EfeitoSeis'

////////////////////////////////////

export default function BottomContainer() {
  return (
    <div className="BottomContainer">
      <EfeitoUm></EfeitoUm>
      <EfeitoDois></EfeitoDois>
      <EfeitoTres></EfeitoTres>
      <EfeitoQuatro></EfeitoQuatro>
      <EfeitoUm></EfeitoUm>
      <EfeitoSeis></EfeitoSeis>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
    </div>
  )
}
