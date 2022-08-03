const ButtonOutline = ({ text, click, className }) => {
  return (
    <button onClick={click} className={className + " text-white border-cyan-50 rounded-lg border-2 hover:bg-blue-700 hover:border-blue-900 px-3 py-2 text-sm font-medium"}>
      {text}
    </button>
  );
}
 
export default ButtonOutline;