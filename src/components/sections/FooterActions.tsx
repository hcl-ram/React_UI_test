import { Button } from "@/components/ui/Button";

interface FooterActionsProps {
  onSave: () => void;
  onCancel: () => void;
  saving?: boolean;
}

export function FooterActions({ onSave, onCancel, saving }: FooterActionsProps) {
  return (
    <footer className="bg-white border-t border-[#e5e5e5] px-4 py-4 flex flex-col sm:flex-row justify-center gap-3">
      <Button
        variant="primary"
        onClick={onSave}
        disabled={saving}
        aria-label="Save changes"
      >
        {saving ? "Saving..." : "Save"}
      </Button>
      <Button
        variant="secondary"
        onClick={onCancel}
        disabled={saving}
        aria-label="Cancel changes"
      >
        Cancel
      </Button>
    </footer>
  );
}
