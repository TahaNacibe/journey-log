import CustomTitleBar from "./controller/window_controller";
import { ThemeProvider } from "next-themes";
import HomeWrapper from "./wrappers/home_wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      <div>
        <CustomTitleBar>
          <HomeWrapper>{children}</HomeWrapper>
        </CustomTitleBar>
      </div>
    </ThemeProvider>
  );
}
