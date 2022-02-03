import { Provider } from 'react-redux';
import DetailTable from './domain/page/DetailTable';
import { store } from './app/store';
import Layout from './Layout';

const App = () => {
  return (
    <Provider store={store}>
      {console.log(store.getState().users.queries)}
      <Layout>
        <DetailTable />
      </Layout>
    </Provider>
  );
};

export default App;
