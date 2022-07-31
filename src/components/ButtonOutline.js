const ButtonOutline = ({ text }) => {
  return (
    <Link to="cat" className="hover:bg-blue-900 border-cyan-50 rounded-lg border-2 hover:border-blue-900 px-3 py-2 text-sm font-medium" aria-current="page">{text}</Link>
  );
}
 
export default ButtonOutline;