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

    const handleExclude = async (name: string, url: string) => 
    {
        let newList = await getAll();
        for (const i of newList) {
            if(i.name === name)
            {
                newList.splice(newList.indexOf(i),1);
                handleUpdateExclude(newList);
                removeImage(name);
                return 0;
            }
        }
        return new Error("Objeto inválido");
        
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