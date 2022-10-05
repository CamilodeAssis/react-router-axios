import { useRoutes } from 'react-router-dom';
import { AlbumPage } from '../pages/AlbumPage';
import { PhotoPage } from '../pages/PhotoPage';
import { Home } from '../pages/Home';


export const MainRoutes = () => {
    return useRoutes([
      {path: '/', element: <Home/>},
      {path: `/album/:id`, element: <AlbumPage/>},
      {path: `/photo/:id`, element: <PhotoPage/>},
    ]);

}