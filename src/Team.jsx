import { useState } from "react"

export default function Team(){
    const [team , setTeam] = useState(11);
    const teamOut = () =>{
        const newTeam = !team ? team + 0:team - 1;
        setTeam(newTeam)
    }
    const teamStyle = {
        border:'2px solid purple',
        margin: '15px',
        padding:'15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={teamOut}>Out</button>
        </div>
    )
}