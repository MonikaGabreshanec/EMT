import axios from '../custom-axios/axios'

const rentAppRepository={
    fetchHosts:() => {
        return axios.get("/hosts");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAccommodations: () => {
        return axios.get("/accommodations");
    },
    deleteAccommodation: (id) => {
        return axios.delete(`/accommodations/delete/${id}`);

    },
    fetchCategories: () => {
        return axios.get("/accommodations/categories");
    },
    getAccommodation: (id) => {
        var accommodation = axios.get(`/accommodations/${id}`);
        console.log(accommodation)
        return accommodation;
    },
    addAccommodation: (name, category,numRooms, hostId) => {
        return axios.post("/accommodations/add", {
            "name": name,
            "category": category,
            "numRooms":numRooms,
            "hostId": hostId,
        });
    },
    editAccommodation: (id, name, category, numRooms,hostId) => {
        return axios.post(`/accommodations/edit/${id}`, {
            "name": name,
            "category": category,
            "numRooms":numRooms,
            "hostId": hostId,
        });
    },

    rentAccommodation: (id) => {
        return axios.post(`/accommodations/rent/${id}`);
    },

}

export  default rentAppRepository;