
export function BottomStatusBar() {
  return (
    <div className="bg-white border-t border-slate-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">Draft in Progress</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="w-3/5 h-full bg-blue-500 rounded-full transition-all duration-300"></div>
            </div>
            <span className="text-sm text-slate-500">3 of 5 sections completed</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span>Word count: 247</span>
          <span>•</span>
          <span>Last saved: 2:33 PM</span>
          <span>•</span>
          <span className="text-green-600">✓ Auto-save enabled</span>
        </div>
      </div>
    </div>
  );
}
