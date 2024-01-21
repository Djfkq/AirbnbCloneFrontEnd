import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  //ThemeConfig : 자동완성 기능 사용 가능
  initialColorMode: "light",  //localStorage에 값 저장됨
  useSystemColorMode: false, //시스템 테마를 따를것인가?
};

const theme = extendTheme({ config });

export default theme;
