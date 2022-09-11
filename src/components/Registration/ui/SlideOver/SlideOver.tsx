import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./SlideOver.module.css";

interface ISlideOver {
  children: React.ReactNode;
  open: boolean;
  onClose: (openState?: boolean) => void;
  fullScreen?: boolean;
}

const SlideOver = (props: ISlideOver) => {
  const { children, open, onClose } = props;
  const handleClose = () => onClose(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        onClose={() => handleClose}
        as="div"
        className={styles["container"]}
      >
        <Transition.Child
          as={"div"}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30">{children}</div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default SlideOver;
