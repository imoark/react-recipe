import React, { Component } from 'react';


class RecipePreview extends Component {

	handleChecked = (event) => {
		let checkedvar = this.props.checked;
		let id = this.props.number;

		checkedvar[id] = event.target.checked;
		this.props.setState(this.props.checked)
		this.setState({checked: "Amrio"});

		localStorage.setItem("checked", JSON.stringify(this.props.checked));

	}

  render() {
    return (

    <div className="link RecipePreview col s12 m6">
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

// RecipePreview Prop Validation
RecipePreview.propTypes = {
	name: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	cook_time: React.PropTypes.number.isRequired,
	ingredients: React.PropTypes.array,
	checked: React.PropTypes.array,
	number: React.PropTypes.string,
	setState: React.PropTypes.func

}

export default RecipePreview;