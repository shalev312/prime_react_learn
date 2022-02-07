import { Provider } from 'react-redux';
import DetailTable from './users/page/DetailTable';
import { store } from './app/store';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todos from './todo/page/Todos';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        {console.log(store.getState().users.queries)}
        <Layout>
          <Routes>
            <Route path="/" element={<DetailTable />} />
            <Route path="/todo" element={<Todos />} />
            <Route path="*" element={<DetailTable />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
};

export default App;
