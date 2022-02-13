import { Provider } from "react-redux";
import DetailTable from "./users/page/DetailTable";
import { store } from "./app/store";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./todo/page/Todos";
import Box from "./share/Layout/Box/Box";
import Flex from "./share/Layout/Flex/Flex";

const App = () => {
  return (
    <Flex
      background="#000"
      zIndex={3}
      flexDirection="row"
      flexWrap="wrap"
      position="fixed"
      top={50}
      left={50}
      alignItems="center"
      overflow="hidden"
      justifyContent="center"
      gap="30px"
      m={0}
      p={0}
    >
      <h2 style={{ color: "red" }}>Hello</h2>
    </Flex>
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
