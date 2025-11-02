import { useMemo } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";

const labelStyle = {
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "rgba(30, 49, 79, 0.72)"
};

const valueStyle = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "#1e314f"
};

const listItems = [
  { id: "origin", label: "مبـدا", value: "تهران، پایانه باربری جنوب" },
  { id: "destination", label: "مقصد", value: "اصفهان، شهرک صنعتی امیرکبیر" },
  { id: "vehicleType", label: "نوع ماشین", value: "تریلی چادری" },
  { id: "cargoType", label: "نوع بار", value: "پالت مواد غذایی" },
  { id: "tonnage", label: "تناژ", value: "23 تُن" },
  { id: "quantity", label: "تعداد", value: "126 پالت" },
  { id: "fare", label: "کرایه", value: "2,750,000 تومان" },
  { id: "notes", label: "توضیحات", value: "بارگیری با لیفتراک، تحویل روزانه تا ساعت 18" }
];

const loadStatus = {
  id: "loadStatus",
  label: "بارگیری شد",
  value: "بله"
};

export default function LoadCard() {
  const now = useMemo(() => new Date(), []);

  const formattedDate = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("fa-IR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return formatter.format(now);
  }, [now]);

  const formattedTime = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("fa-IR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return formatter.format(now);
  }, [now]);

  return (
    <Card
      sx={{
        maxWidth: 720,
        width: "100%",
        mx: "auto",
        px: { xs: 2.5, sm: 3.5 },
        py: { xs: 3, sm: 4 },
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundImage: "linear-gradient(165deg, #ffffff 0%, #f9f5fb 100%)",
        border: "1px solid rgba(110, 48, 85, 0.08)"
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 2.5 }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: "18px",
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgba(110, 48, 85, 0.12)",
                color: "primary.main"
              }}
            >
              <LocalShippingRoundedIcon fontSize="medium" />
            </Box>
            <Box>
              <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mb: 0.5 }}>
                کارت حمل بار
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={0.5} sx={{ textAlign: { xs: "left", sm: "right" } }}>
            <Typography sx={{ ...labelStyle, color: "rgba(110, 48, 85, 0.8)" }}>تاریخ بروزرسانی</Typography>
            <Typography sx={{ fontWeight: 700, color: "primary.main" }}>{formattedDate}</Typography>
            <Typography sx={{ fontWeight: 600, color: "rgba(30, 49, 79, 0.72)" }}>{formattedTime}</Typography>
          </Stack>
        </Stack>

        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
          {listItems.slice(0, 6).map(({ id, label, value }) => (
            <Grid key={id} item xs={12} sm={6}>
              <Stack spacing={0.75}>
                <Typography sx={labelStyle}>{label}</Typography>
                <Typography sx={valueStyle}>{value}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: { xs: 2.5, sm: 3 } }} />

        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
          {listItems.slice(6).map(({ id, label, value }) => (
            <Grid key={id} item xs={12} sm={6}>
              <Stack spacing={0.75}>
                <Typography sx={labelStyle}>{label}</Typography>
                <Typography sx={{ ...valueStyle, whiteSpace: "pre-line" }}>{value}</Typography>
              </Stack>
            </Grid>
          ))}
          <Grid item xs={12} sm={6}>
            <Stack spacing={0.75}>
              <Typography sx={labelStyle}>{loadStatus.label}</Typography>
              <Chip
                label={loadStatus.value}
                color="primary"
                sx={{
                  alignSelf: "flex-start",
                  px: 1.5,
                  py: 0.5,
                  fontWeight: 700,
                  borderRadius: "12px"
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions
        sx={{
          p: 0,
          pt: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1.5, sm: 2 },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "flex-end"
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<UpdateRoundedIcon />}
          sx={{
            minWidth: { xs: "100%", sm: 180 },
            boxShadow: "0 12px 24px rgba(110, 48, 85, 0.32)"
          }}
        >
          بروزرسانی بار
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          startIcon={<ShareRoundedIcon />}
          sx={{
            minWidth: { xs: "100%", sm: 160 },
            fontWeight: 700,
            borderWidth: 2
          }}
        >
          اشتراک‌گذاری
        </Button>
      </CardActions>
    </Card>
  );
}
