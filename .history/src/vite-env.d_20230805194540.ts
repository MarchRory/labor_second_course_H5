/// <reference types="vite/client" />
const component: DefineComponent<{}, {}, any>;

// 环境变量配置
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_API_BASE_URL: string;
    readonly VITE_BUILD_SOURCEMAP: string;
    readonly VITE_BUILD_DROP_CONSOLE: string;
    readonly VITE_APP_YIBANBIND_CALLBACK: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}