import React from 'react'
import axios from 'axios';

// The response card for displaying the results

const Response = ({ prompt, result }) => { 

    return (
        <div className="flex flex-col w-auto h-auto justify-center items-center">
            <div className="w-1/3 mt-10 bg-[#eceff1] rounded-lg p-4 text-clip space-y-2 ">
                <div className="flex space-x-14">
                    <div className="flex-shrink-0">
                        <p className="subpixel-antialiased font-bold">Prompt:</p>
                    </div>
                    <div className="inline-flex">
                        <p className="subpixel-antialiased">{prompt}</p>
                    </div> 
                </div>
                <div className="flex  space-x-10">
                    <div className="flex-shrink-0">
                        <p className="subpixel-antialiased font-bold">Response:</p>
                    </div>
                    <div className="inline-flex ">
                        <p className="subpixel-antialiased">{result}</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Response;