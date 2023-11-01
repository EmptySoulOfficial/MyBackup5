const defaultData =
{
  id: "new-item",
  name: "",
  date: "New",
  icon: "folder",
  files: [
          {id: 1, type: "folder", from: "C:/MyData", to: "E:/"},
          {id: 2, type: "file", from: "C:/MyData/test.jpg", to: "E:/"}
        ],
  size: "--"
}

export const newBackupItem = () => defaultData
