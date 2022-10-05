import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { Album as AlbumType } from '../types/Album';
import { PhotoItems } from '../components/PhotoItems';

type Props = {
    id: number;
    title: string;
}

export const AlbumPage = () => {
    const params = useParams();
    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    const [photoList, setphotoList] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id:0, title: "", userId:0});

    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const albums = await api.getPhotoFromAlbum(id);
        setphotoList(albums);
        setLoading(false);
    }
    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await api.getAlbum(id);
        setAlbumInfo(albumInfo);

    }

    return (
        <div>
            <button onClick={()=> navigate(-1)} >Voltar</button>
            {loading && "Carregando..." }

            <h1>{albumInfo.title}</h1>

            {photoList.map((item, index) => (
                <div className='grid grid-cols-3'>
                    <PhotoItems  key={index} data={item}/>
                </div>
            ))}
        </div>
    );
}