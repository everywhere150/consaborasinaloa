
import miImagen from '../images/saborasinaloa.png';
import tiktok from '../images/tiktok.png';
import youtube from '../images/youtube.png';
import insta from '../images/insta.png';
import './css/header.css'
function Header() {
  return (
    <div className='header-container-principal'>
      <div className="container-header">
        <img src={miImagen} alt="" />
        <div className="header-opciones">
          <nav>
            <ul>
               <li><a href="/">Home</a></li>
              <li><a href="/recipes">Recetas</a></li>
              <li>Tips</li>
              <li>Cómo</li>
              <li>Contactanos</li>
              <li className='redes'>
                <li><img src={tiktok} alt="" /></li>
                <li><img src={youtube} alt="" /></li>
                <li><img src={insta} alt="" /></li>
              </li>

            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}
export default Header;