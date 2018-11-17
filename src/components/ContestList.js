import React from 'react';
import ContestPreview from './ContestPreview';




const ContestList = ({ contests, onContestClick, distinct, checked, ccc, setState }) => (

		<div className="ContestList">
			<div className="col s9 row">
				{Object.keys(contests).map(index =>
						/* 
						everytime we display a list of things dynamically,
						REACT needs a little bit of help to identify every
						element with a key. This key helps REACT identify
						the element when this array of children changes.

						In other words, everytime we have a map call, we
						beed to provide a unique key to identify the child
						element inside that map. ADVICE: Do not use the array
						index as a unique key.
						*/

						<ContestPreview key={index}
						onClick={onContestClick}
						contests={contests}
						checked={checked}
						number={index}
						setState={setState}
						{...contests[index]} /> 
					)
				}

			</div>
			<div className="col s3">
				<h1>Distinct Ingredients</h1>
				{distinct}
			</div>
		</div>
	);

// ContestList Prop Validation
ContestList.propTypes = {
	contests: React.PropTypes.object,
	onContestClick: React.PropTypes.func.isRequired,
	distinct: React.PropTypes.func.isRequired
};

export default ContestList;