import React, { useRef, useState } from "react";
import axios from "axios";
import Response from "./Response";


const Prompt = () => {

    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [first, toggleFirst] = useState(false);
    var temp = useRef('');
    var tempres = useRef('');

    //API Request to OPENAI GPT-3 
    
    const fetchData = () => {
        const url = 'https://api.openai.com/v1/engines/text-curie-001/completions';
        
        const data = {
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };
    
        const client = axios.create({
            headers: { 'Authorization': 'Bearer ' + import.meta.env.VITE_API_KEY } //Paste API KEY here if not using .env variable
        });
    
        client.post(url, data)
            .then(result => {
                setResult(result.data.choices[0].text);
                tempres.current = result.data.choices[0].text;
                console.log(result.data.choices[0].text);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
        <div className="w-auto flex flex-col h-auto justify-center items-center  p-2 space-y-6">
            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="w-1/2 h-60 p-4 subpixel-antialiased font-semibold rounded-lg" placeholder="Enter a Prompt"></textarea>
            <button onClick={() => {
                fetchData();
                toggleFirst(true);
                temp.current = prompt;
 

            }} className="w-40 h-11 bg-[#0a4982] rounded-lg text-white cursor-pointer p-2 hover:bg-[#073c6b]">Submit</button>
        </div>
        
        {
        first ? <Response prompt={temp.current} result={tempres.current} />
            : ''}
        </div>
    );
}

export default Prompt;
