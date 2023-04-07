interface PortraitProps {
    id: string;
    imgUrl: string;
    title: string;
    description: string;
}

export const Portrait = (props: PortraitProps) => {
    return (
        <div className='portrait' id={props.id}>
            <img src={props.imgUrl} className="portraitImage"/>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}