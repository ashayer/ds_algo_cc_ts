import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "@fontsource/manrope";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import AlgoSandbox from "./pages/AlgoSandbox/AlgoSandbox";
import AlgoReading from "./pages/AlgoReading/AlgoReading";
import StructureReading from "./pages/StructureReading/StructureReading";
import StructureSandbox from "./pages/StructureSandbox/StructureSandbox";
import Game from "./pages/Game/Game";
import useUserStore from "./stores/userStore";

function App() {
  const gameStarted = useUserStore((state) => state.gameHasStarted);

  return (
    <BrowserRouter>
      {!gameStarted && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/algosandbox" element={<AlgoSandbox />} />
        <Route path="/algoreading" element={<AlgoReading />} />
        <Route path="/structurereading" element={<StructureReading />} />
        <Route path="/structuresandbox" element={<StructureSandbox />} />
        <Route path="/game" element={<Game />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
