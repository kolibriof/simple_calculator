import { useContext } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import { OperationsContext } from "./context/OperationsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const App: React.FC = () => {
	const { operation, summary } = useContext(OperationsContext);
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
				return <PrimaryButton value={i.toString()} key={i}></PrimaryButton>;
			});
		});
	};
	return (
		<section className='flex flex-col justify-center items-center mt-32 text-[#422800] font-[600] md:scale-150'>
			<div className='bg-[#fbeee0] p-3 rounded-[10px] shadow-[3.5px_3.5px_2px_2px_#2e1c00] w-100 flex flex-col justify-center items-center '>
				<div className='mb-1 flex flex-row h-[96px] bg-[#fbeee0]  md:w-[97%] min-w-[230px] border-2 border-[#422800] border-solid rounded-[10px] p-3 shadow-[1.5px_1.5px_2px_0px_#422800] '>
					<div className='flex bg-[#fbeee0]'>
						<div className='op'>{operation}</div>
					</div>
					<div className='summary flex flex-1 justify-end items-end'>
						<div>{summary}</div>
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<div className='grid grid-cols-3 w-100 justify-center grid-rows-4 self-center grid-class place-items-center'>
						{buttonsRender()}
						<div>
							<PrimaryButton value={"."}></PrimaryButton>
						</div>
						<div>
							<PrimaryButton value={"+"}></PrimaryButton>
						</div>
					</div>
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
				</div>
				<div className='footer flex flex-row md:min-w-[100%] min-w-[100%]'>
					<div className='font-[600] text-[9px] flex-1 text-center self-center flex flex-col items-start pl-3 gap-1 pt-1'>
						<div className='flex flex-row gap-[3px]'>
							<div>
								<FontAwesomeIcon icon={faLinkedin} size='lg' />
							</div>
							<div className='text-[7px] font-[600] self-center'>
								@dmytro-savchenko-it
							</div>
						</div>
						<div className='flex flex-row gap-[3px]'>
							<div>
								<FontAwesomeIcon icon={faInstagram} size='lg' />
							</div>
							<div className='text-[7px] font-[600] self-center'>
								@kolibriof
							</div>
						</div>
						<div className='flex flex-row gap-[3px]'>
							<div>
								<FontAwesomeIcon icon={faGithub} size='lg' />
							</div>
							<div className='text-[7px] font-[600] self-center'>
								@kolibriof
							</div>
						</div>
					</div>
					<div className='flex flex-1 justify-end'>
						<PrimaryButton value={"C"}></PrimaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};
export default App;
