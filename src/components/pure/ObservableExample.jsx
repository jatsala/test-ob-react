import React, { useState } from 'react';
import { getNumbers } from '../../services/observableServices';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscription to Observable')
        getNumbers.subscribe(
            {
                next(newNumber) {
                    console.log('New Number:', newNumber);
                    setNumber(newNumber); // Update State
                },
                error(error) {
                    alert(`Something went wrong: ${error}`)
                    console.log('Error in observable')
                },
                complete() {
                    alert(`Finished with: ${number}`)

                }
            }
        )

    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtain new Numbers</button>
        </div>
    );
}

export default ObservableExample;
