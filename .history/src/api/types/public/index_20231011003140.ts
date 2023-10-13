/**
 * 后端的逻辑删除自动生成字段, 前端只需要在获取list的接口里, item的类型继承这个接口即可，
 * 新增item不需要传这些字段
 */
export interface TombstoneGeneratedFields {
    gmtCreate: string,
    gmtModified: string,
    createBy: number,
    updateBy: number,
    isDeleted: number,
    id: string | number
}


export interface pageParams {
    key?: string
    page?: number
    pageNumber?: number
    pageSize: number
}