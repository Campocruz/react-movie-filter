import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

function App() {

  return (
    <>
      <AppHeader />

      <div className="main">
        <AppMain />
      </div>

      <AppFooter />
    </>
  )
}

export default App
