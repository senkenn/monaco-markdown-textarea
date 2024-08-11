import { useState } from "react";
import githubLogo from "@/assets/github.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";

function App() {
	return (
		<div className="popup">
			<div className="popup-inner">
				<h3>Monaco Markdown Textarea</h3>
				Feedback is welcome!{" "}
				<a
					href="https://github.com/senkenn/sqlsurge"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={githubLogo}
						alt="GitHub"
						style={{ width: "24px", height: "24px", marginBottom: "-5px" }}
					/>
				</a>
			</div>
		</div>
	);
}

export default App;
