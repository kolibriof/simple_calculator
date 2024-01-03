import { createContext, useState } from "react";

interface OperationsContextValues {
	operation: string | null;
	summary: number | null;
	setSummary: React.Dispatch<React.SetStateAction<number | null>> | Function;
	setOperation: React.Dispatch<React.SetStateAction<string | null>> | Function;
}

const defaultValue: OperationsContextValues = {
	operation: "",
	summary: 0,
	setSummary: () => {},
	setOperation: () => {},
};

export const OperationsContext =
	createContext<OperationsContextValues>(defaultValue);

const OpContext: React.FC<any> = ({ children }) => {
	const [operation, setOperation] = useState<string | null>("");
	const [summary, setSummary] = useState<number | null>(0);
	return (
		<OperationsContext.Provider
			value={{
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
