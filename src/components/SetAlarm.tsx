import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {
    addAlarm: () => void;
};

const SetAlarm = ({ addAlarm }: Props) => {
    const [hourOption, setHourOption] = useState<number | ''>(0);
    const [minOption, setMinOption] = useState<number | ''>(0);
    const hoursValue = Array.from({ length: 24 }, (_, i) => i + 1);
    const minutesValue = Array.from({ length: 59 }, (_, i) => i + 1);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // addAlarm(여기에는 hourOption, minOption 값을 객체로 전달시켜야함)
    };
    const handleHoursChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setHourOption(Number(e.target.value));
    };
    const handleMinutesChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMinOption(Number(e.target.value));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex justify-center mt-12 text-2xl'
        >
            <select
                className='text-center'
                value={hourOption}
                onChange={handleHoursChange}
            >
                {hoursValue.map((h, i) => (
                    <option key={i}>{h}</option>
                ))}
            </select>
            <select
                className='text-center'
                value={minOption}
                onChange={handleMinutesChange}
            >
                {minutesValue.map((m, i) => (
                    <option key={i}>{m}</option>
                ))}
                <option value=''>00</option>
            </select>
            <button className=' block'>알람설정</button>
        </form>
    );
};

export default SetAlarm;
