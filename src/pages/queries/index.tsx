// // pages/queries/index.tsx
// import Layout from "../../components/Layout";
// import QueryList from "../../components/QueryList";
// import QuerySubmit from "../queries/submit";

// const QueriesPage = () => {
//   return (
//     <Layout>
//       <h1 className="text-2xl font-semibold mb-4">Your Queries</h1>
//       <QuerySubmit/>
//       <QueryList />
//     </Layout>
//   );
// };

// export default QueriesPage;

import Layout from "../../components/Layout";
import QueryList from "../../components/QueryList";
import SubmitQuery from "./submit";

const QueriesPage = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Your Queries</h1>
      <SubmitQuery />
      <QueryList />
    </Layout>
  );
};

export default QueriesPage;
