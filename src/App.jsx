import {useState} from 'react'

import './App.css'
import FruitItem from "./components/FruitItem.jsx";


// Hoe gebruik ik state nu?
// hoe tel ik op en af


function App() {
    // const [aardbeienCount, setAardbeienCount] = useState(0);
    // const [bananenCount, setBananenCount] = useState(0);
    // const [applesCount, setApplesCount] = useState(0);
    // const [kiwisCount, setKiwisCount] = useState(0);

    //formulier useState
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        zipcode: '',
        frequency: 'neutral',
        moment: 'day',
        message: '',
        terms: false,
        aardbei: 0,
        bananen: 0,
        apples: 0,
        kiwis: 0,
    });

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        })
    }


    function resetCounts() {
        // setAardbeienCount(0);
        // setBananenCount(0);
        // setApplesCount(0);
        // setKiwisCount(0);
        setFormState({
            ...formState,
            aardbei: 0,
            apples: 0,
            kiwis: 0,
            bananen: 0,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Form Data:', formState);
    }


    return (
        <>
            <main>
                <div className="container">
                    <article>
                        <FruitItem emoji="🍓" name="aardbei" count={formState.aardbei}
                                   setCount={(count) => handleChange({target: {name: 'aardbei', value: count}})}/>
                        <FruitItem emoji="🍌" name="bananen" count={formState.bananen}
                                   setCount={(count) => handleChange({target: {name: 'bananen', value: count}})}/>
                        <FruitItem emoji="🍏" name="apples" count={formState.apples}
                                   setCount={(count) => handleChange({target: {name: 'apples', value: count}})}/>
                        <FruitItem emoji="🥝" name="kiwis" count={formState.kiwis}
                                   setCount={(count) => handleChange({target: {name: 'kiwis', value: count}})}/>
                        {/*<FruitItem emoji="🍓" name="Aardbei" count={aardbeienCount} setCount={setAardbeienCount}/>*/}
                        {/*<FruitItem emoji="🍌" name="Bananen" count={bananenCount} setCount={setBananenCount}/>*/}
                        {/*<FruitItem emoji="🍏" name="Apples" count={applesCount} setCount={setApplesCount}/>*/}
                        {/*<FruitItem emoji="🥝" name="Kiwi's" count={kiwisCount} setCount={setKiwisCount}/>*/}
                        <button className="btn" onClick={(resetCounts)}>Rest all</button>
                    </article>
                    <article>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstname">Voornaam
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="lastname">Achternaam
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formState.lastname}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Leeftijd
                                    <input
                                        type="text"
                                        id="age"
                                        name="age"
                                        value={formState.age}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="zipcode">Postcode
                                    <input
                                        type="text"
                                        id="zipcode"
                                        name="zipcode"
                                        value={formState.zipcode}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <legend>Bezorgfrequentie</legend>
                                    <label htmlFor="frequency">
                                        <select name="frequency"
                                                id="frequency"
                                                value={formState.frequency}
                                                onChange={handleChange}
                                        >
                                            <option value="daily">Dagelijks</option>
                                            <option value="weekly">Wekelijks</option>
                                            <option value="monthly">Maandelijks</option>
                                            <option value="quarterly">Elk kwartaal</option>
                                        </select>
                                    </label>
                                </fieldset>
                                <div className="radio-wrapper">
                                    <fieldset>
                                        <legend>Dagdeel</legend>
                                        <label>
                                            <input
                                                type="radio"
                                                name="moment"
                                                value="day"
                                                checked={formState.moment === "day"}
                                                onChange={handleChange}

                                            />
                                            Overdag
                                        </label>
                                        <label>

                                            <input
                                                type="radio"
                                                name="moment"
                                                value="night"
                                                checked={formState.moment === "night"}
                                                onChange={handleChange}
                                            />
                                            's Avonds
                                        </label>
                                    </fieldset>
                                </div>
                            </div>

                            <label htmlFor="message">
                                Opmerking
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={6}
                                />
                            </label>
                            <div className="checkbox-wrapper">
                                <label htmlFor="form-terms">
                                    <input
                                        type="checkbox"
                                        id="form-terms"
                                        name="terms"
                                        checked={formState.terms}
                                        onChange={handleChange}
                                    />
                                    Ik ga akkoord met de voorwaarden
                                </label>
                            </div>
                            <button className="btn" type="submit">
                                Verstuur
                            </button>

                        </form>

                    </article>
                </div>
            </main>
        </>
    )
}

export default App
