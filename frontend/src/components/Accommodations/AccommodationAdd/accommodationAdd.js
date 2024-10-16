import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccommodationAdd = (props) => {
    const navigate = useNavigate();

    const [formData, updateFormData] = React.useState({
        name: "",
        category: "HOUSE",
        numRooms:0,
        hostId: 0,
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const { name, category,numRooms,hostId } = formData;
        props.onAddAccommodation(name,category,numRooms,hostId);
        navigate('/accommodations');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h4>Add New Accommodation</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onFormSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Accommodation Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Enter name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <select name="category" className="form-select" onChange={handleChange}>
                                        {props.categories.map((term, index) =>
                                            <option key={index} value={term}>{term}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Host</label>
                                    <select name="hostId" className="form-select" onChange={handleChange}>
                                        {props.hosts.map((host) =>
                                            <option key={host.id} value={host.id}>{host.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="numRooms" className="form-label">Number of rooms</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="numRooms"
                                        name="numRooms"
                                        required
                                        placeholder="Enter number of rooms"
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccommodationAdd;