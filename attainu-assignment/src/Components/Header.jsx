import SearchSuggestion from './SearchSuggestion';

const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="/">
				User APP
			</a>
			<div className="d-flex justify-content-center">
				<form className="form-inline ml-auto">
					<div className="input-group">
						<input
							type="search"
							className="form-control"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-light"
								type="button"
								id="button-addon2"
							>
								<i
									className="fa fa-search"
									aria-hidden="true"
								></i>
							</button>
						</div>
						<SearchSuggestion />
					</div>
				</form>
				<ul className="navbar-nav ml-3">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							<i
								className="fa fa-user-plus"
								aria-hidden="true"
							></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
