import React from 'react';
import YearFilter from './YearFilter';
import CountryFilter from './CountryFilter';
class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: null,
			country: null,
		};
	}
	filterData = (type, val) => {
		this.setState({
			[type]: val,
		});
	};

	onSubmitFilter = (e) => {
		e.preventDefault();
		this.props.filterValue(this.state.year, this.state.country);
	};

	render() {
		return (
			<div className="card mt-4">
				<div className="card-header primary_bg text-white">
					<h5 className="text-center">
						Filter{' '}
						<i className="fa fa-filter" aria-hidden="true"></i>
					</h5>
				</div>
				<div className="card-body">
					<form onSubmit={this.onSubmitFilter}>
						<YearFilter
							YearData={(data) => this.filterData('year', data)}
						/>
						<CountryFilter
							CountryData={(data) =>
								this.filterData('country', data)
							}
						/>
						<div className="form-group text-center">
							<hr />
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Filter;
