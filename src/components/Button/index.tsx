interface ButtonProps {
    text: string


}


export const Button = ({text}:ButtonProps) => {
    return (<>
        <button className='boton1'>
            {text}
        </button>
    </>)
}
