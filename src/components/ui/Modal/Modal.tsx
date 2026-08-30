"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { CloseIcon } from "@/components/ui/icons";

interface ModalProps {
  onClose: () => void;
  label: string;
  className?: string;
  children: ReactNode;
}

const EXIT_MS = 200;

export function Modal({ onClose, label, className, children }: ModalProps) {
  const [closing, setClosing] = useState(false);

  const requestClose = useCallback(() => setClosing(true), []);

  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(onClose, EXIT_MS);
    return () => clearTimeout(timer);
  }, [closing, onClose]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [requestClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      data-closing={closing ? "" : undefined}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={requestClose}
        className="modal-backdrop absolute inset-0 cursor-default bg-letmor-navy-deep/80 backdrop-blur-md"
      />

      <div
        className={cn(
          "modal-panel relative z-10 flex max-h-full w-full max-w-[46rem] flex-col overflow-hidden rounded-[clamp(1rem,2.2vw,1.75rem)] bg-letmor-cream-light shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.55)]",
          className,
        )}
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={requestClose}
          className="absolute right-3 top-3 z-20 flex size-9 cursor-pointer items-center justify-center rounded-full bg-letmor-cream-light/80 text-letmor-navy backdrop-blur-sm transition-colors hover:bg-letmor-navy/10 sm:right-4 sm:top-4"
        >
          <CloseIcon className="size-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain p-[clamp(1.1rem,2.6vw,1.85rem)]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
