import { useContext } from "react";
import { OperationsContext } from "../context/OperationsContext";

const PreviousOperations = () => {
	const { operations, setOperation, setSummary } =
		useContext(OperationsContext);
	const HandleClick = (op: string, summary: number) => {
		if (op && summary) {
			setOperation(op);
			setSummary(summary);
		}
	};
	return (
		<>
			{operations && Object.entries(operations).length >= 1 ? (
				Object.entries(operations).map((i) => {
					if (i) {
						return (
							<div
								key={i[0]}
								className='flex flex-row gap-2 w-[100%] bg-yellow-500 p-2 rounded-lg shadow-[1.5px_1.5px_1px_1px_#2e1c00] hover:scale-110 transition'
								onClick={() => HandleClick(i[1].operation!, i[1].summary!)}>
								<div className='flex flex-1'>{i[0]}</div>
								<div className='flex flex-1 justify-end max-w-16'>
									<p className='truncate'>
										{(i[1].operation! + " = " + i[1].summary).toString()}
									</p>
								</div>
							</div>
						);
					}
					return;
				})
			) : (
				<div className='flex w-[100%] justify-center items-center mt-32'>
					THERE IS NO HISTORY YET
				</div>
			)}
		</>
	);
};

export default PreviousOperations;
