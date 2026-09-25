export interface Alias {
  id: string;
  last: string;
  first: string;
  middle: string;
  suffix: string;
  isEditing?: boolean;
  isNew?: boolean;
}

export interface Patient {
  id: string;
  name: string;
  aliases: Alias[];
}

export type AliasFieldKey = "last" | "first" | "middle" | "suffix";
