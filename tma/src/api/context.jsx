import axios from 'axios';

const apiAddress = 'https://localhost:7137/api/';

export const getData = async (url) =>
{
    try
    {
        const response = await axios.get(`${apiAddress}${url}`);
        return response.data;
    }
    catch(err)
    {
        console.log(err.message);
    }
}
