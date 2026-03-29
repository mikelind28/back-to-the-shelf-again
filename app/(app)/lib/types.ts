import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type EventType = {
  id: string;
  start_time: Date;
  end_time: Date;
  description?: SerializedEditorState;
  location_id: string;
  location_name: string;
  address: string;
  map_embed_src?: string;
};
