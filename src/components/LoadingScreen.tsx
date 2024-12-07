import logo from '../assets/omnitrix.svg'

export function LoadingScreen(){

    return(
    <>
        <div className='bg loading-screen'>
            <img src={ logo } className="logo spin" alt="Spinning Logo" />
        </div>
    </>)
}
