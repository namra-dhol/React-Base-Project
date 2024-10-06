import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function DetailRooms() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = `http://localhost:5000/api/rooms/getRoom/${id}`;
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [id]);

    const handleDelete = () => {
        const apiUrl = `http://localhost:5000/api/rooms/deleteRoom/${id}`;
        fetch(apiUrl, { method: "DELETE" })
            .then(res => res.json())
            .then(() => {
                navigate("/rooms");
            })
            .catch(err => console.error("Failed to delete room:", err));
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-4">
                <Link className="btn btn-info" to="/rooms">Back</Link>
                <button onClick={handleDelete} className="btn btn-danger">Delete Room</button>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>Room Details</h3>
                </div>
                <div className="card-body">
                    <h4>ID: <span className="text-muted">{data.id}</span></h4>
                    <h4>Name: <span className="text-muted">{data.name}</span></h4>
                    <h4>Price: <span className="text-muted">{data.price}</span></h4>
                    <h4>Amenities: <span className="text-muted">{data.amenities}</span></h4>
                </div>
            </div>
        </div>
    );
}

export default DetailRooms;
