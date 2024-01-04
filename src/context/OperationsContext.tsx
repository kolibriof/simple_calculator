import { createContext, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

interface OperationsContextValues {
	operation: string | null;
	summary: number | null;
	setSummary: React.Dispatch<React.SetStateAction<number | null>> | Function;
	setOperation: React.Dispatch<React.SetStateAction<string | null>> | Function;
	buttonsRender: Function;
}

const defaultValue: OperationsContextValues = {
	operation: "",
	summary: 0,
	setSummary: () => {},
	setOperation: () => {},
	buttonsRender: () => {},
};

export const OperationsContext =
	createContext<OperationsContextValues>(defaultValue);

const OpContext: React.FC<any> = ({ children }) => {
	const [operation, setOperation] = useState<string | null>("");
	const [summary, setSummary] = useState<number | null>(0);
	const buttonsRender = () => {
		let tempArray = [];
		let completeArray = [];
		for (let i = 0; i < 10; i++) {
			tempArray.push(i);
		}
		for (let i = tempArray.length; i > 0; i -= 3) {
			completeArray.push(tempArray.slice(Math.max(0, i - 3), i));
		}
		return completeArray.map((i, _) => {
			return i.map((i) => {
				return <PrimaryButton value={i.toString()} key={i}></PrimaryButton>;
			});
		});
	};
	return (
		<OperationsContext.Provider
			value={{
				buttonsRender,
				operation,
				summary,
				setOperation,
				setSummary,
			}}>
			{children}
		</OperationsContext.Provider>
	);
};

export default OpContext;
