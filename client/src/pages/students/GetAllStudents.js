import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetAllStudents(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const apiUrl = "http://localhost:5000/api/rooms";
        fetch(apiUrl).then(res=>res.json()).then(res=>setData(res));
    },[]);
    const foramtedFaculties = data.map((fac)=>{
        return(<tr>
                    <td>{fac.name}</td>
                    <td><Link className="btn btn-info" to={"/faculty/"+fac.id}>Read More</Link></td>
                    <td><Link className="btn btn-warning" to={"/faculty/edit/"+fac.id}>Edit</Link></td>
                </tr>
        );
    });
    return(
        <>
        <Link to="/faculty/add" className="btn btn-primary">Add Faculty</Link>
        <table className="table">
            {foramtedFaculties}
        </table>
        </>
    )
}

export default GetAllStudents;