import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const SECRET_CODE = "100 problems";

export const SecretInput = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === SECRET_CODE) {
      navigate("/hb");
    } else {
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        className="text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors duration-500"
        aria-label="Secret"
      >
        <Lock size={14} />
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, 30))}
        onBlur={() => {
          if (!value) setOpen(false);
        }}
        placeholder="•••"
        maxLength={30}
        className={`w-28 bg-transparent border-b border-border/50 text-sm text-muted-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/40 transition-all duration-300 py-1 ${
          shake ? "animate-[shake_0.3s_ease-in-out]" : ""
        }`}
      />
    </form>
  );
};
