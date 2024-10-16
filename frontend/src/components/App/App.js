
import './App.css';
import React, {Component} from "react";
import Hosts from '../Hosts/hosts';
import Country from "../Country/country";
import Accommodations from "../Accommodations/AccommodationList/accommodations";
import rentAppRepository from "../../repository/rentAppRepository";
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom'
import Header from "../Header/header";
import AccommodationAdd from "../Accommodations/AccommodationAdd/accommodationAdd";
import AccommodationEdit from "../Accommodations/AccommodationEdit/accommodationEdit"
import CategoryList from "../Categories/categories";
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            hosts: [],
            accommodations: [],
            categories: [],
            selectedAccommodation: {}
        }
    }
    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path="/countries" element={<Country countries={this.state.countries} />} />
                            <Route path="/hosts" element={<Hosts hosts={this.state.hosts} />} />

                            <Route path={"/accommodations/add"} element={<AccommodationAdd
                                categories={this.state.categories}
                                hosts={this.state.hosts}
                                countries={this.state.countries}
                                onAddAccommodation={this.addAccommodation}
                            />}
                            />
                            <Route path={"/accommodations/edit/:id"} element={<AccommodationEdit
                                categories={this.state.categories}
                                onEditAccommodation={this.editAccommodation}
                                hosts={this.state.hosts}
                                countries={this.state.countries}
                                accommodation={this.state.selectedAccommodation}

                            />}
                            />

                            <Route
                                path={"/accommodations"}
                                element={<Accommodations
                                    accommodations={this.state.accommodations}
                                    onDelete={this.deleteAccommodation}
                                    onEdit={this.getAccommodation}
                                    onRent={this.rentAccommodation}
                                />}
                            />
                            <Route
                                path={"/"}
                                element={<Accommodations
                                    accommodations={this.state.accommodations}
                                    onDelete={this.deleteAccommodation}
                                    onEdit={this.getAccommodation}
                                    onRent={this.rentAccommodation}
                                />}
                            />
                            <Route
                                path={"/categories"} element={<CategoryList categories={this.state.categories}/>}
                            />
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }

    fetchData = () => {
        this.loadCountries();
        this.loadHosts();
        this.loadAccommodations();
        this.loadCategories();
    }
    loadCountries = () => {
        rentAppRepository.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }
    loadHosts = () => {
        rentAppRepository.fetchHosts()
            .then((data) => {
                this.setState({
                    hosts: data.data
                })
            });
    }
    loadAccommodations = () => {
        rentAppRepository.fetchAccommodations()
            .then((data) => {
                this.setState({
                    accommodations: data.data
                })
            });
    }
    loadCategories = () => {
        rentAppRepository.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteAccommodation = (id) => {
        rentAppRepository.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }
    addAccommodation = (name, category, hostId, availableNights) => {
        rentAppRepository.addAccommodation(name, category, hostId, availableNights)
            .then(() => {
                this.loadAccommodations();
            });
    }
    getAccommodation = (id) => {
        rentAppRepository.getAccommodation(id)
            .then((data) => {
                this.setState({
                    selectedAccommodation: data.data
                })
            })
        console.log(this.state)
    }
    editAccommodation = (id, name, category, numRooms,hostId) => {
        rentAppRepository.editAccommodation(id, name, category, numRooms,hostId)
            .then(() => {
                this.loadAccommodations();
            });
    }

    rentAccommodation = (id) => {
        rentAppRepository.rentAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }
    componentDidMount() {
        this.fetchData();
    }
}

export default App;