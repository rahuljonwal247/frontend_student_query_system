// // components/QueryList.tsx
// import { useEffect, useState } from "react";
// import { getQueries } from "../services/api";
// import QueryCard from "./QueryCard";

// const QueryList = () => {
//   const [queries, setQueries] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchQueries = async () => {
//       try {
//         const data = await getQueries();
//         setQueries(data);
//       } catch (error) {
//         console.error("Error fetching queries:", error);
//       }
//     };

//     fetchQueries();
//   }, []);

//   return (
//     <div className="space-y-4">
//       {queries.map((query) => (
//         <QueryCard key={query.id} query={query} />
//       ))}
//     </div>
//   );
// };

// export default QueryList;


import { useEffect, useState } from "react";
import { getStudentQueries } from "../services/api";
import QueryCard from "./QueryCard";

const QueryList = () => {
  const [queries, setQueries] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState("Pending");

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const data = await getStudentQueries();
        setQueries(data);
      } catch (error) {
        console.error("Error fetching your queries:", error);
      }
    };

    fetchQueries();
  }, []);

  const filteredQueries = queries.filter((query) => query.status === statusFilter);

  return (
    <div className="space-y-4">
      {/* Dropdown for query status selection */}
      <div className="mb-4">
        <label className="mr-2">Filter by status:</label>
        <select
          className="border px-2 py-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {filteredQueries.length > 0 ? (
        filteredQueries.map((query) => (
          <QueryCard key={query.id} query={query} />
        ))
      ) : (
        <p>No queries found with selected status.</p>
      )}
    </div>
  );
};

export default QueryList;
