function CounterBtn({cls, bodyText, onClick, disable}){

    return(
        <>
            <button className={cls} onClick={onClick} disabled={disable}>
                {bodyText}
            </button>
        </>
    )
}

export default CounterBtn;