import About from "@/component/About"
import ContactForm from "@/component/ContactForm"
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

        <ContactForm />
      </div>
    </div>
  )
}

export default page