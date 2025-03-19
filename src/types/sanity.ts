export interface Service {
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    order: number;
  }
  
  export interface ClientLogo {
    _id: string;
    name: string;
    logoUrl: string;
    height?: string;
  }
  
  export interface ClientMetric {
    _id: string;
    label: string;
    value: number;
  }