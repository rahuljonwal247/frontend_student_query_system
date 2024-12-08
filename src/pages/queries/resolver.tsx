// pages/queries/resolver.tsx
import Layout from "../../components/Layout";
import ResolverQueryList from "../../components/ResolverQueryList";

const ResolverQueriesPage = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Assigned Queries</h1>
      <ResolverQueryList />
    </Layout>
  );
};

export default ResolverQueriesPage;