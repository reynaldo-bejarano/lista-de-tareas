import React, { useEffect, useRef, useState } from 'react'


const Timer = () => {

    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, [])

    let interval = useRef();

    const startTimer = () => {
        const countdowmDate = new Date('January 1, 2024 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdowmDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    return (

        <div>
            <div className='flex justify-center items-center gap-5 md:gap-10 bg-teal-800 rounded-lg p-10'>
                <div className='text-center text-gray-200'>
                    <p className='md:text-4xl'>{timerDays}</p>
                    <p className='text-xs md:text-xl '>Días</p>
                </div>
                <span className='md:text-4xl'>:</span>
                <div className='text-center text-gray-200'>
                    <p className='md:text-4xl'>{timerHours}</p>
                    <p className='text-xs md:text-xl'>Horas</p>
                </div>
                <span className='md:text-4xl'>:</span>
                <div className='text-center text-gray-200'>
                    <p className='md:text-4xl'>{timerMinutes}</p>
                    <p className='text-xs md:text-xl'>Minutos</p>
                </div>
                <span className='md:text-4xl'>:</span>
                <div className='text-center text-gray-200'>
                    <p className='md:text-4xl'>{timerSeconds}</p>
                    <p className='text-xs md:text-xl'>Segundos</p>
                </div>
            </div>
        </div>


    )
}

export default Timer