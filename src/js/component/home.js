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
	newArray = [];

	getTodo() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/sebastian", {
			method: "GET"
			//body: JSON.stringify(todos), lo unico que se puede mandar es texto, cual quier cosa que este en el stringify lo convierte a texto
			//   headers: {
			//     "Content-Type": "application/json"// . header es solo para el PUT. y para el POST igual que el BODY.
			//   }
		})
			.then(resp => {
				return resp.json();
			}) // este json es equivalente a json.parse, es el opuesto a jsonstringify, este me lo convierte en objeto para enviar
			.then(todoArray => this.setState({ todoArray }));
	}
	componentDidMount() {
		this.getTodo();
	}

	// addTodo(e) {
	// 	if (e.key === "Enter") {
	// 		e.target.value = "";
	// 		addToApi();
	// 	}
	// }

	addToApi(e) {
		if (e.key === "Enter") {
			let input = {
				label: e.target.value,
				done: false
			};
			let d = this.state.todoArray.concat(input);
			console.log(d);
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/sebastian",
				{
					method: "PUT",
					body: JSON.stringify(d),
					headers: { "Content-Type": "application/json" }
				}
			).then(() => this.getTodo());
		}
	}

	makeDone(i) {
		let d = this.state.todoArray;
		d[i].done = true;

		this.setState({ todoArray: d });

		fetch("https://assets.breatheco.de/apis/fake/todos/user/sebastian", {
			method: "PUT",
			body: JSON.stringify(this.state.todoArray),
			headers: { "Content-Type": "application/json" }
		}).then(() => this.getTodo());
	}

	// deleteTodo(i) {
	// 	let id = i;
	// 	this.setState(() => {
	// 		const hello1 = this.state.todoArray;
	// 		hello1.splice(id, 1);
	// 		console.log(hello1);
	// 		return {
	// 			todoArray: hello1
	// 		};
	// 	});
	// 	this.deleteFromApi();
	// }
	render() {
		return (
			<div className="container">
				<div className="row p-0">
					<div className="col-4 offset-4 p-0">
						<input
							className="form-control"
							type="text"
							placeholder="Write a TODO here..."
							onKeyPress={i => this.addToApi(i)}
						/>
					</div>
				</div>
				{this.state.todoArray.map((e, i) => {
					return (
						<Todo
							key={i}
							name={this.state.todoArray[i].label}
							id={this.state.todoArray[i].done}
							delete={() => this.makeDone(i)}
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
