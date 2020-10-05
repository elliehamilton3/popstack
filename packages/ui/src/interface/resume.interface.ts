export interface Education {
  place: string;
  yearFrom: number;
  yearTo: number;
  info: string;
}

export interface Resume {
  resume: {
    bio: string;
    title: string;
    location: string;
  };
  educations: Education[];
  jobs: {
    company: string;
    title: string;
    location: string;
    description: string;
    dateFrom: Date;
    dateTo: Date;
  }[];
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
}
