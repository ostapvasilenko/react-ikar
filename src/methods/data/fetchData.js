const BASE_URL = 'https://admin.ikar-thinktank.org/api';

const getNews = async () => {
    fetch(`${BASE_URL}/news`)
        .then(response => response.json())
        .then(data => {
            return(data);
        })
};

export{getData};