function Button({children, onClick, color = "dark"}) {
    return(
        <button 
            className={`btn btn-${color} text-sm btn-sm`}
            style={{ fontSize: '0.875rem' }}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;