import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './homePage.css';
import { fetchCategories } from '../../store/categories/categoriesThunk';
import { categoryErrorSelector, categoryLoadingSelector, categorySelector } from '../../store/categories/categoriesSelector';
import { imagesErrorSelector, imagesLoadingSelector, imagesSelector } from '../../store/images/imagesSelector';
import { Images } from '../../components/images/Images';
import { fetchImages } from '../../store/images/imagesThunk';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';




export interface ICategory {
  id: number,
  name: string
}

export interface IImages {
  breeds: Array<any>,
  categories: Array<ICategory>,
  id: number,
  url: string,
  width: number,
  height: number
}

export const HomePage = () => {
  const isLoadingCategories = useSelector(categoryLoadingSelector);
  const categoriesError = useSelector(categoryErrorSelector);
  const categories: Array<ICategory> = useSelector(categorySelector);

  const isLoadingImages = useSelector(imagesLoadingSelector);
  const imagesError = useSelector(imagesErrorSelector);
  const images: Array<IImages> = useSelector(imagesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchImages(10));
  }, []);

  if (isLoadingCategories || isLoadingImages) {
    return <div>Loading...</div>;
  }

  if (categoriesError || imagesError) {
    return <div>{categoriesError || imagesError}</div>;
  }

  return (
    <div className="home">
      <Header></Header>

      <div className="main_wrapper">
        <Sidebar categories={categories}></Sidebar>
        <Images images={images}></Images>
      </div>
    </div>
  );
};