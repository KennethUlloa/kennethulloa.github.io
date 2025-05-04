import { useRef, useState } from "react";

export default function EmailButton({
  encodedEmail,
  baseMessage,
  successMessage,
  Icon,
}: {
  encodedEmail: string;
  baseMessage: string;
  successMessage: string;
  Icon?: string
}) {
  const [message, setMessage] = useState(baseMessage);
  const [isCopied, setIsCopied] = useState(false);
  const timer = useRef<number>(undefined);


  function copyEmail() {
    navigator.clipboard.writeText(atob(encodedEmail));
    setMessage(successMessage);
    setIsCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setMessage(baseMessage);
      setIsCopied(false);
    }, 2000);
  }

  return (
    <button onClick={copyEmail} className="btn border-aqua-self border rounded-lg px-6 py-3 flex gap-2 items-center *:text-aqua-self my-2 link text-aqua-self cursor-pointer">
      {message}
      {isCopied && <i className="icon text-lg flex items-center justify-center" dangerouslySetInnerHTML={{ __html: Icon as string }}></i>}
    </button>
  );
}
