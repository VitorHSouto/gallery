import * as C from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { getAll, removeImage } from '../services/photos'
import { Photo } from '../types/Photo'

type Props = {
    url: string;
    name: string;
    handleUpdateExclude: (newList: Photo[]) => void;
}

export const PhotoItem = ({url, name, handleUpdateExclude}: Props) => {

    const handleExclude = async (name: string, url: string) => {
        let removePhoto = { name: name, url: url } as Photo;
        let newList = await getAll();
        newList.splice(newList.indexOf(removePhoto),1);
        console.log(newList);
        handleUpdateExclude(newList);
        removeImage(name);
    }

    const downloadImage = (name: string, url: string) => {
        //saveAs(name, url) // Put your image url here.
        var FileSaver = require('file-saver');
        var file = new File([name], url, {type: "image/apng"});
        FileSaver.saveAs(file);
      }

    return(
        <C.Container>
            <img onClick={() => downloadImage(name, url)} src={url} alt={name} />
            <p>{name}</p>
            <div onClick={() => handleExclude(name, url)} className="close"><AiOutlineCloseCircle/></div>
        </C.Container>
    )
}