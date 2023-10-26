import { ReactNode, useEffect, useRef } from "react";

const Section = ({ id, name, subtitle, className, children, ...props }: { id: string, name: string, subtitle?: string, className?: string, children?: ReactNode }) => {
  const parentRef = useRef<HTMLElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!window) return;

  //   function adjustParentHeight() {
  //     if (!parentRef?.current || !childRef?.current) return;

  //     const parent = parentRef.current;
  //     const child = childRef.current;
      
  //     const childRect = child.getBoundingClientRect();
  //     const parentRect = parent.getBoundingClientRect();
      

  //     const newParentHeight = childRect.top - parentRect.top + childRect.height;      
  //     parent.style.height = `${newParentHeight}px`;
  //   }

  //   window.addEventListener('resize', adjustParentHeight);
  //   adjustParentHeight();

  //   return () => {
  //     window.removeEventListener('resize', adjustParentHeight);
  //   }
  // }, [])

  return (
    <section ref={parentRef} {...props} id={id} className={`default-p-x w-full mb-20 ${className ? className : ""}`}>
        <div className="mb-10">
            <h3>{name}</h3>
            { subtitle && <p>{subtitle}</p>}
        </div>
        <div ref={childRef}>{children}</div>
    </section>
  )
}
  
export default Section;