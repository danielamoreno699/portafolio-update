import '../styles/contact.css';
import { useNavigate } from 'react-router-dom';


const Contact = () => {

  const navigateTo = useNavigate(); 

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); 
  //   navigateTo('/thanks');
  // };
 
  return (
    <section id="contact-me" className="contact-me">
      <div className="contact">
        <div className="contact-container">
          <div className='mask'></div>


          <div className='contact-title'>
          <h2 className='h2-contact'>Contact me</h2>

          <div className='contact-log-container'>
          <div className='home-sci contact-logos'>
           
           <a href=""><box-icon name='twitter' type='logo' className="logo"></box-icon></a>
           <a href=""><box-icon name='github' type='logo' className="logo" ></box-icon></a>
           <a href=""><box-icon name='linkedin' type='logo' className="logo"></box-icon></a>
         </div>
          </div>
          



        </div>

          <div className="contact-info">
            <div className="container">
              <div className="text">
                Contact Email Form
              </div>

              <form action="https://formsubmit.co/danielamoreno699@gmail.com" method="POST"  >
                <div className="form-row">
                  <div className="input-data">
                    <input type="text" 
                      name="firstName"
                      required />
                    <div className="underline"></div>
                    <label htmlFor="">First Name</label>
                  </div>
                  <div className="input-data">
                    <input type="text" 
                      required
                      name="lastName" />
                    <div className="underline"></div>
                    <label htmlFor="">Last Name</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-data">
                    <input type="email" 
                      name="email"
                      required />
                    <div className="underline"></div>
                    <label htmlFor="">Email Address</label>
                  </div>
                  <div className="input-data">
                    <input type="text" 
                      name="motivation"
                      required />
                    <div className="underline"></div>
                    <label htmlFor="">Motivation for Contact</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-data textarea">
                    <textarea rows="8" cols="80" 
                      required
                      name="message"
                    ></textarea>
                    <br />
                    <div className="underline"></div>
                    <label htmlFor="">Write your message</label>
                    <br />
                    <div className="form-row submit-btn">
                      <div className="input-data">
                        <div className="inner"></div>
                        <input type="submit" value="Submit" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <input type="hidden" name="_next" value="/thanks" />  */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
