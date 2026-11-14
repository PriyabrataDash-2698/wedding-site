import { useMemo } from "react";
import qrcode from "qrcode-generator";

export default function QRCode({ text, label }) {
  const svg = useMemo(() => {
    const q = qrcode(0, "M");
    q.addData(text);
    q.make();
    return q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  }, [text]);
  return <div className="code" role="img" aria-label={label} dangerouslySetInnerHTML={{ __html: svg }} />;
}
