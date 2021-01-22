import { withRouter } from 'react-router-dom';

const SearchSuggestion = (props) => {
	const redirectMovie = (e) => {
		// props.history.push(`/movie/${e.target.id}`);
		console.log(e.target.value);
	};
	const renderSuggestion = () => {
		if (props.dataList.length > 0) {
			return props.dataList.map((suggestion, idx) => {
				return (
					<div onClick={redirectMovie} id={suggestion.Id} key={idx}>
						{suggestion['Full Name']}
					</div>
				);
			});
		} else {
			return <div>No user data found</div>;
		}
	};
	return (
		<div className="searchResult" id="match-list">
			{renderSuggestion(props)}
		</div>
	);
};

export default withRouter(SearchSuggestion);
