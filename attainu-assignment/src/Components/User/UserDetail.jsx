import EditUser from '../EditUser';
import '../../css/UserDetail.css';
const UserDetail = (props) => {
	return (
		<div className="card border-info mb-3 card-user">
			<div className="card-header bg-info text-white">
				<h5 className="text-center">{props.userData['Full Name']}</h5>
			</div>
			<div className="card-body">
				<p>
					<b>Country</b>: {props.userData.Country}
				</p>
				<p>
					<b>DOB</b>: {props.userData['Date of birth']}
				</p>
				<p>
					<b>Email</b>: {props.userData['Email']}
				</p>
			</div>
			<div className="card-footer bg-white d-flex justify-content-around">
				<button
					className="btn btn-warning rounded-circle"
					type="button"
					data-toggle="modal"
					data-target={`#editUser${props.userData.Id}`}
					data-whatever="@mdo"
				>
					<i className="fa fa-pencil" aria-hidden="true"></i>
				</button>
				<button className="btn btn-danger rounded-circle">
					<i className="fa fa-trash" aria-hidden="true"></i>
				</button>
			</div>
			<EditUser data={props.userData} key={props.userData.Id} />
		</div>
	);
};

export default UserDetail;
