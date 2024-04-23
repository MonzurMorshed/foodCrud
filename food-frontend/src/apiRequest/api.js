import axios from 'axios';

const BaseURL = "localhost:5000/api";

const header = {
    'content-type': 'application/json'
}

export async function NewItem(input) {
    let res = await axios.post(BaseURL+'/CreateItem',{input},{headers:header});
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}

export async function postLatest() {
    let res = await axios.get(BaseURL+'/post-newest');
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}

export async function postCategory(id) {
    let res = await axios.get(BaseURL+'/post-list/'+id);
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}

export async function postDetails(id) {
    let res = await axios.get(BaseURL+'/post-details/'+id);
    if(res.status === 200) {
        return res.data;
    } else {
        return [];
    }
}