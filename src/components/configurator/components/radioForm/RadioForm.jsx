import React from 'react';
import "./radioForm.scss";
import { useButtonClass, useUpdateConfig } from './helpers';


const RadioButton = ({ value, id, amount, current, config, setConfig }) => {
    const buttonClass = useButtonClass(amount, current, value);

    return (
        <button className={buttonClass} onClick={() => useUpdateConfig(id, value, config, setConfig)}>
            {value}
        </button >
    )
}


const RadioForm = ({ form, setConfig, config }) => {
    return (
        <section className='radio'>
            <p className='radio__title'>{form.name}</p>
            <div className='radio__container'>
                {form.inputs.map((element, index) =>
                    <RadioButton
                        key={`radio--${index}`}
                        id={form.id}
                        value={element}
                        amount={form.inputs.length}
                        current={config[form.id]}
                        config={config}
                        setConfig={setConfig}
                    />
                )}
            </div>
        </section>
    )
}

export default RadioForm
