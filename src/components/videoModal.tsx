import React, { Fragment, useRef, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import { RootState } from "../utils/store";
import { hideVideoModel } from "../utils/store/slides/movie";
import { RotatingLines } from "react-loader-spinner";

const VideoModal = () => {
  const dispatch = useAppDispatch();
  const { details, videoModal } = useAppSelector(
    (state: RootState) => state.movie,
  );
  const { isOpen } = videoModal;
  const { trailer, isLoading } = details;
  const cancelButtonRef = useRef(null);

  console.log(trailer);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(hideVideoModel())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={() => dispatch(hideVideoModel())}
          />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto w-fit h-fit m-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <iframe
                src={`https://www.youtube.com/embed/${trailer?.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="h-[260px] w-screen md:w-[760px] lg:w-[960px] md:h-[540px]"
              />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default VideoModal;
