import type { Options } from "@tauri-apps/api/notification";

export default async function useNotification(options: Options): Promise<string> {
    if (await isPermissionGranted()) {
        sendNotification(options);
        return "success";
    } else {
        if (await requestPermission()) {
            useNotification(options);
        }
    }

    return "error";
}
