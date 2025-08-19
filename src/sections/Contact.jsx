import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { MagicCard } from "../components/MagicCard"
import { Particles } from "../components/Particles"

const Contact = () => {
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    message : "",
  })

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const [isLoading, setIsLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage=(type, message) => {
      setAlertType(type);
      setAlertMessage(message);
      setShowAlert(true);
      setTimeout(()=>{
        setShowAlert(false)
      }, 5000)
  }

  const  handleSubmit = async(e)=>{
     e.preventDefault();
    setIsLoading(true);
    try {
      console.log("form submitted", formData)
      await emailjs.send("service_g6lojrf", "template_h2wephi", {
        from_name: formData.name,
        to_name: "Yash",
        from_email: formData.email,
        to_email: "workmail.yrs@gmail.com",
        message: formData.message
      }, "h8YgBzhxF1E6CMTRJ");
      setIsLoading(false);
      showAlertMessage("success", "Your message has been successfully sent!")
      setFormData({name:"", email:"", message:""})
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!")
    }       
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen c-space section-spacing">
      <Particles className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh />
      {showAlert && <Alert type={alertType} text={alertMessage}/>}
      
      <MagicCard className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center p-8 mx-auto">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading text-white">Let's talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you need a full-stack application built from scratch, a critical bug squashed, 
              a reliable team player for your next big project, or a hackathon partner who brings 
              creative solutions - I'm ready to dive in.
            </p>
          </div>
          
          <form className="w-full" onSubmit={handleSubmit} >
            <div className="mb-5">
              <label htmlFor="name" className="field-label text-white">
                Full Name
              </label>
              <input 
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="Elon Musk"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="email" className="field-label text-white">
                Email
              </label>
              <input 
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="elonmusk@gmail.com"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="message" className="field-label text-white">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus resize-none"
                placeholder="Share your cool idea here..."
                autoComplete="off"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <button 
              type="submit"
              className="w-full px-4 py-3 text-lg text-white text-center rounded-md cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50"
              disabled={isLoading}
            >
              {!isLoading ? "Send" : "Sending..."}
            </button>
          </form>
        </div>
      </MagicCard>
      
    </section>
  )
}

export default Contact