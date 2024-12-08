// // services/api.ts
// const API_URL = "http://localhost:5000"; // Backend URL

// const fetchData = async (url: string, method = "GET", body?: any) => {
//   const res = await fetch(`${API_URL}${url}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   });

//   const data = await res.json();
//   if (!res.ok) {
//     throw new Error(data.message || "An error occurred");
//   }
//   return data;
// };

// // Fetch queries for the logged-in student
// export const getQueries = async () => {
//   return fetchData("/queries");
// };

// // Submit a new query
// export const submitQuery = async (queryData: any) => {
//   return fetchData("/queries", "POST", queryData);
// };


export const getStudentQueries = async () => {
  return [
    {
      id: "1",
      title: "Query 1",
      description: "Issue with submission",
      status: "Pending",
      resolverNote: "",
    },
    {
      id: "2",
      title: "Query 2",
      description: "Issue with login",
      status: "Resolved",
      resolverNote: "Issue fixed after password reset.",
    },
  ];
};

export const submitQuery = async (formData: FormData) => {
  try {
    console.log("Submitting:", formData);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
