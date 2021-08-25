import { useState } from "react";
import { ClipboardCopyIcon, ClipboardCheckIcon } from "@heroicons/react/outline";

export const ClipboardCopy = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-8 w-8 inline-flex items-center justify-center">
      <button
        type="button"
        className="h-8 w-8 pt-1 pr-2 pl-0 justify-center"
        onClick={handleCopyClick}
        value={copyText}
      >
        <span>{isCopied ? <ClipboardCheckIcon /> : <ClipboardCopyIcon />}</span>
      </button>
    </div>
  );
};

// <button>
//   <ClipboardCopyIcon
//     className='-ml-1 mr-2 h-5 w-5'
//     onClick={handleCopyClick}
//     value={copyText}
//   />
// inline-flex items-center px-6 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
// </button>
