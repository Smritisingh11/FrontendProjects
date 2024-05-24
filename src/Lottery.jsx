import {useState} from "react";
import"./Lottery.css";
import {genTicket,sum} from "./Helper.js";
import Ticket from "./Ticket.jsx";



export default function Lottery({n,winningSum}) {
let[ticket, setTicket]=useState(genTicket(n));
let isWinning=sum(ticket)===winningSum;

let buyTicket=()=>{
    setTicket(genTicket(n));
}
    return(
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        
    
        <h3>{isWinning && "Congrutulation you Won!"}</h3>
        <button onClick={buyTicket}>Buy New Ticket</button>
        
     </div>
    );
}