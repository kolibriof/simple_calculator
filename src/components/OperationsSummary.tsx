import { useContext } from "react";
import { OperationsContext } from "../context/OperationsContext";

const OperationsSummary = () => {
	const { summary, operation } = useContext(OperationsContext);
	return (
		<div className='mb-1 flex flex-row h-[96px] bg-[#fbeee0]  md:w-[97%] min-w-[230px] max-w-[280px] overflow-hidden overflow-x-scroll  border-2 border-[#422800] border-solid rounded-[10px] p-3 shadow-[1.5px_1.5px_2px_0px_#422800] '>
			<div className='flex bg-[#fbeee0] max-w-1/2'>
				<div className='op truncate'>{operation}</div>
			</div>
			<div className='summary flex flex-1 justify-end items-end max-w-1/2'>
				<div>{summary}</div>
			</div>
		</div>
	);
};

export default OperationsSummary;
