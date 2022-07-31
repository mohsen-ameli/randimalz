const Button = ({ text, click, className }) => {
    return (
      <button className={className + " bg-blue-500 px-4 py-2 hover:bg-blue-700 rounded text-white relative"} onClick={click}>
        {text}
      </button>
    )
}

export default Button