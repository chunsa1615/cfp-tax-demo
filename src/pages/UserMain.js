import { Box, Container, Divider, Link, Stack } from "@mui/material";
import { UserRegistered, UserUnRegistered } from "../components";

import MainTitle from "../components/MainTitle";
import React from "react";
import { useRecoilValue } from "recoil";
import { userStates } from "../states";

export default function UserMain() {
  const user = useRecoilValue(userStates);

  return (
    <Container sx={{ textAlign: "center" }}>
      <Stack spacing={2}>
        <MainTitle />
        {user.id ? <UserRegistered /> : <UserUnRegistered />}
        <Divider />
        <Box>
          <Link href="#">크몽에서 결제하기</Link>
        </Box>
      </Stack>
    </Container>
  );
}
