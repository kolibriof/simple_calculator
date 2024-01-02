import { useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton";

const App: React.FC = () => {
	const [result, setResult] = useState<number | null>(null);
	const [operation, setOperation] = useState<any>("0");
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
				return (
					<PrimaryButton value={i} func={() => {}} key={i}></PrimaryButton>
				);
			});
		});
	};
	return (
		<section className='flex flex-col justify-center items-center'>
			<div className='flex w-100 bg-[#fbeee0]'>
				<div className='result'>{operation}</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='grid grid-cols-3 w-100 justify-center grid-rows-4 self-center grid-class place-items-center'>
					{buttonsRender()}
					<div>
						<PrimaryButton value={"."} func={() => {}}></PrimaryButton>
					</div>
					<div>
						<PrimaryButton
							value={"+"}
							func={() => {
								setOperation(operation + "+");
							}}></PrimaryButton>
					</div>
				</div>
				<div className='grid grid-cols-1'>
					<div>
						<PrimaryButton value={"÷"} func={() => {}}></PrimaryButton>
					</div>
					<div>
						<PrimaryButton value={"x"} func={() => {}}></PrimaryButton>
					</div>
					<div>
						<PrimaryButton value={"-"} func={() => {}}></PrimaryButton>
					</div>
					<div>
						<PrimaryButton value={"="} func={() => {}}></PrimaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};
export default App;
