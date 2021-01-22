import React from 'react';
import axios from 'axios';
import Filter from './Filter/Filter';
import UserSection from './User/UserSection';
const base_url = 'http://localhost:5000/users';
class HomePage extends React.Component {
	constructor() {
		super();
		this.state = {
			page_no: 1,
			year: null,
			country: null,
			userList: null,
		};
	}

	componentDidMount() {
		axios(`${base_url}?_page=1&_limit=20`).then((list) =>
			this.setState({ userList: list.data }),
		);
	}

	getFilterValues = (year, country) => {
		this.setState({ year: year, country: country });
		let filter_url = '';
		if (year && country) {
			filter_url = `Date+of+birth_like=${year}&Country=${country}`;
		} else if (year) {
			filter_url = `Date+of+birth_like=${year}`;
		} else if (country) {
			filter_url = `Country=${country}`;
		}
		axios(
			`${base_url}?${filter_url}&_page=${this.state.page_no}&_limit=20`,
		).then((list) => this.setState({ userList: list.data }));
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">
						<Filter
							filterValue={(year, country) =>
								this.getFilterValues(year, country)
							}
						/>
					</div>
					<div className="col-md-10 d-flex flex-row flex-wrap mt-4">
						<UserSection data={this.state.userList} />
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
