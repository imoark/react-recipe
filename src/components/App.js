import React from 'react';

// import component module of Header, so we keep this .js file concise
import Header from './Header';
import ContestList from './ContestList';
// import ContestPreview from './ContestPreview';
// import Contest from './Contest';
import * as api from '../api';

import recipe from '../recipe';

const arrayUniq = require('array-uniq');

// console.log(recipe);
// We are putting the HTML5 History API as a function here.
// We are using the most basic/standard way of routing, with the help
// of HTML5 History API, to navigate back and forth.
// const pushState = (obj, url) =>
// 	window.history.pushState(obj, '', url);

/* Let's assume that this component is going to need some state.
We wanna make it dynamic based on where we are in the App.
We wanna put the dynamic content as a "state".*/
/* So we need to convert it first into a class-based component.*/
// const App = () => {
// 	return (
// 		<div className="App">
// 			<Header message="Naming Contest" />
// 		</div>
// 		);
// };

class App extends React.Component {
	// Since we configured 'stage-2' in .babelrc, we can actually use
	// a class property instead of having a constructor.
	//
	// constructor(props){
	// 	super(props);
	// 	this.state = { test: 42 };
	// }
	state = { 
		// pageHeader: 'Naming Contest',
		contests: this.props.initialContests,
		checked: new Array(this.props.initialContests.length)
	};

	// ccc = [1,2,3];
	changeChecked = (e) => {
		e.preventDefault()
		this.setState({
			checked: e
		})
		console.log(this.state.checked)
	}


	
	componentDidMount(){
console.log('didMount');
		
			localStorage.setItem("checked", JSON.stringify(this.state.checked));
			this.setState({checked: this.state.checked});
		
	}

	fetchContest = (contestId) => {
		pushState({ currentContestId: contestId },`/contest/${contestId}`);
		api.fetchContest(contestId).then(contest => {
			this.setState({
				pageHeader: contest.contestName,
				currentContestId: contest.id,
				contests: {
					...this.state.contests,
					[contest.id]: contest
				}
			});
		})
	};

	renderDistinctIngredients(){
		var checkedArr = this.state.checked;
		var allIngredients = [];
		var _this = this;
		checkedArr.map(function(checked, index) {
			if(checked)
				allIngredients.push(_this.props.initialContests[index].ingredients);
		});

console.log(allIngredients);
		allIngredients = allIngredients.flat();
		allIngredients = arrayUniq(allIngredients);
// console.log(allIngredients);
		allIngredients.sort();
// console.log("allIngredients SORT: " + allIngredients);

		return (
			<ol>
				{allIngredients.map(function(ing) { return (<li key={ing}>{ing}</li>) })}
			</ol>
		);

	}

	pageHeader(){
		if (this.state.currentContestId){
			return this.currentContest().contestName
		}
	}

	currentContest(){
		return this.state.contests[this.state.currentContestId];
	}

	currentContent() {
// console.log("a");
		if (this.state.currentContestId){
			return <Contest {...this.currentContest()} />;
		}

		return <ContestList 
				onContestClick={this.fetchContest}
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
};


/* For other modules to use the header module, we need to export it.*/

export default App;