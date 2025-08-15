import React, {useState} from 'react';
import './work.css';
import WorkData from './workData';



const Work = () => {
  
  // const mobileData = WorkData.category === "Mobile";
  const[items, setItems] = useState(WorkData.filter(data => data.category === 'Gen AI RAG' || data.category === 'Agentic AI'));
  const [activeLink, setActiveLink] = useState('Projects');

  // const items1 = items.category === "Mobile";

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  const filterItem = (categoryItem) => {
    // const itemsInital = WorkData.filter(data => data.category === 'Mobile')
    const updatedItems = WorkData.filter((curElem) => {
      if (categoryItem === "Projects") {
        return curElem.category === "Gen AI RAG" || curElem.category === "Agentic AI";
      } else {
        return curElem.category === categoryItem;
      }
    });
    setItems(updatedItems);
  }


  return (
    <section className="work container section" id="work">
    <h2 className='section__title'>Recent Work</h2>

    <div className="work__filters">
      <span className={activeLink === 'Projects' ? "work__item__active" : "work__item"}
      onClick={()=>{
        filterItem("Projects");
        onUpdateActiveLink("Projects");
      }}>Projects</span>

      <span className={activeLink === 'Case Studies' ? "work__item__active" : "work__item"}
      onClick={()=>{
        filterItem("Case Studies");
        onUpdateActiveLink("Case Studies");
      }}>Case Studies</span>


    </div>

    <div className="work__container grid">
      {items.map((element) => {
        const {title, desc, number, url, stack, img} = element;
        
        // if(element.category === "Mobile"){
        //   return(
        //     <h1>hello</h1>
        //   );
        // }
        return(
          <a href={url} target="_blank" rel="noopener noreferrer" className="work__card1">
            <img src={img} alt="" className="work__img"></img>
            <div className='work__card__header'>
              <h1 className='work__card__number'>{number}</h1>
              {/* Removed redundant <a> tag */}
              <li className="nav__list__1">
                <i class="fa-solid fa-link"></i>
              </li>
            </div>
            <h2 className='work__card__title'>{title}</h2>
            <h4 className='work__card__desc'>{desc}</h4>
            <p className='work__card__stack'>{stack}</p>
          </a>
  
        )
      })}
    </div>
    {/* <h1 className="work__quote_animation">Design User Experience Design User Interface</h1> */}
    {/* <h1 className="work__quote">Interested in <span style={{color: "#5fc9e1"}}>collaborating</span>?</h1> */}
    {/* <h1 className="work__quote">Interested in <span style={{color: "#5fc9e1"}}>collaborating</span>?</h1> */}
  </section>
  )
}

export default Work