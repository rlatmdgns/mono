import { ReactNode } from "react";
import { toast, ToastOptions, ToastPromiseParams } from "react-toastify";
import { skeletonLoading } from "./styles.css";
import { ToastButtonProps } from "./Toast.interface";
import { getDefaultOptions, getToastContent, getToastIcon, } from "./Toast.functons";

export const Toast = {
  info: (
    message: ReactNode,
    button?: ToastButtonProps,
    options: ToastOptions = {},
  ) => {
    toast.info(
      getToastContent(message, button),
      getDefaultOptions("info", options),
    );
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(
      getToastContent(message),
      getDefaultOptions("success", options),
    );
  },
  error: (
    message: ReactNode,
    button?: ToastButtonProps,
    options: ToastOptions = {},
  ) => {
    toast.error(
      getToastContent(message, button),
      getDefaultOptions("error", options),
    );
  },
  warning: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(
      getToastContent(message),
      getDefaultOptions("warning", options),
    );
  },
  promise: (promise: () => Promise<void>, options: ToastPromiseParams = {}) => {
    toast.promise(promise, {
      pending: {
        render() {
          if (options.pending) return `${options.pending}`;
          return (
            <img
              className={skeletonLoading}
              style={{
                width: 16,
                height: 16,
              }}
              src={""}
              alt=""
            />
          );
        },
        icon: getToastIcon("pending"),
      },
      success: {
        render() {
          return `${options.success}`;
        },
        icon: getToastIcon("success"),
      },
      error: {
        render() {
          return `${options.error}`;
        },
        icon: getToastIcon("error"),
      },
    });
  },
};
