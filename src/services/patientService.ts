import { mockPatient } from "@/data/mockPatient";
import type { Patient } from "@/types";

/**
 * Mock service - in a real app this would call an API.
 */
export const patientService = {
  async getPatient(): Promise<Patient> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(structuredClone(mockPatient)), 100);
    });
  },

  async savePatient(patient: Patient): Promise<Patient> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("Saved patient:", patient);
        resolve(patient);
      }, 200);
    });
  },
};
