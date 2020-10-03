export interface Resume {
  resume: {
    bio: string;
    title: string;
    location: string;
  };
  educations: {
    place: string;
    yearFrom: number;
    yearTo: number;
    info: string;
  }[];
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
