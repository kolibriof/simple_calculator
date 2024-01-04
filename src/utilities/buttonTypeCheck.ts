export const ButtonTypeCheck = (value: string | null) => {
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
	if (value === "=") {
		return (
			primaryButtonStyle + " text-[black] bg-yellow-500 hover:text-[black]"
		);
	}
	if (value === "C") {
		return (
			primaryButtonStyle +
			"text-[black] bg-red-900 hover:bg-red-700 hover:text-[white]"
		);
	}
	return primaryButtonStyle + "bg-yellow-500 hover:text-[black]";
};
