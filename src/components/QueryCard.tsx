// // components/QueryCard.tsx
// type QueryCardProps = {
//     query: {
//       id: string;
//       title: string;
//       description: string;
//       status: string;
//       resolverNote: string;
//     };
//   };
  
//   const QueryCard = ({ query }: QueryCardProps) => {
//     return (
//       <div className="p-4 border border-gray-300 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold">{query.title}</h3>
//         <p className="text-gray-700">{query.description}</p>
//         <p className="text-sm text-gray-500">Status: {query.status}</p>
//         {query.status === "Resolved" && (
//           <p className="text-sm text-green-500">Resolver Note: {query.resolverNote}</p>
//         )}
//       </div>
//     );
//   };
  
//   export default QueryCard;
  

// src/components/QueryCard.tsx

// import React from "react";

// const QueryCard = ({ query }: { query: any }) => {
//   return (
//     <div className="border p-4 rounded shadow">
//       <h3 className="font-semibold">{query.title}</h3>
//       <p>{query.description}</p>
//       <p>Status: {query.status}</p>
//       {query.status === "Resolved" && <p>Resolver's note: {query.resolverNote}</p>}
//     </div>
//   );
// };

// export default QueryCard;

type QueryCardProps = {
  query: any;
};

const QueryCard = ({ query }: QueryCardProps) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{query.title}</h2>
      <p className="text-gray-600 mt-1">{query.description}</p>
      <p className="mt-2 text-sm">
        <strong>Status:</strong> {query.status}
      </p>
      {query.status === "Resolved" && query.resolverNote && (
        <div className="mt-2 p-2 bg-green-100 text-sm rounded">
          <strong>Resolver Note:</strong> {query.resolverNote}
        </div>
      )}
    </div>
  );
};

export default QueryCard;
