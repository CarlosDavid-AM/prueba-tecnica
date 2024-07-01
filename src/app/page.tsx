import About from "@/component/About"
import MainHeader from "@/component/MainHeader"

const page = () => {
  return (
    <div>
      <div className="header">
        <MainHeader />
      </div>
      
      <div className="main-body">
        <About />
      </div>
    </div>
  )
}

export default page