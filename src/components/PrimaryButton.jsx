const PrimaryButton = ({backgroundColor, color, text}) => {
    return (
        <button style={{backgroundColor: backgroundColor, color: color}} className="btn1">
            {text}
        </button>
    )
}

export default PrimaryButton