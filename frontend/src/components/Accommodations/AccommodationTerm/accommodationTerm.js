import {Link} from "react-router-dom";
import React from "react";
const AccommodationTerm = (props) => {
    return (
        props.term.numRooms !== 0 ? (
            <tr>
                <td>{props.term.name}</td>
                <td>{props.term.category}</td>
                <td>{props.term.host.name}</td>
                <td>{props.term.numRooms}</td>
                <td className="text-right">
                    <a
                        title="Delete"
                        className="btn btn-danger"
                        onClick={() => props.onDelete(props.term.id)}
                    >
                        Delete
                    </a>
                    <Link
                        className="btn btn-info ml-2"
                        onClick={() => props.onEdit(props.term.id)}
                        to={`/accommodations/edit/${props.term.id}`}
                    >
                        Edit
                    </Link>
                    <a
                        className="btn btn-success ml-2"
                        onClick={() => props.onRent(props.term.id)}
                    >
                        Rent
                    </a>
                </td>
            </tr>
        ) : (
            <p>
                Rented {props.term.name}
            </p>
        )
    );
};

export default AccommodationTerm;