import { techApi } from "@/api/HomeTechApi";
import type { Technician } from "../interfaces/technician";

export interface UpdateTechnicianData {
  name: string;
  email: string;
  phone: string;
  address: string;
  biography: string;
  specialization: string;
}

export async function updateTechnician(profileData: UpdateTechnicianData) {
  try {
    const { data } = await techApi.put<Technician>('/technician/profile', profileData);
    return data;
  } catch (error) {
    console.error('Error updating technician profile:', error);
    throw new Error('Error al actualizar el perfil del técnico');
  }
}

