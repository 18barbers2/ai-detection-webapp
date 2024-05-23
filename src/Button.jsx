function Button({handleClick, children, className}) {

    function handleClick() {
        alert('You clicked me');
    }

    return(
        <button onClick={handleClick} className={`button ${className}`}>
            {children}
        </button>
    );
}

export default Button;