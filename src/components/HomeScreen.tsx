import { Grid2 } from "@mui/material";
import { AppBox } from "./AppBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export function HomeScreen(){

    const move_in = ()=>{
        const screen = document.getElementById('screen-saver');
        if(screen){
            screen.classList.remove('move-out');
        }
    }

    return(
        <>
            <div onClick={move_in}>HERE!</div>
            <Grid2 container spacing={1}>
                <Grid2 size={1}>
                    <AppBox name='ScreenSaver' link="" color="purple" icon={
                        <FontAwesomeIcon icon={fas.faHouse}/>
                    } />
                </Grid2>
            </Grid2>
        </>
    )
}