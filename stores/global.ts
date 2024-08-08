import { getPantipData } from "~/lib/data";
import type { DataState } from "~/lib/schema";

type State = DataState;

export const useStore = defineStore("global", {
  state: (): State => ({
    rooms: [],
    highlights: [],
    topPosts: [],
  }),
  actions: {
    async fetchHomePageData() {
      const pantipData = await getPantipData();
      this.rooms = pantipData.rooms;
      this.highlights = pantipData.highlights;
      this.topPosts = pantipData.topPosts;
    },
  },
});
