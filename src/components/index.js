import React from 'react';
import './index.css'; // Import your CSS file if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const SimpleOmeletteRecipe = () => {
  return (
    <div className="container w-50 p-3">
    <div>
   <img src="/assets/images/image-omelette.jpeg" alt="Omelette" className='img' /> 
</div>
  <h1 className='p-3'>Simple Omelette Recipe</h1>
<div><p>
  An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
  to perfection, optionally filled with your choice of cheese, vegetables, or meats.
</p>
</div>
<div className="light-pink">
<ul>
  <h3>Preparation time</h3>
  <li><span>Total:</span> Approximately 10 minutes</li>
 <li> <span>Preparation:</span> 5 minutes</li>
 <li> <span>Cooking:</span> 5 minutes</li></ul>
</div>
<div className="pt-3 ingre">
  <h4>Ingredients</h4>
<ul>
  <li> 2-3 large eggs</li>
  <li> Salt, to taste</li>
  <li> Pepper, to taste</li>
  <li> 1 tablespoon of butter or oil</li>
  <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li></ul>
  </div>
<hr />
<div className="instru"><h4>
  Instructions</h4>

 <ol><li><span> Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.
</li><li>
  <span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
</li><li>
  <span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.
</li><li>
  <span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.
</li><li>
  <span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.
</li><li>
  <span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
</li></ol>
</div>
<hr />
<div>
  <h4 className="nutri">Nutrition</h4>

  The table below shows nutritional values per serving without the additional fillings.
<table className="custom-table">
  <tr>
    <td>Calories</td>
    <td className="brown">277kcal</td>
 
</tr>
 

  <tr>
    <td> Carbs</td>
    <td className="brown">  0g</td>
 
</tr>

  <tr>
    <td>  Protein</td>
    <td className="brown"> 20g</td>
 
</tr>
<tr className="last-row"><td>  Fat</td>
<td className="brown">  22g</td></tr>

</table>
</div>
  <div className="attribution">
    Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>. 
    Coded by <Link to="#">Navya Veeram</Link>.
  </div>
</div>
  );
};

export default SimpleOmeletteRecipe;
