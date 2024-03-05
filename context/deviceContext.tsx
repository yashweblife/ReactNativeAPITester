import { FC, createContext, useState } from "react";


type _DeviceContext = {
    list:DeviceData[],
    addDevice: (device:DeviceData) => void,
    removeDevice: (device:DeviceData) => void,
}


const DeviceContext = createContext<_DeviceContext>({
    list: [],
    addDevice: (device:DeviceData) => {},
    removeDevice: (device:DeviceData) => {}
});

export default function DeviceContextProvider({children}:{children:any}):(FC){
    
    const [deviceList, setDeviceList] = useState([] as DeviceData[])

    const addDevice = (device:DeviceData) => {
        setDeviceList([...deviceList, device])
    }

    const removeDevice = (device:DeviceData) => {
        setDeviceList(deviceList.filter((d) => d.name !== device.name))
    }

    const deviceContext:_DeviceContext = {
        list: deviceList,
        addDevice,
        removeDevice
    }
    
    return (
        <DeviceContext.Provider value={deviceContext}>
        {children}
        </DeviceContext.Provider>
    )
}
export { DeviceContext };

