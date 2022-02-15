import * as C from './App.styles'
import { useState, useEffect, FormEvent } from 'react';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './photoItem';


const App = () => {
    const [deleteElement, setDeleteElement] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);
    
    useEffect(() => {
        //console.log(photos)
        const getPhotos = async () => {
            setLoading(true);
            setPhotos(await Photos.getAll());
            setLoading(false);
        }
        getPhotos();
    }, []);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File;

        if(file && file.size > 0)
        {
            setUploading(true);

            let result = await Photos.insert(file);

            if(result instanceof(Error))
                alert(`${result.name} - ${result.message}`);
            else{
                let newPhotoList = [...photos];
                newPhotoList.push(result);
                setPhotos(newPhotoList);
            }

            setUploading(false);
        }
    }

    const handlePhotoListChange = (newList: Photo[]) => {
        console.log(newList);
        const getPhotos = async () => {
            setLoading(true);
            setPhotos(newList);
            setLoading(false);
        }
        getPhotos();
    }

    return (
        <C.Container>
            <C.Area>
                <C.Header>Galeria de Fotos</C.Header>

                {/* Area de Upload */}
                <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
                    <label htmlFor='selecao-arquivo'>Selecionar um arquivo &#187;</label>
                    <input type="file" id='selecao-arquivo' name="image" />
                    <input type="submit" name="Enviar" />
                    { uploading && "Enviando..." }
                </C.UploadForm>

                {/* Lista de fotos */}

                {loading &&
                    <C.ScreenLoading>
                        <div className='emoji'>✋</div>
                        <div>Carregando...</div>
                    </C.ScreenLoading>
                }

                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((item, index) => (
                            <PhotoItem key={index} url={item.url} name={item.name} handleUpdateExclude={handlePhotoListChange}/>
                        ))}
                    </C.PhotoList>
                }

                {!loading && photos.length === 0 &&
                    <C.ScreenLoading>
                        <div className='emoji'>🥺</div>
                        <div>Ainda não há nada aqui! Insira novas fotos.</div>
                    </C.ScreenLoading>
                }

            </C.Area>
        </C.Container>
    )
}

export default App;