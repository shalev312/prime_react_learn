import { Provider } from "react-redux";
import DetailTable from "./users/page/DetailTable";
import { store } from "./app/store";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./todo/page/Todos";
import Box from "./share/Layout/Box/Box";
import Flex from "./share/Layout/Flex/Flex";
import Text from "./share/UIElements/Text/Text";

const App = () => {
  return (
    <Text type="title">Hello</Text>
    // <Router>
    //   <Provider store={store}>
    //     {console.log(store.getState().users.queries)}
    //     <Layout>
    //       <Routes>
    //         <Route path="/" element={<DetailTable />} />
    //         <Route path="/todo" element={<Todos />} />
    //         <Route path="*" element={<DetailTable />} />
    //       </Routes>
    //     </Layout>
    //   </Provider>
    // </Router>
  );
};

export default App;
