import StarButton from "../features/special_button/SpecialButton"
import pic8 from '../assets/Image from iOS (1).jpg'

const SpecialSection = () => {
  return (
    <section>
      <h1>Will you be my Valentine?</h1>
      <StarButton/>
      <div className='image-container'>
        <img src={pic8} alt='Curious Monkey'/>
      </div>
    </section>
  )
}

export default SpecialSection