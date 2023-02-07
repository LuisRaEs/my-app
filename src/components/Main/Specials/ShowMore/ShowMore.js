import './ShowMore.css'

export const ShowMore = ({onClick})=> {
  return (  
    <div id="show-more" onClick={()=>onClick()}>
      <p id="left">SHOW</p>
      <div id="arrcontainer">
        <div id="arrow"></div>
      </div>
      <p id="right">MORE</p>
    </div>
  );
}
