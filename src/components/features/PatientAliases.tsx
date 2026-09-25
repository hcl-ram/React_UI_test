import { Plus } from "lucide-react";
import { PanelHeader } from "@/components/sections/PanelHeader";
import { FooterActions } from "@/components/sections/FooterActions";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { IconButton } from "@/components/ui/IconButton";
import { AliasesTable } from "./AliasesTable";
import { usePatientAliases } from "@/hooks/usePatientAliases";
import { SCREEN_TITLE } from "@/constants/app";

export function PatientAliases() {
  const {
    patient,
    loading,
    saving,
    addAlias,
    removeAlias,
    toggleEditAlias,
    updateAliasField,
    transferAlias,
    save,
    cancel,
  } = usePatientAliases();

  if (loading || !patient) {
    return (
      <Card className="max-w-5xl mx-auto">
        <PanelHeader title={SCREEN_TITLE} />
        <div className="p-8 text-center text-sm text-gray-500">Loading...</div>
      </Card>
    );
  }

  return (
    <Card className="max-w-5xl mx-auto">
      <PanelHeader title={SCREEN_TITLE} />

      <div className="p-4 space-y-4 bg-panelBg">
        <div>
          <Label htmlFor="patientName">Patient Name</Label>
          <Input
            id="patientName"
            name="patientName"
            type="text"
            value={patient.name}
            readOnly
          />
        </div>

        <section
          className="border border-borderGray rounded-md bg-subPanelBg"
          aria-labelledby="aliases-heading"
        >
          <div className="flex items-center justify-between px-4 py-2.5">
            <h3
              id="aliases-heading"
              className="text-sm font-bold text-textPrimary m-0"
            >
              Aliases
            </h3>
            <IconButton
              tone="success"
              icon={<Plus size={16} />}
              label="Add new alias"
              onClick={addAlias}
            />
          </div>

          <div className="border-t border-borderGray">
            <AliasesTable
              aliases={patient.aliases}
              onEditToggle={toggleEditAlias}
              onDelete={removeAlias}
              onTransfer={transferAlias}
              onFieldChange={updateAliasField}
            />
          </div>
        </section>
      </div>

      <FooterActions onSave={save} onCancel={cancel} saving={saving} />
    </Card>
  );
}
