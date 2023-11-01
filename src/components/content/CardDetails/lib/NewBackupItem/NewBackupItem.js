const defaultData =
{
  id: "new-item",
  name: "",
  date: "New",
  icon: "folder",
  files: [
          {id: 1, type: "folder", from: "C:/MyData", to: "E:/"},
        ],
  size: "--"
}

export const newBackupItem = () => defaultData
