import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import PrimaryButton from "../buttons/PrimaryButton";

const Footer = () => {
	return (
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
					<div className='text-[7px] font-[600] self-center'>@kolibriof</div>
				</div>
				<div className='flex flex-row gap-[3px]'>
					<div>
						<FontAwesomeIcon icon={faGithub} size='lg' />
					</div>
					<div className='text-[7px] font-[600] self-center'>@kolibriof</div>
				</div>
			</div>
			<div className='flex flex-1 justify-end'>
				<PrimaryButton value={"C"}></PrimaryButton>
			</div>
		</div>
	);
};

export default Footer;
