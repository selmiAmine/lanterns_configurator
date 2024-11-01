import axios from "axios";

const RingService = {
  create: function (data) {
    const formData = new FormData();
    // Append the file and other fields
    formData.append('thumbnail', data.thumbnail); // Assuming `thumbnail` is a file object
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);


    return axios.post("http://localhost:3000/api/ring/create",

      formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    );
  },

  getRing: async function (id) {
    try {
      const response = await axios.get(`http://localhost:3000/api/ring/fetch/${id}`);
      return response.data.ring; // Return the data for further use
    } catch (error) {
      console.error("There was an error fetching the ring:", error);
      throw error; // Rethrow the error if you want to handle it further up the chain
    }
  },

  getRings: async function () {
    try {
      const response = await axios.get(`http://localhost:3000/api/ring/fetch`);
      return response.data.rings; // Return the data for further use
    } catch (error) {
      console.error("There was an error fetching the ring:", error);
      throw error; // Rethrow the error if you want to handle it further up the chain
    }
  },

  getRingByOwner: async function (id) {
    try {
      const response = await axios.get(`http://localhost:3000/api/ring/fetchByOwner/${id}`);
      return response.data.rings // Return the data for further use
    } catch (error) {
      console.error("There was an error fetching the ring:", error);
      throw error; // Rethrow the error if you want to handle it further up the chain
    }
  },

};

export default RingService;