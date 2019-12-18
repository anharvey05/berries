import axios from 'axios';

export default axios.create({
    baseURL: 'http://www.pokeapi.co/api/v2/berry',
});