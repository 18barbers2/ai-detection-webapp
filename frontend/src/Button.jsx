function Button({handleClick, children, className}) {

    function handleClick() {
        alert(`You clicked ${className}`);
        if(children !== null){
            alert('children!')
        }
        else{
            alert('no children!')
        }
    }

    return(
        // <button onClick={handleClick} className={`button ${className}`}>
        //     {children}
        // </button>
        <div onClick={handleClick} className={`button ${className}`}>
            {children}
        </div>
    );
}

export default Button;