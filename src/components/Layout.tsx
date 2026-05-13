import CustomTitleBar from "./window_controller";
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
      <CustomTitleBar>
        <HomeWrapper>{children}</HomeWrapper>
      </CustomTitleBar>
    </ThemeProvider>
  );
}
