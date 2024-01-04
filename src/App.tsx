import MainButtonSection from "./buttons/MainButtonSection";
import OperatorsButtonsSection from "./buttons/OperatorsButtonsSection";
import OperationsSummary from "./components/OperationsSummary";
import Footer from "./components/Footer";
import PreviousOperations from "./components/PreviousOperations";
import { useContext } from "react";
import { OperationsContext } from "./context/OperationsContext";

const App: React.FC = () => {
	const { setOperations } = useContext(OperationsContext);
	return (
		<section className='flex flex-col justify-center items-center mt-32 text-[#422800] font-[600] md:scale-150'>
			<div className='bg-[#fbeee0] p-3 rounded-[10px] shadow-[3.5px_3.5px_2px_2px_#2e1c00] w-100 flex flex-col justify-center items-center '>
				<OperationsSummary />
				<div className='flex justify-center items-center'>
					<MainButtonSection />
					<OperatorsButtonsSection />
				</div>
				<Footer />
			</div>
			<div className='absolute z-[-9] translate-x-[10%] transition'>
				<div
					className='bg-[#fbeee0] pt-9 px-7 rounded-[10px] shadow-[3.5px_3.5px_2px_2px_#2e1c00] 

				font-[500]
				text-[13px]
				min-w-[300px] h-[430px] flex flex-col justify-start items-end gap-4 opacity-50 hover:opacity-100 cursor-pointer transition duration-300 hover:translate-x-72 overflow-y-auto pb-9 overflow-x-scroll scroll-behav'>
					<div className='header flex flex-row w-[100%]'>
						<div className='flex flex-1 '>
							<button
								className='text-[black] bg-red-900 hover:bg-red-700 hover:text-[white] p-[2px_6px] rounded-lg shadow-[1.5px_1.5px_1px_1px_#2e1c00]'
								onClick={() => {
									setOperations({});
								}}>
								Clear
							</button>
						</div>
						<div className='flex flex-1 justify-end'>History</div>
					</div>
					<PreviousOperations />
				</div>
			</div>
		</section>
	);
};
export default App;
