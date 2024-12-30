import del from "del";
export const reset = () => {
  // console.log("Paths to clean:", app.path.clean);
  return del(app.path.clean);
}