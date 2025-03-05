import React from 'react';
import classes from './Category.module.css'; // Import as "classes"
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;

