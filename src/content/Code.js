import React from "react";

import Navbar from "../component/Navbar";
import Paragraph from "../component/Paragraph";
import { testContent } from "../strings";

export default function Code(){
    return(
        <div>
            <Navbar/>
            <div className="contentBack">
                <div>
                    <Paragraph title="Test" content={testContent}/>
                </div>
                
            </div>
        </div>
    )
}