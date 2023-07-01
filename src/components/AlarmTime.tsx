import React, { useState } from 'react';
import SetAlarm from './SetAlarm';

type Props = {};

const AlarmTime = (props: Props) => {
    const [alarm, setAlarm] = useState([
        {
            hours: '7',
            minutes: '00',
        },
        {
            hours: '7',
            minutes: '10',
        },
        {
            hours: '7',
            minutes: '20',
        },
    ]);

    const addAlarm = () => {
        // 알람을 등록함
    };

    return (
        <>
            <SetAlarm addAlarm={addAlarm} />
            <ul>
                {alarm.map((al, i) => (
                    <li key={i}>
                        {al.hours}:{al.minutes}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AlarmTime;
