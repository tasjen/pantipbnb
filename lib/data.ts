import { z } from "zod";
import { Highlight, Room, Post } from "~/lib/schema";

export const pantipApiHeader = {
  ptauthorize: "Basic dGVzdGVyOnRlc3Rlcg==",
  host: "pantip.com",
  origin: "https://pantip.com",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0",
  // cookie:
  //   'pantip_visitc=shmg1ri756MNIk1tK; freq.5f73e63e47e7040e00000000=1',
  // connection: 'keep-alive',
  // pragma: 'no-cache',
  // priority: 'u=1, i',
  // accept: 'application/json, text/plain, */*',
  // 'cache-control': 'no-cache',
  // 'accept-encoding': 'gzip, deflate, br, zstd',
  // 'accept-language': 'en-US,en;q=0.7',
  // referer: 'https://pantip.com/',
  // 'sec-ch-ua':
  //   '"Not)A;Brand";v="99", "Brave";v="127", "Chromium";v="127"',
  // 'sec-ch-ua-mobile': '?0',
  // 'sec-ch-ua-platform': '"Windows"',
  // 'sec-fetch-dest': 'empty',
  // 'sec-fetch-mode': 'cors',
  // 'sec-fetch-site': 'same-origin',
  // 'sec-gpc': '1',
  // te: 'trailers',
};

export async function getRecommendedRooms(): Promise<Room[]> {
  const resBody = await $fetch<any>(
    "https://pantip.com/api/forum-service/home/get_room_recommend",
    { headers: pantipApiHeader }
  );
  const rooms = z.array(Room).parse(resBody?.data);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return rooms;
}

export async function getPantipHighlights(): Promise<Highlight[]> {
  const resBody = await $fetch<any>(
    "https://pantip.com/api/forum-service/home/get_highlight",
    { headers: pantipApiHeader }
  );
  const highlights = z.array(Highlight).parse(resBody?.data);
  return highlights;
}

export async function getPantipRealtime(): Promise<Post[]> {
  const resBody = await $fetch<any>(
    "https://pantip.com/api/forum-service/home/get_pantip_realtime",
    { headers: pantipApiHeader }
  );
  const posts = z.array(Post).parse(resBody?.data);
  return posts;
}

export async function getPantipPick(): Promise<Post[]> {
  const resBody = await $fetch<any>(
    "https://pantip.com/api/forum-service/home/get_pantip_pick?limit=20",
    { headers: pantipApiHeader }
  );
  const posts = z.array(Post).parse(resBody?.data);
  return posts;
}

export async function getPantipHitz(): Promise<Post[]> {
  const resBody = await $fetch<any>(
    "https://pantip.com/api/forum-service/home/get_pantip_now?limit=20",
    { headers: pantipApiHeader }
  );
  const posts = z.array(Post).parse(resBody?.data);
  return posts;
}

export async function getRecommendedTopicsByRoom(
  roomName: string
): Promise<Post[]> {
  const resBody = await $fetch<any>(
    `https://pantip.com/api/forum-service/forum/room_topic_recommend?room=${roomName}`,
    { headers: pantipApiHeader }
  );
  const posts = z.array(Post).parse(resBody?.data);
  // await new Promise((resolve) => setTimeout(resolve, 50000));
  return posts;
}

export async function getTrendingTopicsByRoom(
  roomName: string
): Promise<Post[]> {
  const resBody = await $fetch<any>(
    `https://pantip.com/api/forum-service/forum/room_topic_trend?room=${roomName}`,
    { headers: pantipApiHeader }
  );
  const posts = z.array(Post).parse(resBody?.data);
  return posts;
}

export async function getLatestTopicsByRoom(
  roomName: string,
  limit: number,
  nextId?: number
): Promise<{ posts: Post[]; newNextId: number }> {
  const resBody = await $fetch<any>(
    `https://pantip.com/api/forum-service/forum/room_topic?room=${roomName}&limit=${limit}${
      nextId ? `&next_id=${nextId}` : ""
    }`,
    { headers: pantipApiHeader }
  );
  const posts = z.array(Post).parse(resBody?.data);
  const newNextId = z.number().parse(resBody?.next_id);
  return { posts, newNextId };
}

