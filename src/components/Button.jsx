

const Button = ({text, onClick,}) => {
     return(
          <>
          <button
           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
           onClick={onClick}
          >
          {text}
          </button>
          </>
     )
}

export default Button;