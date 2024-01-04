import type { PrevOperationsValues } from "../context/OperationsContext";

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
			const date = new Date();
			const current_date =
				date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
			const current_time =
				date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
			const date_time = current_date + " " + current_time;
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
