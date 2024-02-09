const SecondaryButton = ({color, backgroundColor, text}) => {
  return (
    <button style={{backgroundColor: backgroundColor, color: color}} className="btn2">
        {text}
    </button>
  )
}

export default SecondaryButton