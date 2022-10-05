import { Link } from "react-router-dom";

type Props = {
    id: number;
    title: string;
}

export const AlbumsItems = ({ id, title }: Props) => {
    return (
        <Link to={`/album/${id}`} className="border border-black p-3 block mb-2 hover:bg-gray-600 hover:text-white">{title}</Link>
    );
}