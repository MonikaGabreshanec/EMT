import React from "react";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
import ReactPaginate from 'react-paginate'
import {Link} from "react-router-dom";


class Accommodations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5,
        };
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.accommodations.length / this.state.size);
        const accommodations = this.getAccommodationsPage(offset, nextPageOffset);

        return (
            <div className="container mt-5">
                <div className="text-center mb-4">
                    <h1>Accommodations</h1>
                    <Link className="btn btn-primary" to="/accommodations/add">
                        Add New Accommodation
                    </Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Host</th>
                            <th scope="col">Num of Rooms</th>
                        </tr>
                        </thead>
                        <tbody>
                        {accommodations}
                        </tbody>
                    </table>
                </div>
                <div className="my-3">
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        breakLabel={<span className="gap">...</span>}
                        onPageChange={this.handlePageClick}
                        pageCount={pageCount}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        );
    }

    handlePageClick = (data) => {
        this.setState({
            page: data.selected,
        });
    };

    getAccommodationsPage = (offset, nextPageOffset) => {
        return this.props.accommodations
            .filter((term) => term.numRooms !== 0)
            .map((term, index) => (
                <AccommodationTerm
                    key={term.id}
                    term={term}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onEdit}
                    onRent={this.props.onRent}
                />
            ))
            .filter((product, index) => index >= offset && index < nextPageOffset);
    };
}

export default Accommodations;