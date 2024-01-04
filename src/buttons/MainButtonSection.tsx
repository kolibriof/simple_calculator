import { OperationsContext } from "../context/OperationsContext";
import PrimaryButton from "./PrimaryButton";
import { useContext } from "react";

const MainButtonSection = () => {
	const { buttonsRender } = useContext(OperationsContext);
	return (
		<div className='grid grid-cols-3 w-100 justify-center grid-rows-4 self-center grid-class place-items-center'>
			{buttonsRender()}
			<div>
				<PrimaryButton value={"."}></PrimaryButton>
			</div>
			<div>
				<PrimaryButton value={"+"}></PrimaryButton>
			</div>
		</div>
	);
};

export default MainButtonSection;
