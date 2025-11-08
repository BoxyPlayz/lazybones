import { render } from 'preact';
import "lazybones-css/css/colors.css";
import "lazybones-css/css/utils.css";
import LazyBones from "@/assets/lazybones.jpg";
import { Row, Column } from "lazybones-css/components/React/grid"
import { Card } from "lazybones-css/components/React/card"

export function App() {
	return (
		<>
			<div className="center">
				<img alt={"LazyBones"} src={LazyBones} />
			</div>
			<h1 className="center">Lazybones CSS</h1>
			<h2 className="center">The Framework Everybody (Nobody) Needs!</h2>
			<Row>
				<Column className="bg-blue">
					<h1>With grids!</h1>
				</Column>
				<Column className='bg-green'>
					<Card title='A Card' className="bg-red">
						<h4>And Cards!</h4>
						(And Colors)
					</Card>
				</Column>
			</Row>
			<br />
			<p>Install with</p>
			<code>npm i lazybones-css</code><br />
			OR<br />
			<code>yarn add lazybones-css</code><br />
			OR<br />
			<code>pnpm add lazybones-css</code><br />
			<br />
			<a href="#docs" onClick={() => {
				alert("Nuh Uh")
			}}>Docs</a>
		</>
	);
}

document.addEventListener("DOMContentLoaded", () => {
	render(<App />, document.getElementById("app"));
})
