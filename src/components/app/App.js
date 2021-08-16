import Car from '../car'
import Layout from '../layout'
import Header from '../header'

import '../../style/App.css';

function App() {
  return (
    <div className="App">
      <Layout.Box>
        <Header></Header>
        <Layout.SlotStatus carsNum = { 15 }>
          < Car />
        </Layout.SlotStatus>
      <Layout.Footer/>
      </Layout.Box>
    </div>
  );
}

export default App;
