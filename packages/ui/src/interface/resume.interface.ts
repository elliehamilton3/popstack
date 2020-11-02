export interface Education {
  place: string;
  yearFrom: number;
  yearTo: number;
  info: string;
}

export interface Employment {
  company: string;
  title: string;
  location: string;
  description: string;
  dateFrom: Date | null;
  dateTo: Date | null;
}

export interface Resume {
  resume: {
    bio: string;
    title: string;
    location: string;
  };
  educations: Education[];
  jobs: Employment[];
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
  };
}
export interface ResumeListItem {
  id: string;
  type: "Cover Letter" | "Resume";
  title: string;
}
