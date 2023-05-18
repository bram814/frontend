import M from '@materializecss/materialize/dist/js/materialize.min';
import React, { useEffect, useState } from 'react';

const Tabs = () => {


    useEffect(() => {
        M.AutoInit();
        let tabs = document.querySelectorAll("tabs");
        M.Tabs.init(tabs);
    }, []);

    return (
    
        <div className="row">
            
            <br/><br/><br/><br/><br/>
           
        </div>
    );
}

export default Tabs;