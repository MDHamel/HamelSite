import React from 'react';
import "../styles/Paragraph.css"



export class Paragraph extends React.Component{
    render() {
        return (
            <div className='contentPara'>

                <div className='title'>
                    
                    <div style={{display: "inline-block"}}>
                        <div id="diamond" />
                        <div id="gap" />
                        <div id="diamond" />
                        <div id="gap" />
                        <div id="diamond" />
                    </div>

                    <div style={{display: "inline-block"}}>
                            <h1>{this.props.title}</h1>
                            <div id='line' />
                    </div>

                    <div style={{display: "inline-block"}}>
                    <div id="diamond" />
                        <div id="gap" />
                        <div id="diamond" />
                        <div id="gap" />
                        <div id="diamond" />
                    </div>
                </div>
                
                <p className='content'>{this.props.content}</p> 
            </div>
        );
    }
}


export default Paragraph ;