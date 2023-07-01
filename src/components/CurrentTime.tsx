import { time } from 'console';
import React, { useEffect, useState } from 'react';
import SetTime from './SetTime';

type Props = {};

const CurrentTime = () => {
    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTIme = (date: Date): string => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <>
            <div className='w-96 text-center m-auto mt-48'>
                <span className=' tracking-widest text-4xl'>
                    {formatTIme(time)}
                </span>
            </div>
            <div>
                <SetTime />
            </div>
        </>
    );
};

export default CurrentTime;
