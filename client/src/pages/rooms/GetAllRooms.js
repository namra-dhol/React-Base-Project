import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function GetAllRooms() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:5000/api/rooms";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    const formattedRooms = data.map((room) => {
        return (
            <div key={room.id} className="col-md-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">{room.name}</h5>
                        <p className="card-text">
                            Price: {room.price}
                        </p>
                        <Link className="btn btn-info me-2" to={"/room/" + room.id}>
                            Read More
                        </Link>
                        <Link className="btn btn-warning" to={"/room/edit/" + room.id}>
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <Link to="/room/add" className="btn btn-primary mb-4">Add Room</Link>
            <div className="row">
                {formattedRooms}
            </div>
        </div>
    );
}

export default GetAllRooms;
