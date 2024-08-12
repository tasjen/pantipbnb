type State = {
  isAtTop: boolean;
};

export const useStore = defineStore("global", {
  state: (): State => ({
    isAtTop: true,
  }),
});
