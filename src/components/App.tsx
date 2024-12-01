import { HomeScreen } from './HomeScreen.tsx';
import { ScreenSaver } from './ScreenSaver.tsx'

export function App() {

  const loader = document.getElementById('loader');
  const spinner = document.getElementById('spinner');
  
  if (spinner && loader && !loader.hasAttribute('hidden')) {
    spinner.onanimationiteration  = () => {
      loader.setAttribute('hidden', 'true');
    }
    spinner.onanimationend  = () => {
      loader.setAttribute('hidden', 'true');
    }
  }
  
  return(
    <>
      <ScreenSaver/>
      <HomeScreen/>
    </>
  )
}
