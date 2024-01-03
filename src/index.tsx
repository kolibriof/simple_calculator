import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import OpContext from "./context/OperationsContext";

const el = document.getElementById("root");
const root = createRoot(el!);

root.render(
	<OpContext>
		<App />
	</OpContext>,
);
