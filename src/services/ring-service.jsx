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

};

export default RingService;
