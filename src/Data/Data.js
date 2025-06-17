import {
    UilEstate,
    //UilClipboardAlt,
   // UilUsersAlt,
   // UilPackage,
   // UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons";
import { click } from "@testing-library/user-event/dist/click";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },

];

export const CardsData =[
  {
    title: "Tempo de Serviço",
    color: {
        backGround: "rgba(47, 157, 131, 0.66)",
        clickGround: "rgba(12, 110, 88, 0.73)",
        boxShadow: "0px 10px 20px 0pxrgb(115, 179, 136)"
    },
    barValue: "Trabalhados como ser. da pmio!",
    value: "4.290",
    series: [
      {
        name: "Tempo de Serviço",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
   {
    title: "Férias vencidas",
    color: {
       backGround: "rgba(47, 157, 131, 0.66)",
        clickGround: "rgba(12, 110, 88, 0.73)",
        boxShadow: "0px 10px 20px 0pxrgb(115, 179, 136)"
    },
    barValue: "Faltam 90 dias para as próximas férias!",
    value: "2",
    series: [
      {
        name: "Férias vencidas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
   {
    title: "Licença Prêmio",
    color: {
       backGround: "rgba(47, 157, 131, 0.66)",
        clickGround: "rgba(12, 110, 88, 0.73)",
        boxShadow: "0px 10px 20px 0pxrgb(115, 179, 136)"
    },
    barValue: "Faltam 367 dias para as próxima  Licença Prêmio!",
    value: "5",
    series: [
      {
        name: "Licença Prêmio",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Próximo pagamento",
    color: {
       backGround: "rgba(47, 157, 131, 0.66)",
        clickGround: "rgba(12, 110, 88, 0.73)",
        boxShadow: "0px 10px 20px 0pxrgb(115, 179, 136)"
    },
    barValue: "Para o próximo pagamento!",
    value: "10",
    series: [
      {
        name: "Próximo pagamento",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
]