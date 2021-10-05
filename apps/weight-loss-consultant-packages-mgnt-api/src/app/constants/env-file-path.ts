export const ENV_FILE_PATH = (() : string => {
  if (process.cwd().includes("dist")){
    return "./assets/.env"
  }
  return "./apps/weight-loss-consultant-packages-mgnt-api/src/assets/.env"
})();