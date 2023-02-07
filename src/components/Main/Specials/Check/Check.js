import './Check.css'

export const Check = ({validation}) => {
  return (  
    <div className="check">
      {
        validation? 
        <p className='yes'>{"\u{2714}"}</p> : 
        <p className='not'>{"\u{2716}"}</p>
      }
    </div>
  )
}

