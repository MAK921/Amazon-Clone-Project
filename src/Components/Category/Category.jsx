import React from 'react';
import { categoryInfos } from './CategoryFullInfo';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'; 

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.title} />
      ))}
    </section>
  );
}

export default Category;
