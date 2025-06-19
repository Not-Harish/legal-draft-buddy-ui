
import { Scale } from "lucide-react";

export function AppHeader() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Scale className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-slate-800">LegalDraft Pro</h1>
        <span className="text-sm text-slate-500 bg-orange-100 px-2 py-1 rounded-full">MVP</span>
      </div>
      
      <div className="text-sm text-slate-600">
        <span>Legal Document Assistant</span>
      </div>
    </header>
  );
}
