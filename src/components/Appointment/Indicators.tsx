function Indicators( { currentStep } : {currentStep : number} ) {
    return (
        <div className="row-span-1 border-b-2 border-black">
            <ul className="flex justify-center items-center flex-row h-full">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                    <i 
                    key={step}
                    className={`h-4 w-6 rounded-full ${
                    currentStep === step ? 'fa-solid fa-circle' : 'fa-regular fa-circle'
                    }`}></i>
                ))}
            </ul>
        </div>
    )
}

export default Indicators;