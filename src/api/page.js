import axios from 'axios';

// create axio baseURl for restAPI requests
export default axios.create({
    baseURL: 'http://localhost:3000'
});
