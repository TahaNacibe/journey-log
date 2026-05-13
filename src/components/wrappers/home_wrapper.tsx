import React, { useEffect } from "react";
import QuestsBoard from "../sections/quests_board";
import ProfileBanner from "../sections/profile_banner";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../ui/resizable";
import { usePanelLayout } from "@/hooks/usePanelLayout";
import debuggerLog from "@/lib/debugger_log";

const DEFAULT_LAYOUT = ["20%", "55%", "25%"];

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [layout, setLayout] = usePanelLayout<string[]>(DEFAULT_LAYOUT);

  useEffect(() => {
    debuggerLog("THE SAVED SIZES ARE  : " + layout);
  }, []);

  const handleLayoutChanged = (newLayout: any) => {
    setLayout(newLayout);
  };

  const getLayoutValues = (index: number) => {
    const layoutValues = Object.values(layout);
    return `${layoutValues[index]}%`;
  };

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      onLayoutChanged={handleLayoutChanged}
      className="h-screen w-screen overflow-hidden"
    >
      {/* 1. Quests Panel */}
      <ResizablePanel
        defaultSize={getLayoutValues(0)}
        minSize={"15%"}
        maxSize={"35%"}
      >
        <QuestsBoard />
      </ResizablePanel>

      <ResizableHandle />

      {/* 2. Main Content */}
      <ResizablePanel defaultSize={getLayoutValues(1)} minSize={"30%"}>
        <div className="h-full w-full overflow-auto bg-background">
          {children}
        </div>
      </ResizablePanel>

      {/* 3. Profile Panel */}

      <>
        <ResizableHandle className="hidden lg:block" />
        <ResizablePanel
          className="hidden lg:block"
          defaultSize={getLayoutValues(2)}
          minSize={"5%"}
          maxSize={"25%"}
        >
          <ProfileBanner />
        </ResizablePanel>
      </>
    </ResizablePanelGroup>
  );
}
