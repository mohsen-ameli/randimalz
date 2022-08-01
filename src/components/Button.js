const Button = ({ text, click, className }) => {
    return (
      <button onClick={click} className={className + " bg-blue-500 hover:bg-blue-700 text-sm px-6 py-3 shadow rounded hover:shadow-lg text-white relative font-bold uppercase ease-linear transition-all duration-150"}>
        {text}
      </button>
    )
}

export default Button