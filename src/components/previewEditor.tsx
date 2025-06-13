"use client"

import dynamic from "next/dynamic";

import { useMemo } from "react";
import ReactQuill from 'react-quill-new';


import "react-quill-new/dist/quill.bubble.css";

interface PreviewEditorProps{
   value: string;
};


export const PreviewEditor=({value}: PreviewEditorProps)=>{

   const ReactQuill = useMemo(() => dynamic(()=> import("react-quill-new"), {ssr: false}),[]);

   return(
      <div>
         <ReactQuill
            theme="bubble"
            value={value}
            readOnly
         />
      </div>
   )
}