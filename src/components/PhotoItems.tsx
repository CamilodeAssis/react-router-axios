import { Link } from "react-router-dom";
import { Photo } from '../types/Photo';

type Props = {
    data: Photo;
}

export const PhotoItems = ({ data }: Props) => {
    return (
        <Link to={`/photo/${data.id}`} >
            <img className="mb-2" src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );
}