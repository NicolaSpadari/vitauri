import type { Options } from "@tauri-apps/api/notification";

const useNotification = async (options: Options): Promise<string> => {
    try {
        if (await isPermissionGranted()) {
            sendNotification(options);
            return "success";
        } else {
            if (await requestPermission()) {
                await useNotification(options);
            }
            return "error";
        }
    } catch (e) {
        console.error(e);
        return "error";
    }
};

export default useNotification;
export { useNotification };
