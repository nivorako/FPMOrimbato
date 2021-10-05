import React from 'react';

import "./Annoucement.css";

function Annoucement() {
    const date = new Date();
    return (
        <div className="announcement">
            <p className="announcement__week">PROCHAINE CULTE: {date.toLocaleDateString()} // --adress--</p>
            <a href="/Church/Diary" className="annoucement__calendar">Calendrier</a>
        </div>
    )
}

export default Annoucement;
