import PrimaryButton from "./PrimaryButton";
const OperatorsButtonsSection = () => {
	return (
		<div className='grid grid-cols-1'>
			<div>
				<PrimaryButton value={"÷"}></PrimaryButton>
			</div>
			<div>
				<PrimaryButton value={"x"}></PrimaryButton>
			</div>
			<div>
				<PrimaryButton value={"-"}></PrimaryButton>
			</div>
			<div>
				<PrimaryButton value={"="}></PrimaryButton>
			</div>
		</div>
	);
};

export default OperatorsButtonsSection;
