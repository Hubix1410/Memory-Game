import React, { useState } from 'react';
import './configurator.scss';
import { RadioForm, StartGame } from './components';
import { configForm, basicConfig } from './helpers';

function Configurator() {

    const [config, setConfig] = useState(basicConfig);

    return (
        <div className='config'>
            <h1 className='config__title'>MemoGemo</h1>
            <section className='config__card'>
                {configForm.map((element, index) =>
                    <RadioForm
                        form={element}
                        key={`config-${index}`}
                        setConfig={setConfig}
                        config={config}
                    />)
                }
                <StartGame config={config}/>
            </section>
        </div>
    )
};

export default Configurator;
