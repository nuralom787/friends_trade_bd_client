import axios from 'axios';

const getAllProducts = async () => {

    const result = await fetch("./Products.json")
        .then(res => res.json())
        .then(data => {
            return data
        })

    return result;
};

export default getAllProducts;