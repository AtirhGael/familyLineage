import { BrowserRouter } from "react-router-dom"
import { Heritage,Gallery,Navbar,Feedbacks, Hero, BlogPost } from "./components"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <Heritage/>
          <Gallery/>
          <BlogPost/>
          {/* <Feedbacks/> */}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
