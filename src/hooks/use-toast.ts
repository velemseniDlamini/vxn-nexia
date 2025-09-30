import { toast as sonnerToast } from 'sonner';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const toast = {
  success: (message: string, options = {}) => sonnerToast.success(message, options),
  error: (message: string, options = {}) => sonnerToast.error(message, options),
  info: (message: string, options = {}) => sonnerToast(message, { ...options, icon: 'ℹ️' }),
  warning: (message: string, options = {}) => sonnerToast.warning(message, options),
  default: (message: string, options = {}) => sonnerToast(message, options),
};

export function useToast() {
  const showToast = (type: ToastType, message: string, options = {}) => {
    const toastFn = toast[type] || toast.default;
    toastFn(message, options);
  };

  return { showToast };
}

export { sonnerToast as toast };
