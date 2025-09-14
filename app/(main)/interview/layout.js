import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={
          <div className="mt-4">
            <BarLoader width="100%" color="gray" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}