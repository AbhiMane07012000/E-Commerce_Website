import axios from "axios";

const params = {
    headers: {
        Authorization: "Bearer"+process.env.REACT_APP_TOKEN,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};