
import img1 from './imgs/facebook.png'
import img2 from './imgs/instagram.png'
import img3 from './imgs/twitter.png'


export const Footer = () => {
  return (
    <div className="footer">
        <p>2022 Capsicum & especias</p>
        <div>
            <a href="" ><img className='face' src={img1} alt="" /></a>
            <a href="" ><img className='insta' src={img2} alt="" /></a>
            <a href="" ><img className='twitter' src={img3} alt="" /></a>
        </div>

    </div>
    )
}
