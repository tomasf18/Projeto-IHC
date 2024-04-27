// Item.tsx
function Item({ cardImage, nome, selected, onClick }: { cardImage: string, nome: string, selected: boolean, onClick: () => void }) {
    return (
        <div onClick={onClick} className={`flex  flex-col rounded-xl border border-gray-200 shadow-md h-60 w-52 m-2 hover:cursor-pointer hover:bg-slate-300 ${selected ? 'bg-slate-500 hover:bg-slate-500' : 'bg-white '}`}>
            <p className="mt-2 text-center text-sm font-medium text-black">{nome}</p>
            <img src={cardImage} alt={nome} className="h-32 mx-2 mt-2 object-cover" />
            <div className="flex h-full flex-col justify-center items-center mt-3">
                <div className="flex flex-row justify-center items-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" data-testid="flowbite-rating-star" className="h-4 w-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" data-testid="flowbite-rating-star" className="h-4 w-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" data-testid="flowbite-rating-star" className="h-4 w-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" data-testid="flowbite-rating-star" className="h-4 w-4 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" data-testid="flowbite-rating-star" className="h-4 w-4 text-gray-300 dark:text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                </div>
                <a href="#" className="text-center w-20 text-xxs font-medium underline hover:no-underline">Ver Detalhes do Profissional</a>
            </div>
        </div>
    );
}

export default Item;
