import '../styles.css'
import img1 from '../imgs/img1.jpg'

export default function EfeitoUm() {
  return (
    <div className="EfeitoUm">
      <img src={img1} alt="imagem 1" />
      <div>
        <h3>Caption Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          quibusdam sunt alias mollitia quos atque.
        </p>
      </div>
    </div>
  )
}
