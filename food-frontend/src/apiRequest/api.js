import axios from 'axios';

// const BaseURL = "http://localhost:5000/api/v1";
const BaseURL = "https://food-crud-eight.vercel.app/api/v1";

const header = {
    'content-type': 'application/json'
};

export async function NewItem(input) {
    let res = await axios.post(BaseURL+'/CreateItem',{input},{headers:header});
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
};

export async function AllItem() {
    let res = await axios.post(BaseURL+'/SelectItem',{headers:header});
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}

export async function GetItem(id) {
    let res = await axios.post(BaseURL+'/GetItem',{id: id},{headers:header});
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}


export async function EditItem(input) {
    console.log(input);
    let res = await axios.post(BaseURL+'/UpdateItem/',{input},{headers:header});
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}

export async function DeleteItem(id) {
    let res = await axios.post(BaseURL+'/RemoveItem/',{id},{headers:header});
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}