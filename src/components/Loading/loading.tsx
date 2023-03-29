import { Backdrop, CircularProgress } from "@mui/material";

interface ILoading {
  loading: boolean;
}

const Loading: React.FC<ILoading> = ({ loading }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme: any) => theme.zIndex.drawer + 10000,
      }}
      open={loading}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default Loading;
