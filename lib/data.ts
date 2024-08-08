import { z } from "zod";
import { Highlight, Room, TopPost, type DataState } from "~/lib/schema";

const pantipApiHeader = {
  ptauthorize: "Basic dGVzdGVyOnRlc3Rlcg==",
  // cookie:
  //   'pantip_visitc=shmg1ri756MNIk1tK; freq.5f73e63e47e7040e00000000=1',
  // connection: 'keep-alive',
  // host: 'pantip.com',
  // pragma: 'no-cache',
  // priority: 'u=1, i',
  // origin: 'https://pantip.com',
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
  // 'user-agent':
  //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
};

async function getPantipHighlights(): Promise<Highlight[]> {
  const resBody = await $fetch<any>(
    "https://pantip.com/api/forum-service/home/get_highlight",
    { headers: pantipApiHeader },
  );
  const highlights = z.array(Highlight).parse(resBody?.data);
  return highlights;
}

async function getPantipHomePageData(): Promise<Omit<DataState, "highlights">> {
  const resBody = await $fetch<string>("https://pantip.com");
  if (!resBody) throw new Error("no text response from pantip.com");
  const dataTag = `<script id="__NEXT_DATA__" type="application/json">`;
  const startIndex = resBody.indexOf(dataTag) + dataTag.length;
  const endIndex = resBody.indexOf("</script>", startIndex);

  // data in "__NEXT_DATA__"
  const data = JSON.parse(resBody.slice(startIndex, endIndex));

  // extract rooms
  const rooms = z
    .array(Room)
    .parse(data?.props?.initialState?.header?.roomLists);

  // extract realtimes
  const realtimes = z
    .array(TopPost)
    .parse(
      data?.props?.initialProps?.pageProps?.realtime?.data
        ?.filter((e: any) => !e.ads)
        .map((e: any) => ({ ...e, type: "realtime" })),
    );

  // extract pick
  const picks = z
    .array(TopPost)
    .parse(
      data?.props?.initialProps?.pageProps?.pick?.data
        ?.filter((e: any) => !e.ads)
        .map((e: any) => ({ ...e, type: "pick" })),
    );

  // extract hitz
  const hitzs = z
    .array(TopPost)
    .parse(
      data?.props?.initialProps?.pageProps?.hitz?.data
        ?.filter((e: any) => !e.ads)
        .map((e: any) => ({ ...e, type: "hitz" })),
    );

  return { rooms, topPosts: [...realtimes, ...picks, ...hitzs] };
}

export async function getPantipData(): Promise<DataState> {
  const [highlights, homepageData] = await Promise.all([
    getPantipHighlights(),
    getPantipHomePageData(),
  ]);
  return { highlights, ...homepageData };
}
