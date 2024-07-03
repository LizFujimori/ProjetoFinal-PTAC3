import { NextResponse } from "next/server";

export const listaDeSeries = [
    {
        id: 1,
        titulo: "Bad Buddy",
        diretor: "aof",
        estreia: 1954,
        genero: "Fantasia"
    },
    {
        id: 2,
        titulo: "1984",
        diretor: "George Orwell",
        estreia: 1949,
        genero: "Distopia"
    }
];

export async function GET(){
    return NextResponse.json(listaDeSeries)
}