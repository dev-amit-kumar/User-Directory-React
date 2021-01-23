import axios from 'axios';
import React from 'react';
class Country extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: null,
		};
	}

	componentDidMount() {
		axios('http://localhost:5000/users').then((data) => {
			var ab = data.data.map((user) => user.Country);
			var unique = [...new Set(ab)];
			this.setState({ list: unique.sort() });
		});
	}

	countrySelect = (e) => {
		this.props.CountryData(e.target.value);
	};

	render() {
		return (
			<div className="form-group">
				<h6>Select country</h6>
				<select className="form-control" onChange={this.countrySelect}>
					<option value="">Choose Country</option>
					{this.state.list &&
						this.state.list.map((country, idx) => {
							return (
								<option key={idx} value={country}>
									{country}
								</option>
							);
						})}
				</select>
			</div>
		);
	}
}

export default Country;
