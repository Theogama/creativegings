
import React from "react";

export default function Loader({ label = "Processing..." }: { label?: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-background shadow-xl">
        <svg className="animate-spin h-8 w-8 text-primary" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
        <span className="text-lg text-primary font-semibold">{label}</span>
      </div>
    </div>
  );
}
