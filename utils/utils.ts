type DeviceData = {
    name: string,
    url: string,
    info: string,
    commands: string[]
}

type CommandData = {
    name:string,
    info:string,
}
type ReceivedDeviceInfo = {
    type:"boolean"|"number"|"string"
    commands:CommandData[],
    info:string,
    ip:string
}
type DeviceSelectorModalProps = {
    setSelectedDevice: (device: DeviceData) => void,
    modalState: boolean,
    setModalState: (state:boolean) => void
}

type CommandListProps = {
    list: CommandData[];
    urlInput: string;
};

type URLInputProps = {
    setCommands: Function;
    inputHandler: (text: string) => void;
    urlValue: string;
};