import axios from "axios";

const HttpService = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    return {
        GET: function (url: string) {
            return axios
                .get(url, { headers })
                .then((response) => {
                    return response;
                })
                .catch((err) => {
                    throw err;
                });
        },
    };
};

export default HttpService;
