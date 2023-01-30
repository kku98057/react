export async function uploadImage(file) {
  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json)
    .then((data) => data.url);
}
