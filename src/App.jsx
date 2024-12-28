import { useState } from 'react';
import SingleSelect from './components/SingleSelect/SingleSelect';

function App() {
    const options = [
        {
            id: null,
            value: 'Select an option',
        },
        {
            id: 1,
            value: 'Option 1',
        },
        {
            id: 2,
            value: 'Option 2',
        },
        {
            id: 3,
            value: 'Option 3',
        },
        {
            id: 4,
            value: 'Option 4',
        },
        {
            id: 5,
            value: 'Option 5',
        },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <>
            <h1>Custom dropdown</h1>
            <SingleSelect
                options={options}
                selectedOption={selectedOption}
                onClickHandle={(option) => {
                    setSelectedOption(option);
                }}
            />
        </>
    );
}

export default App;
