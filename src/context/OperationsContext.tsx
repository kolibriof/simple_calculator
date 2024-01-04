import { createContext, useState, useEffect } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export interface PrevOperationsValues {
	[key: string]: {
		operation: string | null;
		summary: number | null;
	};
}

interface OperationsContextValues {
	operation: string | null;
	summary: number | null;
	setSummary: React.Dispatch<React.SetStateAction<number | null>> | Function;
	setOperation: React.Dispatch<React.SetStateAction<string | null>> | Function;
	setOperations:
		| React.Dispatch<React.SetStateAction<PrevOperationsValues>>
		| Function;
	buttonsRender: Function;
	operations: PrevOperationsValues | null;
}

const defaultValue: OperationsContextValues = {
	operation: "",
	summary: 0,
	setSummary: () => {},
	setOperation: () => {},
	buttonsRender: () => {},
	setOperations: () => {},
	operations: null,
};

export const OperationsContext =
	createContext<OperationsContextValues>(defaultValue);

const OpContext: React.FC<any> = ({ children }) => {
	const [operation, setOperation] = useState<string | null>("");
	const [summary, setSummary] = useState<number | null>(0);
	const [operations, setOperations] = useState<PrevOperationsValues>(
		JSON.parse(localStorage.getItem("prevValue")!) || {},
	);
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
	useEffect(() => {
		localStorage.setItem("prevValue", JSON.stringify(operations));
	}, [operations]);
	return (
		<OperationsContext.Provider
			value={{
				operations,
				buttonsRender,
				operation,
				summary,
				setOperation,
				setSummary,
				setOperations,
			}}>
			{children}
		</OperationsContext.Provider>
	);
};

export default OpContext;
