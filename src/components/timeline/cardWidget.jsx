import React from 'react'

const CardWidget = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <h5 className='timeline_tags'>{props.keywords}</h5>
        <ul className='timeline__desc'>
          {Array.isArray(props.desc) ? props.desc.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
          )) : <li dangerouslySetInnerHTML={{ __html: props.desc }}></li>}
        </ul>
    </div>
  )
}

export default CardWidget