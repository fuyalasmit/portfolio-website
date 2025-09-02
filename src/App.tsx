import { Layout } from "./components/layout/Layout";
import CustomCursor from "./components/ui/CustomCursor";
import { HeroPage } from "./pages/HeroPage";

function App() {
  return (
    <>
      <CustomCursor />
      <Layout>
        <HeroPage />
      </Layout>
    </>
  );
}

export default App;
