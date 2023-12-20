type Project = {
  _id: number;
  projectId: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  languages?: string[];
  side?: string[];
  stack?: string[];
  styles?: string[];
  componentLibraries?: string[];
  frameworks?: string[];
  hooks?: string[];
  functionalities?: string[];
  startDate?: Date;
  endDate?: Date;
  status: "Active" | "Completed" | "On Hold";
  website?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type { Project };
