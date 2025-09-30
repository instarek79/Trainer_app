import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Persists the user's last visited route and a human label in localStorage
 * so the Hub page can show a "Continue" CTA.
 */
export default function RouteSync() {
  const location = useLocation();

  useEffect(() => {
    // Map simple labels for known routes
    const path = location.pathname;
    let label = "Home";
    switch (path) {
      case "/ml-introduction":
        label = "ML Introduction";
        break;
      case "/roadmap":
        label = "Roadmap";
        break;
      case "/practice":
        label = "Practice";
        break;
      case "/quizmaster":
        label = "Quiz Master";
        break;
      case "/progress":
        label = "Progress";
        break;
      case "/achievements":
        label = "Rewards";
        break;
      case "/tasks":
        label = "My Tasks";
        break;
      case "/settings":
        label = "Settings";
        break;
      case "/simulation":
        label = "Simulation";
        break;
      case "/next":
        label = "Recommended Next";
        break;
      default:
        // keep as Home or derive from path
        label = path === "/" ? "Home" : path.replace("/", "").replaceAll("-", " ");
    }

    const payload = { path, label, ts: Date.now() };
    try {
      localStorage.setItem("lastActivity", JSON.stringify(payload));
    } catch {}
  }, [location.pathname]);

  return null;
}
