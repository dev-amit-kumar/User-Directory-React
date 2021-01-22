import Filter from './Filter';
import Header from './Header';
import UserSection from './UserSection';
const HomePage = () => {
	return (
		<div>
			<Header />
			<div className="container-fluid mt-4">
				<div className="row">
					<div className="col-md-3">
						<Filter />
					</div>
					<div className="col-md-9">
						<UserSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
