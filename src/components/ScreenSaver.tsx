import logo from '../assets/omnitrix.svg'

export function ScreenSaver(){

    const move_out = ()=>{
        const screen = document.getElementById('screen-saver');
        const span = document.getElementById('span-text');
        if(screen && span){
            span.style.display = 'none';
            screen.classList.add('move-out');
            screen.onanimationend = ()=>{
                span.style.display = 'block';    
            }
        }
    }

    return(
    <>
        <div id='screen-saver' onClick={move_out}>
            <img src={ logo } className="logo blink" alt="Logo" />
            <span id='span-text'>Tap to Continue!</span>
        </div>
    </>)
}
