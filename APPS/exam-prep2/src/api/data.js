import { del, get, post, put } from "./api.js";

// export async function getAll() {
//     return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
// }

// export async function getById(id) {
//     return get('/data/pets/' + id);
// }

// export async function deleteById(id) {
//     return del('/data/pets/' + id);
// }

// export async function createPet(petData) {
//     return post('/data/pets', petData);
// }

// export async function editPet(id,petData){
//     return put('/data/pets/' + id, petData)
// }

export async function getAll(){
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getSingleAlbumById(id){
    return get(`/data/albums/${id}`);
}

export async function deleteById(id){
    return del(`/data/albums/${id}`);
}

export async function createAlbum(albumData){
    return post('/data/albums', albumData);
}

export async function editAlbum(id,albumData){
    return put(`/data/albums/${id}`,albumData);
}