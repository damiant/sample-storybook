import {
  SnackbarProvider,
  useSnackbar,
  SnackbarProviderProps,
  ProviderContext,
} from "notistack";

//Hook - This are use to to handle all type of snackbar which are available in notistack
const useTidingsHook = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const infoTidings: ProviderContext["enqueueSnackbar"] = (message, options) =>
    enqueueSnackbar(message, { variant: "info", ...options });

  const warningTidings: ProviderContext["enqueueSnackbar"] = (
    message,
    options,
  ) => enqueueSnackbar(message, { variant: "warning", ...options });

  const successTidings: ProviderContext["enqueueSnackbar"] = (
    message,
    options,
  ) => enqueueSnackbar(message, { variant: "success", ...options });

  const errorTidings: ProviderContext["enqueueSnackbar"] = (message, options) =>
    enqueueSnackbar(message, { variant: "error", ...options });

  const defaultTidings: ProviderContext["enqueueSnackbar"] = (
    message,
    options,
  ) => enqueueSnackbar(message, { variant: "default", ...options });

  const closeTidings: ProviderContext["closeSnackbar"] = (key) =>
    closeSnackbar(key);

  return {
    infoTidings,
    warningTidings,
    successTidings,
    errorTidings,
    defaultTidings,
    closeTidings,
  };
};

//Provider - It bind the child where we have to show snackbar
const TidingsProvider = (Props: SnackbarProviderProps) => {
  return <SnackbarProvider {...Props} />;
};

export { useTidingsHook, TidingsProvider };
