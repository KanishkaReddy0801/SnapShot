import React from 'react';

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-selector">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
