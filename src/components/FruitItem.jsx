import './FruitItem.css'
import CounterBtn from "./counterbtn.jsx";



function FruitItem({emoji, name, count, setCount }){
    const  countDecrement = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const countIncrement = () =>{
        setCount(count + 1);
    }


    return (
        <>
            <section>
                <div className="counter-wrapper">
                    <h2>{emoji} {name}</h2>
                    <div className="count-container">
                        <CounterBtn cls="small-btn" bodyText="-" onClick={countDecrement} disable={count === 0}/>

                        {/*<button className="btn-min" disabled={count === 0}*/}
                        {/*        onClick={()=>setCount(count -1)}>-</button>*/}
                        <span className="counter">{count}</span>
                        <CounterBtn cls="small-btn" bodyText="+" onClick={countIncrement}/>
                        {/*<button className="btn-plus" onClick={()=>setCount(count +1)}>+</button>*/}
                    </div>

                </div>
            </section>

        </>
    )
}

export default FruitItem;