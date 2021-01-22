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
		axios(
			`${base_url}?Date+of+birth_like=${year}&Country=${country}&_page=1&_limit=100`,
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
