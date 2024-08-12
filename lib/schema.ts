import { z } from "zod";

export const Room = z.object({
  id: z.number(),
  name: z.string(),
  link_url: z.string(),
  room_icon_url: z.string(),
});
export type Room = z.infer<typeof Room>;

export const Highlight = z.object({
  id: z.number().default(Math.random),
  name: z.string(),
  image_url: z.array(z.string()),
  post_url: z.string(),
});
export type Highlight = z.infer<typeof Highlight>;

export const Post = z.object({
  topic_id: z.number(),
  title: z.string(),
  created_time: z.string(),
  thumbnail_url: z.string().optional(),
  comments_count: z.number(),
  votes_count: z.number(),
  author: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});
export type Post = z.infer<typeof Post>;
