// import { useEffect, useRef, useState } from "react";

// const EXTERNAL_URL = "http://172.20.44.110:5000";

// export default function ExternalAppEmbed() {
//   const iframeRef = useRef<HTMLIFrameElement>(null);
//   const [iframeFailed, setIframeFailed] = useState(false);

//   useEffect(() => {
//     const iframe = iframeRef.current;

//     // Listen for messages back from the iframe
//     const handleMessage = (event: MessageEvent) => {
//       if (event.origin !== EXTERNAL_URL) return;
//       console.log("✅ Message received from iframe:", event.data);
//     };

//     window.addEventListener("message", handleMessage);

//     // Try to send a message to the iframe on load
//     const handleLoad = () => {
//       try {
//         iframe?.contentWindow?.postMessage(
//           { type: "EMBEDDED", timestamp: Date.now() },
//           "*"
//         );
//       } catch (err) {
//         console.warn("⚠️ Unable to postMessage to iframe:", err);
//       }
//     };

//     if (iframe) {
//       iframe.onload = handleLoad;
//     }

//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   }, []);

//   // If the iframe fails to load (blocked by headers / 302 / etc), show fallback button
//   const handleIframeError = () => {
//     console.warn("❌ Iframe loading failed. Falling back to new window.");
//     setIframeFailed(true);
//   };

//   return (
//     <div style={{ width: "100%", height: "100vh", position: "relative" }}>
//       {!iframeFailed ? (
//         <iframe
//           ref={iframeRef}
//           src={EXTERNAL_URL}
//           width="100%"
//           height="100%"
//           frameBorder={0}
//           allow="fullscreen *; autoplay; encrypted-media; microphone; camera"
//           allowFullScreen
//           title="External Practice"
//           style={{ border: "none", display: "block" }}
//           onError={handleIframeError}
//         />
//       ) : (
//         <div
//           style={{
//             textAlign: "center",
//             padding: "40px",
//             background: "#f5f5f5",
//             height: "100%",
//           }}
//         >
//           <h1 style={{ marginBottom: "20px" }}>External Application</h1>
//           <p>
//             The application could not be embedded in the same page.
//             <br />
//             It may require a full browser context or is blocking iframes.
//           </p>
//           <a
//             href={EXTERNAL_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               display: "inline-block",
//               marginTop: "30px",
//               padding: "14px 28px",
//               fontSize: "18px",
//               background: "#007bff",
//               color: "#fff",
//               borderRadius: "8px",
//               textDecoration: "none",
//               boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
//             }}
//           >
//             🚀 Open External App in New Window
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
import React from "react";
import { Button } from "@/components/ui/button";

const EXTERNAL_PRACTICE_URL = "http://172.20.44.110:5000";

const Practice = () => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const openExternalPractice = () => {
    window.open(EXTERNAL_PRACTICE_URL, "_blank", "noopener,noreferrer");

  };

  return (
            <iframe
          ref={iframeRef}
          src={EXTERNAL_PRACTICE_URL}
          width="100%"
          height="100%"
          frameBorder={0}
          allow="fullscreen *; autoplay; encrypted-media; microphone; camera"
          allowFullScreen
          title="External Practice"
          style={{ border: "none", display: "block" }}
          // onError={handleIframeError}
        />
    // <div className="flex flex-col items-center justify-center w-full h-screen  p-24 text-center">
    //   <h1 className="text-4xl font-bold mb-4">Practical Application</h1>
    //   <p className="text-lg mb-2">
    //     The application contains complex UI components that require a full browser context to function properly.
    //   </p>
    //   <p className="text-lg mb-8">
    //     Click the button below to open it in a new window.
    //   </p>

    //   <Button
    //     size="lg"
    //     onClick={openExternalPractice}
    //     className="px-12 py-6 text-2xl bg-gray-600 text-white rounded-lg shadow-lg hover:translate-y-[-2px] hover:shadow-2xl transition-transform transition-shadow"
    //   >
    //     🚀 Open Practical App in New Window
    //   </Button>

    //   {/* <p className="mt-10 text-gray-500 text-sm">
    //     ✅ This ensures all dropdowns, modals, and interactions work as intended.
    //   </p> */}
    // </div>
  );
};

export default Practice;
