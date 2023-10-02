import useMeasure from "react-use-measure"
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from "react";
import ignoreCircularReferences from "../../lib/ignoreCircularReferences";

function ResizeablePanel({ d, children }: { d: number, children?: ReactNode }){
    let [ ref, { height }] = useMeasure()
    return (
        <motion.div
            animate={{ height }}
        >
            {/* inner wrapper for content animation */}
            <AnimatePresence mode='wait'>
            <motion.div
                // doesn't rerender for the children, so we need a key that exists outside of the render cycle, that will change and cause an update
                // the most intuitive approach is to use the children themselves as a key
                // we usually get usually due to it being a complex data structure with circular references to itself
                // lets use a work around found in github issues
                key={JSON.stringify(children, ignoreCircularReferences())} // second argument mutates the passed in object
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: d/2, duration: d/2 } }}
                exit={{ opacity: 0, transition: { delay: 0, duration: d/2 } }}
            >
                <div ref={ref} >
                    { children }
                </div>
            </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default ResizeablePanel;