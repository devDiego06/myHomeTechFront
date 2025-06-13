import { techApi } from "@/api/HomeTechApi";
import type { Technician } from "../interfaces/technician";

export const getTechnician = async () => {
  try {
    const {data} = await techApi.get<Technician>('/technicians');

    return data;
  }catch(error){
    console.log(error);

  }
}