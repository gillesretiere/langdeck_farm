import Header from "./Header"
import Footer from "./Footer"
import DeckMemorizer from "../components/DeckMemorizer"

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen ">
        <Header />
        <div><DeckMemorizer /></div>
        <div className="flex-1 min-h-full flex flex-col flex-grow align-baseline mt-2 pt-0">{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout