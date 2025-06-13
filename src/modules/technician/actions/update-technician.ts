import { techApi } from "@/api/HomeTechApi";

export async function updateTechnician(profileData: any) {
  const {data} = await techApi.post('/technician/profile', profileData);
  return data;
}

