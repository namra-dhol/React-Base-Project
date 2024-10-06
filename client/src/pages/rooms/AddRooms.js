import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRooms() {
    const [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        amenities: '',
        available: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: name === "available" ? value === "true" : value
        });
    };

    const handleSubmit = () => {
        if (!data.id || !data.name || !data.price || !data.amenities || data.available === '') {
            alert("Please fill all fields");
            return;
        }

        fetch("http://localhost:5000/api/rooms", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => navigate("/rooms"))
            .catch(err => console.error("Failed to add room:", err));
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Add New Room</h2>

            <form>
                {/* Room ID */}
                <div className="mb-3 row">
                    <label htmlFor="id" className="col-sm-4 col-form-label">Room ID</label>
                    <div className="col-sm-8">
                        <input
                            id="id"
                            name="id"
                            type="text"
                            className="form-control"
                            placeholder="Enter Room ID"
                            value={data.id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Room Name */}
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-4 col-form-label">Room Name</label>
                    <div className="col-sm-8">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Enter Room Name"
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Room Price */}
                <div className="mb-3 row">
                    <label htmlFor="price" className="col-sm-4 col-form-label">Price</label>
                    <div className="col-sm-8">
                        <input
                            id="price"
                            name="price"
                            type="number"
                            className="form-control"
                            placeholder="Enter Room Price"
                            value={data.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Room Amenities */}
                <div className="mb-3 row">
                    <label htmlFor="amenities" className="col-sm-4 col-form-label">Amenities</label>
                    <div className="col-sm-8">
                        <input
                            id="amenities"
                            name="amenities"
                            type="text"
                            className="form-control"
                            placeholder="Enter Room Amenities"
                            value={data.amenities}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Room Availability */}
                <div className="mb-3 row">
                    <label htmlFor="available" className="col-sm-4 col-form-label">Available</label>
                    <div className="col-sm-8">
                        <select
                            id="available"
                            name="available"
                            className="form-select"
                            value={data.available}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose availability</option>
                            <option value="true">yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-8 offset-sm-4">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="btn btn-primary w-100"
                        >
                            Add Room
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddRooms;
