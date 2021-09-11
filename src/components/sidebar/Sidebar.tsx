import React, { useState } from 'react';
import { ICategory } from '../../routes/home/HomePage';


interface ICategoryProps {
    categories: Array<ICategory>
}

export const Sidebar = (categories: ICategoryProps) => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const selectCategory = (category: ICategory) => {
        setSelectedCategory(category.id);
    }

    return (
        <>
            <div className="sidebar">
                {categories.categories?.map((category: ICategory) => (
                    <span
                        key={category.id}
                        onClick={() => selectCategory(category)}
                        className={`${category.id == selectedCategory ? "active" : ""}`}
                    >
                        {category.name.toUpperCase()}
                    </span>
                ))}
            </div>
        </>
    );
};
