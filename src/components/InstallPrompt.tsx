import styled from "styled-components";
import { useEffect, useState } from "react";
import { BeforeInstallPromptEvent } from "../interface";


export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowButton(true); // show "Install" button
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // show install prompt

    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);

    setDeferredPrompt(null);
    setShowButton(false);
  };

  return (
    <>
      {showButton && (
        <InsallBtnWrapper onClick={handleInstallClick}>
          Install App
        </InsallBtnWrapper>
      )}
    </>
  );
}

const InsallBtnWrapper = styled.span`
  color: #fff;
  font-size: 1.3em;
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    font-size: 1.1em;
  }
  cursor: pointer;
  &:hover {
  color: green;
}
`;
