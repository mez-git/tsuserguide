import * as React from 'react';
import { useState } from "react";

import "./App.css";
import List from "./List"

interface ISteps {
  id: number;
  title: string;
  url: string | undefined;
  isCopied: boolean;
} 

const App: React.FunctionComponent = () => {
  const [steps, setSteps] = useState<ISteps[]>([
    { id:1,
      title: "Step-1 :Copy the below written Url ",
      url: "http://kuchhkuch/.com",
      isCopied: false,
    },
    {  id:2,
      title:
        "Step-2 :Now sit somewhere in quite and self introspect why are you doing this?",
      url: "",
      isCopied: false,
    },
    { id:3,
      title:
        "Step-3 :Ahh leave anywhy it does not matter let just watch youtube",
      url: "http://yt/.com",
      isCopied: false,
    },
  ]);




  const copyHandler = (id:number) => {
    const thatStep=steps.find((step)=>step.id===id)
    const url=thatStep?.url
    if(url){ navigator.clipboard.writeText(url)}
   
    setSteps((prev) =>
      prev.map((step) =>
        id === step.id ? { ...step, isCopied: true } : step
      )
    );

    setTimeout(() => {
      setSteps((prev) =>
        prev.map((step) =>
          id === step.id ? { ...step, isCopied: false } : step
        )
      );
  
    }, 2000); 
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-serif">Get Hacked !!!</h1>

        <div>
          <ul>
            {steps.map((step) => (
            
                <List 
                title={step.title}
                url={step.url}
                id={step.id}
                isCopied={step.isCopied}
                copyHandler={copyHandler}/>
          
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  ;
};

export default App;

