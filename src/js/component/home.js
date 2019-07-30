import React from "react";
import Todo from "./todo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todoArray: []
		};
	}
	addTodo(e) {
		if (e.key === "Enter") {
			let input = e.target.value;
			this.setState(hello => {
				//alert(hello);
				//const hello1 = this.state.todoArray;
				const todoArray = hello.todoArray.concat(input);
				console.log(hello);
				return {
					todoArray
				};
			});
			e.target.value = "";
		}
	}
	deleteTodo(i) {
		let id = i;
		this.setState(() => {
			const hello1 = this.state.todoArray;
			hello1.splice(id, 1);
			console.log(hello1);
			return {
				todoArray: hello1
			};
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row p-0">
					<div className="col-4 offset-4 p-0">
						<input
							className="form-control"
							type="text"
							placeholder="Write a TODO here..."
							onKeyPress={e => this.addTodo(e)}
						/>
					</div>
				</div>
				{this.state.todoArray.map((e, i) => {
					return (
						<Todo
							key={i}
							name={this.state.todoArray[i]}
							id={i}
							delete={() => this.deleteTodo(i)}
						/>
					);
				})}
				<div className="row">
					<div className="col-4 offset-4 bg-info text-white">
						{"there are "}
						{this.state.todoArray.length}
						{" items left"}
					</div>
				</div>
			</div>
		);
	}
}
