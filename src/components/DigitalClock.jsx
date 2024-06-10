import { useEffect, useState } from 'react'
import styles from './DigitalClock.module.css'

function DigitalClock() {
    let [time, setTime] = useState(new Date());

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    }

    return (
        <div className={styles.container}>
            <div className={styles.clock}>{formatTime()}</div>
        </div>
    )
}

export default DigitalClock