interface ButtonProps {
	value: string | number;
	func: () => void;
	class?: string;
}

const PrimaryButton: React.FC<ButtonProps> = (props) => {
	const primaryButtonStyle = `
                m-[5px]
                bg-[#fbeee0] 
                border-2
                 border-[#422800] 
                 border-solid
                  rounded-[30px]
                   shadow-[3px_3px_0_0_#422800]
                    text-[#422800]
                     cursor-pointer 
                     inline-block
                      font-[600]
                       text-[18px]
                        p-[0_18px]
                         leading-[50px]
                          text-center 
                          touch-manipulation
                          hover:bg-[#fff]
                          active:shadow-[2px_2px_0_0_#422800]
                          active:transform-[2px_2px]
                          md:min-w-[60px]
                          md:p-[0_10px]
                          md:max-w-[100px]
                          `;
	return (
		<div className={props.class ? `flex ${props.class}` : `flex`}>
			<button
				className={
					props.value === "="
						? `${
								primaryButtonStyle +
								" text-[white] bg-yellow-500 hover:text-[black]"
						  }`
						: primaryButtonStyle
				}
				onClick={props.func}>
				{props.value}
			</button>
		</div>
	);
};

export default PrimaryButton;
/* 
<!-- HTML !-->
<button class="button-74" role="button">Button 74</button>


.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
*/
