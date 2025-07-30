// ./components/CartDrawer.tsx
import { useRef } from "react";
import { X } from "lucide-react";
import { Package } from "./BookConsultation";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Package[];
  onRemoveItem?: (title: string) => void;
}

export function CartDrawer({ isOpen, onClose, items, onRemoveItem }: CartDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <aside
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 z-100 h-full w-80 max-w-full transform bg-card shadow-xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={drawerRef}
      >
        <header className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-bold text-foreground">Your Cart</h2>
          <button
            aria-label="Close cart"
            className="text-foreground hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
        </header>
        <main className="flex grow flex-col p-4 text-muted-foreground">
          {items.length === 0 ? (
            <p className="mt-20 text-center">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.title}
                className="flex justify-between items-center border-b border-border py-2"
              >
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm">
                    {item.duration} | {item.price}
                  </p>
                </div>
                {onRemoveItem && (
                  <button
                    onClick={() => onRemoveItem(item.title)}
                    aria-label={`Remove ${item.title}`}
                    className="text-destructive hover:text-destructive text-lg"
                    type="button"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))
          )}
        </main>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}
