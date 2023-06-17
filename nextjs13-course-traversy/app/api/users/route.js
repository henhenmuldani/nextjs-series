import { NextResponse } from "next/server";
import users from "./data.json";
import { v4 as uuidv4 } from "uuid";

export async function GET(request) {
  return NextResponse.json(users);
}

//npm i uuid
// "id": 1,
// "name": "cerulean",
// "year": 2000,
// "color": "#98B2D1",
// "pantone_value": "15-4020"
export async function POST(request) {
  const { id, name, year, color, pantone_value } = await request.json();
  const newUser = { id: uuidv4(), name, year, color, pantone_value };
  users.push(newUser);
  return NextResponse.json(users);

  // const user = await request.body.json();
  // user.id = uuid();
  // users.push(user);
  // return NextResponse.redirect("/api/users");
}
