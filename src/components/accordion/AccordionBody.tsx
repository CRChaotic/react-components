import { forwardRef, useContext } from "react";
import useCollapsible from "../../hooks/useCollapsible";
import { AccordionItemContext } from "./AccordionItem";
import { AccordionContext } from "./Accordion";

import "./styles/AccordionBody.css";

const CLASS_NAME_BODY = "accordion-body";

const AccordionBody = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>((props, ref) => {

    const itemKey = useContext(AccordionItemContext);
    const {hasItemKey} = useContext(AccordionContext);
    const show = hasItemKey(itemKey);

    const {ref:collapsibleRef, style} = useCollapsible<HTMLDivElement>({show});

    let className = props.className ? CLASS_NAME_BODY + " " +props.className : CLASS_NAME_BODY;

    return (
        <div 
            style={style}
            ref={collapsibleRef}
        >
            <div
                {...props}
                ref={ref}  
                className={className}
            > 
                {props.children}
            </div>
        </div>
    );
});

AccordionBody.displayName = "AccordionBody";

export default AccordionBody;