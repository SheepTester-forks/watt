import React from 'react';

// Icons
import { ChevronLeft, ChevronRight } from 'react-feather';


const DateSelector = (props) => {
    let {incDay, decDay, setViewDate, date} = props;

    return (
        <div className="date-selector">
            <button className="icon" onClick={decDay}>
                <ChevronLeft/>
            </button>

            <form noValidate>
                <input
                    id="date"
                    type="date"
                    value={date.format('YYYY-MM-DD')}
                    onChange={e => setViewDate(e.target.value)}
                />
            </form>

            <button className="icon" onClick={incDay}>
                <ChevronRight/>
            </button>
        </div>
    );
}

export default DateSelector;