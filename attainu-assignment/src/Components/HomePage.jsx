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
			filter_value: '',
		};
	}

	componentDidMount() {
		axios(`${base_url}?_page=1&_limit=20`).then((list) =>
			this.setState({ userList: list.data }),
		);
	}

	changePage = (e) => {
		var new_page_no =
			e.target.id === 'next'
				? this.state.page_no + 1
				: this.state.page_no - 1;
		this.setState({ page_no: new_page_no });
		axios(
			`${base_url}?${this.state.filter_value}&_page=${new_page_no}&_limit=20`,
		).then((list) => this.setState({ userList: list.data }));
	};

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
		this.setState({ filter_value: filter_url });
		axios(
			`${base_url}?${filter_url}&_page=${this.state.page_no}&_limit=20`,
		).then((list) => this.setState({ userList: list.data }));
	};

	render() {
		console.log(this.state.page_no);
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
					<div className="col-2"></div>
					<div className="col-10 pb-3 pr-5 pl-5">
						{this.state.page_no !== 1 && (
							<button
								className="btn primary_bg arrow-btn"
								id="back"
								onClick={this.changePage}
							>
								<i
									className="fa fa-long-arrow-left"
									aria-hidden="true"
								></i>
								&emsp; Back
							</button>
						)}
						{this.state.userList &&
							this.state.userList.length === 20 && (
								<button
									className="btn primary_bg arrow-btn float-right"
									id="next"
									onClick={this.changePage}
								>
									Next &emsp;
									<i
										className="fa fa-long-arrow-right"
										aria-hidden="true"
									></i>
								</button>
							)}
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
