import React from "react";
import PropTypes from "prop-types";

export default class Todo extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="row text-white">
				<div className="col-4 offset-4 bg-dark p-0 pl-3">
					<div className="row">
						<div className="col-1">
							<p>{this.props.id}</p>
						</div>
						<div className="col-7 text-center">
							<p>{this.props.name}</p>
						</div>
						<div className="col text-right pr-3">
							<a
								className="btn btn-danger text-white"
								onClick={() =>
									this.props.delete(this.props.id)
								}>
								Done
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Todo.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	delete: PropTypes.func
};
