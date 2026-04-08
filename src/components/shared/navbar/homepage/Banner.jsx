import React from 'react';
import hero_img from "../../../../assets/hero_img.jpg";


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] container rounded-2xl my-10 mx-auto w-full justify-between p-30">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={hero_img}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold mr-10">Books to freshen up <br /> your bookshelf</h1>

                        <button className="btn btn-success mt-4">View your list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;