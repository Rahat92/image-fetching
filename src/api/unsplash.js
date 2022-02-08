import axios from 'axios';
export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        authorization:"Client-ID NOtyBedAqKMBaj6CywK8kiXue0BzlN4hW924qgqE35w"
    }
})