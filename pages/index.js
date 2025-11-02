import Head from "next/head";
import { Box, Container } from "@mui/material";
import LoadCard from "../components/LoadCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>کارت بار - نسخه پر شده</title>
        <meta
          name="description"
          content="کارت بار متریال دیزاین برای نمایش اطلاعات مبدا، مقصد، نوع ماشین، نوع بار، تناژ، تعداد، کرایه و توضیحات."
        />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "radial-gradient(circle at 10% 20%, rgba(110, 48, 85, 0.15) 0%, rgba(245, 246, 248, 1) 55%), radial-gradient(circle at 90% 30%, rgba(30, 49, 79, 0.12) 0%, rgba(245, 246, 248, 1) 45%)",
          py: { xs: 6, sm: 8 }
        }}
      >
        <Container maxWidth="md">
          <LoadCard />
        </Container>
      </Box>
    </>
  );
}
