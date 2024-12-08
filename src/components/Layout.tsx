// // components/Layout.tsx
// import { ReactNode } from "react";
// import Link from "next/link";
// import { logout } from "../utils/auth";

// type LayoutProps = {
//   children: ReactNode;
// };

// const Layout = ({ children }: LayoutProps) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-blue-500 p-4 text-white">
//         <nav className="container mx-auto flex justify-between">
//           <Link href="/" className="font-bold text-xl">Student Query System</Link>
//           <button
//             onClick={() => {
//               logout();
//               window.location.href = "/login";
//             }}
//             className="bg-red-500 px-4 py-2 rounded"
//           >
//             Logout
//           </button>
//         </nav>
//       </header>
//       <main className="flex-grow container mx-auto p-4">{children}</main>
//     </div>
//   );
// };

// export default Layout;


import { ReactNode } from "react";
import Link from "next/link";
import { logout } from "../utils/auth";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Student Query System
          </Link>
          <button
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
