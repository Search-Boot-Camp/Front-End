import React from 'react';
import AdfitWebComponent from 'react-adfit-web-component'
import './Ad.css';

class IntegratedAdfitComponent extends React.Component {
    render() {
        return (
            <div className="Adsize">
                <AdfitWebComponent
                    adUnit= "DAN-V3hXFORARKDyn1wP" 
                    adWidth="“728”"
                    adHeight="“90”"/>
            </div>
        );
    }
}

export default IntegratedAdfitComponent;