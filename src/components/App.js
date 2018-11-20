import React from 'react';

import Header from './Header';
import RecipeList from './RecipeList';


const arrayUniq = require('array-uniq');

class App extends React.Component {

	state = { 
		contests: this.props.initialContests,
		checked: new Array(this.props.initialContests.length)
	};

	changeChecked = (e) => {
		e.preventDefault()
		this.setState({
			checked: e
		})
	}

	componentDidMount(){
			localStorage.setItem("checked", JSON.stringify(this.state.checked));
			this.setState({checked: this.state.checked});
	}

	renderDistinctIngredients(){
		var checkedArr = this.state.checked;
		var allIngredients = [];
		var _this = this;
		checkedArr.map(function(checked, index) {
			if(checked)
				allIngredients.push(_this.props.initialContests[index].ingredients);
		});

		allIngredients = [].concat(...allIngredients);
		allIngredients = arrayUniq(allIngredients);
		allIngredients.sort();

		return (
			<ol>
				{allIngredients.map(function(i) { return (<li key={i}>{i}</li>) })}
			</ol>
		);

	}

	currentContent() {
		return <RecipeList 
				contests={this.state.contests}
				distinct={this.renderDistinctIngredients()}
				checked={this.state.checked} 
				setState={p=>{this.setState(p)}}
				/>;
	} 
	
	render() {
		return (
		<div className="App row">
			<Header message={this.state.pageHeader} />
			{this.currentContent()}
		</div>
		);
	}
}

// App Prop Validation
App.propTypes = {
	initialContests: React.PropTypes.array,
	distinct: React.PropTypes.object,
	checked: React.PropTypes.array,
	setState: React.PropTypes.func
};

export default App;
