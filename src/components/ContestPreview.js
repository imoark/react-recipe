	import React, { Component } from 'react';


	class ContestPreview extends Component {
		state = {
			checked: "mario"
		}

		handleClick = () => {
			console.log(this.props.name);
			this.props.onClick(this.props.name);
		}

		handleChecked = (event) => {
// alert('A name was submitted: ');
			let checkedvar = this.props.checked;
// console.log(checkedvar);
			let id = this.props.number;
// console.log(id);
			checkedvar[id] = event.target.checked;
			this.props.setState(this.props.checked)
// console.log(checkedvar[id]);
console.log('this.state.checked' + this.state.checked);
console.log('this.props.checked' + this.props.checked);
console.log('this.props.setState' + this.props.setState);
			this.setState({checked: "Amrio"});
console.log(this.state.checked);

			// localStorage["checked"] = JSON.stringify(checked);
			localStorage.setItem("checked", JSON.stringify(this.props.checked));

		}

	  render() {
	    return (

	    <div className="link ContestPreview col s12 m6">
	    	<div className="card blue-grey darken-1">
				<div className="card-content white-text">
					<div className="card-title category-name">
						{this.props.name}
					</div>
					<div className="type-name">
						<p>{this.props.type} Food</p>
					</div>
					<div className="cook-time">
						<p>Cooking Time: {this.props.cook_time}</p>
					</div>

					<div className="checkbox">
					<form>
					<p>
					<label>
						<input id={this.props.number} type="checkbox" className="filled-in" onChange={this.handleChecked} />
						<span></span>
					</label>
					</p>
					</form>
					</div>

				</div>

				<div className="card-action">
					
						{this.props.ingredients.map(i => <div className="btn-small disabled" key={i}>{i}</div>)}
					
				</div>
			</div>  	
		</div>
	    );
	  }
	}

	ContestPreview.propTypes = {
		categoryName: React.PropTypes.string.isRequired,
		contestName: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired,

	}

	export default ContestPreview;