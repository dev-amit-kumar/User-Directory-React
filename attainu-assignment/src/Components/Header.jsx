const Header = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				User APP
			</a>
			<div className="d-flex justify-content-center">
				<form className="form-inline ml-auto">
					<div class="input-group">
						<input
							type="search"
							class="form-control"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="button-addon2"
						/>
						<div class="input-group-append">
							<button
								class="btn btn-outline-light"
								type="button"
								id="button-addon2"
							>
								<i class="fa fa-search" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</form>
				<ul className="navbar-nav ml-3">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							<i class="fa fa-user-plus" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
