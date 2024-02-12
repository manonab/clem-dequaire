import { useEffect } from "react";
import { useHeaderColor } from "~/context";

export default function Services() {
  const { setHeaderColor } = useHeaderColor();

  useEffect(() => {
    setHeaderColor("linear-services")
  }, [setHeaderColor]);

  return (
    <div className="bg-yellowHome w-full h-screen flex">

    </div>
  );
}