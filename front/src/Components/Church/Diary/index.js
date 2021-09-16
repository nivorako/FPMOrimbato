import React, {useState, useEffect} from 'react';
import DataDiary from '../../../Data/DataDiary';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';

import './Diary.css';

function Diary() {

    const[diaries, setDiary] = useState([]);

    useEffect(() => {
        setDiary(DataDiary);
    }, []);

    const[date, setDate] = useState(new Date());

    const mois = [  'january', 'february', 'march', 'april',
                    'may', 'june', 'july', 'august',
                    'september', 'october', 'november', "december"];

    const selectedMonth = mois[date.getMonth()];

    const[calendar, setCalendar] = useState(false);

    const onChange = (date) => {
        setDate(date);
        setCalendar(!calendar);

    }

    const showCalendar = () => {
        setCalendar(!calendar);
    }

    return (
        <div className="calendar container">
            <div className="calendar__show">
                {
                    calendar ? (
                        <div>
                            <Calendar 
                            onChange={onChange}
                            value={date}
                            className='cal'
                            />
                        </div>
                        
                    ) : <button onClick={showCalendar} className="calendar__button">Voir calendrier</button>
                }
                
            </div>
            
            <div className="calendar__display">
            
            {/* Ici, on filtre d'abord le mois qui nous interresse et on affiche */}
            {
                diaries.filter(diary => diary.month === selectedMonth).map(item => (
                <div className="caroussel">       
                    <div className="event">
                        <div className="details">
                            <div>{item.date}</div>
                            <div className="adress">
                                <p>{item.planning} </p> 
                                <p>{item.lieu}</p>
                                <p>{item.evenement}</p>
                            </div>
                            <div className="image">
                                {item.photo}
                            </div>
                        </div>
                    </div>
                </div>
                ))
            
            }
            </div>
        </div>
    )
}

export default Diary;
