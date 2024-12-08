// // pages/queries/submit.tsx
// import { useState } from "react";
// import { submitQuery } from "../../services/api";
// import Layout from "../../components/Layout";
// import { useRouter } from "next/router";

// const SubmitQueryPage = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [attachment, setAttachment] = useState<File | null>(null);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const queryData = { title, description, attachment };

//     try {
//       await submitQuery(queryData);
//       router.push("/queries");
//     } catch (error) {
//       console.error("Error submitting query:", error);
//     }
//   };

//   return (
//     <Layout>
//       <h1 className="text-2xl font-semibold mb-4">Submit a Query</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Attachment</label>
//           <input
//             type="file"
//             onChange={(e) => setAttachment(e.target.files?.[0] || null)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Submit Query
//         </button>
//       </form>
//     </Layout>
//   );
// };

// export default SubmitQueryPage;


// // src/pages/queries/submit.tsx

// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { submitQuery } from "../../services/api";

// const SubmitQuery = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [attachments, setAttachments] = useState<File[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       attachments.forEach((file) => formData.append("attachments", file));

//       const response = await submitQuery(formData);
//       if (response.success) {
//         toast.success("Query submitted successfully.");
//       } else {
//         toast.error("Error submitting query.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-2xl font-semibold">Submit a Query</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           required
//         />
//         <input
//           type="file"
//           multiple
//           onChange={(e) => setAttachments(Array.from(e.target.files || []))}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <button
//           type="submit"
//           className="w-full p-2 bg-blue-500 text-white rounded"
//         >
//           Submit Query
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SubmitQuery;


import React, { useState } from "react";
import { toast } from "react-toastify";
import { submitQuery } from "../../services/api";

const SubmitQuery = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      attachments.forEach((file) => formData.append("attachments", file));

      const response = await submitQuery(formData);
      if (response.success) {
        toast.success("Query submitted successfully.");
        setTitle("");
        setDescription("");
        setAttachments([]);
      } else {
        toast.error("Error submitting query.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 mb-6 bg-gray-50 shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-2">Submit a Query</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          multiple
          onChange={(e) => setAttachments(Array.from(e.target.files || []))}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Query
        </button>
      </form>
    </div>
  );
};

export default SubmitQuery;
