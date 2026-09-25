import type { Patient } from "@/types";

export const mockPatient: Patient = {
  id: "p-001",
  name: "Steinberg, Fred",
  aliases: [
    {
      id: "a-001",
      last: "Steinberg",
      first: "Freddy",
      middle: "J",
      suffix: "JR",
    },
  ],
};
