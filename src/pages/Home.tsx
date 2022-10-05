import { useEffect, useState } from 'react';
import { api } from '../api';
import { AlbumsItems } from '../components/AlbumsItems';
import { Album } from '../types/Album';

export const Home = () => {
    const [loadingApi, setLoadingApi] = useState(false);
    const [albumList, setAlbumList] = useState<Album[]>([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoadingApi(true);
        const albums = await api.getAlbums();
        setAlbumList(albums);
        setLoadingApi(false);
    }


    return (
        <div className="p-4">
                {loadingApi && "Carregando..."}

                {albumList.map((item, index) => (
                    <AlbumsItems key={index} id={item.id} title={item.title}/>
                ))}
        </div>
    );
}