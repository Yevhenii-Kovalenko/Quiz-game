/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function Categories({ categories, currentCategorie }) {
  return (
    <div className="categories">
      <h1>Select Category</h1>
      <ul>
        {categories.map((categorie, index) => (
          <li key={index} onClick={() => currentCategorie(categorie.id)}>
            {categorie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
