import { defineStore } from "pinia";
import { initMyWebSocket } from "@/utils/webSocket/index";
interface MyWSType {
    wsInstance: WebSocket | null
}
export const useWsStore = defineStore("usePlanStore", {
    state: (): MyWSType => {
        return {
            wsInstance: null
        };
    },
    actions: {
        initWs() {
            if (!this.wsInstance) {
                this.wsInstance = initMyWebSocket()
            }
        },
        closeWebSocket() {
            if (this.wsInstance) {
                this.wsInstance.close();
            }
        }
    },
    getters: {},
    persist: true, // 持久化
});