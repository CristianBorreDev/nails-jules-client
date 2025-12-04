// src/types/index.ts
export interface Service {
  id: number;
  name: string;
  description?: string;
  duration: number; // minutos
  price: number;
  category?: string;
}

export interface Schedule {
  day: string;
  availableHours: string[];
  isAvailable: boolean;
}

export interface AppointmentRequest {
  clientName: string;
  phone: string;
  email?: string;
  serviceId: number;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface AppointmentResponse {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  appointmentDate: string;
  confirmationCode: string;
}