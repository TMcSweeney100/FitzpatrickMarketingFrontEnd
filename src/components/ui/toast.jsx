import React, { useCallback, useMemo, useState } from "react";
import { X } from "lucide-react";
import { ToastContext } from "./use-toast";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => {
      const toast = prev.find((item) => item.id === id);
      if (toast?.timer) {
        clearTimeout(toast.timer);
      }
      return prev.filter((item) => item.id !== id);
    });
  }, []);

  const toast = useCallback(
    ({ title, description, duration = 4000 }) => {
      const id = `toast-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const timer =
        typeof window !== "undefined"
          ? window.setTimeout(() => removeToast(id), duration)
          : undefined;

      setToasts((prev) => [...prev, { id, title, description, timer }]);

      return { id };
    },
    [removeToast],
  );

  const contextValue = useMemo(
    () => ({ toast, dismiss: removeToast }),
    [toast, removeToast],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex flex-col items-center gap-3 px-4 sm:items-end sm:px-6">
        {toasts.map((item) => (
          <div
            key={item.id}
            className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl border border-border bg-background/95 shadow-lg ring-1 ring-black/5 backdrop-blur transition-all"
          >
            <div className="flex items-start gap-3 p-4">
              <div className="flex-1 space-y-1">
                {item.title ? (
                  <p className="text-sm font-semibold leading-tight">
                    {item.title}
                  </p>
                ) : null}
                {item.description ? (
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                aria-label="Dismiss toast"
                onClick={() => removeToast(item.id)}
                className="rounded-md p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
