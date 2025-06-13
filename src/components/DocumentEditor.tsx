
import { useState } from "react";

export function DocumentEditor() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Editor Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-slate-800">Rental Agreement Draft</h2>
          <p className="text-sm text-slate-500">Last edited 2 minutes ago</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-slate-600">Auto-saved</span>
        </div>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-none prose prose-slate">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-800 mb-2">RESIDENTIAL RENTAL AGREEMENT</h1>
              <p className="text-slate-600">Property Address: [TO BE FILLED]</p>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-1">
                  1. PARTIES
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  This Agreement is made between{" "}
                  <span className="bg-blue-50 px-2 py-1 rounded border border-blue-200 text-blue-800">
                    [Landlord Name]
                  </span>{" "}
                  ("Landlord") and{" "}
                  <span className="bg-blue-50 px-2 py-1 rounded border border-blue-200 text-blue-800">
                    [Tenant Name]
                  </span>{" "}
                  ("Tenant") for the rental property described below.
                </p>
                {isEditing && (
                  <div className="mt-2 p-2 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-800">
                    💡 Suggestion: Consider adding tenant contact information
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-1">
                  2. PROPERTY DESCRIPTION
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  The rental property is a 2-bedroom apartment located at{" "}
                  <span className="bg-blue-50 px-2 py-1 rounded border border-blue-200 text-blue-800">
                    [Property Address]
                  </span>{" "}
                  including the following amenities and fixtures.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-1">
                  3. LEASE TERM
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  The lease shall commence on{" "}
                  <span className="bg-green-50 px-2 py-1 rounded border border-green-200 text-green-800">
                    January 1, 2024
                  </span>{" "}
                  and end on{" "}
                  <span className="bg-green-50 px-2 py-1 rounded border border-green-200 text-green-800">
                    December 31, 2024
                  </span>{" "}
                  (12-month term).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-1">
                  4. RENT AND PAYMENT TERMS
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>
                    Monthly rent amount:{" "}
                    <span className="bg-green-50 px-2 py-1 rounded border border-green-200 text-green-800 font-semibold">
                      $2,400.00
                    </span>
                  </li>
                  <li>Rent is due on the 1st day of each month</li>
                  <li>Late fee of $50 will be charged for payments received after the 5th</li>
                  <li>
                    Security deposit:{" "}
                    <span className="bg-blue-50 px-2 py-1 rounded border border-blue-200 text-blue-800">
                      [Amount TBD]
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-1">
                  5. TENANT RESPONSIBILITIES
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Maintain the property in good condition</li>
                  <li>Pay all utilities as specified in addendum</li>
                  <li>Comply with all building rules and regulations</li>
                  <li>Provide 30 days written notice before vacating</li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-400">
                <p className="text-sm text-slate-600 italic">
                  📝 This document is being drafted based on your requirements. 
                  Additional clauses for utilities, pet policy, and termination conditions will be added.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
