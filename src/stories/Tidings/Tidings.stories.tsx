import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

//Component
import { IconButton } from "@mui/material";
import { useTidingsHook, TidingsProvider, Button } from "../../Component";

//Icon
import { Delete } from "@mui/icons-material";

//Constants
import { tidingsList } from "./constants";

const meta: Meta<typeof TidingsProvider> = {
  title: "Tidings",
  component: TidingsProvider,
};

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonComponent = ({ buttonText }: { buttonText: string }) => {
  const {
    infoTidings,
    warningTidings,
    successTidings,
    errorTidings,
    defaultTidings,
    closeTidings,
  } = useTidingsHook();
  return (
    <Button
      onClick={() => {
        switch (buttonText) {
          case "Success":
            successTidings("success");
            break;
          case "Error":
            errorTidings("error");
            break;
          case "Info":
            infoTidings("info");
            break;
          case "Warning":
            warningTidings("warning");
            break;
          case "Default":
            defaultTidings("default");
            break;
          case "Close":
            closeTidings();
            break;
          case "Action":
            successTidings("success", {
              action: (id) => {
                return (
                  <IconButton onClick={() => closeTidings(id)}>
                    <Delete />
                  </IconButton>
                );
              },
            });
            break;
          default:
            defaultTidings("Not Allowed");
            break;
        }
      }}
      sx={{ margin: 5 }}
    >
      {buttonText}
    </Button>
  );
};

export const Tidings: Story = {
  render: () => {
    return (
      <TidingsProvider>
        <React.Fragment>
          {tidingsList.map((value) => (
            <ButtonComponent key={value} buttonText={value} />
          ))}
        </React.Fragment>
      </TidingsProvider>
    );
  },
};
