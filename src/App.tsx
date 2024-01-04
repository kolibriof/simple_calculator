import MainButtonSection from "./buttons/MainButtonSection";
import OperatorsButtonsSection from "./buttons/OperatorsButtonsSection";
import OperationsSummary from "./components/OperationsSummary";
import Footer from "./components/Footer";

const App: React.FC = () => {
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
		</section>
	);
};
export default App;
