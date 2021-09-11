import React from 'react';
import { useDispatch } from 'react-redux';
import { IImages } from '../../routes/home/HomePage';
import { fetchImages } from '../../store/images/imagesThunk';
import './images.css';

interface IImagesProps {
    images: Array<IImages>
}

export const Images = (images: IImagesProps) => {
    const dispatch = useDispatch();

    const imageLimit = images.images.length;

    return (
        <div className="galery">
            <div>
                {images.images?.map((image: IImages) => (
                    <img src={image.url} alt="Avatar" key={image.id} />
                ))}
            </div>
            <button className="more" onClick={() => dispatch(fetchImages(imageLimit + 10))}>
                Load more
            </button>
        </div>
    );
};

