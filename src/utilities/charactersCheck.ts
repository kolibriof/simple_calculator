import type { PrevOperationsValues } from "../context/OperationsContext";
import { format } from "date-fns";

export const CharactersCheck = (
	value: string | null,
	operation: string | null,
	setSummary: Function | React.Dispatch<React.SetStateAction<number | null>>,
	setOperation: Function | React.Dispatch<React.SetStateAction<string | null>>,
	setOperations:
		| Function
		| React.Dispatch<React.SetStateAction<PrevOperationsValues>>,
	operations: PrevOperationsValues | null,
) => {
	const forbiddenCharacters = ["*", "/", "-", "+", "."];
	if (value === "=") {
		if (
			operation &&
			operation?.length >= 3 &&
			!forbiddenCharacters.includes(operation.charAt(operation.length - 1))
		) {
			const date_time = format(new Date(), "PP pp");
			let result: number = eval(operation);
			setSummary(parseFloat(result.toFixed(3)));
			setOperations({
				...operations,
				[date_time]: {
					operation,
					summary: result,
				},
			});
		}
		setOperation("");
		return;
	}
	if (value === "C") {
		setOperation("");
		setSummary(0);
		return;
	}
	if (operation) {
		switch (value) {
			case "x":
				setOperation(operation + "*");
				break;
			case "÷":
				setOperation(operation + "/");
				break;
			default:
				setOperation(operation + value);
				break;
		}
	} else {
		switch (value) {
			case "x":
			case "÷":
			case "-":
			case "+":
			case ".":
				break;
			default:
				setOperation(value);
				break;
		}
	}
};
