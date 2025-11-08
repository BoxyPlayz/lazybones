import { render } from 'preact';
import "lazybones-css/css/utils.css";
import LazyBones from "@/assets/lazybones.jpg";
import {Row, Column} from "lazybones-css/components/React/grid"
import {Card} from "lazybones-css/components/React/card"

export function App() {
	return (
		<>
			<div className="center">
				<img src={LazyBones} />
			</div>
			<h1 className="center">Lazybones CSS</h1>
			<h2 className="center">The Framework Everybody (Nobody) Needs!</h2>
			<Row>
				<Column>
				<h1>With grids!</h1>
				</Column>
				<Column>
				<Card title='A Card'>
					<h4>And Cards!</h4>
				</Card>
				</Column>
			</Row>
		</>
	);
}

document.addEventListener("DOMContentLoaded", () => {
	render(<App />, document.body);
})
