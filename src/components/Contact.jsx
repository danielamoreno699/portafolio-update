import  '../styles/contact.css'

const Contact = () => {
  return (
    <section id="contact-me" className="contact-me">
      <div className="contact">
        <div className="contact-container">
          <div className='mask'></div>
          <h2 className='h2-top'>Contact me</h2>

          <div className="container">
            <div className="text">
              Contact us Form
            </div>
            <form action="#">
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="">First Name</label>
                </div>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="">Last Name</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="">Email Address</label>
                </div>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="">Website Name</label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data textarea">
                  <textarea rows="8" cols="80" required></textarea>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
