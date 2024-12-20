
import Navbar from './components/navbar'
import Main from './components/Main'
import Footer from './components/footer'

export default function Home () {
  return (
    <div className='flex justify-center items-center flex-col '>
      <Navbar />
      <Main />
      <Footer />
    </div >
  )
}
