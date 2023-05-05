import './App.css'
import Result from './assets/components/Result'
import Summary from './assets/components/Summary'

function App() {

  return (
    <main>
      <article className='bg-White shadow-1 h-screen md:h-[512px] w-full md:max-w-[736px] md:inline-flex md:rounded-[32px]'>
        <Result />
        <Summary />
      </article>
    </main>
  )
}

export default App
