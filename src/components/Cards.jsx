import '../styles/cards.css';
import {  useSelector } from 'react-redux';
import CardItem from "./CardItem"




const Cards = ({ setIsOpen }) => {

  const {data} = useSelector((state) => state.cards);


  return (
    <>
    <div className='projects'>
    <h2 className='h2-card'>take a look at my projects</h2>
    <div className="card-container">
      
      {data.map((card) => (
        <CardItem key={card.id} card={card} setIsOpen={setIsOpen} />
      ))}
    </div>
    




    </div>
   
    </>
    
  )
}

export default Cards
