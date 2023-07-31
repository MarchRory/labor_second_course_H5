import request from '@/utils/http/request'
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()

export default {
    async getUserObjects() {
        return await request({
            url: `/curriculum/front/page?pageNum=1&pageSize=100&semesterId=${userStore.semesterId}&userType=0`,
            method: "GET"
        })
    },

    async getObjDetail(objId: number) {
        return await request({
            url: `/curriculum/details/${objId}`,
            method: 'GET'
        })
    },


    /**
     * 
     * @param objId 
     * @returns data.list -> 选定目标下的课程列表, data.total -> 选定课程目标下课程的总数
     */
    async getObjCourses(objId: number) {
        return await request({
            url: `/curriculum/item/page/${objId}?pageNum=1&pageSize=50`,
            method: "GET"
        })
    }
}