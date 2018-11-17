import React from 'react';
import RecipePreview from './RecipePreview';

const RecipeList = ({ contests, distinct, checked, setState }) => (

		<div className="RecipeList">
			<div className="col s7 m9 row">
				{Object.keys(contests).map(index =>

						<RecipePreview key={index}
						contests={contests}
						checked={checked}
						number={index}
						setState={setState}
						{...contests[index]} /> 
					)
				}

			</div>
			<div className="col s5 m3">
				<h3>Distinct Ingredients</h3>
				{distinct}
			</div>
		</div>
	);

// RecipeList Prop Validation
RecipeList.propTypes = {
	contests: React.PropTypes.array,
	distinct: React.PropTypes.object,
	checked: React.PropTypes.array,
	setState: React.PropTypes.func
};

export default RecipeList;