import { ReactNode } from "react";

type Props = {
    name: string,
    link: string, 
    color: string,
    icon: ReactNode
}

export const AppBox = (props: Props) => {
    const css = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '64px',
        width: '64px',
        borderRadius: '5px',
        backgroundColor: props.color
    };

    return(
        <a href={props.link} style={{ textAlign:'center', fontFamily:'Roboto', textDecoration:'none', color:'white'}}>
            <div style={css}>
                {props.icon}
            </div>
            <span>{props.name}</span>
        </a>
    );
}