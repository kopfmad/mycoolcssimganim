import '../styles.css'
import EfeitoUm from './EfeitoUm'
import EfeitoDois from './EfeitoDois'
import EfeitoTres from './EfeitoTres'

////////////////////////////////////

export default function BottomContainer() {
  return (
    <div className="BottomContainer">
      <EfeitoUm></EfeitoUm>
      <EfeitoDois></EfeitoDois>
      <EfeitoTres></EfeitoTres>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
      <EfeitoUm></EfeitoUm>
    </div>
  )
}
