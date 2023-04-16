type ButtonType = "btn1" | "btn2"

interface ButtonProps {
    text: string

    type?:ButtonType
}


export const Button = ({text,type="btn1"}:ButtonProps) => {
    return (<>
        <button className={`btn ${type}`}>
            {text}
        </button>
    </>)
}
