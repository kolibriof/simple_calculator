import { useContext } from "react";
import { OperationsContext } from "../context/OperationsContext";

interface ButtonProps {
	value: string | null;
	func?: () => void;
	class?: string;
}

const PrimaryButton: React.FC<ButtonProps> = (props) => {
	const { setOperation, operation, setSummary } = useContext(OperationsContext);
	const ButtonTypeCheck = () => {
		if (props.value === "=") {
			return (
				primaryButtonStyle + " text-[black] bg-yellow-500 hover:text-[black]"
			);
		}
		if (props.value === "C") {
			return (
				primaryButtonStyle +
				"text-[black] bg-red-900 hover:bg-red-700 hover:text-[white]"
			);
		}
		return primaryButtonStyle + "bg-yellow-500 hover:text-[black]";
	};
	const Calculation = () => {
		if (props.value === "=") {
			if (operation && operation?.length >= 3) {
				let result: number = eval(operation);
				setSummary(parseFloat(result.toFixed(3)));
			}
			setOperation("");
			return;
		}
		if (props.value === "C") {
			setOperation("");
			setSummary(0);
			return;
		}
		if (operation) {
			switch (props.value) {
				case "x":
					setOperation(operation + "*");
					break;
				case "÷":
					setOperation(operation + "/");
					break;
				default:
					setOperation(operation + props.value);
					break;
			}
		} else {
			switch (props.value) {
				case "x":
					break;
				case "÷":
					break;
				case "-":
					break;
				case "+":
					break;
				case ".":
					break;
				default:
					setOperation(props.value);
					break;
			}
		}
	};
	const primaryButtonStyle = `
                m-[5px]
                bg-[#fbeee0] 
                border-2
                 border-[#422800] 
                 border-solid
                  rounded-[30px]
                   shadow-[2.5px_2.5px_2px_0_#422800]
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
			<button className={ButtonTypeCheck()} onClick={() => Calculation()}>
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
