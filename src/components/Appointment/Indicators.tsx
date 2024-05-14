function Indicators( { currentStep } : {currentStep : number} ) {
    return (
        <div className="row-span-1 border-b-2 border-black flex flex-col justify-center items-center">
            <ul className="flex justify-center items-center flex-row h-full">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                    <div className="flex flex-col items-center justify-center">
                        <div 
                        key={step}
                        className={`h-5 w-5 p-3 rounded-full flex items-center justify-center ${
                        currentStep === step ? 'bg-black text-white' : 'bg-white text-black'
                        }`}>
                            {step}
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Indicators;