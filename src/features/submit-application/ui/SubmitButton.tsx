interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export function SubmitButton({ disabled, onClick }: SubmitButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      Оставить заявку
    </button>
  );
}
