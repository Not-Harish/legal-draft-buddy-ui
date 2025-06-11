
import { Button } from "@/components/ui/button";
import { Undo, Save } from "lucide-react";

export function SideToolbar() {
  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-2">
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 p-0 hover:bg-slate-50"
          title="Undo"
        >
          <Undo className="w-5 h-5 text-slate-600" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 p-0 hover:bg-slate-50"
          title="Save"
        >
          <Save className="w-5 h-5 text-slate-600" />
        </Button>
      </div>
    </div>
  );
}
