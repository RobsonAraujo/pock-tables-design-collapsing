import React, {useState, useEffect, useRef} from "react";
import "./styles.css"

const Collapsible = ({ children, open }) => {


  const [height, setHeight] = useState(
    open ? undefined : 0
  );

  const ref = useRef();

  useEffect(() => {
    if (!height || !open || !ref.current) return undefined;

    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, open]);

  useEffect(() => {
    if (open) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [open]);


 return <div className="collapsible-animation" style={{ height }}>
  <div ref={ref}>
    {children}
  </div>
</div>
};

export default Collapsible;
