import { useCallback, useEffect, useState } from "react";
import { patientService } from "@/services/patientService";
import type { Alias, AliasFieldKey, Patient } from "@/types";
import { generateId } from "@/utils/id";

export function usePatientAliases() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await patientService.getPatient();
      if (mounted) {
        setPatient(data);
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const addAlias = useCallback(() => {
    setPatient((prev) => {
      if (!prev) return prev;
      const newAlias: Alias = {
        id: generateId("a"),
        last: "",
        first: "",
        middle: "",
        suffix: "",
        isEditing: true,
        isNew: true,
      };
      return { ...prev, aliases: [...prev.aliases, newAlias] };
    });
  }, []);

  const removeAlias = useCallback((id: string) => {
    setPatient((prev) => {
      if (!prev) return prev;
      return { ...prev, aliases: prev.aliases.filter((a) => a.id !== id) };
    });
  }, []);

  const toggleEditAlias = useCallback((id: string) => {
    setPatient((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        aliases: prev.aliases.map((a) =>
          a.id === id ? { ...a, isEditing: !a.isEditing, isNew: false } : a
        ),
      };
    });
  }, []);

  const updateAliasField = useCallback(
    (id: string, field: AliasFieldKey, value: string) => {
      setPatient((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          aliases: prev.aliases.map((a) =>
            a.id === id ? { ...a, [field]: value } : a
          ),
        };
      });
    },
    []
  );

  const transferAlias = useCallback((id: string) => {
    setPatient((prev) => {
      if (!prev) return prev;
      const alias = prev.aliases.find((a) => a.id === id);
      if (!alias) return prev;

      const aliasDisplay = [alias.last, alias.first].filter(Boolean).join(", ");
      const [prevLast = "", prevFirst = ""] = prev.name
        .split(",")
        .map((s) => s.trim());

      const swappedAlias: Alias = {
        ...alias,
        last: prevLast,
        first: prevFirst,
        middle: "",
        suffix: "",
        isEditing: false,
        isNew: false,
      };

      return {
        ...prev,
        name: aliasDisplay || prev.name,
        aliases: prev.aliases.map((a) => (a.id === id ? swappedAlias : a)),
      };
    });
  }, []);

  const save = useCallback(async () => {
    if (!patient) return;
    setSaving(true);
    try {
      const cleaned: Patient = {
        ...patient,
        aliases: patient.aliases.map(({ isEditing, isNew, ...rest }) => rest),
      };
      await patientService.savePatient(cleaned);
      setPatient(cleaned);
      alert("Patient aliases saved successfully.");
    } finally {
      setSaving(false);
    }
  }, [patient]);

  const cancel = useCallback(async () => {
    setLoading(true);
    const data = await patientService.getPatient();
    setPatient(data);
    setLoading(false);
  }, []);

  return {
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
  };
}
