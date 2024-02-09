const ThirdButton = ({color, backgroundColor, text, url}) => {
  
  return (
      <a href={url} target="_blank"><button style={{backgroundColor: backgroundColor, color: color}} className="btn3">
          {text}
      </button></a>
    )
  }
  
  export default ThirdButton