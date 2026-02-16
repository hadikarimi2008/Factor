import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

        <div className="absolute h-12 w-12 animate-pulse rounded-full bg-blue-100 shadow-inner"></div>

        <div className="absolute h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-xl font-semibold text-gray-800 tracking-tight">
          Please wait
        </span>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]"></span>
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]"></span>
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-600"></span>
        </div>
      </div>

      <style jsx>{`
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  );
}
