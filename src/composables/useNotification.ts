import type { Options } from "@tauri-apps/api/notification";

const useNotification = async (options: Options): Promise<string> => {
    if (await isPermissionGranted()) {
        sendNotification(options);
        return "success";
    } else {
        if (await requestPermission()) {
            useNotification(options);
        }
    }

    return "error";
};

export default useNotification;
export { useNotification };
