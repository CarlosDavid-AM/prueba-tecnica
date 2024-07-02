import About from "@/component/About"
import Interests from "@/component/Interests"
import MainHeader from "@/component/MainHeader"

const page = () => {
  return (
    <div>
      <div className="header">
        <MainHeader />
      </div>
      
      <div className="main-body">
        <About />

        <Interests />
      </div>
    </div>
  )
}

export default page