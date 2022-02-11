import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { async } from "@firebase/util";
import { url } from "inspector";


export const getAll = async () => {
    let list: Photo[] = [];

    const imageFolder = ref(storage, "Images");
    const listImages = await listAll(imageFolder);

    for (let i in listImages.items) {
        let photoUrl = await getDownloadURL(listImages.items[i])

        list.push({
            name: listImages.items[i].name,
            url: photoUrl,
        });
    }

    return list;
}

export const insert = async (file: File) => {
    let types = ['image/jpeg', 'image/jpg', 'image/png', 'image/psd'];

    if (!types.includes(file.type))
        return new Error("Tipo inválido!");

    let name = file.name;
    let newFile = ref(storage, `Images/${name}`);
    let upload = await uploadBytes(newFile, file);

    let photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl } as Photo;

}

export const removeImage = async (name: string) => {

    const desertRef = ref(storage, `Images/${name}`);

    // Delete the file
    deleteObject(desertRef).then(() => {
        // File deleted successfully
    }).catch((error) => {
        // Uh-oh, an error occurred!
    })
}