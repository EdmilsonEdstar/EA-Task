
type PropsTextField = {
    label_htmlFor?: string
    label_name?: string
    label_className?: string
    input_id?: string
    input_type: string
    input_className?: string
}

export default function TextField(props : PropsTextField){
    return(
        <>
            <label htmlFor={props.label_htmlFor} className={props.label_className}>{props.label_name}</label>
            <input id={props.input_id} autoComplete="off" type={props.input_type} className={props.input_className} />
        </>
    )
}