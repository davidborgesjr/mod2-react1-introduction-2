export default function TextInput(
    {
        labelDescription = 'Descrição do label',
        inputValue = 'Valor padrão do input',
        onInputChange=null,
        id = 'input-text-id',
        autoFocus = false
    }){
    function handleInputChange({currentTarget}){
        if(onInputChange){
            const newValue = currentTarget.value;
            onInputChange(newValue)
        }
    }
    return (
        <div className={'flex flex-col my-4'}>
            <label htmlFor={id} className={'text-sm mb-1'}>
                {labelDescription}
            </label>
            <input autoFocus={autoFocus} id={id} className={"border p-1"} type={"text"} value={inputValue} onChange={handleInputChange}></input>
        </div>
    )
}
