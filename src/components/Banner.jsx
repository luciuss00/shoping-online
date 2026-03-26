import { useState, useEffect } from 'react';

function Banner() {
    const [currentPage, setCurrentPage] = useState(0);
    const banners = [
        './img/1.png',
        '../img/IMG_1774421214125_1774433376397.jpg',
        '../img/IMG_1774421214125_1774433376520.jpg',
        '../img/IMG_1774421214125_1774433376605.jpg',
        '../img/IMG_1774421214125_1774433376694.jpg',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [banners.length]);

    return (
        <div className="flex justify-center px-[130px] bg-white py-10">
            <div className="flex mx-auto gap-2">
                <div className="relative w-[1100px] h-[235px] overflow-hidden rounded-sm group">
                    <div className="w-full h-full object-cover transition-opacity duration-500">
                        <img src={banners[currentPage]} alt="" />
                    </div>
                    <img src="./img/1.png" alt="" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {banners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`h-[8px] w-[8px] rounded-full cursor-pointer ${
                                    currentPage === index ? 'bg-orange-500' : 'bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
