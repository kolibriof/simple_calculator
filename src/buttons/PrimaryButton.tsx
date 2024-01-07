import { OperationsContext } from "../context/OperationsContext";
import { ButtonTypeCheck } from "../utilities/buttonTypeCheck";
import { CharactersCheck } from "../utilities/charactersCheck";
import { useContext } from "react";

interface ButtonProps {
	value: string | null;
	func?: () => void;
	class?: string;
}

const PrimaryButton: React.FC<ButtonProps> = (props) => {
	const { setOperation, setSummary, operation, setOperations, operations } =
		useContext(OperationsContext);
	const handleCalculation = () => {
		CharactersCheck(
			props.value,
			operation,
			setSummary,
			setOperation,
			setOperations,
			operations,
		);
	};
	return (
		<div className={`flex ${props.class || ""}`}>
			<button
				className={ButtonTypeCheck(props.value)}
				onClick={() => handleCalculation()}>
				{props.value}
			</button>
		</div>
	);
};

export default PrimaryButton;
