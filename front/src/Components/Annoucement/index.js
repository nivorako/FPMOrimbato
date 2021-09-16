import React from 'react';

import "./Annoucement.css";

function Annoucement() {
    return (
        <div className="announcement">
            <p className="announcement__week">PROCHAINE CULTE: --date--  // --adress--</p>
            <a href="/Church/Diary" className="annoucement__calendar">Calendrier</a>
        </div>
    )
}

export default Annoucement;
