const Button = ({ onClick, className, children }) => {
  return (
    <button 
      onClick={onClick} 
      className={`transition-all duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;