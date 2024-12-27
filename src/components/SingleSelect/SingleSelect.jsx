import { useState } from 'react';

import './SingleSelect.scss';

export default function SingleSelect({
    options,
    selectedOption,
    onClickHandle,
    showSelected = true,
}) {
    const [isVisible, setIsIvisible] = useState(false);

    return (
        <div className="single-select">
            <div
                className={`single-select__container ${
                    isVisible ? 'single-select__container--visible' : ''
                }`}
                onClick={() => setIsIvisible(!isVisible)}
            >
                {selectedOption.value}
            </div>
            <ul
                className={`single-select__list ${isVisible ? 'single-select__list--visible' : ''}`}
            >
                {options.map((option) => (
                    <li
                        key={option.id}
                        className={`single-select__item ${
                            option.id === selectedOption.id ? 'single-select__item--disabled' : ''
                        } ${
                            !showSelected && option.id === selectedOption.id
                                ? 'single-select__item--hidden'
                                : ''
                        }`}
                        onClick={() => {
                            onClickHandle(option);
                            setIsIvisible(false);
                        }}
                        aria-disabled={option.id === selectedOption.id}
                    >
                        {option.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
