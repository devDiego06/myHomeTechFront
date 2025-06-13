import { techApi } from "@/api/HomeTechApi"
import type { Technician } from "../interfaces/technician"

export const findTechnicianById = async (id: string) => {
  try {
    const { data } = await techApi.get<Technician>(`/technicians/${id}`)

    console.log({data: data});

    return data;



  }catch(error){
    console.log(error);
    throw new Error(`Error al obtener el tecnico con id ${id}`)
  }
}