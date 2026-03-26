import postgres from "postgres";
import { EventType } from "./types";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchPastEvents() {
  try {
    const data = await sql<EventType[]>`
            SELECT E.id, E.start_time, E.end_time, E.description, E.location_id, L.name AS location_name, L.address, L.map_embed_src
            FROM events E
            INNER JOIN locations L
            ON E.location_id = L.id
            WHERE E.end_time < NOW()
            ORDER BY E.start_time DESC;
        `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch event data.");
  }
}

export async function fetchUpcomingEvents() {
  try {
    const data = await sql<EventType[]>`
            SELECT E.id, E.start_time, E.end_time, E.description, E.location_id, L.name AS location_name, L.address, L.map_embed_src
            FROM events E
            INNER JOIN locations L
            ON E.location_id = L.id
            WHERE E.end_time > NOW()
            ORDER BY E.start_time ASC;
        `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch event data.");
  }
}

export async function fetchUpcomingEventsPreview() {
  try {
    const data = await sql<EventType[]>`
            SELECT E.id, E.start_time, E.end_time, E.description, E.location_id, L.name AS location_name, L.address, L.map_embed_src
            FROM events E
            INNER JOIN locations L
            ON E.location_id = L.id
            WHERE E.end_time > NOW()
            ORDER BY E.start_time ASC
            LIMIT 2;
        `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch event data.");
  }
}
