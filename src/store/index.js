import useMusicDataStore from "./musicData"
import useSettingDataStore from "./settingData"

export const settingStore = () => useSettingDataStore()

export const musicStore = () => useMusicDataStore()