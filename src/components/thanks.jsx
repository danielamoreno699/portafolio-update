import '../styles/thanks.css'
import { useNavigate } from 'react-router-dom';

const Thanks = () => {

    const navigateTo = useNavigate();


    const handleClick = () =>{
        navigateTo('/');
    }

  return (
    <>
    <section id="thanks">

        <div className="container-thanks">

            <div className='box-message'>
           
           <div className='thanks-msg'>
           <h4>thanks for contacting me, soon you will have a response </h4>
            <button type="button" 
            className="btn-see-more live  btn-thanks"
            onClick={handleClick}
            >
                <a>
                    back to home
                </a>
            </button>
            </div>

           </div>
            

        </div>


    </section>
    </>
    
  )
}

export default Thanks