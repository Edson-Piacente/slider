import { useState } from 'react'
import './App.css'
import Carmy from './assets/mundial.webp'
import Cjoa from './assets/paulistao.png'
import Curs from './assets/copínha.png'
import slider1 from './assets/corinthians1.jpg'
import slider2 from './assets/corinthians2.jpg'
import slider3 from './assets/corinthians3.jpg'
import slider4 from './assets/corinthians4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider4} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Taça Paulistão</h2>
              <p className="desc">Para porcada chegar ao nível do Corinthians, CBF está vendendo Paulistão.</p>
              <p className="preco">$ 1.000.000,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Taça Mundial</h2>
              <p className="desc">Para aqueles que falam de 51, Fifa anuncia a venda do Mundial.</p>
              <p className="preco">$ 5.000.000,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Taça Copinha</h2>
              <p className="desc">Porcada após ganhar a sua primeira Copinha, deseja chegar ao nível do Corinthians</p>
              <p className="preco">$ 250.000,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4QAhZNDOpH8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
