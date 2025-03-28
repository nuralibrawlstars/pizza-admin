import { ReactNode } from "react";
import s from "./Modal.module.scss"

interface ModalProps {
    children: ReactNode;
    onClose: ()=> void;
}

const Modal: React.FC<ModalProps>=({children, onClose})=> {
    return(
     <div onClick={onClose} className={s.modalOverlay}>
        <div onClick={e=> e.stopPropagation()} className={s.modalContent}>
            <button onClick={onClose} className={s.closeButton}>X</button>
            {children}
        </div>
     </div>

    )
}

export default Modal