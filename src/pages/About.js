import React from 'react'

// import './AboutUs.css'

 const AboutUs = () => {
    return (
        <>

            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img
                                src="https://media.discordapp.net/attachments/1103602220144017474/1104916891136438272/image-removebg-preview_1.png"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                Always expect to pay less and get more with PaperClip Family                                </h2>
                            <p className="mt-6 text-gray-600">
                                At PaperClip Family, we're committed to delivering top-notch stationery tools at affordable prices to our customers. We began as a humble Facebook page, and have since grown to become one of the largest companies in the Middle East. Our focus is to offer our customers high-quality stationery products that won't break the bank, and we take pride in delivering exceptional value for every purchase. With our commitment to providing superior products at unbeatable prices.
                            </p>
                            <p className="mt-4 text-gray-600">
                                {" "}

                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>)
}
export default AboutUs;