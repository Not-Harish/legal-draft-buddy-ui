
import { Scale } from "lucide-react";

export function AppHeader() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Scale className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-semibold text-slate-800">LegalDraft Pro</h1>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-slate-600">
        <span>Welcome back, Sarah</span>
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-medium">S</span>
        </div>
      </div>
    </header>
  );
}
