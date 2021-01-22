import { withRouter } from 'react-router-dom';

const SearchSuggestion = (props) => {
	const redirectMovie = (e) => {
		props.history.push(`/movie/${e.target.id}`);
	};
	if (props.data) {
		return (
			<div className="searchResult" id="match-list">
				{props.data.results.map((suggestion, idx) => {
					return (
						<div
							onClick={redirectMovie}
							id={suggestion.id}
							key={idx}
						>
							{suggestion.title}
						</div>
					);
				})}
			</div>
		);
	} else {
		return <></>;
	}
};

export default withRouter(SearchSuggestion);
