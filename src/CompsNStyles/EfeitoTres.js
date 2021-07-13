import '../styles.css'
import img3 from '../imgs/img3.jpg'

export default function EfeitoTres() {
  return (
    <div className="EfeitoTres">
      <img src={img3} alt="imagem 3" />
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
