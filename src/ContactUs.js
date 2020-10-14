import React, {useState} from "react"
import { Switch, Route } from "react-router-dom"
import emailjs from 'emailjs-com'
//import { Button } from '@material-ui/core'

const initInputs = {
    user_name: "",
    contact_number: "",
    user_email: ""
}


function ContactUs() {
       const [inputs, setInputs] = useState(initInputs)
       
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('user_oQB8bFJjV5Vpe', 'template_fsiw1as', e.target, 'user_oQB8bFJjV5VpevGum4IEO')
        .then((result) => {
            console.log(result.text);
           setInputs(initInputs)
<<<<<<< HEAD
=======
           console.log(inputs)
>>>>>>> 01c167bc7324f8df90fe2959a2bbf53459a3c993
           alert("Your email has been sent.")
        },(error) => {
            console.log(error.text)});
        
    }
    
    

  return (
       <Switch>
            <Route path="/ContactUs" render={() =>
                <> 
                    <div className="sideItem"></div>
                    <div className="contact-info">
                        <h2 id="larissa-brown" >Larissa Brown</h2>
                        <h3>larisa.brown.johnson@gmail.com</h3>
                        <h3 id="phone-number" >801-946-0113</h3>
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <br></br>
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <br></br>
                        <label>Message</label>
                        <textarea name="message" />
                        <br></br>
                        <input type="submit" value="Send"/>
                    </form>
                      <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                      <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                      <a className="resume" href="https://docs.google.com/document/d/1Ayf1I_4cmfYQL4Ts7uPLa3ybaIqZyEl_gwmmbd_KwuI/edit?usp=sharing"><img className="resume" src={require("./resume.png")} alt="resume"/></a>
                </>
            }/>
        </Switch>
        
    )
}
export default ContactUs