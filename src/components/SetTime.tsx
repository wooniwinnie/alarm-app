import React, { useState } from 'react';
import { time } from 'console';

type Props = {};

const SetTime = () => {
    const [option, setOption] = useState<number | ''>(0);
    const hoursValue = Array.from({ length: 24 }, (_, i) => i + 1);
    const minutesValue = Array.from({ length: 60 }, (_, i) => i + 1);
    return (
        <form>
            <select name='' id=''>
                {hoursValue.map((h, i) => (
                    <option key={i}>{h}</option>
                ))}
            </select>
            <select name='' id=''>
                {minutesValue.map((m, i) => (
                    <option key={i}>{m}</option>
                ))}
            </select>
        </form>
    );
};

export default SetTime;
