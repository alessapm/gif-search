import axios from 'axios';

export const getWebsiteData = async (searchTerm: string = "cheese") => {
    const apiKey = process.env.API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`
    const response = await axios.get(url);
    return response.data.data;
};