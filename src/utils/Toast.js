import { Toaster, toast } from "sonner";

export const successToast = (msg) => {
     toast.success(msg);
}

export const errorToast = (msg) => {
     toast.error(msg);
}