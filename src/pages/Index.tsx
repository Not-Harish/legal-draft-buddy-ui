
import { AppHeader } from "@/components/AppHeader";
import { ChatPanel } from "@/components/ChatPanel";
import { DocumentEditor } from "@/components/DocumentEditor";
import { SideToolbar } from "@/components/SideToolbar";
import { BottomStatusBar } from "@/components/BottomStatusBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AppHeader />
      
      <div className="flex flex-1 relative">
        <SideToolbar />
        
        <div className="flex flex-1 gap-4 p-4 pl-20">
          {/* Left Panel - Chat Interface */}
          <div className="w-1/2 bg-white rounded-xl shadow-sm border border-slate-200">
            <ChatPanel />
          </div>
          
          {/* Right Panel - Document Editor */}
          <div className="w-1/2 bg-white rounded-xl shadow-sm border border-slate-200">
            <DocumentEditor />
          </div>
        </div>
      </div>
      
      <BottomStatusBar />
    </div>
  );
};

export default Index;