/* native 'fetch' version
export async function getRecommendedRooms(): Promise<Room[]> {
  const res = await fetch(
    "https://pantip.com/api/forum-service/home/get_room_recommend",
    { headers: pantipApiHeader }
  );
  const data = await res.json();
  const rooms = z.array(Room).parse(data?.data);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return rooms;
}

export async function getPantipHighlights(): Promise<Highlight[]> {
  const res = await fetch(
    "https://pantip.com/api/forum-service/home/get_highlight",
    { headers: pantipApiHeader }
  );
  const data = await res.json();
  const highlights = z.array(Highlight).parse(data?.data);
  return highlights;
}

export async function getPantipRealtime(): Promise<Post[]> {
  const res = await fetch(
    "https://pantip.com/api/forum-service/home/get_pantip_realtime",
    { headers: pantipApiHeader }
  );
  const data = await res.json();
  const rooms = z
    .array(Post)
    .parse(
      data?.data
        ?.filter((e: any) => !e.ads)
        .map((e: any) => ({ ...e, type: "realtime" }))
    );
  return rooms;
}

export async function getPantipPick(): Promise<Post[]> {
  const res = await fetch(
    "https://pantip.com/api/forum-service/home/get_pantip_pick?limit=20",
    { headers: pantipApiHeader }
  );
  const data = await res.json();
  const rooms = z
    .array(Post)
    .parse(
      data?.data
        ?.filter((e: any) => !e.ads)
        .map((e: any) => ({ ...e, type: "pick" }))
    );
  return rooms;
}

export async function getPantipHitz(): Promise<Post[]> {
  const res = await fetch(
    "https://pantip.com/api/forum-service/home/get_pantip_now?limit=20",
    { headers: pantipApiHeader }
  );
  const data = await res.json();
  const rooms = z
    .array(Post)
    .parse(
      data?.data
        ?.filter((e: any) => !e.ads)
        .map((e: any) => ({ ...e, type: "hitz" }))
    );
  return rooms;
}
*/

// deprecated: get homepage data from html string
// async function getPantipHomePageData(): Promise<Omit<DataState, "highlights">> {
//   const resBody = await $fetch<string>("https://pantip.com");
//   if (!resBody) throw new Error("no text response from pantip.com");
//   const dataTag = `<script id="__NEXT_DATA__" type="application/json">`;
//   const startIndex = resBody.indexOf(dataTag) + dataTag.length;
//   const endIndex = resBody.indexOf("</script>", startIndex);

//   // data in "__NEXT_DATA__"
//   const data = JSON.parse(resBody.slice(startIndex, endIndex));

//   // extract rooms
//   const rooms = z
//     .array(Room)
//     .parse(data?.props?.initialState?.header?.roomLists);

//   // extract realtimes
//   const realtimes = z
//     .array(Post)
//     .parse(
//       data?.props?.initialProps?.pageProps?.realtime?.data
//         ?.filter((e: any) => !e.ads)
//         .map((e: any) => ({ ...e, type: "realtime" }))
//     );

//   // extract pick
//   const picks = z
//     .array(Post)
//     .parse(
//       data?.props?.initialProps?.pageProps?.pick?.data
//         ?.filter((e: any) => !e.ads)
//         .map((e: any) => ({ ...e, type: "pick" }))
//     );

//   // extract hitz
//   const hitzs = z
//     .array(Post)
//     .parse(
//       data?.props?.initialProps?.pageProps?.hitz?.data
//         ?.filter((e: any) => !e.ads)
//         .map((e: any) => ({ ...e, type: "hitz" }))
//     );

//   return { rooms, Posts: [...realtimes, ...picks, ...hitzs] };
// }

// export async function getPantipData(): Promise<DataState> {
//   const [highlights, homepageData] = await Promise.all([
//     getPantipHighlights(),
//     getPantipHomePageData(),
//   ]);
//   return { highlights, ...homepageData };
// }
