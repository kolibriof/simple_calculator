export const CharactersCheck = (
	value: string | null,
	operation: string | null,
	setSummary: Function | React.Dispatch<React.SetStateAction<number | null>>,
	setOperation: Function | React.Dispatch<React.SetStateAction<string | null>>,
) => {
	const forbiddenCharacters = ["*", "/", "-", "+", "."];
	if (value === "=") {
		if (
			operation &&
			operation?.length >= 3 &&
			!forbiddenCharacters.includes(operation.charAt(operation.length - 1))
		) {
			let result: number = eval(operation);
			setSummary(parseFloat(result.toFixed(3)));
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
