import React from "react";
import QuestsBoard from "../sections/quests_board";
import ProfileBanner from "../sections/profile_banner";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../ui/resizable";
import { usePanelLayout } from "@/hooks/usePanelLayout";
import { useDisplayStore } from "@/stores/display/display.store";

const DEFAULT_LAYOUT = ["20%", "55%", "25%"];

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [layout, setLayout] = usePanelLayout<string[]>(DEFAULT_LAYOUT);
  const { layout: displayLayout } = useDisplayStore();

  const handleLayoutChanged = (newLayout: any) => {
    setLayout(newLayout);
  };

  const getLayoutValues = (index: number) => {
    const layoutValues = Object.values(layout);
    return `${layoutValues[index]}%`;
  };

  return (
    <div className="h-full w-full bg-background">
      <ResizablePanelGroup
        orientation="horizontal"
        onLayoutChanged={handleLayoutChanged}
        className="h-full w-full overflow-hidden"
      >
        {/* 1. Quests Panel */}
        {displayLayout.quests_board && (
          <>
            <ResizablePanel
              defaultSize={getLayoutValues(0)}
              minSize={"15%"}
              maxSize={"35%"}
            >
              <QuestsBoard />
            </ResizablePanel>

            <ResizableHandle />
          </>
        )}

        {/* 2. Main Content */}
        <ResizablePanel defaultSize={getLayoutValues(1)} minSize={"30%"}>
          <div className="h-full w-full overflow-auto bg-background">
            {children}
          </div>
        </ResizablePanel>

        {/* 3. Profile Panel */}
        {displayLayout.profile_banner && (
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
        )}
      </ResizablePanelGroup>
    </div>
  );
}
