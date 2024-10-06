import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetYourBookings(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const apiUrl = "http://localhost:5000/api/rooms";
        fetch(apiUrl).then(res=>res.json()).then(res=>setData(res));
    },[]);
    const foramtedBookings = data.map((fac)=>{
        return(<tr>
                    <td>{fac.name}</td>
                    <td><Link className="btn btn-info" to={"/bookings/"+fac.id}>Read More</Link></td>
                    <td><Link className="btn btn-warning" to={"/bookings/edit/"+fac.id}>Edit</Link></td>
                </tr>
        );
    });
    return(
        <>
        <Link to="/faculty/add" className="btn btn-primary">Add bookings</Link>
        <table className="table">
            {foramtedBookings}
        </table>    
        </>
    )
}

export default GetYourBookings;