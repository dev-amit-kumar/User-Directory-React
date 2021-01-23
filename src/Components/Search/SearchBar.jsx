import SearchSuggestion from './SearchSuggestion';
import React from 'react';
import axios from 'axios';
import '../../css/Search.css';
const base_url = 'http://localhost:5000/users';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			keyword: '',
			suggestionList: null,
		};
	}

	OnChangeKeyWord = (e) => {
		this.setState({ keyword: e.target.value });
		if (e.target.value) {
			axios(
				`${base_url}?Full%20Name_like=${e.target.value}&_limit=10`,
			).then((res) => this.setState({ suggestionList: res.data }));
		} else if (e.target.value === '') {
			this.setState({ suggestionList: null });
		}
	};

	renderSuggestionList = ({ suggestionList, keyword }) => {
		if (suggestionList && keyword)
			return <SearchSuggestion dataList={suggestionList} />;
		else return <></>;
	};

	render() {
		return (
			<div className="form-inline ml-auto">
				<div className="input-group">
					<input
						type="search"
						className="form-control"
						placeholder="Search by name"
						aria-label="Search"
						aria-describedby="button-addon2"
						value={this.state.keyword}
						onChange={this.OnChangeKeyWord}
					/>
					<div className="input-group-append">
						<span
							className="btn btn-outline-light"
							type="button"
							id="button-addon2"
						>
							<i className="fa fa-search" aria-hidden="true"></i>
						</span>
					</div>
					{this.renderSuggestionList(this.state)}
				</div>
			</div>
		);
	}
}

export default SearchBar;
