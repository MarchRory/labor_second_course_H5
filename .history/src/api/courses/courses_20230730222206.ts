import request from "@/utils/http/request";

interface selectCourseParams {
    title: string | null; // 课程名关键字, 用于输入框搜索
    category?: string | null; // 课程标签关键字, 用于首页按照标签查找
    pageNum: number;
    pageSize: number;
    semesterId: number | null; // 学期id
    userType?: number; // userId
    state: number; // 课程状态,   0->全部,  1->筹备中, 2->报名中， 3->进行中, 4->已结束
    passType?: number; // 查询全部
} // 后面还要补一个semsesterId

interface commentObj {
    score: number; // 自嗨的打分
    courseId: number;
    evaluateText: string;
    anonymous: boolean;
}

interface signInfo {
    courseId: number,
    code: string
}

export default {
    /**
     *
     * @param params 一个对象, 包含查询关键词, 页数, 页容量( 前端设定死, 暂定为15 ), 还应该有一个学期id, 后面后端改了再用
     * @returns
     */
    async getCourses(params: selectCourseParams) {
        params.title = params.title == "" ? null : params.title;
        return await request({
            url: "/curriculum/front/selectCoursePage",
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            params,
        });
    },

    /**
     * 根据id查询课程详情信息
     * @param curriculumId 课程id
     * @returns
     */
    async getCourseDetail(curriculumId: number) {
        return await request({
            url: `/curriculum/detail/front/${curriculumId}`,

            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    },

    async joinCourse(curriculumId: number) {
        return await request({
            url: `/curriculum/join/${curriculumId}`,
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    },

    async comment(data: commentObj) {
        return await request({
            url: '/curriculum/courseEvaluate/',
            method: 'POST',
            data
        })
    },

    async sign(signInfo: signInfo) {
        return await request({
            url: `/curriculum/attendance/code/${signInfo.courseId}/${signInfo.code}`,
            method: 'POST'
        })
    }
}
