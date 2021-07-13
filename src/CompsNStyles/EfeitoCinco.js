import '../styles.css'
import img5 from '../imgs/img5.jpg'

export default function EfeitoCinco() {
  return (
    <div className="EfeitoCinco">
      <img src={img5} alt="" />
      <div className="EfeitoCinco__texto">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nam!
          Exercitationem doloremque ratione praesentium consequuntur eveniet
          quis? Minima vitae doloribus illum libero vel sapiente possimus.
        </p>
      </div>
      <div className="EfeitoCinco__cima"></div>
      <div className="EfeitoCinco__baixo"></div>
    </div>
  )
}
