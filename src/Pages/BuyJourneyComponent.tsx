function BuyJourneyComponent() {
    return (
        <div className="buy-journey w-full bg-background p-[15px] flex justify-center items-center h-[fit-content]">
            <div className="buy-journey-illustration relative w-full lg:w-[40%] h-full md:h-[70px]">
                <span className="hidden md:block w-full h-[4px] bg-[#ffd3d3] absolute top-[50%] translate-y-[-50%] z-[0]"></span>
                <span className="block md:hidden w-full w-[4px] h-full bg-[#ffd3d3] absolute left-[50%] translate-x-[-50%] z-[0]"></span>

                <div className="buy-journey-sections w-full h-full flex flex-col md:flex-row gap-[45px] md:gap-0 justify-between items-center relative z-[10]">
                    <div className="cart bg-[#d3535d] rounded-[15px] p-2 text-white w-[150px] md:w-[fit-content] px-[20px] text-center content-center cursor-pointer">1. Cart</div>
                    <div className="details bg-[#ffd3d3] duration-300 hover:bg-[#d3535d] text-officialRed hover:text-white rounded-[15px] p-2 w-[150px] md:w-[fit-content] px-[20px] text-center content-center cursor-pointer">2. Details</div>
                    <div className="payments bg-[#ffd3d3] duration-300 hover:bg-[#d3535d] text-officialRed hover:text-white rounded-[15px] p-2 w-[150px] md:w-[fit-content] px-[20px] text-center content-center cursor-pointer">3. Payment</div>
                    <div className="review bg-[#ffd3d3] duration-300 hover:bg-[#d3535d] text-officialRed hover:text-white rounded-[15px] p-2 w-[150px] md:w-[fit-content] px-[20px] text-center content-center cursor-pointer">4. Review</div>
                </div>
            </div>
        </div>
    );
}

export default BuyJourneyComponent;
