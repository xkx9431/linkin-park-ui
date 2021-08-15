import Car from '../car'
import Layout from '../layout'
import Header from '../header'

import '../../style/App.css';

function App() {
  return (
    <div className="App">
      <Layout.Box>
        <Header></Header>
        <Layout.SlotStatus carsNum = {8 }>
          < Car />
        </Layout.SlotStatus>
      </Layout.Box>
    </div>
  );
}

export default App;
