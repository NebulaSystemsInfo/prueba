import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Historia from './components/Historia.jsx'
import Titular from './components/Titular.jsx'
import Escudo from './components/Escudo.jsx'
import ViernesSanto from './components/ViernesSanto.jsx'
import Cultos from './components/Cultos.jsx'
import Galeria from './components/Galeria.jsx'
import Hermano from './components/Hermano.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Historia />
        <Titular />
        <Escudo />
        <ViernesSanto />
        <Cultos />
        <Galeria />
        <Hermano />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
